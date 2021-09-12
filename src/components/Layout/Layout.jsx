import MainHeader from "./MainHeader/MainHeader";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>
        { children }
      </main>
      <h1>Footer</h1>
    </>
  );
};

export default Layout;