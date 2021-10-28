import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './ficha/ficha.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'start', 
  loadChildren:() => import ('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  { path: 'login',component:LoginComponent },
  {
    path: 'ficha',component:FichaComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
