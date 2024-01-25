import React from 'react';
import "./styles.css"
import Price from '../Price';
import Page from '../Page';

function Main() {
  return (
    <div className='container'>
      <Price/>
      <div>
        <Page />
      </div>

    </div>
  )
}

export default Main
