import React from 'react';
import styles from "./Latest.module.css";
import { FaPlayCircle } from "react-icons/fa"

const FullCard = () => {
    const card = () => {
       return (
            <div key={Math.random()} className={styles.fullCard}>
                <div className={styles.layout}>
                <div className={`${styles.play} ${"flsw"}`}>
            <FaPlayCircle />
            <p>
                It IS ALONG ESTABLISHED FACH THAT AREADER WALL BE DISTRACTED BY THE READABLE CONTENT
            </p>
        </div>
        <h2>2 DAYS AGO</h2>
                </div>
    </div>
        )
    }
    return card();
}
const HalfCard = () => {
    const card = () => {
        return(
        <div className={styles.HalfCard}>
            <div className={styles.fc}>
            <div className={styles.layout}>
            <div className={`${styles.play} ${"flsw"}`}>
            <FaPlayCircle />
            <p>
            CONTRY TO POPULAR BELEF, LOREM IPSUM IS NOT SIMPLAY RANDOM TEXT.
            </p>
        </div>
        <h2>2 DAYS AGO</h2>
            </div>
            </div>
            <div className={styles.lc} >
            <div className={styles.layout}>
            <div className={`${styles.play} ${"flsw"}`}>
            <FaPlayCircle />
            <p>
            CONTRY TO POPULAR BELEF, LOREM IPSUM IS NOT SIMPLAY RANDOM TEXT.
            </p>
        </div>
        <h2>2 DAYS AGO</h2>
            </div>
            </div>
    </div>
        )
    }
    return card()
}

function Latest() {
  return (
    <section className={styles.latest}>
    <div className={'container'}>
        <div className={`${styles.latHead} ${"flsw"}`}>
            <h1>LATEST VIDEOS</h1>
            <p>
                <a href='#1'>SEE MORE</a>
            </p>
        </div>
        <div className={`${styles.cards} ${"flsw"}`}>
        <FullCard />
        <HalfCard />
        <FullCard />
        <HalfCard />
        </div>
    </div>
      
    </section>
  )
}

export default Latest
