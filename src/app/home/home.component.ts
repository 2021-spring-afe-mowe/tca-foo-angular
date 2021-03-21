import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
    , public appDataSvc: AppService
  ) { }

  ngOnInit(): void {
    //console.log("ngOnInit()");

    this.calculateGameLengthStats();
  }

  calculateGameLengthStats() {
    const longest = Math.max(...this.appDataSvc.gameResults.map(x => x.endDateTime - x.startDateTime));
    const shortest = Math.min(...this.appDataSvc.gameResults.map(x => x.endDateTime - x.startDateTime));

    this.gameLengthStats = {
      longest: isFinite(longest) ? longest : 0 
      , shortest: isFinite(shortest) ? shortest : 0
    };
  }

  playGame() {
    this.appDataSvc.currentGameStartTime = new Date();
    this.router.navigateByUrl("/play");
  }

  get winningPercent() {
    return this.appDataSvc.gameResults.filter(x => x.result == "W").length / this.appDataSvc.gameResults.length;
  }

  gameLengthStats;
  
}
