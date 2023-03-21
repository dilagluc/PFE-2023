import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";





import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
    declarations: [AppComponent, ...APP_CONTAINERS],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AvatarModule,
        BreadcrumbModule,
        FooterModule,
        DropdownModule,
        GridModule,
        HeaderModule,
        SidebarModule,
        IconModule,
        PerfectScrollbarModule,
        NavModule,
        ButtonModule,
        FormModule,
        UtilitiesModule,
        ButtonGroupModule,
        ReactiveFormsModule,
        SidebarModule,
        SharedModule,
        TabsModule,
        ListGroupModule,
        ProgressModule,
        BadgeModule,
        ListGroupModule,
        CardModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatSnackBarModule,
        MatIconModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        IconSetService,
        Title
    ],
    bootstrap: [AppComponent],
    exports: [
        DefaultLayoutComponent
    ]
})
export class AppModule {
}
