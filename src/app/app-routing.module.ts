import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizComponent} from "./quiz/quiz.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:"quiz" , component: QuizComponent },
  {path:"" , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
