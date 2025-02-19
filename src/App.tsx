import ModalPopUp from "./components/Modal";
import { HeaderDesktop, HeaderMobile } from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import useIsMobile from "./hooks/device";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./styles/global.scss";

function App() {
  const isMobile = useIsMobile();
  return (
    <>
      <ModalPopUp />
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      <Home />
      <Footer />
    </>
  );
}

export default App;
