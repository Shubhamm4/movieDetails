import React, { useState } from "react";
import WriterTable from "./component/WriterTable";
import ActorDetails from "./component/ActorDetails";

function App() {
  const [actorButton, setActorButton] = useState(false);
  const [writerButton, setWriterButton] = useState(false);
  const movie = [
    {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot:
        "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
        "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "890,617",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      Title: "I Am Legend",
      Year: "2007",
      Rated: "PG-13",
      Released: "14 Dec 2007",
      Runtime: "101 min",
      Genre: "Drama, Horror, Sci-Fi",
      Director: "Francis Lawrence",
      Writer:
        "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
      Actors:
        "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
      Plot:
        "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      Language: "English",
      Country: "USA",
      Awards: "9 wins & 21 nominations.",
      Poster:
        "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
      Metascore: "65",
      imdbRating: "7.2",
      imdbVotes: "533,874",
      imdbID: "tt0480249",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
      ]
    }
  ];

  const actorsInfo = {};
  
  for (const m of movie) {
    const actors = m.Actors.split(', ').map(actor => actor.trim());
  
    const movieDetails = {
      Title: m.Title,
      Year: m.Year,
      Country: m.Country
    };
  
    for (const actor of actors) {
      if (!actorsInfo[actor]) {
        actorsInfo[actor] = [];
      }
      actorsInfo[actor].push(movieDetails);
    }
  }

  const onActorClick = () => {
    setActorButton(!actorButton);
    setWriterButton(false);
  };

  const onWriterClick = () => {
    setWriterButton(!writerButton);
    setActorButton(false);
  };

  const writersWithDetails = [];

  for (const movieData of movie) {
    const writers = movieData.Writer.split(', ').map(writer => writer.trim());
    for (const writer of writers) {
      writersWithDetails.push({
        Writer: writer,
        Title: movieData.Title,
        Year: movieData.Year
      });
    }
  }

  return (
    < div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 w-full h-[100vh] ">
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-bold text-white mb-4">Movie Details</h1>
    </div>
    <div className="flex items-center justify-center mt-10">
      <button onClick={() => onActorClick()} class="text-white px-10 bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm py-2.5 mr-2 mb-2">Actor</button>
      <button onClick={() => onWriterClick()} class="text-white px-10 bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm py-2.5 mr-2 mb-2">Writer</button>
    </div>
    {actorButton && (<ActorDetails actorsInfo={actorsInfo}/> ) }
    {writerButton && ( <WriterTable writersWithDetails={writersWithDetails}/>)}
    </div>
  );
}

export default App;
