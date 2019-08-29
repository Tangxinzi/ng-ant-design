import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimelineComponent } from './timeline/timeline.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LineComponent } from './line/line.component';
import { ResultComponent } from './result/result.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [DemoComponent, LoginComponent, DatePickerComponent, TimelineComponent, StatisticComponent, LineComponent, ResultComponent, SkeletonComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
