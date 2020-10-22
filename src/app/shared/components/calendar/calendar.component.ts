import { AfterViewInit, Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements AfterViewInit{
  @Input() inputDate: HTMLInputElement;
  @Output() selectDate = new EventEmitter<any>();

  DAYS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

  MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  date = new Date().getDate();
  year = new Date().getFullYear();
  month = new Date().getMonth();
  monthActive = new Date().getMonth();

  TODAY = new Date().getDate();
  YEAR = new Date().getFullYear();
  MONTH = new Date().getMonth();
  ANO_BISSEXTO = this.anoBissexto(this.year);
  DAYS_TABLE = [];

  constructor(private renderer: Renderer2) {
    this.create()
  }

  create(month?, year?) {
    const date = new Date();
    if (month) date.setMonth(month);
    if (year) date.setFullYear(year);
    date.setDate(1);

    const day = date.getDay();

    this.DAYS_TABLE = Array(day).fill('•').concat(
      Array(this.diaMesValidacao(date.getMonth() + 1)).fill(1)
        .map((_, n) => n + _))
      .concat(Array(15).fill('•')).slice(0, (day > 4 ? 42 : 35));
  }

  reset(number) {
    const reset: number = new Date().setDate(this.TODAY + number);
    const date: Date = new Date(reset);

    const result: number[] = new Date(reset)
      .toJSON().slice(0, 10).split('-').reverse()
      .map((i, n) => n % 2 == 1 ? Number(i) - 1 : Number(i));

    this.monthActive, this.month = result[1];
    this.date = result[0];

    this.create(result[1], result[2]);

    this.selectDate.emit(date);
    if (this.inputDate) {
      this.inputView(date);
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
    this.date = day;

    if (this.inputDate) {
      this.inputView(date);
    }
  }

  inputView(date) {
    this.inputDate.value = date.toJSON().slice(0, 10).split('-').reverse().join('/');
    this.inputDate.click();
  }

  ngAfterViewInit() {
    if (this.inputDate) {
      // this.inputDate.readOnly = true
    }
  }

  diaMesValidacao(x) {
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

  anoBissexto(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

}
