import { Component } from '@angular/core';
/* Declaração da variável audio */
let audio = new Audio();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'bier';
  /* Dados da tabela */
  data=[
    {
      id:'1',
      name:'Victor Hugo Bier Silva',
      ru:'3529473',
      date:'10/06/2001',
      curso:'Análise e Desenvolvimento de Sistemas'
    },
    {
      id:'2',
      name:'Vinicius',
      ru:'3529474',
      date:'01/01/2000',
      curso:'Segurança da Informação'
    },
    {
      id:'3',
      name:'Sergio',
      ru:'3529475',
      date:'02/01/2000',
      curso:'Ciências da Computação'
    },
    {
      id:'4',
      name:'Juarez',
      ru:'3529476',
      date:'03/01/2000',
      curso:'Engenharia de Software'
    },
    {
      id:'5',
      name:'Isaias',
      ru:'3529477',
      date:'04/01/2000',
      curso:'Desenvolvimento Web'
    },

  ]

  /* Funções para executar e pausar a música */
  playSound() {    
      audio.src = "./assets/music.wav";
      audio.play();
  }

  pauseSound() {
    audio.pause();
  }
}