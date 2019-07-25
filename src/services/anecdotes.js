import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content) => {
  const newObject = { content, votes: 0}
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const addLike = async (id, changedAnecdote) => {
  const response = await axios.put(`${baseUrl}/${id}`, changedAnecdote)
  return response.data
}
export default { getAll, create, addLike }