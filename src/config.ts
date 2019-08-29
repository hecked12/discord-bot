import { readFileSync } from 'fs';

const token = readFileSync('./../discord-token.txt', 'utf-8');

export let config = {
    "token": token,
    "prefix": "!",
    "botChannelId": "614400211913015304",
    "commands": [
        "testCommand"
    ]
}