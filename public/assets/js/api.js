L_B_TRAVELADVISORY = 'https://www.travel-advisory.info/api?'


//Coronavirus API
const unirest = require("unirest");

const req = unirest("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");
const reqTwo = unirest("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php");
const reqThree = unirest("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/usastates.php")

req.headers({
  "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
  "x-rapidapi-key": "00660ae8c6msh0c7077bcf362203p13d109jsn8904a4da5f5d"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);
