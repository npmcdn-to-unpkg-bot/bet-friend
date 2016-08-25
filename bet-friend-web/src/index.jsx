import 'normalize.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'whatwg-fetch'

import React from 'react'
import {render} from 'react-dom'
import {IndexRedirect, Router, Route, hashHistory, Redirect} from 'react-router'

import {Provider} from 'react-redux'
import store from './services/common/StoreService.jsx'

import App from './App.jsx'
import AppContainer from './components/app-container/AppContainer.jsx'
import LeagueTable from './components/league-table/LeagueTable.jsx'
import Calendar from './components/calendar/Calendar.jsx'

import './assets/scss/global.scss'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

render(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/app/calendar' />
      <Route path='app' component={AppContainer}>
        <Route path='league' component={LeagueTable}/>
        <Route path='calendar' component={Calendar}/>
      </Route>
    </Route>
    <Redirect from='*' to='/app/calendar' />
  </Router>
</Provider>
, document.getElementById('app'))
