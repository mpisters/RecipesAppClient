import React from 'react';

interface Props {
  recipeTitle: string;
}

export const RecipeBox: React.FC<Props> = ({recipeTitle}) => {
  return (
    <div className={'recipe-box bg-white drop-shadow-xl h-2/5 rounded-lg hover:drop-shadow-2xl'}>
      <div className="recipe-image">
        <img className={'h-48 rounded-t-lg'} src={'/assets/kiptandoor.png'}/>
      </div>
      <div className={'recipe-details mt-2'}>
        <div><p
          className={'text-center text-lg text-gray-500'}>{recipeTitle}</p>
        </div>
        <div className={'flex flex-row justify-around mt-4 mx-4 text-gray-500'}>
          <div><p>45 minuten</p></div>
          <div><p>4 personen</p></div>
        </div>
      </div>
    </div>
  );
};