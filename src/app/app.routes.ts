import { Routes } from '@angular/router';
import { CreateServerFormComponent } from './components/create-server-form/create-server-form.component';
import { InfrastructurePageComponent } from './components/infrastructure-page/infrastructure-page.component';
import { ServerConfigureComponent } from './components/server-configure/server-configure.component';
import {ServerDetailsComponent} from "./components/server-details/server-details.component";

export const routes: Routes = [
    {path: "create-server-form", component: CreateServerFormComponent},
    {path: "infrastructure-page", component: InfrastructurePageComponent},
    {path: "server-configure", component: ServerConfigureComponent},
    {path: "server-details", component: ServerDetailsComponent},
    {path: "", redirectTo: "infrastructure-page", pathMatch: "full"}
];

