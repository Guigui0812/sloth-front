import { Routes } from '@angular/router';
import { CreateServerFormComponent } from './components/create-server-form/create-server-form.component';
import { InfrastructurePageComponent } from './components/infrastructure-page/infrastructure-page.component';
import { ServerConfigureComponent } from './components/server-configure/server-configure.component';

export const routes: Routes = [
    {path: "create-server-form", component: CreateServerFormComponent},
    {path: "infrastructure-page", component: InfrastructurePageComponent},
    {path: "server-configure", component: ServerConfigureComponent},
    {path: "", redirectTo: "infrastructure-page", pathMatch: "full"}
];

