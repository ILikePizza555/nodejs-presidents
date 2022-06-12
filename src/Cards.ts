import { RandomAPI } from "boardgame.io/dist/types/src/plugins/random/random";

export type Value =  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades,
}

export interface Card {
    readonly suit: Suit;
    readonly value: Value;
}

export class Deck {
    static standardDeck(): Deck {
        const deck: Card[] = [];

        for (let suit = 0; suit < 4; suit++) {
            for (let value = 1; value <= 10; value++) {
                deck.push({
                    suit,
                    value: value as Value,
                });
            }
        }

        return new Deck(deck);
    }

    public cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public split(n: number): Deck[] {
        const subdeckLength = Math.floor(this.cards.length / n);
        const subdecks: Deck[] = [];

        for (let i = 0; i < n; i++) {
            const lowerBound = n * subdeckLength;
            const upperBound = Math.min((n + 1) * subdeckLength, this.cards.length);

            subdecks.push(new Deck(this.cards.slice(lowerBound, upperBound)));
        }

        return subdecks;
    }

    public shuffle(randomApi: RandomAPI): this {
        this.cards = randomApi.Shuffle(this.cards);
        return this;
    }
}