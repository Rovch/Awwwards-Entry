import React, { Component } from 'react'
import "./assets/work.css";
import WorkNav from "../../components/workNav";
import TransitionOne from "../../components/transitionOne";
export default class Work extends Component {
  render() {
    return (
      <div>
        <WorkNav loadFunc={this.props.loadFunc} />
        <TransitionOne status={this.props.active} />
      </div>
    )
  }
}
