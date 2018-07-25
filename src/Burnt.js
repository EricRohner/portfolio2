import React, {Component} from 'react';
import Header from './Header'

export default class Burnt extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x1: -28, y1: -28, x2: -28, y2: -28, x3: -32, y3: -38, x4: -50, y4: -84};
    }

    handleMouseMove(event) {
        console.log("handle mouse move called")
        this.setState({
            x1: Math.sin(event.clientX / window.innerWidth) * 16 - 28,
            y1: Math.sin(event.clientY / window.innerHeight) * 16 - 28,
            x2: Math.sin(event.clientX / window.innerWidth + 0.78) * 16 - 28,
            y2: Math.sin(event.clientY / window.innerHeight + 0.78) * 16 - 28,
            x3: Math.sin(event.clientX / window.innerWidth + 1.57) * 32 - 32,
            y3: Math.sin(event.clientY / window.innerHeight + 1.57) * 32 - 38,
            x4: Math.sin(event.clientX / window.innerWidth + 2.35) * 64 - 50,
            y4: Math.sin(event.clientY / window.innerHeight + 2.35) * 64 - 84
        });
    }

    render() {
        return (
            <div style={{height: '100vh', width: '100vw'}} onMouseMove={this.handleMouseMove}>
                <Header/>
                <img src="/Burnt/Back.png"
                     style={{
                         position: 'absolute',
                         left: 0,
                         top: 0,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Burnt/Layer1.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x1,
                         top: this.state.y1,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Burnt/Layer2.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x2,
                         top: this.state.y2,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Burnt/Layer3.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x3,
                         top: this.state.y3,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Burnt/Layer4.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x4,
                         top: this.state.y4,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                }}/>
            </div>
        );
    }
}