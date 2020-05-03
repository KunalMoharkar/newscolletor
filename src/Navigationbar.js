import React from 'react'

class Navbrand extends React.Component {
  constructor(props) {
    super(props)
  }

  render()
  {
    return(
        <a class="navbar-brand" href="#">{this.props.brandname}</a>
    )
  }
}

class CollapseButton extends React.Component {

  render(){
    return(
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
    )
  }
}

class Navlinks extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
      return(
        <ul class="navbar-nav">
          {this.props.links.map(link =>(<li class="nav-item"><a class="nav-link" href="#">{link}</a></li>))}
        </ul>
      )
  }


}

class Navigationbar extends React.Component {
  constructor(props) {
    super(props)
    this.state={

      links : ["Home","About","Contact"],
      brandname : "Mybrand"
    }
  }

  render(){
    return(
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <Navbrand brandname={this.state.brandname}/>
          <CollapseButton />
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <Navlinks links={this.state.links}/>
          </div>
        </nav>

    )

  }


}

export default Navigationbar;
