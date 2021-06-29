import React { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "../From";
import { useState } from "react";

function CreateCard(){
    const history = useHistory();
    const { deckId } = useParams(); // destructuring deckId from useParams
    const [deck, setDeck] = useState({cards: []}) // making our useState then 
}