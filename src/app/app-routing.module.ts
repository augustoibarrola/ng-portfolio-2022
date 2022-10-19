import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'; /* imports RouterModule and Routes give the application routing functionality */
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {preloadingStrategy: PreloadAllModules}
    )], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }

