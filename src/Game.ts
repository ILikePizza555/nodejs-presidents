import type { Game } from "boardgame.io";
import { Card, generateStandardDeck, splitDeck } from "./Cards";

export interface PresidentsGameState {
    hands: Card[][]
}

export const PresidentsGame: Game<PresidentsGameState> = {
    setup: (ctx) => ({
        hands: splitDeck(ctx.numPlayers, ctx.random.Shuffle(generateStandardDeck())),
    }),
};