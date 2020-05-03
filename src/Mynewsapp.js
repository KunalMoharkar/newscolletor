import React from 'react';
import './index.css';
import App from './App';
import Navigationbar from './Navigationbar';
import Header from './Header'
import Contents from './Contents'



class Mynewsapp extends React.Component{

  constructor(props) {
    super(props)
    this.state = {value: 'us'};
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(

      <div class="container-fluid">
        <Navigationbar />
        <div>
        <br />
        <br />
          <form onSubmit={this.handleSubmit}>
            <label>
              change country:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="us">USA</option>
                <option value="in">India</option>
                <option value="ch">China</option>
                <option value="hu">Hungary</option>
              </select>
            </label>
        </form>
      </div>
        <Header content="Latest News" />
        <Contents country={this.state.value}/>
      </div>
    )
  }
}

export default Mynewsapp
