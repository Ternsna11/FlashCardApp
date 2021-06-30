import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Study from "../Study_Components"
import Home from "../Home";
import EditDeck from "../Deck_Components/Edit";
import DeckView from "../Deck_Components/View";
import CardCreate from "../Card_Components/Create";
import CardEdit from "../Card_Components/Edit";
import DeckCreate from "../Deck_Components/Create";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardsId/edit">
            <CardEdit />
          </Route>
          <Route path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
