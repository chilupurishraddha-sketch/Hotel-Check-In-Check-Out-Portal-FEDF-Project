import api from './api'

export const getGuest = () => {
  const guest = localStorage.getItem('guest')
  return guest ? JSON.parse(guest) : null
}

export const saveGuest = (guest) => {
  localStorage.setItem('guest', JSON.stringify(guest))
}

export const clearGuest = () => {
  localStorage.removeItem('guest')
}

export const getAllGuests = async () => {
  const response = await api.get('/guests')
  return response.data
}

export const createGuest = async (guestData) => {
  const response = await api.post('/guests', guestData)
  return response.data
}

export const updateGuest = async (id, guestData) => {
  const response = await api.put(`/guests/${id}`, guestData)
  return response.data
}

export const deleteGuest = async (id) => {
  await api.delete(`/guests/${id}`)
}

export const getCheckedOutGuests = () => {
  return JSON.parse(localStorage.getItem('checkedOutGuests')) || []
}

export const saveCheckedOutGuests = (guests) => {
  localStorage.setItem('checkedOutGuests', JSON.stringify(guests))
}