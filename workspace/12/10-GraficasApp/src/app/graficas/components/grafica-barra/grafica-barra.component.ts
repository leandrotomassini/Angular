import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
 
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
 
 
@Component({
    selector: 'app-grafica-barra',
    templateUrl: './grafica-barra.component.html',
})
export class GraficaBarraComponent implements OnInit {
 
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    @Input() horizontal: boolean = false;
    @Input() barChartData!: ChartData<'bar'>;
 
    constructor(){}
 
    ngOnInit(): void {
        if (this.horizontal){
            //Esto muestra la gráfica en sentido horizontal y todos los datos en ese sentido.
            this.barChartOptions!.indexAxis = 'y';
            this.barChartOptions!.scales!["y"]!.min = 0;
        }
    }
 
    public barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        scales: {
            x: {},
            y: {
                min: 10
            }
        },
        plugins: {
            legend: {
                display: true,
            },
            datalabels: {
                anchor: 'end',
                align: 'end'
            }
        }
    }
 
    public barChartType: ChartType = 'bar';
    public barChartPlugins = [
        DataLabelsPlugin
    ];
    
    public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}
 
    public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}
 
    public randomize(): void {
        // Only Change 3 values
        this.barChartData.datasets[0].data = [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)];
        this.barChartData.datasets[1].data = [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
        ];
        this.barChartData.datasets[2].data = [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
        ];
 
        this.chart?.update();
    }
}