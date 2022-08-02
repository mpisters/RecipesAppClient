import {NavBar} from './NavBar';

// @ts-ignore
export const Layout = ({children}) => {
  return (
    <div className={'h-screen w-screen'}>
      <NavBar></NavBar>
      <main>{children}</main>
    </div>);
};