import React, { useState } from 'react';
import Logo from "./images/logo2021.svg"
import Submarine from "./images/Mem-boat-anim.png"
import Card from "./Card/Card"
import './App.css';

const App: React.FC = () => {
  const [fooKey, setFooKey] = useState(1);
  const refreshFoo = () => setFooKey(fooKey + 1);
  return (
    <>
      <img src={Logo} alt="" className="logo" />
      <Card key={fooKey} />
      <button onClick={refreshFoo} className="link-block w-inline-block" style={{ position: "relative" }}>
        <img src={Submarine} alt="Button to load the next prompt" className="next-button submarine" />
        <div className="next" >Next</div>
      </button>
      <p className="paragraph">
        Made with love by<br />
        <a href="https://gegerfelt.io/" className="us-link">glassig</a> &amp; <a href="http://decent.ninja/" className="us-link">decentninja</a>
      </p>
    </>
  )
};

export default App;
