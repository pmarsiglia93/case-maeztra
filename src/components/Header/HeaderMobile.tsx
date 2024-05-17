import { useEffect, useState } from "react";
import MenuDrawer from "../../assets/icon-menu.svg";
import IconSearch from "../../assets/icon-busca.svg";
import IconBag from "../../assets/icon-shoppingbag.svg";
import Logo from "../../assets/logo-maeztra.png";

const HeaderMobile = () => {
  const [offScroll, setOffScroll] = useState(0);

  useEffect(() => {
    const onScrool = () => setOffScroll(window.scrollY);

    window.removeEventListener("scroll", onScrool);
    window.addEventListener("scroll", onScrool, { passive: true });

    return () => window.removeEventListener("scroll", onScrool);
  }, []);

  return (
    <header className="header__container">
      <section className="header__top-bar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </section>

      <section
        className="header__main"
        style={{
          ...(offScroll > 0 && {
            position: "sticky",
            top: 0,
            left: 0,
            zIndex: 998,
          }),
        }}
      >
        <div className="header__main-wrapper">
          <button className="header__open-drawer">
            <img src={MenuDrawer} alt="Abrir Menu" width={24} height={24} />
          </button>
          <img
            className="header__logo"
            src={Logo}
            alt="Maeztra"
            width={110}
            height={12}
          />
          <div className="header__right-icons">
            <button>
              <img src={IconSearch} alt="Busca" width={24} height={24} />
            </button>

            <button>
              <img src={IconBag} alt="Sacola" width={21} height={24} />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeaderMobile;
