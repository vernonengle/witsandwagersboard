import axios from 'axios';
import React from 'react';

class App extends React.Component {
    componentDidMount() {
        axios.get('https://api.vernon-engle.info/games/witsandwagers/showquestion', {
            params: {
                id: 1
            }
        })
            .then((response) => {
                this.setState({
                    question: response
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
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
                            <p>{this.state.question}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
