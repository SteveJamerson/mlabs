import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent{
  @Input() inputDate: HTMLInputElement;
  @Output() selectDate = new EventEmitter<any>();

  DAYS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
  MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  DATE_BASE = new Date();

  date = this.DATE_BASE.getDate();
  year = this.DATE_BASE.getFullYear();
  month = this.DATE_BASE.getMonth();
  dateActive = this.DATE_BASE.getDate();
  monthActive = this.DATE_BASE.getMonth();

  TODAY = this.DATE_BASE.getDate();
  YEAR = this.DATE_BASE.getFullYear();
  MONTH = this.DATE_BASE.getMonth();
  ANO_BISSEXTO = this.bissexto(this.year);
  DAYS_TABLE = [];

  constructor() {
    this.create();
  }

  create(month?, year?) {
    //DATE DE HOJE
    const date = new Date();
    if (month) date.setMonth(month);
    if (year) date.setFullYear(year);

    //SETANDO DIA 1º PARA VERIFICAR INICIO DO MES, EXEMPLO SEXTA = 5
    date.setDate(1);
    const day = date.getDay();

    //GERANDO UM ARRAY COM OS DIAS EM SEQUENCIA CORRETA
    const diasIniciais = Array(6).fill(1).map((d, n) => `${d+n}`);
    let diasFinais = Array(9).fill(23).map((d, n) => `${d+n}`).reverse();
    const indice = diasFinais.indexOf(`${this.valid(date.getMonth())}`);
    diasFinais = diasFinais.slice(indice, indice + day).reverse();

    this.DAYS_TABLE = diasFinais.concat(
      Array(this.valid(date.getMonth() + 1)).fill(1)
        .map((_, n) => n + _))
      .concat(diasIniciais).slice(0, (day > 4 ? 42 : 35));
  }

  reset(number) {
    //ONTEM, HOJE OU AMANHÃ

    //SETANDO A DATA QUE DESEJA
    const reset: number = new Date().setDate(this.TODAY + number);

    //CRIANDO A DATA DESEJADA
    const date: Date = new Date(reset);


    //O MES, VEM COM +1 QUANDO UTILIZA TOJSON(), OU SEJA, OUTUBRO É 9, NÃO 10;
    const result: number[] = new Date(reset)
      .toJSON().slice(0, 10).split('-').reverse()
      .map((i, n) => n % 2 == 1 ? Number(i) - 1 : Number(i));

    //RESETANDO AS VARIAVEIS
    this.monthActive, this.month = result[1];
    this.dateActive = result[0];

    //CRIANDO NOVO CALENDARIO
    this.create(result[1], result[2]);

    //EMITINDO VALOR
    this.selectDate.emit(date);
    if (this.inputDate) {
      this.setValue(date);
    }
  }

  change(m) {
    var month = this.month + m;
    var year = this.year;
    if (month == 12) {
      month = 0;
      year = year + 1;
    };
    if (month == -1) {
      month = 11;
      year = year - 1;
    };
    this.month = month;
    this.year = year;
    this.create(month, year);
  }

  select(day) {
    const date = new Date()
    date.setDate(day);
    date.setMonth(this.month);
    date.setFullYear(this.year);

    this.selectDate.emit(date);
    this.monthActive = this.month;
    this.dateActive = day;

    if (this.inputDate) {
      this.setValue(date);
    }
  }

  setValue(date) {
    this.inputDate.value = date.toJSON().slice(0, 10).split('-').reverse().join('/');
    this.inputDate.click();
  }

  type(dt) {
    return typeof dt == 'number';
  }

  valid(x) {
    const restoMes = x % 2;
    if (x == 2 && !this.ANO_BISSEXTO) return 29
    else if (x == 2) return 28
    else if (x <= 7)
      if (restoMes == 1) return 31
      else return 30
    else if (x >= 8) {
      if (restoMes == 1) return 30
      else return 31
    }
  }

  bissexto(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

}
