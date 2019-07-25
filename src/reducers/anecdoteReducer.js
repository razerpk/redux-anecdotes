import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id

      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.data 
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
        
    default:  return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
        type: 'INIT_ANECDOTES',
        data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
        type: 'NEW_ANECDOTE',
        data: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const object = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const changedAnecdote = await anecdoteService.addLike(anecdote.id, object)
    dispatch({
      type: 'VOTE',
      data: changedAnecdote
    })
  }
}

export default reducer