
import React, { Component } from "react";
import Genre from "./Genre";
import axios from 'axios';
import GameList from "./GameList";
import Filter from "./Filter";
import fetch from "isomorphic-fetch";
import {
        NavLink,
    
  } from "react-router-dom";
  import Button from '@material-ui/core/Button';



export class GameOverview extends Component {
  state ={  games:[],
            number: 40,
            page: 1,
            totalPages: null,   
            rating :"+rating",
            count: 0,
            loading: true,
            genre: "",
            platform:1,
            scrolling: false,

                  };
  /* async componentDidMount() {
    this.performSearch()
    this.scrollListener = window.addEventListener('scroll', (e)=>{
this.handleScroll(e)

    })
  }
 */
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
console.log("ausgabe aller werte")
console.log(platform)
console.log(genre)

const {number, page, games}= this.state
const url = `https://api.rawg.io/api/games?parent_platforms=${platform}&genres=${genre}&page_size=${number}&page=${page}&dates=2019-01-01,2019-12-31&ordering=${this.state.rating}`
    
    fetch(url)
      .then(response => response.json())

      .then(response => this.setState({ 
        games: [...games, ...response.results],
        totalPages: (response.count/number),
          loading: false,
          scrolling: false,

        }));
     
  }
/* ratingsort (wie){this.setState({ rating: {wie}}); console.log(this.state.rating); this.changeData()} */
  
loadMore = () => {
  this.setState(prevState => ({
    page: prevState.page +1,
    scrolling: true,
  }),this.performSearch)}


  render() {
    if(this.state.games)console.log(this.state.games)
  return (
    
    <div>
    <div><NavLink onClick={()=> this.setState({ scrolling:false})} to="/">home</NavLink></div>
    <NavLink  onClick={()=>this.setState({ scrolling:false})} to="/genres">back</NavLink>

   
      <h1>SpieleÜbersicht</h1>
      <Button onClick={this.loadMore} variant="contained" color="primary">LOAD MORE OMG</Button>
        <div> 
         {/*  {
            (this.state.loading) ? <p>Loading</p> :<GameList games={this.state.games}/>
          }  */}
          {(this.state.loading) ? <p>Loading</p> :
          <ul className="games">
        {this.state.games.map((game, index) =>{
          return(
<li><GameList {...game}/></li>

          )
           
        })}
    </ul>}
    

        </div> 
    
      
    </div>
  )
}}

export default GameOverview;
