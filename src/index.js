import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Body from "./body";
import FooterUi from "./footer";

const AppLayout = () => {
  return (
    <div >
      <Navbar/>
      <Body/>
      <FooterUi/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
