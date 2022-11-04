import React from 'react';
import './App.css';
import {useNavigation, Outlet, Link} from'react-router-dom';

function App() {
  const navigation = useNavigation();
  return (
    <>
      <div id="sidebar">
        <Link to={`/home`} ><h1>GenAI</h1></Link>
        <nav>
          <ul>
            <li>
              <Link to={`/detect`}>Detect text language</Link>
            </li>
            <li>
              <Link to={`/correct`}>Spell checker and grammar correction</Link>
            </li>
            <li>
              <Link to={`/translate`}>Translate a piece of text</Link>
            </li>
            <li>
              <Link to={`/getsumm`}>Generate abstractive summary.</Link>
            </li>
            <li>
              <Link to={`/websumm`}>Get summary of a web page</Link>
            </li>
            <li>
              <Link to={`/sentiment`}>Perform sentiment analysis on text</Link>
            </li>
            <li>
              <Link to={`/entity`}>entity extraction</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"
        className={navigation.state==='loading'?'loading':''}>
        <Outlet/>
      </div>
    </>
  );
}

export default App;