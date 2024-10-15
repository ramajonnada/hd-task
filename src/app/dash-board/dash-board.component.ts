import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompanyService } from '../company.service';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../_/services/form-data.service';
import { forkJoin } from 'rxjs';
import { FormGroup } from '@angular/forms';

export interface Employees {
  year: number;
  id: number;
  name: string;
  experience: number;
  skills: string[];
}

export interface CompanyData {
  company: {
    id: number;
    name: string;
    employees: Employees[];
  };
}

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [MatToolbarModule, HighchartsChartModule, CommonModule],

  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss',
})
export class DashBoardComponent {
  highcharts = Highcharts;
  graphChartOptions!: any;
  skillsChartOptions!: any;
  experienceChartOptions!: any;

  companyData!: CompanyData;
  formData!: { step: string; stepFromData: FormGroup }[];
  constructor(
    private _companyService: CompanyService,
    private _formDataService: FormDataService
  ) {}

  ngOnInit() {
    this._fetchInnitialData();
  }

  private _fetchInnitialData() {
    this.formData = this._formDataService.getFormData();
    const $req1 = this._companyService.getCompanyData();
    $req1.subscribe((companyData) => {
      this.companyData = companyData;
      if (companyData) {
        this._createChartForEmployeesPerYear();
        this._createExperienceChart();
      }
    });
  }

  private _createExperienceChart() {
    let experienceCounts = {
      '>3': 0,
      '4-7': 0,
      '8+': 0,
    };

    this.companyData.company.employees.forEach((employee) => {
      if (employee.experience <= 3) {
        experienceCounts['>3']++;
      } else if (employee.experience >= 4 && employee.experience <= 7) {
        experienceCounts['4-7']++;
      } else if (employee.experience > 7) {
        experienceCounts['8+']++;
      }
    });

    // Create the pie chart
    this.experienceChartOptions = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Employee Experience Distribution',
      },
      series: [
        {
          name: 'Employees',
          colorByPoint: true,
          data: [
            {
              name: '1-3 years',
              y: experienceCounts['>3'],
            },
            {
              name: '4-7 years',
              y: experienceCounts['4-7'],
            },
            {
              name: 'Above 7 years',
              y: experienceCounts['8+'],
            },
          ],
        },
      ],
    };
  }
  // Prepare data for experience chart

  private _createChartForEmployeesPerYear(): void {
    const years = [2019, 2020, 2021, 2022, 2023];
    this.graphChartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Total Employees per Year',
      },
      xAxis: {
        categories: years,
        title: {
          text: 'Year',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Employees',
        },
      },
      series: [
        {
          name: 'Employees',
          data: years.map((year) => {
            const filteredEmployees = this.companyData.company.employees.filter(
              (e) => {
                return e.year === year;
              }
            );
            return filteredEmployees.length;
          }),
        },
      ],
    };
  }
}
