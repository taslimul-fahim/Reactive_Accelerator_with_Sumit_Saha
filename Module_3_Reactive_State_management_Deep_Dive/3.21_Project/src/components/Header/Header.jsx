import { useContext, useState } from "react";
import Moon from "../../../public/assets/icons/moon.svg";
import Sun from "../../../public/assets/icons/sun.svg";
import Logo from "../../../public/assets/logo.svg";
import Ring from "../../../public/assets/ring.svg";
import Cart from "../../../public/assets/shopping-cart.svg";
import CartDetail from "../Cine/CartDetail";
import { MovieContext, ThemeContext } from "../../context";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleHideCart() {
    setShowCart(false);
  }

  return (
    <header>
      {showCart && <CartDetail onClose={handleHideCart} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img src={darkMode ? Sun : Moon} width="24" height="24" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowCart(true)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Cart} width="24" height="24" alt="cart" />
              {state.length > 0 && (
                <span className="text-black">{state.length}</span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
