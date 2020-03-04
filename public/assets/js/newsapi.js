

//News api articles
fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f7435c3676b34c89bdb1562b6cac0849`)
.then(r => r.json())
.then(({articles}) => {
  
  document.getElementById('carouselImg0').innerHTML = `
  <img style="width: 100%;" src="${articles[0].urlToImage}">
  `
  document.getElementById('carouselContent0').innerHTML = `
  <h4>${articles[0].title}</h4>
  <p>${articles[0].description}</p>
  `
  document.getElementById('carouselImg1').innerHTML = `
  <img style="width: 100%;" src="${articles[1].urlToImage}">
  `
  document.getElementById('carouselContent1').innerHTML = `
  <h4>${articles[1].title}</h4>
  <p>${articles[1].description}</p>
  `
  document.getElementById('carouselImg2').innerHTML = `
  <img style="width: 100%;" src="${articles[2].urlToImage}">
  `
  document.getElementById('carouselContent2').innerHTML = `
  <h4>${articles[2].title}</h4>
  <p>${articles[2].description}</p>
  `
  document.getElementById('carouselImg3').innerHTML = `
  <img style="width: 100%;" src="${articles[3].urlToImage}">
  `
  document.getElementById('carouselContent3').innerHTML = `
  <h4>${articles[3].title}</h4>
  <p>${articles[3].description}</p>
  `
})


fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`)
  .then(r => r.json())
  .then( (data) => {
    console.log(data);
  })
  .catch(e => console.error(e))
