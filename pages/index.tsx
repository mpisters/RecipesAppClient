import type {NextPage} from 'next';
import {RecipeBox} from '../components/RecipeBox';

const Home: NextPage = () => {
  return (
    <div className={'h-screen bg-green-100'}>
      <div className={'h-screen grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 xl:grid-cols-4  justify-items-center'}>
      {['Kip tandoori', 'Kip Smoor', 'Sajoer boontjes', 'patat'].map((recipeTitle, index) => (
        <RecipeBox key={index} recipeTitle={recipeTitle}/>))}
      </div>
    </div>
  );
};

export default Home;
