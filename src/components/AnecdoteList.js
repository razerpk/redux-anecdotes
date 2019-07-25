import React from 'react';
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { addNotification, removeNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {

  const vote = (id, content) => {
    props.voteAnecdote(id)
    props.addNotification(`you voted '${content}'`)
    setTimeout((() => 
      props.removeNotification()
    ), 5000)
  }

  return (
    props.anecdotesToShow.sort((a,b) => b.votes - a.votes).map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      </div>
    )
  )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  return filter
    ? anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())) 
    : anecdotes
}

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    anecdotesToShow: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  addNotification,
  removeNotification
}

const ConnectedAcedcoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAcedcoteList