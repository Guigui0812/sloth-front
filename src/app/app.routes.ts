import { Routes } from '@angular/router';
import { CreateServerFormComponent } from './components/create-server-form/create-server-form.component';
import { InfrastructurePageComponent } from './components/infrastructure-page/infrastructure-page.component';
import {ConfigurePageComponent} from "./components/configure-page/configure-page.component";

export const routes: Routes = [
    {path: "create-server-form", component: CreateServerFormComponent},
    {path: "infrastructure-page", component: InfrastructurePageComponent},
    {path: "configure/:id", component: ConfigurePageComponent},
    {path: "", redirectTo: "infrastructure-page", pathMatch: "full"}
];

