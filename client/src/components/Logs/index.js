import React, { Component } from 'react'
import LogItem from './LogItem'
import PropTypes from 'prop-types'

class Logs extends Component {
    
    render() {
        return this.props.logs.map((log) => (
            <LogItem key={log.id}  log={log} addTime={this.props.addTime} btnFunction={this.props.btnFunction}/>
            ))
    }
}
//Proptypes
Logs.propTypes = {
    logs: PropTypes.array.isRequired
}
export default Logs

