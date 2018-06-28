import React, {Component} from 'react';

class ImgLayer extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div>
                <img src="/Burnt/Back.png"
                     style={{position: 'absolute', left: 0, top: 0, height: '110vh', width: '110vw'}}/>
                <img src="/Burnt/Layer1.png"
                     style={{position: 'absolute', left: mouse.x1, top: mouse.y1, height: '110vh', width: '110vw'}}/>
                <img src="/Burnt/Layer2.png"
                     style={{position: 'absolute', left: mouse.x2, top: mouse.y2, height: '110vh', width: '110vw'}}/>
                <img src="/Burnt/Layer3.png"
                     style={{position: 'absolute', left: mouse.x3, top: mouse.y3, height: '110vh', width: '110vw'}}/>
                <img src="/Burnt/Layer4.png"
                     style={{position: 'absolute', left: mouse.x4, top: mouse.y4, height: '110vh', width: '110vw'}}/>
            </div>
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y: 0};
    }

    handleMouseMove(event) {
        this.setState({
            x1: Math.sin(event.clientX / window.innerWidth) * 16 - 28,
            y1: Math.sin(event.clientY / window.innerHeight) * 16 -28,
            x2: Math.sin(event.clientX / window.innerWidth + 0.78) * 16 - 28,
            y2: Math.sin(event.clientY / window.innerHeight + 0.78) * 16 - 28,
            x3: Math.sin(event.clientX / window.innerWidth + 1.57) * 32 - 28,
            y3: Math.sin(event.clientY / window.innerHeight + 1.57) * 32 - 28,
            x4: Math.sin(event.clientX / window.innerWidth + 2.35) * 64 - 64,
            y4: Math.sin(event.clientY / window.innerHeight + 2.35) * 64 -64
        });
    }

    render() {
        return (
            <div style={{height: '100vh', width: '100vw'}} onMouseMove={this.handleMouseMove}>
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
                    <ImgLayer mouse={mouse}/>
                )}/>
            </div>
        );
    }
}