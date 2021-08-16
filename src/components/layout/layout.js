import NavBar from "./nav-bar";

const Layout = ({ children }) => (
  <div className="layout">
    <NavBar />
    {children}
  </div>
);

export default Layout;
