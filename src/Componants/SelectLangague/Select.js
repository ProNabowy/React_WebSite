import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import styles from "./Select.module.css";

const Select = () => {
  return (
    <div className={styles.top_nav} >
        <div className={`${"container"} ${styles.select_Item} ${'flsw'}`} >
        <div className={styles.item_One} >
        <FontAwesomeIcon icon={faEarth} style={{color:"white" , fontSize:"20px" , marginRight: "10px"}} ></FontAwesomeIcon>
        <select>
            <option>English LANGUAGE</option>    
            <option>Arabic LANGUAGE</option>    
        </select>
        </div>
        <div className={styles.item_Two} >
            <button>PLAY FOR FREEE</button>
        </div>
    </div>
    </div>
  )
}

export default Select
