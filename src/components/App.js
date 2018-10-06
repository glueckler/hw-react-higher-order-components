import React from 'react'
import { Route } from 'react-router-dom'

import CommentList from 'components/CommentList'
import CommentBox from 'components/CommentBox'

const App = props => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  )
}

export default App
