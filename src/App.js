import React, { Component } from 'react';

// import Mouse from 'Mouse';
// import ImgLayers from 'ImgLayers';
//
//
// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <Mouse render={mouse => (
//                     <ImgLayers mouse={mouse} />
//                 )}/>
//             </div>
//         );
//     }
// }
//
class ImgLayer extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div>
                <img src="/Layer1.png" style={{ position: 'absolute', left: mouse.x1, top: mouse.y1, height: '110vh', width: '110vw'}} />
                <img src="/Layer2.png" style={{ position: 'absolute', left: mouse.x2, top: mouse.y2, height: '110vh', width: '110vw'}} />
            <img src="/Layer3.png" style={{ position: 'absolute', left: mouse.x3, top: mouse.y3, height: '110vh', width: '110vw'}} />
            <img src="/Layer4.png" style={{ position: 'absolute', left: mouse.x4, top: mouse.y4, height: '110vh', width: '110vw'}} />
            </div>
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x1: Math.sin(event.clientX/200)*8-28,
            y1: Math.sin(event.clientY/100)*8-28,
            x2: Math.sin(event.clientX/200 +0.65)*10-28,
            y2: Math.sin(event.clientY/100 +0.65)*10-28,
            x3: Math.sin(event.clientX/200 +1.57)*12-28,
            y3: Math.sin(event.clientY/100 +1.57)*12-28,
            x4: Math.sin(event.clientX/200 +2.35)*14-28,
            y4: Math.sin(event.clientY/100 +2.35)*14-28
        });
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100vw'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Mouse render={mouse => (
                    <ImgLayer mouse={mouse} />
                )}/>
            </div>
        );
    }
}