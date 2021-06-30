import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api";
import StudyCard from "./StudyCard";
import StudyLayout from "./StudyLayout";
import NotEnoughStudyCards from "./NotEnoughStudyCards";

function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "loading", cards: [] });
  const [cardNumber, setCardNumber] = useState(1);
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck); // readDeck function is called then we set that = to setDeck variable
  }, [deckId]);

  const cardCount = deck.cards.length;

  const nextHandler = () => {
    if (cardNumber === cardCount) {
      const returnHome = !window.confirm(
        "Restart cards?\n\nClick 'cancel' to return to the home page."
      );
      return returnHome ? history.push("/") : setCardNumber(1);
    }
    setCardNumber((prevState) => Math.min(cardCount, prevState + 1));
  };
  const cardTitle = `Card ${cardNumber} of ${cardCount}`;
  const card = deck.cards[cardNumber - 1];

  if (cardCount <= 2) {
    return (
      <StudyLayout name={deck.name} deckId={deckId}>
        <NotEnoughStudyCards deckId={deckId} cardCount={cardCount} />
      </StudyLayout>
    );
  }
  return (
    <StudyLayout name={deck.name} deckId={deckId}>
      <StudyCard card={card} title={cardTitle}>
        <button className="btn btn-primary" onClick={nextHandler}>
          Next
        </button>
      </StudyCard>
    </StudyLayout>
  );
}

export default Study;
