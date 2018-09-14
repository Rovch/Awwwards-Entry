import React, { Component } from 'react'
import "./assets/workDetails.css";
export default class WorkDetails extends Component {
  render() {
    return (
      <div>
        <div id="linkWrapper">
          
          <div id="homeLink"  onClick= {() => this.props.loadFunc("home")}>
            <div id="homeLinkText">HOME</div>
            <div class={`home_link_false`} id="link_1_home" />
            <div class={`home_link_false`} id="link_2_home" />
            <div class={`home_link_false`} id="link_3_home" />
            <div class={`home_link_false`} id="link_4_home" />
          </div>
        

          <div id="contactLink" >
            <div id="contactLinkText">CONTACT</div>
            <div class={`contact_link_false`} id="link_1_contact" />
            <div class={`contact_link_false`} id="link_2_contact" />
            <div class={`contact_link_false`} id="link_3_contact" />
            <div class={`contact_link_false`} id="link_4_contact" />
          </div>
          </div>
      </div>
    )
  }
}
