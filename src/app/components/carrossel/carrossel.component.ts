import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';



@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit, OnDestroy {

    // Guarda a referência do temporizador.
   // Assim conseguimos interromper o temporizador
  // a qualquer momento
  timerSubs!: Subscription;

    // Array com a URL das imagens que serão exibidas
   // no carrossel
  @Input() photoCover: string[] = [];

  // Guarda a posição no array "photoCover" que
  // corresponde a imagem que está sendo exibida
  // no carrossel
  private _indexImagemAtiva: number = 0;
  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva =
      value < this.photoCover.length ? value : 0;
  }

  constructor() { }

  ngOnInit(): void {
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

}

