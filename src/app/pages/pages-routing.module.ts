import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './home/home.component';
import { SchedulingListComponent } from './scheduling-list/scheduling-list.component';
import { SchedulingComponent } from './scheduling/scheduling.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'agendamento',
    children: [
      {
        path: '',
        component: SchedulingComponent
      },
      {
        path: 'lista',
        component: SchedulingListComponent
      },
    ]
  },
  {
    path: 'components',
    component: ComponentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
