import React from "react";

import Character from "./Character";

const Card = (props) => {
    return (
        <div className="character-card">
            {props.characters.map((character, index) => <Character
                character={character}
                index={index}
                onCharacterClick={props.onCharacterClick}
                key={index} />
            )}
        </div>
    )
}

export default Card;