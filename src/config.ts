import { readFileSync } from 'fs';

const token = readFileSync('./../discord-token.txt', 'utf-8');
const twitchClientId = readFileSync('./../twitch-client-id.txt', 'utf-8');

export let config = {
    "token": token,
    "twitchClientId": twitchClientId,
    "prefix": "!",
    "botChannelId": "614400211913015304",
    "commands": [
        "testCommand",
        "ttvstat"
    ]
}