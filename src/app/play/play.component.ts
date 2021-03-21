import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(
    private router: Router
    , private appDataSvc: AppService
  ) { }

  ngOnInit(): void {
  }

  winGame() {
    this.appDataSvc.gameResults = [
      ...this.appDataSvc.gameResults
      , "W"
    ];
    this.router.navigateByUrl("/");
  }

  loseGame() {
    this.appDataSvc.gameResults = [
      ...this.appDataSvc.gameResults
      , "L"
    ];
    this.router.navigateByUrl("/");
  }
}
