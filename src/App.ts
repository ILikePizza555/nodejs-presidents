import { Client } from 'boardgame.io/client';
import { PresidentsGame } from './Game';

const App = Client({
    game: PresidentsGame
})

App.start();