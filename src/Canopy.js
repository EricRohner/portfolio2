// import React, {Component, Fragment} from 'react';
// import Header from './Header'
//
// class ImgLayer extends Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//             <Fragment>
//                 <img src="/Canopy/Back.png"
//                      style={{position: 'absolute', left: 0, top: 0, height: '110vh', width: '110vw'}}/>
//                 <img src="/Canopy/Layer1.png"
//                      style={{position: 'absolute', left: mouse.x1, top: mouse.y1, height: '110vh', width: '110vw'}}/>
//                 <img src="/Canopy/Layer2.png"
//                      style={{position: 'absolute', left: mouse.x2, top: mouse.y2, height: '110vh', width: '110vw'}}/>
//                 <img src="/Canopy/Layer3.png"
//                      style={{position: 'absolute', left: mouse.x3, top: mouse.y3, height: '110vh', width: '110vw'}}/>
//                 <img src="/Canopy/Layer4.png"
//                      style={{position: 'absolute', left: mouse.x4, top: mouse.y4, height: '110vh', width: '110vw'}}/>
//                 <img src="/Canopy/Layer5.png"
//                      style={{position: 'absolute', left: mouse.x5, top: mouse.y5, height: '110vh', width: '110vw'}}/>
//             </Fragment>
//         );
//     }
// }
//
// class Mouse extends Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = {x: 0, y: 0};
//     }
//
//     handleMouseMove(event) {
//         this.setState({
//             x1: Math.sin(event.clientX / window.innerWidth) * 8 - 28,
//             y1: Math.sin(event.clientY / window.innerHeight) * 8 - 28,
//             x2: Math.sin(event.clientX / window.innerWidth + 0.62) * 8 - 28,
//             y2: Math.sin(event.clientY / window.innerHeight + 0.62) * 8 - 28,
//             x3: Math.sin(event.clientX / window.innerWidth + 1.25) * 8 - 28,
//             y3: Math.sin(event.clientY / window.innerHeight + 1.25) * 8 - 14,
//             x4: Math.sin(event.clientX / window.innerWidth + 1.88) * 8 - 28,
//             y4: Math.sin(event.clientY / window.innerHeight + 1.88) * 8 - 28,
//             x5: Math.sin(event.clientX / window.innerWidth + 4) * 8 - 40,
//             y5: Math.sin(event.clientY / window.innerHeight + 4) * 8 - 28
//         });
//     }
//
//     render() {
//         return (
//             <div style={{height: '100vh', width: '100vw'}} onMouseMove={this.handleMouseMove}>
//                 {this.props.render(this.state)}
//             </div>
//         );
//     }
// }
//
// export default class Canopy extends Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Mouse render={mouse => (
//                     <ImgLayer mouse={mouse}/>
//                 )}/>
//             </div>
//         );
//     }
// }

import React, {Component} from 'react';
import Header from './Header'

export default class Burnt extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x1: -28, y1: -28, x2: -28, y2: -28, x3: -28, y3: -14, x4: -28, y4: -28, x5: -40, y5: -28};
    }

    handleMouseMove(event) {
        console.log("handle mouse move called")
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
        });
    }

    render() {
        return (
            <div style={{height: '100vh', width: '100vw'}} onMouseMove={this.handleMouseMove}>
                <Header/>
                <img src="/Canopy/Back.png"
                     style={{position: 'absolute',
                         left: 0,
                         top: 0,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Canopy/Layer1.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x1,
                         top: this.state.y1,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Canopy/Layer2.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x2,
                         top: this.state.y2,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Canopy/Layer3.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x3,
                         top: this.state.y3,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Canopy/Layer4.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x4,
                         top: this.state.y4,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                <img src="/Canopy/Layer5.png"
                     style={{
                         position: 'absolute',
                         left: this.state.x5,
                         top: this.state.y5,
                         height: '110vh',
                         width: '110vw'
                     }}/>
                }}/>
            </div>
        );
    }
}