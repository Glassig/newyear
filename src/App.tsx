import React, { Fragment, useState } from 'react';
import Logo from "./images/Logo.svg"
import Button from "./images/Button.svg"
import './App.css';
import Card from "./Card/Card"

const App: React.FC = () => {
  const [fooKey, setFooKey] = useState(1);
  const refreshFoo = () => setFooKey(fooKey + 1);
  return (
    <Fragment>
      <img src={Logo} alt="" className="logo" />
      <Card key={fooKey} />
      <button onClick={refreshFoo} className="link-block w-inline-block">
        <img src={Button} alt="" className="next-button" />
      </button>
      <p className="paragraph">
        Made with love by<br />
        <a href="https://gegerfelt.io/" className="us-link">glassig</a> &amp; <a href="http://decent.ninja/" className="us-link">decentninja</a>
      </p>
    </Fragment>
  )
};

export default App;
