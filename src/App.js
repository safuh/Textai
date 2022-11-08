import React from 'react';
import './App.css';
import {useNavigation, Outlet, Link} from'react-router-dom';

function App() {
  const navigation = useNavigation();
  return (
    <>
    <div className="row flex-nowrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <Link to={'/'} className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
         <span className="fs-5 d-none d-sm-inline">Menu</span>
      </Link>
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li className='nav-item'>
          <Link className="nav-link align-middle px-0" to={`/detect`}>
             <p className="fs-5 bi-bootstrap">Detect</p><span className="ms-1 d-none d-sm-inline">Language Detection </span>
          </Link>
        </li>
        <li>
          <Link className="nav-link align-middle px-0" to={`/correct`}>
            <p className="fs-4 bi-table">Grammar</p><span className="ms-1 d-none d-sm-inline">Spell checker and grammar correction</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link align-middle px-0" to={`/translate`}>
            <p className="fs-4 bi-table">Translate</p><span className="ms-1 d-none d-sm-inline">Translate a piece of text</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link align-middle px-0" to={`/websumm`}>
            <p className="fs-4 bi-table">Page Summary</p><span className="ms-1 d-none d-sm-inline">Get summary of a web page</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link align-middle px-0" to={`/entity`}>
            <p className="fs-4 bi-table">Entity</p><span className="ms-1 d-none d-sm-inline">entity extraction</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link align-middle px-0" to={`/sentiment`}>
            <p className="fs-4 bi-table">Sentiment</p><span className="ms-1 d-none d-sm-inline">Perform sentiment analysis on text</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link align-middle px-0" to={`/getsumm`}>
            <p className="fs-4 bi-table">Summary</p><span className="ms-1 d-none d-sm-inline">Generate abstractive summary</span>
          </Link>
        </li>
        </ul>
    </div>
    </div>

    <div className='col-auto col-md-9'>
        <div className='container-fluid text-centre'><h1 className='text-centre'>Text Psychic</h1></div>
          <Outlet/>
        </div>
    </div>
    </>
  );
}

export default App;