import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private routerSvc: Router
    , public appData: AppDataService
  ) { }

  ngOnInit(): void {
    this.gameTimeStats = this.appData.calculateGameTimeStats();
  }

  playGame() {
    this.appData.currentGameStartTime = new Date();
    this.routerSvc.navigateByUrl("/play");
  }

  get winningPercentage() {
    return (  
      this.appData.gameResults.filter(x => x.result == "W").length 
      / this.appData.gameResults.length
    );
  }

  gameTimeStats;

  myProp = "Tom";
}
