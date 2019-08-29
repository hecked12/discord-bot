"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const token = fs_1.readFileSync('./../discord-token.txt', 'utf-8');
exports.config = {
    "token": token,
    "prefix": "!",
    "botChannelId": "614400211913015304",
    "commands": [
        "testCommand"
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFrQztBQUVsQyxNQUFNLEtBQUssR0FBRyxpQkFBWSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRW5ELFFBQUEsTUFBTSxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDLFVBQVUsRUFBRTtRQUNSLGFBQWE7S0FDaEI7Q0FDSixDQUFBIn0=