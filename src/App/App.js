import React, {Fragment} from 'react';
import EVENTS from '../Componants/EVENTS/EVENTS';
import Footer from '../Componants/Footer/Footer';
import Header from '../Componants/Header/Header';
import Landing from '../Componants/Landing_Page/Landing';
import Latest from '../Componants/LATEST_VIDEOS/Latest';
import PRO from '../Componants/PRO_Service/PRO';
import SectionGame from '../Componants/Section_Game/SectionGame';
import Select from "../Componants/SelectLangague/Select";
import Watch from '../Componants/SliderWatch/Watch';
import './App.css';

function App() {
  return (
    <Fragment>
      <Select />
      <Header />
      <Landing />
      <SectionGame />
      <EVENTS />
      <Watch />
      <Latest />
      <PRO />
      <Footer />
    </Fragment>
  );
}

export default App;
