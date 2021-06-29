import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "../From";

function CardCreate() {
  const history = useHistory();
  const { deckId } = useParams(); // destructuring deckId from useParams
  const [deck, setDeck] = useState({ cards: [] });
  // making our useState then giving it default with object and cards and the value empty array
  useEffect(() => {
    readDeck(deck.Id).then(setDeck);
  }, [deckId]); // calling useEffect to render when deckId changes, after we call readDeck function with deck.Id as arguement then we run setDeck

  function submitHandler(card) {
    createCard(deckId, card);
  } // creating our function to handle submits, we run createCard with deckId and card as params

  function doneHandler() {
    history.push(`/decks/${deckId}`);
  } // function to handle onDone, when done button with add/edit card is clicked, returns back to deck of the current deckId
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <CardForm
        deckName={deck.name}
        initialState={deck}
        onSubmit={submitHandler}
        onDone={doneHandler}
      />
    </>
  );
}
export default CardCreate;
