import type {NextPage} from 'next';
import {RecipeBox} from '../components/RecipeBox';
import {client} from '../apollo-client';
import {gql} from '@apollo/client';
import {RecipeDto} from '../domain/RecipeDto';


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`query QueryRecipes{recipes{name, cookingTime, totalPersons}}`,
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
      {recipes.map((recipe: RecipeDto, index: number) => (
        <RecipeBox key={index} recipe={recipe}/>))}
      </div>
    </div>
  );
};

export default Home;
