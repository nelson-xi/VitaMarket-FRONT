import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './dashboard/producto/lista-producto.component';
import { DetalleProductoComponent } from './dashboard/producto/detalle-producto.component';
import { NuevoProductoComponent } from './dashboard/producto/nuevo-producto.component';
import { EditarProductoComponent } from './dashboard/producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './views/auth/login.component';
import { RegistroComponent } from './views/auth/registro.component';
import { MenuComponent } from './views/menu/menu.component';
import { IndexComponent } from './views/index/index.component';
import { ListaComponent } from './views/productos/lista/lista.component';
import { DetalleComponent } from './views/productos/detalle/detalle.component';
import { ProductosComponent } from './views/productos/productos.component';
import { FooterComponent } from './views/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NuevaCategoriaComponent } from './dashboard/categorias/nueva-categoria.component';
import { ListaCategoriaComponent } from './dashboard/categorias/lista-categoria.component';
import { EditarCategoriaComponent } from './dashboard/categorias/editar-categoria.component';
import { EditarMarcaComponent } from './dashboard/marcas/editar-marca.component';
import { ListaMarcaComponent } from './dashboard/marcas/lista-marca.component';
import { NuevaMarcaComponent } from './dashboard/marcas/nueva-marca.component';
import { RealizarPedidoComponent } from './views/pedidos/realizar-pedido.component';
import { ListaPedidoComponent } from './views/pedidos/lista-pedido.component';
import { DetallePedidoComponent } from './views/pedidos/detalle-pedido.component';


@NgModule({
	declarations: [
		AppComponent,
		ListaProductoComponent,
		DetalleProductoComponent,
		NuevoProductoComponent,
		EditarProductoComponent,
		LoginComponent,
		RegistroComponent,
		MenuComponent,
		IndexComponent,
		ListaComponent,
		DetalleComponent,
		ProductosComponent,
		FooterComponent,
		DashboardComponent,
		NuevaCategoriaComponent,
		ListaCategoriaComponent,
		EditarCategoriaComponent,
		EditarMarcaComponent,
		ListaMarcaComponent,
		NuevaMarcaComponent,
		RealizarPedidoComponent,
		ListaPedidoComponent,
		DetallePedidoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		HttpClientModule,
		FormsModule
	],
	providers: [interceptorProvider],
	bootstrap: [AppComponent]
})
export class AppModule { }
