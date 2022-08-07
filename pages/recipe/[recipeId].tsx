import {NextPage} from 'next';
import {gql, useLazyQuery, useQuery} from '@apollo/client';
import {mapUnitOfMeasurement} from '../../domain/UnitOfMeasurement';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

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
    props: {params: context.params},
  };
}

export const RecipePage: NextPage = (context) => {
  console.log('context', context);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<Error | undefined>();
  // const [recipeById, setRecipeById] = useState();
  console.log(parseInt(context.params.recipeId, 10))
  const {
    loading,
    error,
    data: recipeById,
  } = useQuery(GET_RECIPEBYID, {variables: {id: parseInt(context.params.recipeId, 10)}});
  console.log(loading, error, recipeById);
  // useEffect(() => {
  //   console.log('useeffect', context);
  //   if (!context.params || !context.params.recipeId) {
  //     return;
  //   }
  //   getRecipeById({variables: {id: parseInt(context.params.recipeId, 10)}})
  //     .then((result) => {
  //       console.log("result::::::", result)
  //       const {loading, error, data} = result;
  //       setLoading(loading);
  //       setError(error);
  //       setRecipeById(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  if (loading || !recipeById) {
    return (<div><p>Loading....</p></div>);
  }
  if (error) {
    return (<div><p>Something went wrong...</p></div>);
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