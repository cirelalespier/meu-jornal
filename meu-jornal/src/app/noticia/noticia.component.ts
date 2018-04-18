import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticias: string[] = ["Noticia1", "Noticia2","Noticia3","Noticia4"];

  constructor() { }

  ngOnInit() {
  }

}
