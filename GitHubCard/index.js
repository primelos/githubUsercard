/* Step 1: using axios, send a GET request to the following URL 
           (replacing the place holder with your Github name):
           https://api.github.com/users/<your name>
*/
let cards = document.querySelector('.cards')
let apiCall = `https://api.github.com/users/primelos`


axios.get(apiCall)
  .then(res => {
    console.log(res.data)
    let myObj = res.data;
    console.log(`prop check`, myObj)
    cards.appendChild(myCard(myObj))
        
  })
  .catch(error => {
    console.log(`No git users here`, error)
  })

  


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
let apiAll = `https://api.github.com/users/primelos/followers`
let followersArray = [];
let mem;

axios.get(apiAll)
  .then(response => {
    console.log(`inCOMING`,response.data)
    followersArray = [...response.data];
    console.log(`followers`, followersArray)

    followersArray.forEach(member => {
       mem = member.login
      console.log(mem)
      axios.get(`https://api.github.com/users/${mem}`)
        .then(myTeam =>{
          let newInfo = myTeam.data;
          console.log(`prop check`, newInfo)
          cards.appendChild(myCard(newInfo))
        })
      // let memArray = [...mem]
      // console.log(`newCall`,memArray)
      // cards.appendChild(myCard(member))
    })
  })
  .catch(err => {
    console.log(`No git users here`, err)
  })//END CATCH  ERROR

  // mem.forEach(i =>{
  // let allInfo = `https://api.github.com/users/${i}`
  // axios.get(allInfo)
  //   .then(response => {
  //     console.log(`userNames`,response.data)
      
  //     })
  //   })
  //   .catch(err => {
  //     console.log(`No git users here`, err)
    // }) 
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

          
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function myCard (items){
  console.log(`prop check`, items)
  let 
  divCard = document.createElement('div'),
  image = document.createElement('img'),//done
  divInfo = document.createElement('div'),
  nameTitle = document.createElement('h3'),//done
  userName = document.createElement('p'),//done
  loc = document.createElement('p'),//done
  prof =document.createElement('p'),
  aLink = document.createElement('a'),
  uFollow = document.createElement('p'),
  iFollow = document.createElement('p'),
  bio = document.createElement('p')

  divCard.classList.add('card');
  divInfo.classList.add('card-info');
  nameTitle.classList.add('name');

  image.src = items.avatar_url;
  nameTitle.textContent = `Name: ${items.name}`;
  userName.textContent = `Alias: ${items.login}`;
  loc.textContent = `Located in: ${items.location}`;
  aLink.textContent = `My Git: ${items.html_url}`;
  uFollow.textContent = `Followers: ${items.followers}`;
  iFollow.textContent = `Following: ${items.following}`;
  bio.textContent = `What I do: ${items.bio}`;

  divCard.appendChild(image);
  divCard.appendChild(divInfo);
  divInfo.appendChild(nameTitle);
  divInfo.appendChild(userName);
  divInfo.appendChild(loc);
  divInfo.appendChild(prof);
  prof.appendChild(aLink);
  divInfo.appendChild(uFollow);
  divInfo.appendChild(iFollow);
  divInfo.appendChild(bio);

  


  return divCard
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
