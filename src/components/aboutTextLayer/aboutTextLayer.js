import React, { Component } from 'react'
import "./assets/aboutTextLayer.css"
export default class AboutTextLayer extends Component {
  render() {
    return (
      <div>
        <div id="leftTab" onClick={() => { this.props.loadFunc("home") }}></div>
        <div id="leftTabText">HOME</div>


        <div id="rightTab" onClick={() => { this.props.loadFunc("works") }}>
        </div>
        <div id="rightTabText1">WORK</div>




        <div id="skills">
          <div class="skillsText" id="js">Javascript</div>
          <div class="skillsText" id="react">React.js</div>
          <div class="skillsText" id="jquery">Jquery</div>
          <div class="skillsText" id="express">Express.js</div>
          <div class="skillsText" id="node">Node.js</div>
          <div class="skillsText" id="mongo">MongoDb </div>
          <div class="skillsText" id="sql">SQL </div>
        </div>

        <div id="social">
          <div id="github"> <a href="https://github.com/Rovch" target="_blank"> Github</a></div>
          <div id="linkedin"><a href="https://www.linkedin.com/in/wesley-jackson-6a842014a/" target="_blank"> LinkedIn</a></div>
          <div id="instagram"><a href="https://www.instagram.com/rovchh/?hl=en" target="_blank"> Instagram </a></div>
        </div>

        <div id="copyright">COPYRIGHT © 2018 WESLEY JACKSON </div>
        <div id="name"> Wesley T. Jackson</div>
        <div id="trade"> Full-stack Web Developer</div>
        <div id="est"> 2017</div>

        <div id="paragraph"> The dog walked across the street to get a hotdog, once he was there he bought
          ten sets of fries. Wow! That is a-lot of fries where do you acquire such amount of fries?
          Well funny you ask because I just told you boiiiii. Across the street is the only place these
          things are sold. So, next time before you ask a question make sure to do your research and
          reference what you previously read. That would truly speed up the process here where I Work you
          know? Jeez man please get a grip or you will get hurt next time duh stupid boi you smell like cheese.
        </div>
      </div>
    )
  }
}
