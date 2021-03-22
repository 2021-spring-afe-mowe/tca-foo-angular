import { Injectable } from '@angular/core';

export interface GameResult {
  result: string;
  gameStartTime: Date;
  gameEndTime: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  gameResults: GameResult[] = [];

  currentGameStartTime: Date;

  calculateGameTimeStats() {

    const longestGame = Math.max(
      ...this.gameResults.map(x => (x as any).gameEndTime - (x as any).gameStartTime)
    );

    const shortestGame = Math.min(
      ...this.gameResults.map(x => (x as any).gameEndTime - (x as any).gameStartTime)
    );

    return {
      longest: isFinite(longestGame) ? longestGame : 0
      , shortest: isFinite(shortestGame) ? shortestGame : 0
    };
  }
}
