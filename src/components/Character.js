import React, { Component } from "react";

class Character extends Component {

    handleClick = () => {
        this.props.onCharacterClick(this.props.index);
    }

    render() {
        return (
            <div className="character">
                <img
                    src={this.props.character.img}
                    alt={this.props.character.name}
                    className="pic"
                    onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Character;