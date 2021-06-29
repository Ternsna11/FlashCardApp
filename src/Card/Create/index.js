import React { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
// import CardForm from "../From";
import { useEffect, useState } from "react";

function CreateCard(){
    const history = useHistory();
    const { deckId } = useParams(); // destructuring deckId from useParams
    const [deck, setDeck] = useState({cards: []}) 
    // making our useState then giving it default with object and cards and the value empty array 
    useEffect(()=>{
        readDeck(deck.Id).then(setDeck);
    }, [deckId]) // calling useEffect to render when readDeck function is called with deck.Id as arguement then we run setDeck
    
}
