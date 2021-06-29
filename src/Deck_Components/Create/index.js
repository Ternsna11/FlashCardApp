import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "../Form";

function DeckCreate() {
  const history = useHistory();

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) => // saving our deck using createDeck function then saving it to savedDeck upon submit.  
      history.push(`/decks/${savedDeck.id}`)// next go push that deck by using savedDeck.id create deck page
    );
  }
  function cancel() {
    history.goBack(); // use history with go back to go back to the last url in history
  }
  return (
    <>
      {/* building or breadcrumb nav bar from bootstrap  19-30
    line 32-33 is the DeckForm imported from Form with our event handlers as props*/}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <DeckForm onCancel={cancel} onSubmit={submitHandler} />
    </>
  );
}
export default DeckCreate;
