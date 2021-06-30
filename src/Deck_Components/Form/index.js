import React, { useState } from "react";
function DeckForm({
  onSubmit,
  onCancel,
  initalState = { name: "", description: "" },
}) {
  const [deck, setDeck] = useState(initalState);
  function changeHandler({ target: { name, value } }) {
    setDeck((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit(deck);
  }
  return (
    <>
      <form onSubmit={submitHandler} className="deck-edit">
        <fieldset>
          <div className="deckform-info">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="deck-form"
              value={deck.name}
              required={true}
              placeholder="Deck Name"
              onChange={changeHandler}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}
export default DeckForm;
