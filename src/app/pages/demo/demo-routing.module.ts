import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { LoginComponent } from './login/login.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimelineComponent } from './timeline/timeline.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LineComponent } from './line/line.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'date-picker', component: DatePickerComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'line', component: LineComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
