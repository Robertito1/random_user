import React, {useEffect, useState} from 'react'
import userService from '../services/user'
import './user.css'

// i like arrow functions
 const User = () => {

     const [user, setUser] = useState({})

     useEffect(() => {
         const getUser = async () =>{
             try {
                //  I distructured the data off of the result
                const {data} = await userService()  
                setUser({...user, ...data.results[0]} )
             } catch (error) {
                 console.log('fail', error)
             }
         }
         if(JSON.stringify(user) === "{}"){
            getUser()
         }   
     }, [user])

     const renderUser = () =>{
        if(JSON.stringify(user) === "{}"){
           return null
         } 
         return (
            <div className='user'>
                <p>Name: {user.name.title} {user.name.first} {user.name.last}</p>
                <p>Location: {user.location.state} {user.location.country}</p>
                <img src={user.picture.medium} alt='userImage' />
            </div>
        )
     }
    return (
        <div>
            {renderUser()}
        </div>
    )
}
// I prefer to export components at the bottom of the file
export default User;

// We need a useEffect hook to make requests since we are using a react functional component
// using async await inside of a useEffect hook will require you to create seperate async function
// and then call that inside the hook, unless you will have warning on your console
// try/catch block is important for error handling
// we will call the getuser function only when there is no user
// usually when making requesting to load data on a component you have to wait for the data
// otherwise you will get an error of undefined 
// I am having a slow connection
// Lets just continue developing
// lets just style for 5 mins