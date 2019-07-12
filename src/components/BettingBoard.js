import position1 from '../images/position1.png';
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
import redplayer from '../images/redplayer.png';
import blueplayer from '../images/blueplayer.png';
import yellowplayer from '../images/yellowplayer.png';
import pinkplayer from '../images/pinkplayer.png';
import greenplayer from '../images/greenplayer.png';
import BettingPosition from "./BettingPosition";
import _ from 'lodash';
import {Grid} from 'semantic-ui-react'

let verticalSlots = {
    1: position1,
    2: position2,
    3: position3,
    4: position4,
    5: position5,
    6: position6,
    7: position7,
    8: position8
}

class BettingBoard extends React.Component {
    getColumn(key) {
        return (
            <Grid.Column key={key}>
                <BettingPosition imageSource={verticalSlots[key]} position={key}/>
            </Grid.Column>
        )
    }
    render() {
        const verticalSlotColumns = _.map((_.keys(verticalSlots)), (key)=> this.getColumn(key));
        return (
            <div className="ui equal width grid">
                <div className="nine column row">
                    {verticalSlotColumns}
                    <div className="ui column">
                        <div className="ui grid">
                            <div className="row">
                                <img className="ui image" src={redplayer}/>
                            </div>
                            <div className="row">
                                <img className="ui image" src={blueplayer}/>
                            </div>
                            <div className="row">
                                <img className="ui image" src={yellowplayer}/>
                            </div>
                            <div className="row">
                                <img className="ui image" src={pinkplayer}/>
                            </div>
                            <div className="row">
                                <img className="ui image" src={greenplayer}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="ui column">
                        <img className="ui image" src={position9}/>
                    </div>
                    <div className="ui column">
                        <img className="ui image" src={position10}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BettingBoard;