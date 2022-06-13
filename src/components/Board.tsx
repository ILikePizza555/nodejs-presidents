import React from "react";
import type { BoardProps } from "boardgame.io/react";
import { PresidentsGameState } from "../Game";
import { CardDisplay } from "./CardDisplay";

export function Board({G, ctx, moves}: BoardProps<PresidentsGameState>) {
    const currentHand = G.hands[parseInt(ctx.currentPlayer)]
    
    return <div>
        <h2>Current Player: {ctx.currentPlayer}</h2>
        <h3>Trick: {G.trick}</h3>
        <h3>Hand ({currentHand.length})</h3>
        {currentHand.map(c => {
            <CardDisplay card={c} />
        })}
    </div>
}