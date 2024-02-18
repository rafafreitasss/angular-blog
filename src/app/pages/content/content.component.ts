import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  timerSubs!: Subscription;

  photoCover: string[] = [];
  highQualityPhoto: string[] = [];
  zoom:boolean = false;
  photo:boolean = true;
  contentTitle:string = ''
  contentDescription:string = ''
  link:string=''

  openHighQualityView() {
    this.photo = false
    
  }

  closeFullHd() {
    this.photo = true
  }


  private id:string | null = '0'

  private _indexImagemAtiva: number = 0;
  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    if(this.photo === true) {
      this._indexImagemAtiva =
      value < this.photoCover.length ? value : 0;
    }else if(this.photo === false) {
      this._indexImagemAtiva =
      value < this.highQualityPhoto.length ? value : 0;
    }
  }

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)

    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(100000).subscribe(() => {
      this.ativarImagem(
        this.indexImagemAtiva + 1
      );
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.highQualityPhoto = result.highQualityPhoto
    this.link = result.link
  }

}
