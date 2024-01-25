import React from 'react';
import "./styles.css"
import Price from '../Price';
import Page from '../Page';
import Header from '../Header';

function Main() {
  return (
    <div className='container'>
      <Header/>
      <Price/>
      <div>
        <Page />
      </div>

    </div>
  )
}

export default Main
