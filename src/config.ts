import { readFileSync } from 'fs';

const token = readFileSync('./../data/discord-token.txt', 'utf-8');
const twitchClientId = readFileSync('./../data/twitch-client-id.txt', 'utf-8');

export let config = {
    "token": token,
    "twitchClientId": twitchClientId,
    "prefix": "!",
    "botChannelId": "632576166011731975",
    "twitchStreams": [
        {
            "title": "lol",
            "streamers": [
                {
                    "name": "tfblade",
                    "details": ""
                },
                {
                    "name": "nightblue3",
                    "details": ""
                },
                {
                    "name": "Cowsep",
                    "details": ""
                },
                {
                    "name": "Imaqtpie",
                    "details": ""
                },
                {
                    "name": "nightblue3",
                    "details": ""
                },
                {
                    "name": "foggedftw2",
                    "details": ""
                },
                {
                    "name": "Trick2G",
                    "details": ""
                },
                {
                    "name": "loltyler1",
                    "details": ""
                },
                {
                    "name": "Froggen",
                    "details": ""
                }
            ]
        },
        {
            "title": "tft",
            "streamers": [
                {
                    "name": "scarra",
                    "details": ""
                },
                {
                    "name": "disguisedtoast",
                    "details": ""
                },
                {
                    "name": "dogdog",
                    "details": ""
                }
            ]
        }
    ],
    "commands": [
        "testCommand",
        "ttvstat"
    ]
}