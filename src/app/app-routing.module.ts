import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MenuPage } from './pages/menu/menu.page';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'reset-password', loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule) },
  { path: 'new-contact', loadChildren: () => import('./pages/new-contact/new-contact.module').then(m => m.NewContactPageModule) },
  {
    path: '',
    component: MenuPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      // {
      //   path: 'cart',
      //   loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
      // },
      // {
      //   path: 'product/:tag',
      //   loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
      // },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }