import React from "react";

function Characters(characterList){
    const {characterList} = props;

    return (
        <>
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
        </>
    )

}

export default Characters;