import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'

import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/jobs" component={Jobs} />
        <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App

// import {Component} from 'react'
// import {Route, Switch, Redirect} from 'react-router-dom'

// import './App.css'

// import Login from './components/Login'
// import Home from './components/Home'
// import Jobs from './components/Jobs'
// import JobItemDetails from './components/JobItemDetails'

// import ProtectedRoute from './components/ProtectedRoute'
// import NotFound from './components/NotFound'

// // These are the lists used in the application. You can move them to any component needed.

// // Replace your code here
// class App extends Component {
//   render() {
//     return (
//       <>
//         <Switch>
//           <Route exact path="/login" component={Login} />
//           <ProtectedRoute exact path="/" component={Home} />
//           <ProtectedRoute exact path="/jobs" component={Jobs} />
//           <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
//           <Route  path="/not-found" component={NotFound} />
//           <Redirect to="/not-found" />
//         </Switch>
//       </>
//     )
//   }
// }

// export default App
