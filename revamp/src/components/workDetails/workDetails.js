import React, { Component } from 'react'
import "./assets/workDetails.css";
export default class WorkDetails extends Component {
  render() {

    let currentDetails;

    switch (this.props.current) {
      case "fnhub":
        currentDetails = {
          name: "FnHub",
          year: "2018",
          purpose: "Interactive Game Hub",
          bio: `FnHub, Standing for 'FortniteHub'. A hub allowing
          users to view and track in game statistics, communicate
          with one another with live chat, and really focus on a central
          home pertaining to the popular hit game "Fortnite".
          `}
        break;
      case "localTime":
        currentDetails = {
          name: "LocalTime",
          year: "2018",
          purpose: "Travel and Meetup",
          bio: `FnHub, Standing for 'FortniteHub'. A hub allowing
        users to view and track in game statistics, communicate
        with one another with live chat, and really focus on a central
        home pertaining to the popular hit game "Fortnite".
        `}
        break;
      case "huddle":
        currentDetails = {
          name: "Huddle",
          year: "2018",
          purpose: "Travel and Meetup",
          bio: `FnHub, Standing for 'FortniteHub'. A hub allowing
        users to view and track in game statistics, communicate
        with one another with live chat, and really focus on a central
        home pertaining to the popular hit game "Fortnite".
        `}
        break;
      case "moneyTree":
        currentDetails = {
          name: "FnHub",
          year: "2018",
          purpose: "Financial",
          bio: `FnHub, Standing for 'FortniteHub'. A hub allowing
        users to view and track in game statistics, communicate
        with one another with live chat, and really focus on a central
        home pertaining to the popular hit game "Fortnite".
        `}
        break;
      default:

    }

    return (
      <div>
        <div id="linkWrapper">

          <div id="homeLink" onClick={() => this.props.loadFunc("home")}>
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

        <div id="details">

          <div id="row1">
            <div id="detName">{currentDetails.name}</div>
          </div>

          <div id="row2">
            <div id="yearTag"> Year:</div>
            <div id="detYear"> {currentDetails.year} </div>
            <div id="splitter">|</div>
            <div id="purposeTag">Purpose:</div>
            <div id="detPurpose"> {currentDetails.purpose}</div>
          </div>

          <div id="row3">
            <div id="detBio"> {currentDetails.bio}</div>
          </div>

        </div>

      </div>
    )
  }
}
