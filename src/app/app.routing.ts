import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component'; 
import { LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChartsComponent} from './charts/charts.component';
import { GMapsComponent } from './g-maps/g-maps.component';
import { MapsComponent } from './maps/maps.component';
import { ComponentsComponent} from './components/components.component';
import { CalComponent } from './cal/cal.component';
import { UiEmementsComponent } from './ui-emements/ui-emements.component';
import { NotificationsComponent} from './notifications/notifications.component';
import { PanelsComponent} from './panels/panels.component';
import { ButtonsComponent} from './buttons/buttons.component';
const appRoutes:Routes=[

    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'charts',
        component:ChartsComponent
    },
    {
        path:'maps',
        component:MapsComponent
    },
    {
        path:'components',
        component:ComponentsComponent
    }
    ,
    {
        path:'',
        component:DashboardComponent
    },
    {
        path:'cal',
        component:CalComponent
    },
    {
        path:'ui',
        component:UiEmementsComponent
    },
    {
        path:'notifications',
        component:NotificationsComponent
    },
    {
        path:'panels',
        component:PanelsComponent
    },
    {
        path:'buttons',
        component:ButtonsComponent
    }
];
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);