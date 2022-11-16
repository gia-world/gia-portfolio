import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="bg-primary">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
