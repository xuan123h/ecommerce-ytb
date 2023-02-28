import React from "react";
import CartHeader from "../../components/CartHeader/CartHeader";
import Footer from "../../components/Footer/Footer";

const CartLayout = ({ children }) => {
  return (
    <div>
      <CartHeader />
      {children}
      <Footer />
    </div>
  );
};
export default CartLayout;
