import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="relative">
      <Header />
      <section className="min-h-screen">{children}</section>
      <Footer />
    </section>
  );
};

export default AppLayout;
