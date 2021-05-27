import User from './components/user'
import './App.css'

function App() {
  return (
    <div className='header'>
      <p>Topset React Developer Intern Interview Prompt</p>
      <User />
    </div>
  );
}

export default App;
// MY LAPTOP SPEAKER IS FAULTY SO I WILL BE LEAVING COMMENTS AS I CODE
// I WILL ALSO BE EXPLAINING MY DECISIONS AND ALTERNATIVES VIA COMMENTS
//I HAVE CLONED THE REPO
//I SAW THAT THE TASK REQUIRES MAKING A REQUEST TO AN API 
// THE REQUEST COULD BE MADE USING THE IN BUILT FETCH API
// BUT I CHOSE TO USE AXIOS, BECAUSE ITS MORE FLEXIBLE THAN FETCH API
// EVEN THOUGH WE ARE NOT GOING TO BE MAKING ANY COMPLICATED REQUEST
// I HAVE ALSO INSTALLED AXIOS
// DEV SERVER IS RUNNING ON PORT 3000
// TASK REQUIRES A USER PROFILE WITH SOME COMPULSORY DETAILS
// LETS START BY CREATING THE USER COMPONENT
// Lets check out the api
// apparently making a request without specifying a number of users, 
// returns an array of only one user and that is what we want, 
// a single user
// I don't like to complicate my components with api requests so I always have folder
// called services, that takes care of talking to a backend or external api