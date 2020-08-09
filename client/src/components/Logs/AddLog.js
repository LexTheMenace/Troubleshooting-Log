import React, { Component } from 'react'

export class Form extends Component {
    state = {
        technology: '',
        errCode: '',
        errMsg: '',
        solutions: []
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addLog(this.state)
        this.setState({
            technology: '',
            errCode: '',
            errMsg: '',
            solutions: []
        })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div style={{ margin: '30px' }}>
                <form style={formStyle} onSubmit={this.onSubmit.bind(this)} >
                    <div className='row'>
                        <div className='col-6'>
                            <label for="lname">Technology: </label><br />
                            <input className='input' onChange={this.onChange} value={this.state.technology} name='technology' type='text' /><br />
                            <label for="lname">Error Code:</label><br />
                            <input className='input' onChange={this.onChange} value={this.state.errCode} name='errCode' type='text' /><br />
                        </div>
                        <div className='col-6'>
                            <label for="lname">Error Message:</label><br />
                            <input className='input' onChange={this.onChange} value={this.state.errMsg} name='errMsg' type='text' /><br />
                            <label for="lname">Solution tried / (LINK):</label><br />
                            <input className='input' onChange={this.onChange} value={this.state.solutions} name='solutions' type='text' /><br />
                        </div>
                    </div>
                    <br/>
                    <input type='submit' className='btn' value='Submit' /> <input className='btn' type="reset" />
                </form>
            </div>
        )
    }
}
const formStyle = {

}

export default Form
