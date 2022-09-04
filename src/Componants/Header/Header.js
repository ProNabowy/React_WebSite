import React, { useEffect, useState } from 'react';
import {toggleList , fixedHeader } from "../../logic";
import styles from "./Header.module.css";
import HeaderLogic from './HeaderLogic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark ,  faBell, faCartPlus , faQuestionCircle , faFlag , faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  
  const [toggleBtn , setToggle ] = useState(false);

  
  useEffect( () => {
    toggleList(toggleBtn);
    fixedHeader();
  });



  return (
    <header>
      <div className={styles.mnue}>
      <FontAwesomeIcon onClick={() => setToggle(true)} id='mnue' className='active' icon={faBars}></FontAwesomeIcon>
      <FontAwesomeIcon onClick={() => setToggle(false)} id='close' icon={faXmark}></FontAwesomeIcon>
      </div>
      <div className={`${'container'} ${styles.headContainer} ${"flsw"}`} >
        <div className={styles.lists} >
          <div className={styles.logo} >
            <img src={require("./Photos/logo.png")} alt={"logo"} />
          </div>
          <ul id='list-item' className={`${styles.links} ${"flsw"}`}>
          <li><a href='#1'>STORE</a></li>
            <li><a href='#2'>PATCHES</a></li>
            <li><a href='#3'>UPDATES</a></li>
            <li><a href='#4'>PREVIOUS</a></li>
            <li><a href='#5'>HEROES</a></li>
            <li><a href='#6'>NEWS</a></li>
          </ul>
        </div>
        <div className={styles.icones}>
          <div id='icons' className={`${styles.item} ${"flsw"}`}>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faMagnifyingGlassMinus}></FontAwesomeIcon>
          </div>
          <div className={`${styles.item} ${"flsw"}`}>
            <h3>Mahmoud Nabowy</h3>
            <div className={styles.imge}>
              <img src={require("./Photos/player-04.png")} alt='img'></img>
            </div>
          </div>
        </div>
      </div>
      <HeaderLogic />
    </header>
  )
}

export default Header
