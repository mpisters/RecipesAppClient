import React from 'react';
import {RecipeDto} from '../domain/RecipeDto';
import {useRouter} from 'next/router';

interface Props {
  recipe: RecipeDto;
}

export const RecipeBox: React.FC<Props> = ({recipe}) => {
  const router = useRouter();
  const navigateToRecipe = async () => {
    await router.push(`/recipe/${recipe.id}`);
  };
  return (
    <div
      onClick={async () => await navigateToRecipe()}
      className={'recipe-box bg-white drop-shadow-xl rounded-lg hover:drop-shadow-2xl h-72 w-80 m-4'}>
      <img className={'h-3/5 rounded-t-lg w-full'}
           src={'/assets/kiptandoor.png'}/>
      <div className={'recipe-details mt-4'}>
        <div><p
          className={'text-center text-xl text-gray-500 font-extrabold'}>{recipe.name}</p>
        </div>
        <div className={'flex flex-row justify-around mt-4 mx-4 text-gray-500'}>
          <div><p>{recipe.cookingTime} minuten</p></div>
          <div><p>{recipe.totalPersons} personen</p></div>
        </div>
      </div>
    </div>
  );
};