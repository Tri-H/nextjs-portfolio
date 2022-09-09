import { ReactNode, memo, FC } from "react";
import { Header, Footer } from "./organisms";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default memo(Layout);
