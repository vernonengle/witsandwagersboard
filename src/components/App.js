import axios from 'axios';
import React from 'react';
import BettingBoard from "./BettingBoard";

class App extends React.Component {
    state = {
        question: {
            question: ""
        }
    }

    showQuestion = async () => {
        this.setState({
            question: "loading"
        });
        const response = await axios.get('https://api.vernon-engle.info/games/witsandwagers/showquestion', {
            params: {
                id: 1
            }
        });
        this.setState({
            question: response.data
        });
    };

    render() {
        return (
            <div className="pusher">
                <div className="ui inverted center aligned segment">
                    <div className="ui container">
                        <h1 className="ui inverted container">
                            <a onClick={this.showQuestion} href="#">
                                Wits And Wagers 2
                            </a>
                        </h1>
                        <h2>{this.state.question.question}</h2>
                        <div className="ui container">
                            <BettingBoard/>
                        </div>
                    </div>
                </div>
                <div className="ui vertical stripe quote segment">
                    <div className="ui equal width stackable internally celled grid">
                        <div className="center aligned row">
                            <div className="column">
                                <h3>Player 1</h3>
                                <p>That is what they all say about us</p>
                            </div>
                            <div className="column">
                                <h3>Player 2</h3>
                                <p>
                                    player
                                </p>
                            </div>
                            <div className="column">
                                <h3>Player 2</h3>
                                <p>
                                    player
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
