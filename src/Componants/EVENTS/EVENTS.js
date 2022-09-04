import React, { useEffect } from 'react';
import  {scrollFunc} from  "../../logic";
import {eventData} from '../../data';
import styles from "./EVENTS.module.css";
import "../../index.css";
import { FaCalendar , FaClock , FaLocationArrow , FaDollarSign } from "react-icons/fa"

const Cards = ({data}) => {
    const card = data.map( ( e , i ) => {
        return(
            <div className={styles.card} key={i} >
                <div className={styles.layout}>
                <div className={styles.wrapper}>
                <div className={`${styles.imge} ${"flcm"}`}>
                    <img src={require("./Photos/SPARK.png")} alt="img" />
                    <img src={require("./Photos/logo-ASSASSINS.png")} alt="img" />
                </div>
                <div className={styles.text}>
                    <h1> {e.name} </h1>
                    <h4> {e.footer} </h4>
                    <h5><FaCalendar /> {e.data} </h5>
                    <h5><FaClock /> {e.time} </h5>
                    <h5><FaLocationArrow /> {e.place} </h5>
                    <h5><FaDollarSign /> {e.price} </h5>
                </div>
            </div>
            <div className={`${styles.btns} ${"flc"}`}>
                <button>VIEW INFO</button>
                <button>REGISTER</button>
            </div>
                </div>
        </div>
        )
    });
    return card;
}


function EVENTS() {

    useEffect(() => {
        scrollFunc(document.getElementsByClassName(styles.cards)[0] , 1100);
    });
    
  return (
    <section className={styles.events}>
      <div className={`${"container"} ${styles.evc}`}>
        <div className={`${styles.evNav} ${"flsw"}`}>
            <div className='flsw'>
                <h1>EVENTS AND LEAGUES</h1>
                <div className={styles.btns}>
                    <button>LIVE</button>
                    <button>ONGOING</button>
                </div>
            </div>
                <p>
                    <a href='#1'>SEE MORE</a>
                </p>
        </div>
        <div className={`${styles.cards} ${"hide"} ${"flsw"}`}>
        <Cards data={eventData} />
        </div>
      </div>
    </section>
  )
}

export default EVENTS
