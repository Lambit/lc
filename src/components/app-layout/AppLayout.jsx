import Navbar from "../header/nav";
import Footer from "../footer/footer";

const AppLayout = ({children}) => {
  return (
    <>
      <Navbar/>
        {children}
      <Footer />
    </>
  );
};

export default AppLayout;