
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import GameList from "./GameList";
import fetch from "isomorphic-fetch";




export class GameOverview extends Component {
  state ={  games:[],
            number: 40,
            page: 1,
            totalPages: null,   
            rating :"-metacritic",
            count: 0,
            loading: true,
            genre: "",
            platform:1,
            scrolling: false,

                  };

  async componentDidMount() {
    this.performSearch()
    this.scrollListener = window.addEventListener('scroll',this.handleScroll, false)
   
  }

   
  componentWillUnmount() {
    
    this.scrollListener = window.removeEventListener('scroll',this.handleScroll, false)
  }


handleScroll = (e) => {
  const {scrolling, totalPages, page} = this.state
  if (scrolling) return
  if (totalPages <= page) return
  const lastLi = document.querySelector('ul.games > li:last-child')
  const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
  const pageOffset = window.pageYOffset + window.innerHeight
  var bottomOffset = 20
  if (pageOffset > lastLiOffset - bottomOffset) this.loadMore()
}

 performSearch = () => {
const genre= this.props.genre
const platform = this.props.platform
console.log("Platform: "+platform +" | Genre: "+genre+ " || LIST OF GAMES LOADED")


const {number, page, games}= this.state
const url = `https://api.rawg.io/api/games?parent_platforms=${platform}&genres=${genre}&page_size=${number}&page=${page}&dates=2019-01-01,2019-12-31&ordering=+rating`
    
    fetch(url)
      .then(response => response.json())

      .then(response => this.setState({ 
        games: [...games, ...response.results],
        totalPages: (response.count/number),
          loading: false,
          scrolling: false,

        }));
     
  }

  
loadMore = () => {
  this.setState(prevState => ({
    page: prevState.page +1,
    scrolling: true,
  }),this.performSearch)}


  render() {
    
  return (
    
    <div>
    
        {/* <table style={{marginLeft:'10px'}}>  */}
        <ul className="games" style={{listStyleType:'none', padding:'0', margin:'0'}}>
          {(this.state.loading) ? <p>Loading</p> :
          
        this.state.games.map((game, index) =>{
          return(
<GameList {...game} index={index} key={index+game.name} />

          )
           
        })}
    }</ul>
    

        {/* </table>  */}
    
      
    </div>
  )
}}

export default GameOverview;
