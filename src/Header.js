import React from 'react'

class Header extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div class="header container-fluid p-3 my-3 bg-secondary text-white">
          <h1>{this.props.content}</h1>
      </div>
    )
  }

}

export default Header
