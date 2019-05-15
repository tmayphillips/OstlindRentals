import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BaseLayout from './components/BaseLayout'
import {AvailableRentals} from './components/AvailableRentals'
import {AllProperties} from './components/AllProperties'
import {Applications} from './components/Applications'
import {Repairs} from './components/Repairs'
import AddProperty from './components/AddProperty'
import AddTenant from './components/AddTenant'
import AddRepair from './components/AddRepair'
import Apply from './components/Apply'
import {Tenants} from './components/Tenants'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from './store/reducers/reducer'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import * as firebase from 'firebase'

const rootReducer = combineReducers({
  reducer: reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers
const store = createStore(rootReducer, composeEnhancers (
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path = "/" exact component={AvailableRentals} />
          <Route path = "/admin/addproperty" exact component={AddProperty} />
          <Route path = "/admin/addtenant" exact component={AddTenant} />
          <Route path = "/admin/addrepair/:propertyid/:address" exact component={AddRepair} />
          <Route path = "/apply/:rentalId" exact component={Apply} />
          <Route path = "/admin/tenants/:tenantid" exact component={Tenants} />
          <Route path = "/admin/properties" exact component={AllProperties} />
          <Route path = "/admin/applications" exact component={Applications} />
          <Route path = "/admin/repairs/:propertyid/:address" exact component={Repairs} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
