import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Solutions extends Component {

    render() {
        let { solutions } = this.props

        if (typeof(solutions) === 'string') {
           solutions = solutions.split(',')
        } 
        return solutions.map((item) => (
            <p>{item}</p>
        ))
    }
}
//Proptypes
Solutions.propTypes = {
    solutions: PropTypes.object
}
export default Solutions