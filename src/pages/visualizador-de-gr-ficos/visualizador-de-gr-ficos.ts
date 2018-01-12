
import { ChartsModule } from 'ng2-charts';
import { Component, ViewChild } from '@angular/core';
import { AlertController,
  IonicPage,
  NavController,
  NavParams,
  Platform } from 'ionic-angular';

  import { Chart } from 'chart.js';

  @Component({
    selector: 'page-visualizador-de-gr-ficos',
    templateUrl: 'visualizador-de-gr-ficos.html'
  })
  export class VisualizadorDeGrFicosPage {

    @ViewChild('lineChart') lineChart;


    public technologies              : any = {
      "technologies" : [
        {
          'technology' : '12:10 - 20/11',
          'time'       : 180,
          'color'      : 'rgba(206, 61, 95, 0.5)',
          'hover'      : 'rgba(199, 108, 129, 0.5)'
        },
        {
          'technology' : '10:20 - 22/11',
          'time'       : 140,
          'color'      : 'rgba(83, 131, 185, 0.5)',
          'hover'      : 'rgba(122, 160, 202, 0.5)'
        },
        {
          'technology' : '18:40 - 22/11',
          'time'       : 156,
          'color'      : 'rgba(83, 131, 185, 0.5)',
          'hover'      : 'rgba(122, 160, 202, 0.5)'
        },
        {
          'technology' : '19:50 - 21/11',
          'time'       : 300,
          'color'      : 'rgba(83, 131, 185, 0.5)',
          'hover'      : 'rgba(122, 160, 202, 0.5)'
        },
        {
          'technology' : '16:45 - 21:11 ',
          'time'       : 158,
          'color'      : 'rgba(83, 131, 185, 0.5)',
          'hover'      : 'rgba(122, 160, 202, 0.5)'
        },
      ]
    };

    public lineChartEl               : any;
    public chartLabels               : any    = [];
    public chartValues               : any    = [];
    public chartColours              : any    = [];
    public chartHoverColours         : any    = [];


    constructor( public navCtrl      : NavController,
      public navParams    : NavParams)
      { }




      ionViewDidLoad()
      {
        this.defineChartData();
        this.createLineChart();
      }
      /**
      *
      * Parse the JSON data, push specific keys into selected arrays for use with
      * each chart
      *
      */
      defineChartData()
      {
        let k : any;

        for(k in this.technologies.technologies)
        {
          var tech  =      this.technologies.technologies[k];

          this.chartLabels.push(tech.technology);
          this.chartValues.push(tech.time);
          this.chartColours.push(tech.color);
          this.chartHoverColours.push(tech.hover);
        }
      }



      /**
      *
      * Configure the Line chart, define configuration options
      *
      */
      createLineChart()
      {
        this.lineChartEl 			= new Chart(this.lineChart.nativeElement,
          {
            type: 'line',
            data: {
              labels: this.chartLabels,
              datasets: [{
                label                 : 'Nivel de Glicemia',
                data                  : this.chartValues,
                duration              : 2000,
                easing                : 'easeInQuart',
                backgroundColor       : this.chartColours,
                hoverBackgroundColor  : this.chartHoverColours,
                fill 				   : true  //(TRUE/FAlse) para ver ou não colorido
              }]                       //abaixo da linha do grafico
            },
            options : {
              maintainAspectRatio: false,
              legend         : {
                display     : true,
                boxWidth    : 100,
                fontSize    : 13,
                padding     : 0
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero:true,
                    stepSize: 50,
                    max : 500
                  }
                }],
                xAxes: [{
                  ticks: {
                    autoSkip: false
                  }
                }]
              }
            }
          });
        }



      }
