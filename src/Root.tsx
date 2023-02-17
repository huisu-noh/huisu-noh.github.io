import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { GlobalStyle } from "./Styles/Global";

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
