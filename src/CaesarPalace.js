import React, {Component} from 'react';
import Header from './Header'
import './componentStyles.css'
import Tsunami from './Tsunami.png'
import SnowBird from './SnowBird.gif'

export default class CaesarPalace extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.changeHideFalse = this.changeHideFalse.bind(this);
        this.changeHideTrue = this.changeHideTrue.bind(this);
        this.state = {x1: -28, y1: -24, x2: -28, y2: -28, x3: -32, y3: -32, x4: -100, y4: 0, hide: true};
    }

  changeHideFalse = () => {this.setState({ hide: false })}
  changeHideTrue = () => {this.setState({ hide: true })}


    handleMouseMove(event) {
        console.log("handle mouse move called")
        this.setState({
            x1: Math.sin(event.clientX / window.innerWidth) * 16 - 28,
            y1: Math.sin(event.clientY / window.innerHeight) * 16 - 24,
            x2: Math.sin(event.clientX / window.innerWidth + 0.78) * 16 - 28,
            y2: Math.sin(event.clientY / window.innerHeight + 0.78) * 16 - 28,
            x3: Math.sin(event.clientX / window.innerWidth + 1.57) * 32 - 32,
            y3: Math.sin(event.clientY / window.innerHeight + 1.57) * 32 - 32,
            x4: Math.sin(event.clientX / window.innerWidth + 2.35) * 64 - 100,
            y4: Math.sin(event.clientY / window.innerHeight + 2.35) * 64
        });
    }

    render() {
        return (
            <div className="CaesarPalace" style={{height: '100vh', width: '100vw'}} onMouseMove={this.handleMouseMove}s>
                <Header />
                <img src="/CaesarPalace/Layer1.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x1,
                         top: this.state.y1,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/CaesarPalace/Layer2.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x2,
                         top: this.state.y2,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/CaesarPalace/Layer3.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x3,
                         top: this.state.y3,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/CaesarPalace/Layer4.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x4,
                         top: this.state.y4,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <p className= "WhHover" onMouseEnter={this.changeHideFalse}
                   onMouseLeave={this.changeHideTrue}>Work History</p>
                <main className="WhMain" hidden = {this.state.hide}>
                    <h1 className="Whh1">Work History</h1>
                    <div className="WhTsunami">
                        <img src={Tsunami} className="WhTsunamiImg" alt="Tsunami"/>
                        <h2>Tsunami Sushi Bar 2015-2018</h2>
                    </div>
                    <ul>
                        <li>Sushi chef</li>
                        <li>Line expediter</li>
                        <li>Skilled in sashimi, nigiri, and breakdown of whole fish</li>
                    </ul>
                    <div className="WhSnowBird">
                        <img src={SnowBird} className="WhSnowBirdImg" alt="SnowBird"/>
                        <h2>The Aerie, Snowbird 2012-2015</h2>
                    </div>
                    <ul>
                        <li>Line cook</li>
                        <li>Trainer</li>
                        <li>Expediter and co-ordinator between multiple stations</li>
                        <li>Fine dining including baking, sauce preparation and dish presentation</li>
                    </ul>
                </main>

            </div>
        );
    }
}