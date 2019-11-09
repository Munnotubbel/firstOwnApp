
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import GameList from "./GameList";
import fetch from "isomorphic-fetch";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
const theme = createMuiTheme({
  breakpoints: {
     values: {
      xs: 0,
      sm: 550,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});


export class GameOverview extends Component {

  
  
  state ={  games:[],
            number: 40,
            page: 1,
            totalPages: null,   
            rating_default :"+rating",
            rating: "+rating",
            count: 0,
            loading: true,
            genre: "",
            platform:1,
            scrolling: false,
            date_from: "1960-01-01",
            date_from_def: "2019-01-01",
            date_to:"2019-12-31",
            date_to_def: "2019-12-31"
            

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
const ulrich = document.getElementById("ul-rich").getElementsByTagName("li");
const lastLi = ulrich[ulrich.length - 1];
 const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
  const pageOffset = window.pageYOffset + window.innerHeight
  var bottomOffset = 20
  if (pageOffset > lastLiOffset - bottomOffset) this.loadMore()
}

 performSearch = () => {
const genre= this.props.genre
const platform = this.props.platform
const date_from = this.state.date_from
const date_to = this.state.date_to
const rating = this.state.rating
console.log("Platform: "+platform +" | Genre: "+genre+ " || LIST OF GAMES LOADED")


const {number, page, games}= this.state
const url = `https://api.rawg.io/api/games?parent_platforms=${platform}&genres=${genre}&page_size=${number}&page=${page}&dates=${date_from},${date_to}&ordering=${rating}`
    console.log(url)
    fetch(url)
      .then(response => response.json())

      .then(response => this.setState({ 
        games: [...games, ...response.results],
        totalPages: (response.count/number),
          loading: false,
          scrolling: false,
          
        }));
     
  }

  resetAndSearch = () => {
    const genre= this.props.genre
    const platform = this.props.platform
    const date_from = this.state.date_from
    const date_to = this.state.date_to
    const rating = this.state.rating
  
    
    
    const {number, page, games}= this.state
    const url = `https://api.rawg.io/api/games?parent_platforms=${platform}&genres=${genre}&page_size=${number}&page=${page}&dates=${date_from},${date_to}&ordering=${rating}`
        console.log(url)
        fetch(url)
          .then(response => response.json())
    
          .then(response => this.setState({ 
            games: response.results,
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

setDate = (year) => {
  
  this.setState({date_from:`${year}-01-01`, date_to:`${year}-12-31`});
  this.resetAndSearch()}
  
  render() {
    
  return (
    
    <div>
    <Button className="filterButtons" onClick={()=>this.setDate(2020)}>2020</Button>
    
    <Button className="filterButtons" onClick={()=>this.setDate(2019)}>2019</Button>
    <Button className="filterButtons" onClick={()=>this.setDate(2018)}>2018</Button>
    <Button className="filterButtons" onClick={()=>this.setDate(2000)}>2000</Button>
        <MuiThemeProvider theme={theme}> 
        <div id="inhaltdernacht">
<ul className="games" id="ul-rich" style={{listStyleType:'none', padding:'0', margin:'0', display:'inline'}}>
<Grid container direction="row"
        justify="center"
        alignItems="center"
>
          {(this.state.loading) ? <p>Loading</p> :
          
        this.state.games.map((game, index) =>{
          return(
            
            <Grid id={index} item xs={12} sm={6}><li style={{float:'left'}}>
              <GameList {...game} index={index} key={index+game.name} />
              </li>
              </Grid>
             )    
        })}
    
    </Grid>
    </ul>
  </div>
    </MuiThemeProvider>

    
      
    </div>
  )
}}

export default GameOverview;
