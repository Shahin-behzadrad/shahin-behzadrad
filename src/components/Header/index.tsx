import Image from "next/image";
import classes from "./Header.module.scss";
import logo from "@public/images/logo-light-gray.png";

const Header = () => {
  return (
    <div className={classes.navbar}>
      <Image src={logo} alt="logo" width={60} height={30} />
      <div className={classes.navbarBtns}>
        <button>ABOUT</button>
        <button>PROJECTS</button>
        <button>CONTANCT</button>
      </div>
    </div>
  );
};

export default Header;
