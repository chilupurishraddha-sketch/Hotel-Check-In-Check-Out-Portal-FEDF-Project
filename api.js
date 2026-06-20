import axios from 'axios'

const API_URL = 'http://localhost:5000'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Guest API calls
export const getGuests = () => api.get('/guests')
export const getGuest = (id) => api.get(`/guests/${id}`)
export const createGuest = (guest) => api.post('/guests', guest)
export const updateGuest = (id, guest) => api.put(`/guests/${id}`, guest)
export const deleteGuest = (id) => api.delete(`/guests/${id}`)

// User API calls
export const getUsers = () => api.get('/users')
export const getUser = (id) => api.get(`/users/${id}`)
export const createUser = (user) => api.post('/users', user)

// Booking API calls
export const getBookings = () => api.get('/bookings')
export const createBooking = (booking) => api.post('/bookings', booking)

export default api