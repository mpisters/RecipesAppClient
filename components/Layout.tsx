import {NavBar} from './NavBar';

// @ts-ignore
export const Layout = ({children}) => {
  return (
    <div className={'bg-green-100'}>
      <NavBar></NavBar>
      <main>{children}</main>
    </div>);
};