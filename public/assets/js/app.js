fetch('http://newsapi.org/v2/top-headlines?q=coronavirus&from=2020-02-04&sortBy=publishedAt&language=en&apiKey=f7435c3676b34c89bdb1562b6cac0849')
    .then(r => r.json())
    .then(response => {
      console.log(response)
    })
    .catch(e => console.error(e))

