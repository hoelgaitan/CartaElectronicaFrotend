import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { EnsaladasComponent } from './pages/ensaladas/ensaladas.component';
import { PastasComponent } from './pages/pastas/pastas.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {
    path: 'pastas',
    component: PastasComponent
  },
  {
    path: 'ensaladas',
    component: EnsaladasComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  },
  {
    path: '**',
    redirectTo: 'productos'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
