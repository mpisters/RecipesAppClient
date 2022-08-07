import {NextPage} from 'next';
import {gql, useQuery} from '@apollo/client';
import {mapUnitOfMeasurement} from '../../domain/UnitOfMeasurement';

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
  return {
    props: {params: context.params}
  };
}

export const RecipePage: NextPage = (context) => {
  console.log(context)
  const {loading, error, data: recipeById} = useQuery(GET_RECIPEBYID, {variables: {id: context.params.recipeId}})
  console.log('RecipePage', recipeById);

  if (loading || !recipeById) {
    return (<div><p>Loading....</p></div>);
  }
  if (error) {
    return (<div><p>Something went wrong...</p></div>);
  }
  console.log('RECIPE', JSON.stringify(recipeById));
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