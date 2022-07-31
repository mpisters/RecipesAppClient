import {NavBar} from './NavBar';

// @ts-ignore
export const Layout = ({children}) => {
  return (
    <>
      <NavBar></NavBar>
      <main>{children}</main>
    </>);
};