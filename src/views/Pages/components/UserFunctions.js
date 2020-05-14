import axios from 'axios'

export const register = newUser => {
  return axios
    .post("https://chingphaow-application.herokuapp.com/users/register", {
      role:newUser.role,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      staff_phone : newUser.staff_phone,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post("https://chingphaow-application.herokuapp.com/users/login", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}