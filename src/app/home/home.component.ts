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
  }

  playGame() {
    this.routerSvc.navigateByUrl("/play");
  }

}
