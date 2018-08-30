import React, { Component } from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import vid from "./assets/portfolioBg.mp4"
import "./assets/mainBg.css";
export default class MainBg extends Component {
  render() {
    return (
      <div>
        <div id="mainBg"></div>

        <svg viewBox="0 0 410 99" version="1.1" id="mainBlueFigure1">
          <path d="M0,97.996l0,-97.996l409.951,0l-34.42,98.617l-375.531,-0.621Z" id="mainBlueFigure2" />
        </svg>

        <svg viewBox="0 0 125 62" version="1.1" id="mainYellowFigure1">
          <path d="M124.521,0l0,61.018l-124.521,0l23.819,-60.648l100.702,-0.37Z" id="mainYellowFigure2" />
        </svg>

        <Video id="vid" autoPlay loop muted controls={[]}>
          <source src={vid} type="video/mp4" />
        </Video>
      </div>
    )
  }
}
