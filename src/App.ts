import { State } from 'boardgame.io';
import { Client } from 'boardgame.io/client';
import { suitToEmoji, valueToString } from './Card';
import { PresidentsGame, PresidentsGameState } from './Game';

const App = Client({
    numPlayers: 4,
    game: PresidentsGame,
})

const currentPlayerDisplay = document.getElementById("current-player");
const currentTrickDisplay = document.getElementById("current-trick");
const handCountDisplay = document.getElementById("hand-count");
const hand = document.getElementById("hand");

function update({G, ctx}: State<PresidentsGameState>) {
    currentPlayerDisplay.textContent = ctx.currentPlayer;
    currentTrickDisplay.textContent = G.trick?.toString();
    
    const currentHand = G.hands[parseInt(ctx.currentPlayer)];

    handCountDisplay.textContent = currentHand.length.toString();

    while(hand.firstChild) {
        hand.removeChild(hand.firstChild);
    }

    currentHand.forEach((c, i) => {
        const child = document.createElement("button");
        child.innerText = `${valueToString(c.value)} ${suitToEmoji(c.suit)}`;
        child.onclick = _ => {
            App.moves.playCard(i)
        };

        hand.appendChild(child);
    })
}

App.subscribe(update);
App.start();