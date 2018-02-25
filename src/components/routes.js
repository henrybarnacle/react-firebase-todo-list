import React, {Component} from 'react'
import {connect} from 'react-redux'
//import About from './App/about'
import {Router, Route, IndexRoute} from 'react-router';
import App from './App';
import ShowTodo from './App/show-todo';
import {loadSections} from '../actions/todo';

class Routes extends Component {
  constructor(props) {
    super(props)
    this.props.loadSections()
  }
  render() {
    return (
      <Router {...this.props}>
        <Route path='/'>
          <IndexRoute component={App} />
          <Route path=':id' component={ShowTodo}/>
        </Route>
      </Router>
    )
  }
}
export default connect(null, {loadSections})(Routes)

