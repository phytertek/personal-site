import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App';
import AllPosts from './components/AllPosts.js'
import Navigation from './components/Navigation.js'
import IndividualPost from './components/IndividualPost.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import rootReducer from './reducers/index.js'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
)
let store = createStoreWithMiddleware(rootReducer)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/posts" component={AllPosts} />
        <Route path="/posts/:post_id" component={IndividualPost} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
