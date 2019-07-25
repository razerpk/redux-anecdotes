const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADDED_LIKE':
      return action.notification
    case 'REMOVE':
      return null
    default:
      return state
  }
}

export const addNotification = notification => {
  return ({
    type: 'ADDED_LIKE',
    notification
  })
}

export const removeNotification = () => {
  return ({
    type: 'REMOVE',
  })
}

export default notificationReducer