import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = 'https://th.bing.com/th/id/R.6906a3c3137af40983ef83e4a0a2e3f3?rik=YnbezXMQblqGFg&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f09%2f51935-movies-The_Avengers-Iron_Man-Robert_Downey_Jr.-Tony_Stark.jpg&ehk=kynRhDZOsKfhGqPFUEu76fueo%2bm5dQXQqNJcp8%2f%2fUdY%3d&risl=&pid=ImgRaw&r=0'
  contentTitle:string = 'NOTÍCIA'
  contentDescription:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perferendis dolores modi corrupti soluta, doloremque facilis asperiores omnis maiores, vero placeat voluptates incidunt minima fugiat repellendus rerum. Sed, voluptatibus fuga.'

  constructor() { }

  ngOnInit(): void {
  }

}
