// pulls the axios cdn and localStorage off of the window object (not needed to do but a good practice)
const { axios, localStorage } = window

// declaring global variables for tracking the values of userid and username throughout all logic (grabbing their initial value from the value in local storage)
let uid = localStorage.getItem('uid')
let uname = localStorage.getItem('uname')



// function to create a new user
const createUser = () => {
 // console.log('axios call:',axios)
   insertObj = 
  {
    // grabbing the value of the username text input to pass in the request body
    email:        'JB@diamondsFE3.com', //document.getElementById('username').value
    wholename:    'James Bond3',
    gender:       'male',
    age_range:    '50',
    country:      'us',
    emailList:    true
  }
  //insertObj.email = emailInput
    // Ajax request hitting the POST route defined in our userRoutes.js
    axios.post('/api/users',insertObj //{
      // grabbing the value of the username text input to pass in the request body
    //   email:        'JB@diamondsFE.com', //document.getElementById('username').value
    //   wholename:    'James Bond',
    //   gender:       'male',
    //   age_range:    '50',
    //   country:      'us',
    //   emailList:    true
    // }
    )
    .then(console.log('**axios call made ok**'))
    .catch(e => console.log('error from call', e))

    //.catch(e => console.error(e))
  }
  


  console.log('Hello worlda')
  document.getElementById('submitEmail').addEventListener('click', event => {
   event.preventDefault()
   
   console.log('email: ',    document.getElementById('inputEmail3').value)
   console.log('inputName: ',document.getElementById('inputName').value)
   console.log('male: ',    document.getElementById('male').checked)
   console.log('female: ',  document.getElementById('female').checked)
   console.log('age: ',     document.getElementById('age').value)
   console.log('gridRadios1: ',document.getElementById('gridRadios1').checked)
   console.log('gridRadios2: ',document.getElementById('gridRadios2').checked)
   console.log('gridRadios3: ',document.getElementById('gridRadios3').checked)
   console.log('gridRadios4: ',document.getElementById('gridRadios4').checked)
   console.log('age: ',document.getElementById('age').value)
   console.log('age: ',document.getElementById('age').value)
   console.log('age: ',document.getElementById('age').value)

   //createUser()
   //console.clear()
   createUser()
   console.log(event.target)
   console.log('Hi2b')
})
console.log('Hello world2b')

