import position1 from '../images/position0.png';
import position2 from '../images/position2.png';
import position3 from '../images/position3.png';
import position4 from '../images/position4.png';
import position5 from '../images/position5.png';
import position6 from '../images/position6.png';
import position7 from '../images/position7.png';
import position8 from '../images/position8.png';
import position9 from '../images/position9.png';
import position10 from '../images/position10.png';
import React from 'react';

class BettingBoard extends React.Component {
    render() {
        return (
            <div className="ui nine column grid centered">
                <div className="row">
                    <div className="ui column">
                        <img className="ui medium image" src={position1}/>
                    </div>
                    <div className="ui column">
                        <img className="ui medium image" src={position2}/>
                    </div>
                    <div className="ui column">
                        <img className="ui small image" src={position3}/>
                    </div>
                    <div className="ui column">
                        <img className="ui small image" src={position4}/>
                    </div>
                    <div className="ui column">
                        <img className="ui small image" src={position5}/>
                    </div>
                    <div className="ui column">
                        <img className="ui small image" src={position6}/>
                    </div>
                    <div className="ui column">
                        <img className="ui small image" src={position7}/>
                    </div>
                    <div className="ui column">
                        <img className="ui small image" src={position8}/>
                    </div>
                </div>
                <div className="row">
                    <div className="ui three column">
                        <img className="ui image" src={position9}/>
                    </div>
                    <div className="ui three column">
                        <img className="ui image" src={position10}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BettingBoard;