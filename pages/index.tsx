import type {NextPage} from 'next';
import {RecipeBox} from '../components/RecipeBox';

const Home: NextPage = () => {
  return (
    <div className={'h-screen bg-green-100'}>
      <div className={'h-screen w-screen grid grid-cols-5 gap-4 p-6'}>
      {['Kip tandoori', 'Kip Smoor', 'Sajoer boontjes'].map((recipeTitle, index) => (
        <RecipeBox key={index} recipeTitle={recipeTitle}/>))}
      </div>
    </div>
  );
};

export default Home;
