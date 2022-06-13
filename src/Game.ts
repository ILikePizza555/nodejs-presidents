import type { Ctx, Game } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";
import { Card, generateStandardDeck, splitDeck, Value } from "./Card";

export interface PresidentsGameState {
    trick: Value | null,
    hands: Card[][]
}

export const PresidentsGame: Game<PresidentsGameState> = {
    setup: (ctx) => ({
        trick: null,
        hands: splitDeck(ctx.numPlayers, ctx.random.Shuffle(generateStandardDeck())),
    }),
    moves: {
        playCard: (G, ctx, id: number) => {
            const card = getCurrentPlayerHand(G, ctx)[id];

            if (G.trick !== null && G.trick > card.value) {
                return INVALID_MOVE;
            }

            // G.trick is null or less than the card value
            const [playedCard] = getCurrentPlayerHand(G, ctx).splice(id, 1);
            G.trick = playedCard.value;
            ctx.events.endTurn();
        }
    }
};

function getCurrentPlayerHand(G: PresidentsGameState, ctx: Ctx): Card[] {
    return G.hands[ctx.currentPlayer];
}