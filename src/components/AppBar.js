import React from "react";
import '../App.css'
import { Logo } from './Logo'


export const AppBar = () => {
  return (
    <>
      <div className="topbar">
        <Logo />
        <div className="navigation">
          <a href="/">productos</a>
          <a href="/">carrito</a>
          <a href="/">login</a>
        </div>
      </div>
    </>
  )
};

