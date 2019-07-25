import React from 'react';
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer';
import { addNotification, removeNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.createAnecdote(content)
    event.target.anecdote.value = ''

    props.addNotification(`you added '${content}' anecdote`)
    setTimeout((() => 
      props.removeNotification(null)
    ), 5000)
  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name='anecdote' /></div>
          <button type='submit'>create</button>
        </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  addNotification,
  removeNotification
}

const ConnectedAcedcoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAcedcoteForm