import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Form from './components/Logs/AddLog'
import Logs from './components/Logs'
import Header from './components/layout/Header';
import About from './components/pages/About'
import axios from 'axios'

class App extends Component {
  state = {
    logs: [],
    error: null,
    loading: true
  }
componentDidMount() {
      axios.get('/api/v1/logs')
      .then(res => {
        this.setState({logs: res.data.data, loading: false})
        console.log(this.state);
      })
      .catch(err => console.log(err))
  }

  

  // active and increase times encountred
  addTime = (id) => {
    this.setState({
      logs: this.state.logs.map(log => {
        if (log.id === id) {
          console.log(log);
          log.active = !log.active
          if (log.active) {
            log.count++
            console.log(log.errCode + ': has been encountered ' + log.count + ' times!');
          }
        };
        return log;
      })
    })
  } 

  btnFunction = (log) => {
    console.log(log);
  }

  addLog = (log) => {

    axios.post('/api/v1/logs', log)
    .then(res => console.log(res.data.data))
    .catch(err => console.log(err))

    this.setState({ logs: [...this.state.logs, log] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <Form addLog={this.addLog} />
                <Logs logs={this.state.logs} addTime={this.addTime} btnFunction={this.btnFunction} />
              </React.Fragment>
            )}/>
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>

    );
  }

}

export default App;
