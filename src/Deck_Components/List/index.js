import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../../utils/api";

function DeckList() {
  const [decks, setDecks] = useState([]);
  useEffect(loadDecks, []); // running loadDeck function  to run effect then only running it once ([])
  function deleteHandler(deckId) {
    const confirm = window.confirm(
      //making a confirm window appear when attempting to delete deck
      "Delete this deck?\n\nYou will not be able to recover it" //\n = new line character is similar to line break
    );
    if (confirm) {
      deleteDeck(deckId).then(loadDecks);
    }
  }
  function loadDecks() {
    listDecks().then(setDecks);
  }
  const list = decks.map((deck) => (
    <li
      key={deck.id}
      className="list-group-item list-group-item-action align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{deck.name}</h5>
        <small>{deck.cards.length}</small>
      </div>
      <p className="mb-1">{deck.description}</p>
      <Link
        to={`/decks/${deck.id}`}
        className="btn btn-secondary mr-2"
        title="Edit deck"
      >
        <span className="oi oi-eye" /> View
      </Link>
      <Link
        to={`/decks/${deck.id}/study`}
        className="btn btn-primary"
        title="Study deck"
      >
        <span className="oi oi-book" /> Study
      </Link>
      <button className="btn btn-danger" onClick={() => deleteHandler(deck.id)}>
        {/* onClick event handled by calling deleteDeck function with param of deck.id we are in */}
        <span className="oi oi-trash" />
      </button>
    </li>
  ));
  return (
    <>
      <Link to="/decks/new" className="btn btn-secondary">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      <ul className="list-group mt-3 list-decks">{list}</ul>
    </>
  );
}

export default DeckList;
