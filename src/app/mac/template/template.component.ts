import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    BaseChartDirective,
    SidebarComponent,
    HeaderComponent,

    CommonModule,
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent implements AfterViewInit {
  tickColor!: string;
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  ngAfterViewInit(): void {
    this.createGradient();
  }
  ngOnInit(): void {
    this.tickColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--text-primary-color')
      .trim();
  }

  changeTheme() {}
  close = true;
  openSidebar(event: boolean) {
    this.close = event;
  }
  blur() {
    this.close = true;
  }
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Ag',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [30, 10, 30, 40, 30, 40, 30, 23, 30, 40, 25, 10],
        label: 'Users',
        fill: true, // Esto agrega el área debajo de la línea
        tension: 0.4, // Hace la línea suave
        borderColor: '#AF52DE',

        pointBackgroundColor: '#fff',
        pointBorderColor: '#000',
        borderWidth: 2,
      },
    ],
  };

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Smaphone',
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          'rgba(0, 0, 0, 0.1)', // Color de la primera barra
          '#36A2EB', // Color de la segunda barra
          '#FFCE56', // Color de la tercera barra
          '#4BC0C0', // Color de la cuarta barra
          '#9966FF', // Color de la quinta barra
        ],
        borderColor: [
          'rgba(0, 0, 0, 0.1)', // Borde de la primera barra
          '#36A2EB', // Borde de la segunda barra
          '#FFCE56', // Borde de la tercera barra
          '#4BC0C0', // Borde de la cuarta barra
          '#9966FF', // Borde de la quinta barra
        ],
        borderWidth: 1, // Ancho del borde
        borderRadius: 20,

        // Bordes redondeados para las barras
        hoverBackgroundColor: '#FF6384', // Color al hacer hover
        hoverBorderColor: '#FF6384', // Color del borde al hacer hover
        hoverBorderWidth: 3, // Ancho del borde al hacer hover
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        ticks: { color: this.tickColor },
        grid: {
          display: false, // Esto quita las líneas de la cuadrícula en el eje X
        },
        //   grid: {
        //     display: false, // Esto quita las líneas de la cuadrícula en el eje X
        //   },
        //   ticks: {
        //     display: false, // Esto quita los números en el eje X
        //   },
      },
      y: {
        display: false,
        // grid: {
        //   display: false, // Esto quita las líneas de la cuadrícula en el eje Y
        // },
        // ticks: {
        //   display: false, // Esto quita los números en el eje Y
        // },
      },
    },
  };

  // public lineChartData: ChartConfiguration<'line'>['data'] = {
  //   labels: [
  //     'Jan',
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     'Feb',
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     'Mar',
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     'Apr',
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     'May',
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     'Jun',
  //   ],
  //   datasets: [
  //     {
  //       data: [
  //         // Enero: Comienza alto, baja, sube, baja
  //         40, 45, 45, 45, 50, 45,
  //         // Febrero: Comienza bajo, sube, baja, sube
  //         40, 45, 45, 60, 40, 45,
  //         // Marzo: Comienza alto, baja, sube, baja
  //         60, 64, 65, 70, 75, 60,
  //         // Abril: Comienza bajo, sube, baja, sube
  //         30, 40, 35, 45, 38, 50,
  //         // Mayo: Comienza alto, baja, sube, baja
  //         70, 65, 75, 60, 80, 55,
  //         // Junio: Comienza bajo, sube, baja, sube
  //         50, 60, 55, 65, 58, 70,
  //       ],
  //       label: 'Users',
  //       fill: true, // Esto agrega el área debajo de la línea
  //       tension: 0.3, // Hace la línea suave
  //       borderColor: '#AF52DE',
  //       pointBackgroundColor: (context) => {
  //         const index = context.dataIndex;
  //         const monthStartIndices = [0, 6, 12, 18, 24, 30]; // Índices correspondientes al primer dato de cada mes
  //         return monthStartIndices.includes(index)
  //           ? '#fff'
  //           : 'rgba(0, 0, 0, 0)';
  //       },
  //       pointBorderColor: (context) => {
  //         const index = context.dataIndex;
  //         const monthStartIndices = [0, 6, 12, 18, 24, 30];
  //         return monthStartIndices.includes(index)
  //           ? '#000'
  //           : 'rgba(0, 0, 0, 0)';
  //       },
  //       borderWidth: 2,
  //     },
  //   ],
  // };

  private createGradient() {
    const canvas = this.chart?.chart?.canvas;
    const ctx = canvas?.getContext('2d');

    if (ctx && canvas) {
      const gradient = ctx.createLinearGradient(0, -100, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(175, 82, 222,0.3)');
      gradient.addColorStop(1, 'transparent');

      // Asigna el gradiente al backgroundColor del dataset
      if (this.lineChartData.datasets[0]) {
        this.lineChartData.datasets[0].backgroundColor = gradient;
      }

      this.chart.update();
    }
  }
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false, // Desactiva la relación de aspecto para mayor flexibilidad
    scales: {
      x: {
        ticks: { color: this.tickColor },

        grid: { lineWidth: 1 },
        // grid: {
        //   color: (context) => {
        //     const chart = context.chart;
        //     const { ctx, chartArea, scales } = chart;

        //     if (!chartArea) {
        //       return undefined;
        //     }

        //     // Crear el degradado dinámico según la posición de los puntos de datos
        //     const gradient = ctx.createLinearGradient(
        //       0,
        //       chartArea.bottom,
        //       0,
        //       chartArea.top
        //     );

        //     const dataset = chart.data.datasets[0].data as number[];
        //     const pixelValues = dataset.map((value) =>
        //       scales['y'].getPixelForValue(value)
        //     );

        //     // Aplicar el degradado dependiendo de los valores de los puntos
        //     pixelValues.forEach((pixel, index) => {
        //       const relativePosition =
        //         (pixel - chartArea.top) / chartArea.height;
        //       const transparency = relativePosition > 0.5 ? 0 : 0.3; // Mayor transparencia a medida que sube
        //       gradient.addColorStop(
        //         relativePosition,
        //         `rgba(175, 82, 222, ${transparency})`
        //       );
        //     });

        //     return gradient;
        //   },
        //   lineWidth: 1, // Grosor de las líneas de la cuadrícula
        // },
      },
      y: {
        ticks: { color: '#ccc' },
        beginAtZero: true,
        display: false,
        grid: {
          color: (context) => {
            const value = context.tick.value;
            // Mostrar líneas de cuadrícula solo en el rango visible del degradado
            return value >= 25 && value <= 46 ? '#D3D3D3' : 'rgba(0,0,0,0)';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: { font: { family: 'Inter' } },
      },
    },
  };

  public lineChartLegend = false;
}
