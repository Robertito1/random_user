// we nee axios
import axios from 'axios'
// we also need the url
import Api from '../config/Urls'

const userService = () =>{
  return axios.get(Api.url)
}

// I usually will use module.export if I was making other requests here
export default userService