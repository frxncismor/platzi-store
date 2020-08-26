import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules,
} from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AdminGuard } from './guards/admin.guard';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./pages/order/order.module').then((m) => m.OrderModule),
      }
    ],
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./pages/demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
  loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule)},
  {
    path: 'login',
  loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)},
  {
    path: 'register',
  loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule)},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
