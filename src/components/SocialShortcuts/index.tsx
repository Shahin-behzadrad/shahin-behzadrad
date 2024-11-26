import { Github } from "../SVG/Github";
import { Linkedin } from "../SVG/Linkedin";
import { Telegram } from "../SVG/Telegram";
import classes from "./SocialShortcuts.module.scss";

const SocialShortcuts = () => {
  return (
    <div className={classes.shortcuts}>
      <button>
        <Github />
      </button>
      <button>
        <Linkedin />
      </button>

      <button>
        <Telegram />
      </button>
    </div>
  );
};

export default SocialShortcuts;
