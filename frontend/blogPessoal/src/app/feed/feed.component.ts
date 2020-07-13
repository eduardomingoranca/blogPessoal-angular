import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  nome: string = localStorage.getItem('nome');

  key = 'data';
  reverse = true;

  // estanciando a class postagem 
  /* estancia/chama a class postagem para 
  saber quais são os dados, os campos e atributos
  que serão necessários. */
  listaPostagens: Postagem[];
  postagem: Postagem = new Postagem;


  alerta: boolean = false;
  titulo: string;
  pesquisa: boolean = false;
  // importando os módulos
  /* importar todos os módulos, essa importação,
  é chamada de injeção de depêndencia  */
  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private locationPage: Location
  ) { }

  // ngOnInit(): void {
  // }
  /* ngOnInit() >> é um método que todos os códigos que estiverem dentro dele serão carregados,
  quando a aplicação for iniciada.  */

  ngOnInit() {

    let token = localStorage.getItem('token');

    if (token == null) {
      alert('Faça o login antes de acessar a página feed');
      this.router.navigate(['/login']);
    }

    this.findAllPostagens();

    window.scroll(0, 0);

    let item: string = localStorage.getItem('delOk');


    if (item == "true") {
      this.alerta = true;
      localStorage.clear();

      setTimeout(() => {
        this.refresh();
      }, 2000);
    }

  }

  // criando um método/função
  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }
  /* findAllPostagens() >> é um método que traz todas as postagens que 
  estão registradas, ele fará isso através do postagemService. O postagemService
  irá trazer isso através do endPoint. */

  /* subscribe >> uma palavra reservada para trazer um array, e
  inserir dentro da lista de postagens. */

  /* Publicar >> método responsável por enviar a postagem no servidor */
  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.refresh();
    });
  }

  pesquisarPorTitulo() {
    this.postagemService.findByTitulo(this.titulo).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
      this.pesquisa = true;
    });
  }

  refresh() {
    this.router.navigateByUrl('/lista-post', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([this.locationPage.path()]);
      })
  }

}

