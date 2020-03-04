//Constant declaration
//L = Link
//B = Base
//K = Key
//S = Sort

L_B_NEWSAPI = 

var url = 'http://newsapi.org/v2/everything?' +
  'q=Coronavirus &' +
  'from=2020-03-04&' +
  'sortBy=popularity&' +
  'apiKey=7561e5f155d14e048633335b62c31dde';

var req = new Request(url);

fetch(req)
  .then(function (response) {
    console.log(response.json());
  })

  