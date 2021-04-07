import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {
    path: ''
    , component: HomeComponent
  }
  , {
    path: 'play'
    , component: PlayComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      , {
        useHash: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
