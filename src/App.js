import axios from 'axios';
import React from 'react';

class App extends React.Component {
    state = {
        question: []
    }

    componentDidMount() {
        this.showQuestion()
    }

    async showQuestion() {
        const response = axios.get('https://api.vernon-engle.info/games/witsandwagers/showquestion', {
            params: {
                id: 1
            }
        });
        this.setState({
            question: response
        });
    }

    render() {
        return (
            <div className="ui four column centered grid">
                <div className="column row"/>
                <div className="column row"/>
                <div className="column row"/>
                <div className="column row"/>
                <div className="column centered">
                    <div className="ui card">
                        <div className="content">
                            <a className="header">Player Red</a>
                            <p>{this.state.question[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
