import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './dashboard/producto/lista-producto.component';
import { DetalleProductoComponent } from './dashboard/producto/detalle-producto.component';
import { NuevoProductoComponent } from './dashboard/producto/nuevo-producto.component';
import { EditarProductoComponent } from './dashboard/producto/editar-producto.component';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/auth/login.component';
import { RegistroComponent } from './views/auth/registro.component';
import { ProductosComponent } from './views/productos/productos.component';
import { DetalleComponent } from './views/productos/detalle/detalle.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { ListaCategoriaComponent } from './dashboard/categorias/lista-categoria.component';
import { NuevaCategoriaComponent } from './dashboard/categorias/nueva-categoria.component';
import { EditarCategoriaComponent } from './dashboard/categorias/editar-categoria.component';
import { ListaMarcaComponent } from './dashboard/marcas/lista-marca.component';
import { NuevaMarcaComponent } from './dashboard/marcas/nueva-marca.component';
import { EditarMarcaComponent } from './dashboard/marcas/editar-marca.component';
import { ListaPedidoComponent } from './views/pedidos/lista-pedido.component';
import { RealizarPedidoComponent } from './views/pedidos/realizar-pedido.component';
import { DetallePedidoComponent } from './views/pedidos/detalle-pedido.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'registro', component: RegistroComponent },
	{ path: 'productos', component: ProductosComponent },
	{ path: 'productos/:id', component: DetalleComponent },

	{ path: 'productos/pedido/:id', component: RealizarPedidoComponent, canActivate: [guard], data: { expectedRol: ['user'] } },
	{ path: ':username/pedidos', component: ListaPedidoComponent, canActivate: [guard], data: { expectedRol: ['user'] } },
	{ path: ':username/pedidos/:id', component: DetallePedidoComponent, canActivate: [guard], data: { expectedRol: ['user'] } },

	{ path: 'admin/productos', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
	{ path: 'admin/productos/registro', component: NuevoProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
	{ path: 'admin/productos/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
	{ path: 'admin/productos/actualizar/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

	{ path: 'admin/categorias', component: ListaCategoriaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
	{ path: 'admin/categorias/registro', component: NuevaCategoriaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
	{ path: 'admin/categorias/actualizar/:id', component: EditarCategoriaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

	{ path: 'admin/marcas', component: ListaMarcaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
	{ path: 'admin/marcas/registrar', component: NuevaMarcaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
	{ path: 'admin/marcas/actualizar/:id', component: EditarMarcaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
