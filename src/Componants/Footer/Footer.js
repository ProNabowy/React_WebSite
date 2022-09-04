import React from 'react';
import { FaDiscord, FaTwitch , FaTwitter , FaFacebook } from "react-icons/fa"
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className={style.wrapper}>
            <ul className={style.list}>
                <h1>ESPORTS</h1>
                <li><a href='#12'>PAGE-GAME</a></li>
                <li><a href='#12'>PAGE-MATCHFINDER</a></li>
                <li><a href='#12'>PAGE-TOURNMENTS</a></li>
                <li><a href='#12'>PAGE-LEADERBOARDS</a></li>
                <li><a href='#12'>PAGE-EVENTS</a></li>
            </ul>
            <ul className={style.list}>
                <h1>COMPANY</h1>
                <li><a href='#12'>PAGE-ABOUT</a></li>
                <li><a href='#12'>PAGE-JOIN US</a></li>
                <li><a href='#12'>PAGE-SPONSORS</a></li>
                <li><a href='#12'>PAGE-CONTACT</a></li>
                <li><a href='#12'>PAGE-TEAMS</a></li>
            </ul>
            <ul className={style.list}>
                <h1>FOR YOU</h1>
                <li><a href='#12'>PAGE-FAQ</a></li>
                <li><a href='#12'>PAGE-SHOP</a></li>
                <li><a href='#12'>PAGE-GO PRIME</a></li>
                <li><a href='#12'>PAGE-PRIVACY</a></li>
                <li><a href='#12'>PAGE-FATERMSQ</a></li>
            </ul>
            <ul className={style.list}>
                <h1>PARTNERS</h1>
            </ul>
        </div>
        <div className={`${style.foIc} ${"flsw"}`}>
            <h4>INFO@CREEPING.COM</h4>
            <div className={`${style.icone} ${"flsw"}`}>
                <div className='flc'>
                <FaDiscord />
                </div>
                <div className='flc'>
                <FaTwitch />
                </div>
                <div className='flc'>
                <FaTwitter />
                </div>
                <div className='flc'>
                <FaFacebook />
                </div>
            </div>
            <h4>CREEPING . ALL RIGHTS RESEVRED.</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
