import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompanyService } from '../company.service';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { ChartOptions } from 'highcharts/highcharts.src';


export interface CompanyData{
  id: number,
  name: string,
  employees_per_year: {
    year: number,
    employees:[]
  }[]
}
  

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [MatToolbarModule, HighchartsChartModule],

  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss',
})
export class DashBoardComponent {
  highcharts = Highcharts;
  chartOptions!: any;
  companyData!: CompanyData;
  constructor(private _companyService: CompanyService) {}

  ngOnInit() {
    this._companyService.getCompanyData().subscribe((e) => {
      this.companyData = e;
      console.log(e);
      // this.createChartForEmployeesPerYear();
    });
  }

  // calculateTotalEmployeesPerYear(
  //   employees: any[]
  // ): { year: string; count: number }[] {
  //   const employeesPerYear: { [key: string]: number } = {};

  //   // Count employees per year
  //   employees.forEach((employee) => {
  //     const year = new Date().getFullYear(); // Replace with your actual year logic
  //     if (!employeesPerYear[year]) {
  //       employeesPerYear[year] = 0;
  //     }
  //     employeesPerYear[year]++;
  //   });

  //   // Convert to an array of objects
  //   return Object.keys(employeesPerYear).map((year) => ({
  //     year,
  //     count: employeesPerYear[year],
  //   }));
  // }

  // createChartForEmployeesPerYear(
  //   data: { year: string; count: number }[]
  // ): void {
  //   this.chartOptions =
  //   // {
  //   //   chart: {
  //   //     type: 'column',
  //   //   },
  //   //   title: {
  //   //     text: 'Total Employees per Year',
  //   //   },
  //   //   xAxis: {
  //   //     categories: data.map((d) => d.year),
  //   //     title: {
  //   //       text: 'Year',
  //   //     },
  //   //   },
  //   //   yAxis: {
  //   //     min: 0,
  //   //     title: {
  //   //       text: 'Total Employees',
  //   //     },
  //   //   },
  //   //   series: [
  //   //     {
  //   //       name: 'Employees',
  //   //       data: data.map((d) => d.count),
  //   //     },
  //   //   ],
  //   // };
  //   this.chartOptions = this.companyData.
  // }
}
