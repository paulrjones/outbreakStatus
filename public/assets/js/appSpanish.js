fetch('http://newsapi.org/v2/top-headlines?q=coronavirus&sortBy=publishedAt&language=es&apiKey=f7435c3676b34c89bdb1562b6cac0849')
    .then(r => r.json())
    .then(({articles}) => {
      console.log(articles)
      document.getElementById('newsTitle0').innerHTML = `
        <h4>${articles[0].title}</h4>
      `
      document.getElementById('newsBody0').innerHTML = `
        <p>${articles[0].description}</p>
      `
      document.getElementById('newsTitle1').innerHTML = `
        <h4>${articles[1].title}</h4>
      `
      document.getElementById('newsBody1').innerHTML = `
        <p>${articles[1].description}</p>
      `
      document.getElementById('newsTitle2').innerHTML = `
        <h4>${articles[2].title}</h4>
      `
      document.getElementById('newsBody2').innerHTML = `
        <p>${articles[2].description}</p>
      `
    })
    .catch(e => console.error(e))