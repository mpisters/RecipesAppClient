import useWindowDimensions from '../lib/hooks/useWindowDimensions';

export const NavBar = () => {
  const {width, height} = useWindowDimensions();

  return (
    <div className={'bg-green-500 h-20 flex flex-row drop-shadow-xl'}>
      {width && width > 720 &&
      <div className="logo w-1/8 grid items-center justify-items-center m-6">
        <p className={'text-white text-xl font-extrabold drop-shadow-lg'}>Recipe
          app</p>
      </div>}
      <div className="flex grow justify-center">
        <div className="search-bar 2xl:w-2/6 xl:w-2/6 lg:w-3/6 md:w-4/6 sm:w-4/6 w-5/6 grid items-center">
          <label htmlFor="search-bar">
            <input id={'search-bar'}
                   placeholder={'Search for recipe or ingredient...'}
                   className={'h-12 w-full border rounded-full p-4 focus:border-4 focus:border-solid focus:outline-none focus:border-green-700 focus:drop-shadow-lg'}/>
          </label>
        </div>
      </div>
    </div>);
};