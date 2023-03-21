import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {RouterModule} from "@angular/router";
import {MatTabGroup, MatTabsModule} from "@angular/material/tabs";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {TestComponent} from "./test/test.component";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from "@angular/material/list";
import {MatTooltip, MatTooltipModule} from "@angular/material/tooltip";
import { ScolarFormComponent } from './scolar-form/scolar-form.component';
import { Semestre5Component } from './semestre5/semestre5.component';
import { Semestre6Component } from './semestre6/semestre6.component';
import { Semestre7Component } from './semestre7/semestre7.component';
import { Semestre8Component } from './semestre8/semestre8.component';
import { Semestre9Component } from './semestre9/semestre9.component';
import { Semestre10Component } from './semestre10/semestre10.component';
import { ResultatToeicComponent } from './resultat-toeic/resultat-toeic.component';
import { SmiComponent } from './smi/smi.component';
import { DecouverteComponent } from './stages/decouverte/decouverte.component';
import { TechnicienComponent } from './stages/technicien/technicien.component';
import { FinEtudesComponent } from './stages/fin-etudes/fin-etudes.component';
import { StagesComponent } from './stages/stages.component';
import { PromotionComponent } from './promotion/promotion.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { PromotionAddDialogComponent } from './promotion-add-dialog/promotion-add-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PromotionRemoveDialogComponent } from './promotion-remove-dialog/promotion-remove-dialog.component';

@NgModule({
    imports: [
        DashboardRoutingModule,
        CardModule,
        NavModule,
        IconModule,
        TabsModule,
        CommonModule,
        GridModule,
        ProgressModule,
        ReactiveFormsModule,
        ButtonModule,
        FormModule,
        ButtonModule,
        ButtonGroupModule,
        ChartjsModule,
        AvatarModule,
        TableModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatSnackBarModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        IconModule,
        MatCheckboxModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
  declarations: [DashboardComponent, TestComponent, ScolarFormComponent, Semestre5Component, Semestre6Component, Semestre7Component, Semestre8Component, Semestre9Component, Semestre10Component, ResultatToeicComponent, SmiComponent, DecouverteComponent, TechnicienComponent, FinEtudesComponent, StagesComponent, PromotionComponent, PromotionAddDialogComponent, ConfirmDialogComponent, PromotionRemoveDialogComponent]
})
export class DashboardModule {
}
