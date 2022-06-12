import { RandomAPI } from "boardgame.io/dist/types/src/plugins/random/random";

export enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades,
}

export enum Value {
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
}

export interface Card {
    readonly suit: Suit;
    readonly value: Value;
}

export function generateStandardDeck(): Card[] {
    const deck: Card[] = [];
    for (let suit = 0; suit < 4; suit++) {
        for (let value = 1; value <= 13; value++) {
            deck.push({
                suit,
                value,
            });
        }
    }

    return deck;
}

export function splitDeck(n: number, deck: Card[]): Card[][] {
    const subdeckLength = Math.floor(deck.length / n);
    const subdecks: Card[][] = [];

    for (let i = 0; i < n; i++) {
        const lowerBound = i * subdeckLength;
        const upperBound = Math.min((i + 1) * subdeckLength, deck.length);

        subdecks.push(deck.slice(lowerBound, upperBound));
    }

    return subdecks;
}