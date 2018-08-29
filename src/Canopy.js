import React, { Component } from 'react'
import Header from './Header'
import Figma from './Figma.png'
import Firebase from './Firebase.png'
import Gimp from './Gimp.jpeg'
import Github from './Github.png'
import Java from './Java.png'
import JavaScript from './JavaScript.png'
import Python from './Python.jpeg'
import Reactpng from './React.png'
import SAMP from './SAMP.png'
import Ass from './PersonalAssassin.png'


export default class Burnt extends Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      x1: -28, y1: -28, x2: -28, y2: -28, x3: -28, y3: -14, x4: -28, y4: -28, x5: -40, y5: -28,
      hide: true, hideSamp: true, hideAss: true
    }
  }

  changeHideFalse = () => {this.setState({ hide: false })}
  changeHideTrue = () => {this.setState({ hide: true })}
  changeHideSampFalse = () => {this.setState({ hideSamp: false })}
  changeHideSampTrue = () => {this.setState({ hideSamp: true })}
  changeHideAssFalse = () => {this.setState({ hideAss: false })}
  changeHideAssTrue = () => {this.setState({ hideAss: true })}

  handleMouseMove(event) {
    console.log('handle mouse move called')
    this.setState({
      x1: Math.sin(event.clientX / window.innerWidth) * 8 - 28,
      y1: Math.sin(event.clientY / window.innerHeight) * 8 - 28,
      x2: Math.sin(event.clientX / window.innerWidth + 0.62) * 8 - 28,
      y2: Math.sin(event.clientY / window.innerHeight + 0.62) * 8 - 28,
      x3: Math.sin(event.clientX / window.innerWidth + 1.25) * 8 - 28,
      y3: Math.sin(event.clientY / window.innerHeight + 1.25) * 8 - 14,
      x4: Math.sin(event.clientX / window.innerWidth + 1.88) * 8 - 28,
      y4: Math.sin(event.clientY / window.innerHeight + 1.88) * 8 - 28,
      x5: Math.sin(event.clientX / window.innerWidth + 4) * 8 - 40,
      y5: Math.sin(event.clientY / window.innerHeight + 4) * 8 - 28
    })
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }} onMouseMove={this.handleMouseMove}>
        <Header />
        <img src="/Canopy/Back.png"
             style={{
               position: 'absolute',
               left: 0,
               top: 0,
               height: '110vh',
               width: '110vw'
             }} />
        <img src="/Canopy/Layer1.png"
             style={{
               position: 'absolute',
               left: this.state.x1,
               top: this.state.y1,
               height: '110vh',
               width: '110vw'
             }} />
        <img src="/Canopy/Layer2.png"
             style={{
               position: 'absolute',
               left: this.state.x2,
               top: this.state.y2,
               height: '110vh',
               width: '110vw'
             }} />
        <img src="/Canopy/Layer3.png"
             style={{
               position: 'absolute',
               left: this.state.x3,
               top: this.state.y3,
               height: '110vh',
               width: '110vw'
             }} />
        <img src="/Canopy/Layer4.png"
             style={{
               position: 'absolute',
               left: this.state.x4,
               top: this.state.y4,
               height: '110vh',
               width: '110vw'
             }} />
        <img src="/Canopy/Layer5.png"
             style={{
               position: 'absolute',
               left: this.state.x5,
               top: this.state.y5,
               height: '110vh',
               width: '110vw'
             }} />
        <div className="Hovers">
          <p className="CanHover" onMouseEnter={this.changeHideFalse}
             onMouseLeave={this.changeHideTrue}>Current Skills</p>

          <a href="https://SAMP.netlify.com/" className="CanHover" onMouseEnter={this.changeHideSampFalse}
             onMouseLeave={this.changeHideSampTrue}>Smile At My Profile</a>

          <a href="https://personal-assassin.netlify.com/" className="CanHover" onMouseEnter={this.changeHideAssFalse}
             onMouseLeave={this.changeHideAssTrue}>Personal Assassin</a>
        </div>

        <div hidden={this.state.hideSamp}>
          <img src={SAMP} className="SAMP" />
        </div>

        <div hidden={this.state.hideAss}>
          <img src={Ass} className="Ass" />
        </div>

        <main className="SkMain" hidden={this.state.hide}>
          <div className="SkImgDiv">
            <img src={Github} className="SkImg" alt="Github" />
            <img src={Reactpng} className="SkImg" alt="React" />
            <img src={Java} className="SkImg" alt="Java" />
            <img src={JavaScript} className="SkImg" alt="JavaScript" />
            <img src={Python} className="SkImg" alt="Python" />
            <img src={Firebase} className="SkImg" alt="Firebase" />
            <img src={Figma} className="SkImg" alt="Figma" />
            <img src={Gimp} className="SkImg" alt="Gimp" />
          </div>
        </main>
      </div>
    )
  }
}