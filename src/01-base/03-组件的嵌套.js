/**
 * @Author: ater
 * @Date:   2025-07-08 13:50:16
 * @Last Modified by:   ater
 * @Last Modified time: 2025-07-08 13:57:49
 */
'use strict';
import React, { Component } from 'react'
import Swiper from './component/Swiper';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Swiper />
        <Footer />
      </div>
    )
  }
}
