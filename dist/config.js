"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const token = fs_1.readFileSync('./../discord-token.txt', 'utf-8');
const twitchClientId = fs_1.readFileSync('./../twitch-client-id.txt', 'utf-8');
exports.config = {
    "token": token,
    "twitchClientId": twitchClientId,
    "prefix": "!",
    "botChannelId": "614400211913015304",
    "commands": [
        "testCommand",
        "ttvstat"
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFrQztBQUVsQyxNQUFNLEtBQUssR0FBRyxpQkFBWSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlELE1BQU0sY0FBYyxHQUFHLGlCQUFZLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFL0QsUUFBQSxNQUFNLEdBQUc7SUFDaEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxnQkFBZ0IsRUFBRSxjQUFjO0lBQ2hDLFFBQVEsRUFBRSxHQUFHO0lBQ2IsY0FBYyxFQUFFLG9CQUFvQjtJQUNwQyxVQUFVLEVBQUU7UUFDUixhQUFhO1FBQ2IsU0FBUztLQUNaO0NBQ0osQ0FBQSJ9