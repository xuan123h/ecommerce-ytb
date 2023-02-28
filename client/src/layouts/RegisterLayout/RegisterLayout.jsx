import React from "react";
import Footer from "../../components/Footer/Footer";
import RegisterHeader from "../../components/RegisterHeader/RegisterHeader";

const RegisterLayout = ({ children }) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  );
};
export default RegisterLayout;
