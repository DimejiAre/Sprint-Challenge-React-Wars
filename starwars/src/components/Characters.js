import React from "react";
import Character from "./Character";
import styled from "styled-components";

const StyledChrs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Characters(props){
    const {characterList} = props;

    return (
        <StyledChrs>
        {
            characterList.map(chr => (
            <Character
            key={chr.name} 
            name={chr.name}
            height={chr.height}
            mass={chr.mass}
            gender={chr.gender}
            hair_color={chr.hair_color}
            birth_year={chr.birth_year}/>))
        }
        </StyledChrs>
    )

}

export default Characters;