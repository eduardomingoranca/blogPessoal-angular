import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

// criando rotas
// path --> endereço de acesso
// component --> componente de acesso de onde ele vem, ou seja, de qual pastá ele está
const routes: Routes = [
  // objetos de rotas
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // quando o path for vazio ele redireciona todo o conteúdo para a página home
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'deletar/:id', component: DeletarComponent },
  { path: 'lista-post', component: ListaPostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
