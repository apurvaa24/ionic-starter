import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class HomePage {
 selectedDate: string='';
  today: string='';
  yesterday: string = '';
  tenDaysAgo: string = '';
  oneYearAgo: string = '';
  minDate: string = '';
  maxDate: string = '';
  submitted: boolean = false;
  minDateIon: any = new Date().toISOString();

 year: any = (new Date()).getFullYear() + 5;


  constructor() { }

  ngOnInit() {
  
  }

  formatDate(date: Date): string {
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .split("T")[0];
  }

  onDateSelect(event: Event) {
 this.selectedDate = (event.target as HTMLInputElement).value;
}

  onSubmit() {
    this.submitted = true;
      let currentDate = new Date();
    this.today = this.formatDate(currentDate);
    currentDate.setDate(currentDate.getDate() - 1);
    this.yesterday = this.formatDate(currentDate);
    let selectedDateNow = new Date(this.selectedDate);

    currentDate.setDate(selectedDateNow.getDate() - 11);
    this.tenDaysAgo = this.formatDate(currentDate);
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    this.oneYearAgo = this.formatDate(currentDate);
    this.minDate = this.formatDate(new Date());
    currentDate.setFullYear(currentDate.getFullYear() + 5);

    this.maxDate = this.formatDate(currentDate);
  }
}