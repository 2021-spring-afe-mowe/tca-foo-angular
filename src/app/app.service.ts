import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  gameResults = [];

  currentGameStartTime: Date;
}
