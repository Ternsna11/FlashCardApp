import React from "react";
import { Link } from "react-router-dom";

function NotEnoughStudyCards({ deckId, cardCount }) {
  return (
    <>
      <h2>Not enough cards.</h2>
      <p>
        You need to have at least 3 cards to study. There are {cardCount} in
        this deck.
      </p>
      <Link to={`/decks/${deck.id}/cards/new`}>
        <span className="oi oi-plus" /> Add Cards
      </Link>
    </>
  );
}

export default NotEnoughStudyCards;
