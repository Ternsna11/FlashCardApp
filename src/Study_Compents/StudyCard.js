import React, { useEffect, useState } from "react";
const nextView = {
  front: "front",
  back: "back",
};
function StudyCard({ card = {}, title, children }) {
  const [view, setView] = useState("front");
  const [flipped, setFlipped] = useState(false);

  function flipHandler() {
    setView((prevState) => nextView[prevState]); // setting setView state variable = to nextView[prevState]... view = the value of newView[preState] (nextView @ prevState)
    setFlipped(true); // setting useState of flipped = false now to being true as we have flipped it
  }
  useEffect(() => {
    setView("front");
    setFlipped(false);
  }, [card]); // setting useEffect to front for setView and false for setFlipped so when card is changed it renders to those defaults for each new card

  return (
    <div className={`study-card ${view}`}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{card[view]}</p>
        <button className="btn btn-secondary mr-2" onClick={flipHandler}>
          Flip
        </button>
      </div>
    </div>
  );
}
export default StudyCard;
