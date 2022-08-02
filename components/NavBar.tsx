export const NavBar = () => {
  return (
    <div className={'bg-green-500 h-20 flex flex-row drop-shadow-lg'}>
      <div className="logo w-1/8">
        <p>Recepten app</p>
      </div>
      <div className="flex grow justify-center">
        <div className="search-bar w-2/6 grid items-center"><input className={'h-12 w-full border rounded-full p-4 focus:border-4 focus:border-solid'}/></div>
      </div>
    </div>);
};