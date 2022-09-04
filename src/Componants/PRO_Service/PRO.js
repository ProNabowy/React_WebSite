import React from 'react';
import styles from "./Pro.module.css";

function PRO() {
  return (
    <section className={styles.pro}>
        <div className={`${styles.layout} ${"flc"}`}>
        <div className='container'>
            <div className={styles.text}>
                <h1>GO PRIME BECOME A PRO</h1>
                <h3><span>PLAY</span> <span>COMPUTER</span> <span>WIN</span></h3>
                <button>LET'S PLAY</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default PRO
