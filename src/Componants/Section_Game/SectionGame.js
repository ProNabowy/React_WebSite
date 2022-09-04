import React, { useEffect } from "react";
import {sectionData} from "../../data";
import Slider from "../Slider/Slider";
import styles from "./Section_Game.module.css";
const Cards = ({ data }) => {
  const card = data.map((el, idx) => {
    return (
      <div className={styles.card} key={idx}>
        <div className={`${styles.head} ${"flsw"}`}>
          <img src={require("./LOGO-DOTA.png")} alt="img" />
          <h1>PC</h1>
        </div>
        <div className={styles.text}>
          <h1>{el.day}</h1>
          <h3>{el.vs}</h3>
          <h3>
            PRIZE POOL :<span style={{ color: "#28a745" }}>{el.price}</span>{" "}
          </h3>
          <h3 className={styles.starts}>
            <div>
              STARTS IN
              <br />
              32 MINS.<span style={{ color: "#7060fe" }}>10 CREDITS</span>.LPL
            </div>
            <button className={styles.btn}>ENTER NOW</button>
          </h3>
        </div>
      </div>
    );
  });
  return card;
};

const SectionGame = () => {

  useEffect(() => {
    Array.from(document.getElementsByClassName(styles.card)).map( ( e ) => e.classList.add("active"));
  });
  return (
    <section className={styles.sectionGame}>
      <div className={`${"container"}`}>
        <div className={styles.nav}>
          <div className={`${styles.title} ${"flc"}`}>
            <h1>TOURNAMENTS</h1>
            <div className={styles.btns}>
              <button>LIVE</button>
              <button>FEATRED</button>
            </div>
          </div>
          <div className={`${styles.navFilter} ${"flsw"}`}>
            <ul className="flc">
              <li>ALL</li>
              <li>CSGO</li>
              <li>DOTA2</li>
              <li>CALL OF DUTY</li>
              <li>FORTINITE</li>
            </ul>
            <p>
              <a href="#1dsa">SEE MORE</a>
            </p>
          </div>
        </div>
        <div className={`${styles.parent} ${"flsw"}`}>
          <Cards data={sectionData} />
        </div>
        <br />
        <br />
        <br />
        <div className={styles.games}>
          <div className={`${styles.gamesNav} ${"flsw"}`}>
            <h1>GAMES</h1>
            <p>
              <a href="#2">SEE MORE</a>
            </p>
          </div>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default SectionGame;
