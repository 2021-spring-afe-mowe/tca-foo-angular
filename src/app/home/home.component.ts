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

  timeConversion(duration: number) {
    const portions: string[] = [];
  
    const msInHour = 1000 * 60 * 60;
    const hours = Math.trunc(duration / msInHour);
    if (hours > 0) {
      portions.push(hours + 'h');
      duration = duration - (hours * msInHour);
    }
  
    const msInMinute = 1000 * 60;
    const minutes = Math.trunc(duration / msInMinute);
    if (minutes > 0) {
      portions.push(minutes + 'm');
      duration = duration - (minutes * msInMinute);
    }
  
    const seconds = Math.trunc(duration / 1000);
    if (seconds > 0) {
      portions.push(seconds + 's');
    }
  
    return portions.join(' ');
  }

  calculateGameLengthStats() {
    const longest = Math.max(...this.appDataSvc.gameResults.map(x => x.endDateTime - x.startDateTime));
    const shortest = Math.min(...this.appDataSvc.gameResults.map(x => x.endDateTime - x.startDateTime));

    this.gameLengthStats = {
      longest: isFinite(longest) ? this.timeConversion(longest) : "n/a" 
      , shortest: isFinite(shortest) ? this.timeConversion(shortest) : "n/a"
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
