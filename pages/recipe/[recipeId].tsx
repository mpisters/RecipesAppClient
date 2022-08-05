import {NextPage} from 'next';
import {client} from '../../apollo-client';
import {gql} from '@apollo/client';
import {mapUnitOfMeasurement} from '../../domain/UnitOfMeasurement';

export async function getServerSideProps(context: { params: { recipeId: any; }; }) {
  const recipeId = context.params.recipeId;
  try {
    const {data, errors} = await client.query({
      query: gql`query QueryRecipes{recipeById(id: 1) {
          name,
          ingredients{
              amount
              product {
                  name
              },
              unitOfMeasurement
          }
      }}`,
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
        recipeById: undefined,
      },
    };
  }
}

export const RecipePage: NextPage = ({recipeById}) => {
  console.log(JSON.stringify(recipeById));
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
                <div  key={index} className={'flex flex-row m-4 text-gray-500'}>
                  <input className={'mr-10'} type="checkbox"/>
                  <p className={'mr-2'}>{ingredient.amount}</p>
                  <p className={'mr-2'}>{mapUnitOfMeasurement(ingredient.unitOfMeasurement)}</p>
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