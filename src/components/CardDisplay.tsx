import React from "react";
import { Card, Suit } from "../Card";

export function CardDisplay({card}: {card: Card}) {
    const suitEmoji = {
        [Suit.Hearts]: "♥️",
        [Suit.Diamonds]: "♦️",
        [Suit.Clubs]: "♣️",
        [Suit.Spades]: "♠️",
    }[card.suit];
    
    return <div> {card.value}{suitEmoji} </div>
};