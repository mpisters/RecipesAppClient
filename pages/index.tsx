import type {NextPage} from 'next';
import {RecipeBox} from '../components/RecipeBox';

const Home: NextPage = () => {
  return (
    <div className={'h-screen bg-green-100'}>
      <div className={'h-screen w-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 2xl:gap-4 xl:gap-4 lg:gap-4 p-6'}>
      {['Kip tandoori', 'Kip Smoor', 'Sajoer boontjes'].map((recipeTitle, index) => (
        <RecipeBox key={index} recipeTitle={recipeTitle}/>))}
      </div>
    </div>
  );
};

export default Home;
