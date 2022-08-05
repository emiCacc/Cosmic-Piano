import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss']
})
export class TecladoComponent implements OnInit {
  ngOnInit(): void {
  }
 
  copyRight= 'Powered By Emiliano Morales';

  sonarNota(numero: number):void{
    const audio = new Audio();
    audio.src = '../assets/sounds/note' + numero + '.wav';
    audio.load();
    audio.play();
  }
}
