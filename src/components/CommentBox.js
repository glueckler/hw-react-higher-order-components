import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends PureComponent {
  state = { comment: '' }

  componentDidMount() {
    this.shouldNavigateAway()
  }
  
  componentDidUpdate() {
    this.shouldNavigateAway()
  }
  
  shouldNavigateAway() {
    // if user is not logged in.. redirect
    if (!this.props.auth) {
      this.props.history.push('/')
    }
  }
  
  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.saveComment(this.state.comment)

    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapState, actions)(CommentBox)
