import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './feature/home/home.module';
import { ModulosAprendizajeModule } from './feature/modulos-aprendizaje/modulos-aprendizaje.module';
import { PagesModule } from './pages/pages.module';



const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'aprendizaje',
    loadChildren:() => import('./feature/modulos-aprendizaje/modulos-aprendizaje.module').then(m => m.ModulosAprendizajeModule)
  },
  {
    path: 'pages',
    loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    ModulosAprendizajeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
