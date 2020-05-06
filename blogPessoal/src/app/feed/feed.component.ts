import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data';
  reverse = true;

  // estanciando a class postagem 
  /* estancia/chama a class postagem para 
  saber quais são os dados, os campos e atributos
  que serão necessários. */
  listaPostagens: Postagem[];
  postagem: Postagem = new Postagem;


  alerta: boolean = false;
  // importando os módulos
  /* importar todos os módulos, essa importação,
  é chamada de injeção de depêndencia  */
  constructor(private postagemService: PostagemService) { }

  // ngOnInit(): void {
  // }
  /* ngOnInit() >> é um método que todos os códigos que estiverem dentro dele serão carregados,
  quando a aplicação for iniciada.  */

  ngOnInit() {
    this.findAllPostagens();

    window.scroll(0, 0);

    let item: string = localStorage.getItem('delOk');


    if (item == "true") {
      this.alerta = true;
      localStorage.clear();

      setTimeout(() => {
        location.assign('/feed');
      }, 3000);
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
      location.assign('/feed');
    });
  }

}

