import React from "react";
import styled from "styled-components";
import img from "../img/star_wars5.jpg"

const StyledChr = styled.div`
    background-image: url(${img});
    background-color: gray;
    border: 2px solid black;
    border-radius: 20px;
    width: 20vw;
    margin: 20px;
    padding: 20px;
    padding-bottom: 0;
    color: whitesmoke;
    
    h3 {
        font-weight: bold;
        text-align: center;
        margin: 0;
    }
`;

function Character(props){
    const {name, height, mass, gender, hair_color, birth_year} = props;

    return (
        <StyledChr>
            <h3>{name}</h3>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Gender: {gender}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Birth Year: {birth_year}</p>
        </StyledChr>
    )

}

export default Character;