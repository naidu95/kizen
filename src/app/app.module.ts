import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { GMapsComponent } from './g-maps/g-maps.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import { TreeDiagramComponent } from './tree-diagram/tree-diagram.component';
import { ComponentsComponent } from './components/components.component';
import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";
import { CalComponent } from './cal/cal.component';
import { UiEmementsComponent } from './ui-emements/ui-emements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PanelsComponent } from './panels/panels.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ChartsComponent,
    ChartLineComponent,
    ChartBarComponent,
    GMapsComponent,
    MapsComponent,
    TreeDiagramComponent,
    ComponentsComponent,
    CalendarComponent,
    CalComponent,
    UiEmementsComponent,
    NavigationComponent,
    NotificationsComponent,
    PanelsComponent,
    ButtonsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ChartsModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCH5nP0pCL5NyMLYJ36iFHbbvm_RZJypAA'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
