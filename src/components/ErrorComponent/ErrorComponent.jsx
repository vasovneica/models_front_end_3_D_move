import React from 'react';
import './style.css';


export default function ErrorComponent({addClass}) {
  return (
    <div
    className= {`error-element-body ${addClass}`}
    >ErrorComponent
    </div>
  )
}
