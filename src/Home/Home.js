import React from "react";
import Nav from "./Navbar";
import ScrollImages from "./ImageScroller";
import Boxes from "./Boxes";
function Home(props) {
  return (
    <React.Fragment>
      <Nav
        onDeleteFromCart={props.onDeleteFromCart}
        showCart={props.showCart}
        onCloseCart={props.onCloseCart}
        showCartHandlerNav={props.showCartHandlerNav}
      />
      <ScrollImages />
      <Boxes />
    </React.Fragment>
  );
}

export default Home;
