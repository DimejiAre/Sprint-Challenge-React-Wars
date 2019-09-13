import React from "react";

function Character(props){
    const {name, height, mass, gender, hair_color, birth_year} = props;

    return (
        <div>
            <h3>{name}</h3>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Gender: {gender}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Birth Year: {birth_year}</p>
        </div>
    )

}

export default Character;