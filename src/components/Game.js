import React, { Component } from "react";

import Card from "./Card";
import Score from "./Score";

const array = [
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    },
    {
        name: "",
        img: "",
        clicked: false
    }
];

const shuffle = (arr) => (
    arr.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1])
);

class Game extends Component {

    state = {
        score: 0,
        characters: shuffle(array)
    }

    onCharacterClick = (index) => {
        if (!this.state.characters[index].clicked) {
            this.setState({
                characters: shuffle(this.state.characters.map((character, current) => {
                    return (current === index) ? { character, clicked: true } : character
                })),
                score: this.state.score + 1
            });

        } else {
            this.setState({
                characters: shuffle(this.state.characters.map((character) => { return { character, clicked: false } })),
                score: 0
            });

        }
    }

    render() {
        return (
            <div className="game">

                <Score
                    score={this.state.score} />

                <Card
                    characters={this.state.characters}
                    onCharacterClick={this.onCharacterClick} />

            </div>
        )
    }
}

export default Game;