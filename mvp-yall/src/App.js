import axios from 'axios';
import React from 'react';

import './App.css';

class App extends React.Component{
  state = {
    user:[],
    followers: [],
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/vinceryangarcia')
      .then(res => {
        this.setState({
          user: res.data,
        })
      })
      .catch( err => console.log( err ) )

    axios.get('https://api.github.com/users/vinceryangarcia/followers')
      .then( res => {
        console.log(res.data)
        this.setState({
          followers: res.data,
        })
      })
      .catch( err => console.log( err ) )
  }

  render(){
    return(
      <div>
        <div>
          <img src={ this.state.user.avatar_url }/>
          <br></br>
          <a href={ this.state.user.html_url }>{ this.state.user.login }</a>
          Minions: { this.state.user.followers }
        </div>

        <div>
   
              {
                this.state.followers.map( item => {
                    return <div>
                      <img src={item.avatar_url}/>
                      <a href={item.html_url}>{item.login}</a>
                    </div>
                })
              }
          
        </div>
       

      </div>
    )
  }
}

export default App;