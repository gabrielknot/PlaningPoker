import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanningPokerRootComponent } from './planning-poker-root/planning-poker-root.component';
import { LoginComponent } from './login/login.component';
import { BoardGameComponent } from './board-game/board-game.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningPokerRootComponent,
    LoginComponent,
    BoardGameComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
