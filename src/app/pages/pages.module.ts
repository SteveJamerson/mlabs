import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { SchedulingListComponent } from './scheduling-list/scheduling-list.component';


@NgModule({
  declarations: [HomeComponent, SchedulingComponent, SchedulingListComponent],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
