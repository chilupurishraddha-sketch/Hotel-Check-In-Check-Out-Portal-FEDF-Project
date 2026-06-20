import api from './api'

// API-based auth service
export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

export const findUser = async (email, password) => {
  const users = await getUsers()
  return users.find(u => u.email === email && u.password === password)
}

export const findUserByEmail = async (email) => {
  const users = await getUsers()
  return users.find(u => u.email === email)
}

export const createUser = async (userData) => {
  const response = await api.post('/users', userData)
  return response.data
}

export const loginUser = (userData) => {
  localStorage.setItem('loggedInUser', JSON.stringify(userData))
}

export const getLoggedInUser = () => {
  const user = localStorage.getItem('loggedInUser')
  return user ? JSON.parse(user) : null
}

export const logoutUser = () => {
  localStorage.removeItem('loggedInUser')
}