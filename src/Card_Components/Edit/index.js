import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "../Form";

function CardEdit({ title }) {
  const history = useHistory();
  const { deckId, cardId } = useParams();

  const [card, setCard] = useState({ front: "", back: "" });
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck); //running readDeck function getting deck by deckId then setting that = to use state function setDeck which sets it = to deck (useState variable)
    readCard(cardId).then(setCard); //running readCard func getting card by cardId, then setting it = to our useState variable (card) by passing it into our useState func setCard
  }, [deckId, cardId]);

  function submitHandler(card) {
    updateCard(card).then(doneHandler); // when submit is clicked we handle by running updateCard func with card as param. then running our doneHandler
  }
  function doneHandler() {
    history.push(`/decks/${deck.id}`); // when done clicked we want to perform this event taking us to the decks page of this deck by its deck.id
  }
  const cardInfo = card.id ? (
    <CardForm
      onSubmit={submitHandler}
      onDone={doneHandler}
      deckName={deck.name}
      initialState={card}
      doneButtonLabel="Cancel"
    />
  ) : (
    <p>Loading...</p>
  );
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
            <Link to={`/decks/${deck.id}`}>Deck {deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h2>Edit card</h2>
      {cardInfo}
    </>
  );
}
export default CardEdit;
