import * as AppActions from '../../actions/AppActions'
import * as DialActions from '../../actions/DialActions'

import React, {Component, PropTypes, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import cn from 'classnames'
import {isEqual, merge} from 'lodash'
import Navigation from '../../components/Navigation/Navigation'

export class App extends Component {
  static propTypes = {
    'params': PropTypes.object.isRequired,
    'actions': PropTypes.object.isRequired,
    'dialActions': PropTypes.object.isRequired,
    'layout': PropTypes.object.isRequired,
    'app': PropTypes.object.isRequired,
    'dial': PropTypes.object.isRequired,
    'client': PropTypes.object.isRequired,
    'children': PropTypes.object.isRequired,
  }

  static childContextTypes = {
    'client': PropTypes.object,
  }

  getChildContext() {
    return {
      'client': this.props.client,
    }
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) window.scrollTo(0, 0)
  }

  render() {
    const {app, children, layout, actions, client, dial, dialActions} = this.props
    const navProps = {actions, client, layout}
    const childProps = merge(app, actions, client, dial, dialActions)
    const appClasses = cn('App', `--${client.agent}`)

    return (
      <div className={appClasses}>
        <Navigation {... navProps} />
        <div className="App-content">
          {cloneElement(children, childProps)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    'app': state.app,
    'dial': state.dial,
    'client': state.client,
    'layout': state.layout,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    'actions': bindActionCreators(AppActions, dispatch),
    'dialActions': bindActionCreators(DialActions, dispatch),

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
