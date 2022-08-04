export const NavBar = () => {
  return (
    <div className={'bg-green-500 h-20 flex flex-row drop-shadow-xl'}>
      <div className="logo w-1/8 grid items-center justify-items-center p-6">
        <p className={'text-white text-xl font-extrabold drop-shadow-lg'}>Recepten app</p>
      </div>
      <div className="flex grow justify-center">
        <div className="search-bar w-2/6 grid items-center">
          <label htmlFor="search-bar">
            <input id={'search-bar'}
                   placeholder={'Search for recipe or ingredient...'}
                   className={'h-12 w-full border rounded-full p-4 focus:border-4 focus:border-solid focus:outline-none focus:border-green-700 focus:drop-shadow-lg'}/>
          </label>
        </div>
      </div>
    </div>);
};