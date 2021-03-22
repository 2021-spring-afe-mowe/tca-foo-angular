import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(
    private router: Router
    , private myAppDataSvc: AppDataService
  ) { }

  ngOnInit(): void {
  }

  wonGame() {
    this.myAppDataSvc.gameResults = [
      ...this.myAppDataSvc.gameResults
      , "W"
    ];
    this.router.navigateByUrl("/");
  }

  lostGame() {
    this.myAppDataSvc.gameResults = [
      ...this.myAppDataSvc.gameResults
      , "L"
    ];
    
    this.router.navigateByUrl("/");
  }
}
