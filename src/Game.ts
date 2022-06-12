import type { Game } from "boardgame.io";
import { Deck } from "./Cards";

export interface PresidentsGameState {
    hands: Deck[]
}

export const PresidentsGame: Game<PresidentsGameState> = {
    setup: (ctx) => ({
        hands: Deck.standardDeck().shuffle(ctx.random).split(ctx.numPlayers)
    }),
};