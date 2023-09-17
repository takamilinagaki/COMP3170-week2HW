import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div>
      <Header title="Movies to watch" />
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <div className="top-header">
        <h1>{props.title}!</h1>
      </div>

      <div className="movieList">
        <MovieList>
          <Movie
            movieTitle="Aladdin"
            movieImage="https://flxt.tmsimg.com/assets/p14596224_v_v9_al.jpg"
            movieYear="2019"
            movieDescription="Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine's kingdom."
            movieLength="2h8"
            movieURL="https://www.imdb.com/title/tt6139732/"
          />
          <Movie
            movieTitle="Tangled"
            movieImage="https://lumiere-a.akamaihd.net/v1/images/p_tangled_20509_cd0a5809.jpeg"
            movieYear="2010"
            movieDescription="Disney animation of a classic tale. Beautiful princess Rapunzel has been locked away in a tower since she was captured as a baby by an old hag. Her magical long blonde hair has the power to provide eternal youth, and the evil Gothel uses this power to keep her young. At the age of 18, Rapunzel becomes curious about the outside world, and when a prince uses her tower as a refuge, she asks him to help her escape."
            movieLength="1h40"
            movieURL="https://www.imdb.com/title/tt0398286/"
          />
          <Movie
            movieTitle="Inside Out"
            movieImage="https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg?region=0%2C0%2C540%2C810"
            movieYear="2015"
            movieDescription="Riley (Kaitlyn Dias) is a happy, hockey-loving 11-year-old Midwestern girl, but her world turns upside-down when she and her parents move to San Francisco. Riley's emotions -- led by Joy (Amy Poehler) -- try to guide her through this difficult, life-changing event. However, the stress of the move brings Sadness (Phyllis Smith) to the forefront. When Joy and Sadness are inadvertently swept into the far reaches of Riley's mind, the only emotions left in Headquarters are Anger, Fear and Disgust."
            movieLength="1h35"
            movieURL="https://www.imdb.com/title/tt2096673/"
          />
          <Movie
            movieTitle="Zootopia"
            movieImage="https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg"
            movieYear="2016"
            movieDescription="From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde (Jason Bateman), a wily fox who makes her job even harder."
            movieLength="1h48"
            movieURL="https://www.imdb.com/title/tt2948356/"
          />
        </MovieList>
      </div>
    </div>
  );
}

function MovieList(props) {
  return (
    <div>
      <li>{props.children}</li>
    </div>
  );
}

function Movie(props) {
  return (
    <div className="movie-container">
      <img src={props.movieImage} alt="" />
      <div className="movie-texts">
        <div className="movie-texts-firstLine">
          <h2>{props.movieTitle}</h2>
          <p>{props.movieYear}</p>
        </div>
        <p>{props.movieDescription}</p>
        <p className="movie-texts-thirdLine">{props.movieLength}</p>
        <a href={props.movieURL}>
          <button>Learn more...</button>
        </a>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
