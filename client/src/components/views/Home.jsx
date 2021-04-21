import React from 'react';
import styled from 'styled-components';
import { ligthColor } from '../../global-styles';
// import video from '../../assets/video.mp4';

const Container = styled.div`
  color: ${ligthColor};
`;

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      {/* <video src={video}></video> */}
    </Container>
  );
};

export default Home;
