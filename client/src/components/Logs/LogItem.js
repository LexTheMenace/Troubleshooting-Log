import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Solutions from './Solutions'
import { withRouter } from 'react-router-dom'

class LogItem extends Component {
    getStyle = () => {
        return {
            textAlign: 'center',
            backgroundColor: '#444444',
            color: '#fff',
            fontSize: '18px',
            padding: '20px',
            margin: '10px',
            border: '3px #ccc outset',
           /*  background: this.props.log.technology === 'JavaScript' ?
                'yellow' : 'white', */
        }

    }
  

    render() {
          const { log, addTime} = this.props
      if(log) {
         const { technology, errCode, errMsg, solutions, id, createdAt } = log 
    
        return (
            <div style={this.getStyle()}>
                <p style={{fontSize: '28px'}}>{technology}</p>
                <p><span style={{ color: 'red' }}>ERR Code: </span> {errCode} <span style={{ color: 'red' }}> Msg: </span> {errMsg}</p>
                <Solutions solutions={solutions}/>
                 <p>Problem First Encountered on: {createdAt}</p>
                <input type='checkbox' onChange={addTime.bind(this, id)}/>
                <button onClick={this.props.btnFunction.bind(this, log)} style={btnStyle} disabled> Add New Solution (Coming Soon!)  </button>
            </div>
        )} else {
            return <h1>No Logs Yet? Must be new here!</h1>
        }
    }
}

const btnStyle = {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
}
//Proptypes
LogItem.propTypes = {
    log: PropTypes.object.isRequired
}
export default LogItem
