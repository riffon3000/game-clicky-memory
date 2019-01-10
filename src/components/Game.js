import React, { Component } from "react";

import Card from "./Card";
import Score from "./Score";

const array = [
    {
        name: "Ant-Man",
        img: "./img/antman.png",
        clicked: false
    },
    {
        name: "Black Panther",
        img: "./img/blackpanther.png",
        clicked: false
    },
    {
        name: "Black Widow",
        img: "./img/blackwidow.png",
        clicked: false
    },
    {
        name: "Captain America",
        img: "./img/captainamerica.png",
        clicked: false
    },
    {
        name: "Falcon",
        img: "./img/falcon.png",
        clicked: false
    },
    {
        name: "Hawkeye",
        img: "./img/hawkeye.png",
        clicked: false
    },
    {
        name: "Hulk",
        img: "./img/hulk.png",
        clicked: false
    },
    {
        name: "Iron Man",
        img: "./img/ironman.png",
        clicked: false
    },
    {
        name: "Loki",
        img: "./img/loki.png",
        clicked: false
    },
    {
        name: "Maria Hill",
        img: "./img/mariahill.png",
        clicked: false
    },
    {
        name: "Nick Fury",
        img: "./img/nickfury.png",
        clicked: false
    },
    {
        name: "Red Skull",
        img: "./img/redskull.png",
        clicked: false
    },
    {
        name: "Thor",
        img: "./img/thor.png",
        clicked: false
    },
    {
        name: "Ultron",
        img: "./img/ultron.png",
        clicked: false
    },
    {
        name: "Vision",
        img: "./img/vision.png",
        clicked: false
    },
    {
        name: "War Machine",
        img: "./img/warmachine.png",
        clicked: false
    },
    {
        name: "Wasp",
        img: "./img/wasp.png",
        clicked: false
    }
]

const shuffle = (arr) => (
    arr
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
);

class Game extends Component {

    state = {
        score: 0,
        characters: shuffle(array)
    };
// triple dot from ECMAScript 6; the operator spreads the array (or iterable object) elements
    onCharacterClick = (index) => {
        if (!this.state.characters[index].clicked) {
            this.setState({
                characters: shuffle(this.state.characters.map((character, current) => {
                    return (current === index) ? { ...character, clicked: true } : character
                })),
                score: this.state.score + 1
            });

        } else {
            this.setState({
                characters: shuffle(this.state.characters.map((character) => { return { ...character, clicked: false } })),
                score: 0
            });

        }
    }

    render() {
        return (
            <div className="game">

                <header className="header">
                    <h1>Clicky! Game</h1>
                    <h2>Click on an image to earn points, but don't click the same one more than once!</h2>

                    <Score
                        score={this.state.score} />
                </header>

                <Card
                    characters={this.state.characters}
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }
}

export default Game;