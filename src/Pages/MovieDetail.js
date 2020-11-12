import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//Import useHistory
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
//import animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
//import scroll Top component
import ScrollTop from '../components/ScrollTop';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    //This will return an array of objects
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    //Here I can can access in the array writing at default [0] because I'll have every time only ONE object inside
    setMovie(currentMovie[0]);
    // WHEN I WANT TO RUN THI useEffect
  }, [movies, url]);

  return (
    //This make sure that before rendering all the movieDetail, movie it's available
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <ScrollTop />
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="image" />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;
const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledAwards = styled.div`
  min-height: 50vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: flex-start;
  justify-content: space-around;
`;
const StyleAwardLayout = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award Component
const Award = ({ description, title }) => {
  return (
    <StyleAwardLayout>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyleAwardLayout>
  );
};
export default MovieDetail;
