import React from "react";
import axios from "axios";
import Movie from "./Movies";

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  };
  getData = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // const res = = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(res.data.data.movies);
    // console.log(movies);
    // this.setState({movies:movies}) //can shorter like below
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoding:false});
    }, 3000);
    this.getData();
  }
  render() {
    const { isLoding, movies } = this.state;
    // return <div>{this.state.isLoding &&= console.log("ok")}</div>;
    // return <div>{if(this.state.isLoding)console.log("ok")}</div>;
    // return <div>{this.state.isLoding?'loding true':'loading false'}</div>;
    // return <div>{isLoding ? "loading" : "complete"}</div>;
    return (
      <div>
        {isLoding
          ? "loading"
          : 
          movies.map(
              (movie) => (
                // {
                // console.log(movie);
                // return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              )
              // );
              // }
            )
          }
      </div>
    );
  }
}

export default App;
