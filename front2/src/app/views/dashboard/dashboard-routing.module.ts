import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {TestComponent} from "./test/test.component";
import {ScolarFormComponent} from "./scolar-form/scolar-form.component";
import {PromotionComponent} from "./promotion/promotion.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Dashboard`
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: PromotionComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'butto',
        component: TestComponent,
        data: {
          title: 'Butto'
        },
      },
      {
        path: 'student',
        data: {
          title: 'Student'
        },
        children: [
          {
            path: ':promotion',
            component: DashboardComponent,
          }
        ]
      },
      {
        path: 'scolarform',
        data: {
          title: 'Fiche de scolarité'
        },
        children: [
          {
            path: ':studentNum',
            component: ScolarFormComponent,
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
