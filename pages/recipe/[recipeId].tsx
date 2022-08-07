import {NextPage} from 'next';
import {gql} from '@apollo/client';
import {mapUnitOfMeasurement} from '../../domain/UnitOfMeasurement';
import {client} from '../../apollo-client';

const GET_RECIPEBYID = gql`query QueryRecipes($id: Int!){recipeById(id: $id) {
    name,
    ingredients{
        amount
        product {
            name
        },
        unitOfMeasurement
    }
}}`;

export async function getServerSideProps(context) {
  try {
    console.log("context", context)
    const {data, errors} = await client.query({
      query: GET_RECIPEBYID,
      variables: {id: parseInt(context.params.recipeId, 10)},
    });
    return {
      props: {
        recipeById: data.recipeById,
      },
    };
  } catch (e: any) {
    console.error(`Error message: ${e.message}`);
    return {
      props: {
        recipeById: null,
      },
    };
  }
}

export const RecipePage: NextPage = (context) => {
  const recipeById = context.recipeById;

  if (!recipeById) {
    return (<div className={'h-screen flex items-center justify-items-center justify-center'}>
      <div><p>Loading....</p></div>
    </div>);
  }

  return (
    <div className={'flex justify-center'}>
      <div className={'mt-10 h-screen drop-shadow-lg w-3/4 bg-white rounded'}>
        <div className={'my-10'}><h1
          className={'text-3xl text-center text-gray-500 font-extrabold'}>{recipeById.name}</h1>
        </div>
        <div className={'mx-10'}>
          <h3 className={'text-xl text-gray-500'}>Ingredients</h3>
          <div className={'ingredients'}>
            {recipeById.ingredients && recipeById.ingredients.map((ingredient, index) => {
              return (
                <div key={index} className={'flex flex-row m-4 text-gray-500'}>
                  <input className={'mr-10'} type="checkbox"/>
                  <p className={'mr-2'}>{ingredient.amount}</p>
                  <p
                    className={'mr-2'}>{mapUnitOfMeasurement(ingredient.unitOfMeasurement)}</p>
                  <p>{ingredient.product.name.toLowerCase()}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>);
};
export default RecipePage;