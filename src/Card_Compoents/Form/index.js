import React, { useState } from "react";

function CardForm({
  onSubmit,
  onDone,
  deckName = "Loading...",
  initalState,
  doneButtonLabel = "Done",
}) {
  const [card, setCard] = useState(initalState);

  function changeHandler({ target: { name, value } }) {
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit({ ...card });
    setCard({ front: "", back: "" });
  }
  return (
    <form onSubmit={submitHandler} className="card-form">
      <fieldset>
        <legend>{deckName}: Add Card</legend>

        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            id="front"
            name="front"
            className="form-control"
            required={true}
            placeholder="Front side of card"
            value={card.front}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            id="back"
            name="back"
            className="form-control"
            required={true}
            placeholder="Back side of card"
            value={card.back}
            onChange={changeHandler}
          />
        </div>

        <button
          className="btn btn-secondary mr-2"
          onClick={onDone}
        >
          {doneButtonLabel}
        </button>
        <button type="submit" className="btn btn-primary" tabIndex="3">
          Save
        </button>
      </fieldset>
    </form>
  );
}
export default CardForm;
