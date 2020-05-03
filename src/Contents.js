import React from 'react'

class Contents extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      country: this.props.country,
      isLoaded : false,
      items :[]
    }

  }

  componentDidUpdate(prevProps){
    if(prevProps.country !== this.props.country){
      this.setState({country: this.props.country})
      this.fetchdata()
    }

  }

  componentDidMount() {
    this.fetchdata()
  }

   fetchdata(){

     let url = "http://newsapi.org/v2/top-headlines?country="+this.props.country+"&apiKey=f0597c3b2f81427ca2c47ae854474efb"
     fetch(url)
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             count: result.totalResults,
             items: result.articles
           })
         },
       )
   }

   render(){
     return(
       <div class="row">
       {this.state.items.map(item =>(
         <div class="col-sm-4">
           <div class="card p-3 my-3">
              <img class="card-img-top" width="match-parent" src={item.urlToImage} alt="image loading failed"/>
              <div class="card-body">
                <h4 class="card-title">{item.title}</h4>
                <p class="card-text">{item.description}</p>
                <a href={item.url} class="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
       ))}
     </div>
     )
   }

}


export default Contents
