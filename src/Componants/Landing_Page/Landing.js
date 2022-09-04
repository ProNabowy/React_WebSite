import React, { useEffect, useRef } from 'react';
import styles from "./Landing.module.css";
import "../../index.css"
import {arrow , scrollFun , btnClick} from  "../../logic";
import { FaAngleDoubleDown , FaTwitter , FaFacebook , FaTwitch , FaDiscord , FaAngleDoubleUp} from "react-icons/fa"

const Landing = () => {
  const btn = useRef();

  useEffect(() => {
    scrollFun(btn.current);
  });

  
  return (
    <section className={styles.landing} >
      <div className={`${'container'}`}>
        <button ref={btn} onClick={btnClick} className={`${styles.upBtn} ${"hide"} `}><FaAngleDoubleUp /></button>
      <FaAngleDoubleDown onClick={arrow} id='arrow' className={styles.arrow} />
        <div className={styles.text}>
            <p>JOIN THE</p>
            <h3>
            BATTLE OF THE <br /> ANCIENTS
            </h3>
            <button>SEE WHAT'S NEW</button>
        </div>
        <div className={`${styles.categories} ${"flsw"}`}>
            <div className='flsw'>
                <div className='flc'>
                <FaFacebook />
                </div>
                <p>FACEBOOK <br /> <span>CREEPING</span></p>
            </div>
            <div className='flsw'>
                <div className='flc'>
                <FaTwitter />
                </div>
                <p>TWITTER <br /> <span>CREEPING</span></p>
            </div>
            <div className='flsw'>
                <div className='flc'>
                <FaTwitch />
                </div>
                <p>TWITCH <br /> <span>CREEPING</span></p>
            </div>
            <div className='flsw'>
                <div className='flc'>
                <FaDiscord />
                </div>
                <p>DISCORD <br /> <span>CREEPING</span></p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
