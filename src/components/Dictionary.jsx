import {React, useState} from 'react';


const dict = 
[
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
]


const Dictionary = ()=>{
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');

    const handleSearch = ()=>{
        for(let i=0; i<dict.length; i++){
            console.log(word.toLowerCase(), dict[i].word.toLowerCase())
            if(word.toLowerCase()===dict[i].word.toLowerCase()){
                setMeaning(dict[i].meaning);
                return;
            }
        }
        setMeaning("Word not found in the dictionary.")
    }
    return (
        <>
            <h1>Dictionary App</h1>
            <input placeholder='Search for a word...' type="text" value={word} onChange={(e)=>{setWord(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button>
            <p>Definition:</p>
            <p>{meaning}</p>
        </>
    )
}

export default Dictionary;