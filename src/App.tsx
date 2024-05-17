// import Popup from "./components/Popup";
import ModalPopUp from "./components/Modal";
import { HeaderDesktop, HeaderMobile } from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/global.scss";
import useIsMobile from "./hooks/device";


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
