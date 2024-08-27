import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { LayoutPrincipalComponent } from './layout/layout-principal.component';

  const routes: Routes = [
    {
      path: '', component: LayoutPrincipalComponent,
      children : [
        {
          path: '',
          loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
        },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
