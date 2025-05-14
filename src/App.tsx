import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ONama from './pages/ONama';
import Kontakt from './pages/Kontakt';
import OpciUgovor from './pages/OpciUgovor';
import Prigovor from './pages/Prigovor';
import ScrollToTop from './components/utils/ScrollToTop';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <Helmet>
        <html lang="hr" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Kezele Prijevoz i Turistička Agencija" />
        <meta name="geo.region" content="HR" />
        <meta name="geo.placename" content="Čazma, Bjelovar" />
        <meta name="geo.position" content="45.75;16.61" />
        <meta name="ICBM" content="45.75, 16.61" />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/opci-ugovor" element={<OpciUgovor />} />
        <Route path="/prigovor" element={<Prigovor />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;