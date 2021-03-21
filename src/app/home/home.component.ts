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
  }

  playGame() {
    this.router.navigateByUrl("/play");
  }

  get winningPercent() {
    return this.appDataSvc.gameResults.filter(x => x == "W").length / this.appDataSvc.gameResults.length;
  }

}
