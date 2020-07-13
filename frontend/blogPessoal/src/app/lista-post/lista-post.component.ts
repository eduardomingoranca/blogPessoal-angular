import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  key = 'data';
  reverse = true;

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findAllPostagens();
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

}
