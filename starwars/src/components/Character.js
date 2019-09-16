import React from 'react';
import styled from 'styled-components';
import img from '../img/star_wars3.jpg'
import img2 from '../img/star_wars5.jpg'

const StyledChr = styled.div`
    background-image: ${props=> Number(props.height) > 150 ? `url(${img})` : `url(${img2})`};
    background-color: gray;
    border: 2px solid black;
    border-radius: 30px;
    width: 20vw;
    margin: 20px;
    padding: 20px;
    padding-bottom: 0;
    color: ${props=> Number(props.height) > 150 ? 'whitesmoke' : 'red'};
    
    h3 {
        font-weight: bold;
        text-align: center;
        margin: 0;
    }
`;

function Character(props){
    const {name, height, mass, gender, hair_color, birth_year} = props;

    return (
        <StyledChr height={height}>
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