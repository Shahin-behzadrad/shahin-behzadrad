import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <div className={classes.firstRow}>
          <span className={classes.hi}>HI, THIS IS</span>
          <div className={classes.divider} />
        </div>
        <div className={classes.secondRow}>
          <h1>SHAHIN</h1>
          <span>BEHZADRAD</span>
        </div>
        <div className={classes.thirdRow}>
          <span>A FRONTEND</span>
          <span>DEVELOPER</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
