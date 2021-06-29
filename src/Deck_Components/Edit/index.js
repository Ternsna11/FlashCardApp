import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "../Form";

function EditDeck() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ name: "", description: "" });
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);
  function submitHandler(updateDeck) {
    updateDeck(updateDeck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }
  function cancel() {
    history.goBack();
  }
  const deckInfo = deck.id ? (
    <DeckForm onCancel={cancel} onSubmit={submitHandler} initalState={deck} />
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
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {deckInfo}
    </>
  );
}

export default EditDeck;    
