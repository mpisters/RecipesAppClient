import type {NextPage} from 'next';
import {RecipeBox} from '../components/RecipeBox';
import {client} from '../apollo-client';
import {gql} from '@apollo/client';


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`query QueryRecipes{recipes{name}}`,
  });

  return {
    props: {
      recipes: data.recipes
    },
  };
}

const Home: NextPage = ({recipes}) => {

  return (
    <div className={'h-screen bg-green-100'}>
      <div className={'h-screen grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 xl:grid-cols-4  justify-items-center'}>
      {recipes.map((recipe, index) => (
        <RecipeBox key={index} recipeTitle={recipe.name}/>))}
      </div>
    </div>
  );
};

export default Home;
