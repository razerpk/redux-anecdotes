import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'


const App = (props) => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList store={props.anecdotes} />
      <AnecdoteForm store={props.anecdotes} />
    </div>
  )
}

export default App