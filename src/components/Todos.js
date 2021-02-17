import React, { Component } from 'react'
import axios from 'axios'

export default class Todos extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/todos')
    this.setState({ todos: res.data })
  }

  render() {
    return (
      <>
        {this.state.todos.map(t => (
          <div key={t.id}>
            <h2>{t.title}</h2>
          </div>
        ))}
      </>
    )
  }
}
