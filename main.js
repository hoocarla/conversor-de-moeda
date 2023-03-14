const options = {
    //dados do grafico
    series: [
      {
        name: "cambio",
        data: [
          {
            x: new Date("2018-02-12").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-13").getTime(),
            y: 5.3,
          },
          {
            x: new Date("2018-02-14").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-15").getTime(),
            y: 5.11,
          },
          {
            x: new Date("2018-02-16").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-17").getTime(),
            y: 5.25,
          },
          {
            x: new Date("2018-02-18").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-19").getTime(),
            y: 5.2,
          },
        ],
      },
    ],
    //configurações do tipo do grafico,tamanho..
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    //os numeros na ponto do grafico
    dataLabels: {
      enabled: true,
    },
    //tipo da linha
    stroke: {
      curve: "straight",
    },
    //numeros da vertical do grafico
    yaxis: {
      min: 5,
      tickAmount: 4,
      labels: {
        formatter: (value) => {
          return value.toFixed(1).replace('.', ',')
        },
      },
    },
    //base do grafico
    xaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      axisTicks: {
        show: false,
      },
    },
    //preenchimento da cot do grafico
    fill: {
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    colors: ["#D943CF"],
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<div class="tooltip">
      <span>${String(series[seriesIndex][dataPointIndex]).replace('.', ',')}</span>
      <span>${new Date(
        w.globals.seriesX[seriesIndex][dataPointIndex]
      ).toLocaleDateString("pt-BR", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })}</span>
      </div>`
      },
    },
  }

  //criar e aplicar o grafico
  const chart = new ApexCharts(document.querySelector("#chart"), options) //qual seletor do html quero selecionar.
  chart.render()