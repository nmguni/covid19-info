// var covidURL = "https://pomber.github.io/covid19/timeseries.json";
// var addedlineCountries = ["China", "India", "Italy", "United Kingdom", "US", "Spain", "France"];
// var addedbarCountries = ["China", "India", "Italy", "United Kingdom", "US", "Spain", "France"];

const covidDataBaseURL =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series";

const api_url = "https://pomber.github.io/covid19/timeseries.json";
async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  // CANADA --------------
  let dates = [];
  let confirm = [];
  let recover = [];
  let death = [];
  data["Canada"].forEach(
    ({ date, confirmed, recovered, deaths }) => (
      dates.push(date),
      confirm.push(confirmed),
      recover.push(recovered),
      death.push(deaths)
    )
  );

  //   deaths -------------
  //   let death = [];
  //   data["Canada"].forEach(({ date, confirmed, recovered, deaths }) =>
  //     death.push(deaths)
  //   );
  //   //   const { Canada, US, China, Italy } = data;

  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Canada",
          data: confirm,
          backgroundColor: ["rgba(255, 255, 255, 0.5)"],
          borderColor: ["red"],
          borderWidth: 1
        },
        {
          label: "Recoverd",
          data: recover,

          backgroundColor: ["rgba(255, 255, 255, 0.5)"],

          borderColor: ["blue"],
          borderWidth: 1
        },
        {
          label: "Deaths",
          data: death,

          backgroundColor: ["rgba(255, 255, 255, 0.5)"],

          borderColor: ["blue"],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}
getData();
