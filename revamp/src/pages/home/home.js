import React, { Component } from 'react'
import "./assets/home.css";
import MainBg from "../../components/mainBg";
import MainNav from "../../components/mainNav";
export default class Home extends Component {
  render() {
    return (
      <div>
        <MainBg />
        <MainNav />

      </div>
    )
  }
}
