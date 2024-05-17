import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Link from "../Link";
import { headerMainLinks, headerMenus } from "./mocks";

import Logo from "../../assets/logo-maeztra.png";

const HeaderDesktop = () => {
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
            zIndex: 998,
          }),
        }}
      >
        <div className="header__main-wrapper">
          <img
            className="header__logo"
            src={Logo}
            alt="Maeztra"
            width={147}
            height={18}
          />

          <SearchBar />

          <ul className="header__links">
            {headerMainLinks.map((link, index) => {
              return (
                <li className="header__menu-item" key={index}>
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="header__menu">
        <ul className="header__menu-wrapper">
          {headerMenus.map((menu, index) => {
            return (
              <li className="header__menu-item" key={index}>
                <Link {...menu} />
              </li>
            );
          })}
        </ul>
      </section>
    </header>
  );
};

export default HeaderDesktop;
