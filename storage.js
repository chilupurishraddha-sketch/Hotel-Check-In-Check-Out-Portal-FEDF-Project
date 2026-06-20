export const saveUser = (user) => {
  const users =
    JSON.parse(localStorage.getItem('users')) || []

  users.push(user)

  localStorage.setItem(
    'users',
    JSON.stringify(users)
  )

  localStorage.setItem(
    'loggedInUser',
    JSON.stringify(user)
  )
}

export const loginUser = (email) => {
  const users =
    JSON.parse(localStorage.getItem('users')) || []

  const found = users.find(
    u => u.email === email
  )

  if (found) {
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify(found)
    )
    return found
  }

  return null
}

export const getLoggedInUser = () =>
  JSON.parse(
    localStorage.getItem('loggedInUser')
  )

export const saveHistory = (record) => {
  const history =
    JSON.parse(localStorage.getItem('history')) || []

  history.push({
    ...record,
    time: new Date().toLocaleString()
  })

  localStorage.setItem(
    'history',
    JSON.stringify(history)
  )
}

export const getHistory = () =>
  JSON.parse(
    localStorage.getItem('history')
  ) || []

export const logout = () => {
  localStorage.removeItem('loggedInUser')
}