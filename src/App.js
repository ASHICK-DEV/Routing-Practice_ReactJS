import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <div className="app-container">
      <div className="content">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact component={NotFound} />
        </Switch>
        <div className="own">Designed by @ Ashiq</div>
      </div>
    </div>
  </>
)

export default App
