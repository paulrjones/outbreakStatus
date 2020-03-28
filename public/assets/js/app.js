import scrapeProject from './scrapers'
// english fetch Request


fetch(
  "https://newsapi.org/v2/top-headlines?q=coronavirus&sortBy=publishedAt&language=en&apiKey=f7435c3676b34c89bdb1562b6cac0849"
)
  .then(r => r.json())
  .then(({ articles }) => {
    console.log(articles);
    document.getElementById("newsTitle0").innerHTML = `
        <h4>${articles[0].title}</h4>
      `;
    document.getElementById("newsBody0").innerHTML = `
        <p>${articles[0].description}</p>
      `;
    document.getElementById("newsTitle1").innerHTML = `
        <h4>${articles[1].title}</h4>
      `;
    document.getElementById("newsBody1").innerHTML = `
        <p>${articles[1].description}</p>
      `;
    document.getElementById("newsTitle2").innerHTML = `
        <h4>${articles[2].title}</h4>
      `;
    document.getElementById("newsBody2").innerHTML = `
        <p>${articles[2].description}</p>
      `;
  })
  .catch(e => console.error(e));

// 中文 fetch request
fetch('https://newsapi.org/v2/top-headlines?country=cn&apiKey=f7435c3676b34c89bdb1562b6cac0849')
    .then(r => r.json())
    .then(({articles}) => {
      console.log(articles)
      document.getElementById('zhnewsTitle0').innerHTML = `
        <h4>${articles[0].title}</h4>
      `
      document.getElementById('zhnewsBody0').innerHTML = `
        <p>${articles[0].description}</p>
      `
      document.getElementById('zhnewsTitle1').innerHTML = `
        <h4>${articles[1].title}</h4>
      `
      document.getElementById('zhnewsBody1').innerHTML = `
        <p>${articles[1].description}</p>
      `
      document.getElementById('zhnewsTitle2').innerHTML = `
        <h4>${articles[2].title}</h4>
      `
      document.getElementById('zhnewsBody2').innerHTML = `
        <p>${articles[2].description}</p>
      `
    })
    .catch(e => console.error(e))


// Spanish 

fetch('https://newsapi.org/v2/top-headlines?q=coronavirus&sortBy=publishedAt&language=es&apiKey=f7435c3676b34c89bdb1562b6cac0849')
    .then(r => r.json())
    .then(({articles}) => {
      console.log(articles)
      document.getElementById('esnewsTitle0').innerHTML = `
        <h4>${articles[0].title}</h4>
      `
      document.getElementById('esnewsBody0').innerHTML = `
        <p>${articles[0].description}</p>
      `
      document.getElementById('esnewsTitle1').innerHTML = `
        <h4>${articles[1].title}</h4>
      `
      document.getElementById('esnewsBody1').innerHTML = `
        <p>${articles[1].description}</p>
      `
      document.getElementById('esnewsTitle2').innerHTML = `
        <h4>${articles[2].title}</h4>
      `
      document.getElementById('esnewsBody2').innerHTML = `
        <p>${articles[2].description}</p>
      `
    })
    .catch(e => console.error(e))
// pulls the axios cdn and localStorage off of the window object (not needed to do but a good practice)
//const { localStorage } = window;

// declaring global variables for tracking the values of userid and username throughout all logic (grabbing their initial value from the value in local storage)
let uid = localStorage.getItem("uid");
let uname = localStorage.getItem("uname");

// function to create a new user
const createUser = insertObj => {
  console.log("CREATEUSER:", insertObj);
  // console.log('axios call:',axios)
  //insertObj.email = emailInput
  // Ajax request hitting the POST route defined in our userRoutes.js
  $.post(
    "/api/users",
    insertObj //{
    // grabbing the value of the username text input to pass in the request body
    //   email:        'JB@diamondsFE.com', //document.getElementById('username').value
    //   wholename:    'James Bond',
    //   gender:       'male',
    //   age_range:    '50',
    //   country:      'us',
    //   emailList:    true
    // }
  )
    .then(console.log("**axios call made ok**"))
    .catch(e => console.log("error from call", e));

  //.catch(e => console.error(e))
};

console.log("Hello worlda");
//document.getElementById('addUser').addEventListener('click', event => {
$("#addUser").on("click", event => {
  event.preventDefault();
console.log($("input[name='gridRadios']:checked").val())
  let insertObj = {
    // grabbing the value of the username text input to pass in the request body
    email: document.getElementById("inputEmail3").value,
    wholename: document.getElementById("inputName").value,
    gender: $("input[name='gender']:checked").val(),
    age_range: document.getElementById("age").value,
    country: $("input[name='gridRadios']:checked").val(),
    // countriesTraveled: document.getElementById("recentTravels").checked.value,
    emailList: $("input[name='emailList']:checked").val()
  };
console.log("object: ", insertObj)
  // insertObj.email = document.getElementById("inputEmail3").value;
  // insertObj.wholename = document.getElementById("inputName").value;
  // document.getElementById("male").checked
  //   ? (insertObj.gender = "male")
  //   : (insertObj.gender = "female");
  // insertObj.age_range = document.getElementById("age").value;
  // if (document.getElementById("gridRadios1").checked) {
  //   insertObj.country = document.getElementById("gridRadios1").value;
  // } else if (document.getElementById("gridRadios2").checked) {
  //   insertObj.country = document.getElementById("gridRadios2").value;
  // } else if (document.getElementById("gridRadios3").checked) {
  //   insertObj.country = document.getElementById("gridRadios3").value;
  // } else if (document.getElementById("gridRadios4").checked) {
  //   insertObj.country = document.getElementById("gridRadios4").value;
  // }

  console.log("insertObj: ", insertObj);
  //createUser()
  //console.clear()
  createUser(insertObj);
  console.log(event.target);
  console.log("Hi2b");
  // insertObj = '';
});
console.log("Hello world2b");

document.getElementById('checkChina').addEventListener('click', () => {
  alert('It is Corona Time, RUN AWAY!!!')
})