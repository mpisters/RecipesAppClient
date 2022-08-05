import React from 'react';

interface Props {
  recipeTitle: string;
}

export const RecipeBox: React.FC<Props> = ({recipeTitle}) => {
  return (
    <div
      className={'recipe-box bg-white drop-shadow-xl rounded-lg hover:drop-shadow-2xl h-72 w-80 m-4'}>
      <img className={'h-3/5 rounded-t-lg w-full'} src={'/assets/kiptandoor.png'}/>
      <div className={'recipe-details mt-4'}>
        <div><p
          className={'text-center text-xl text-gray-500 font-extrabold'}>{recipeTitle}</p>
        </div>
        <div className={'flex flex-row justify-around mt-4 mx-4 text-gray-500'}>
          <div><p>45 minuten</p></div>
          <div><p>4 personen</p></div>
        </div>
      </div>
    </div>
  );
};