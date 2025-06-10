import React from "react";
import styled from "styled-components";
import thumb1 from "../assets/thumbnail-1.jpg";
import thumb2 from "../assets/thumbnail-2.jpg";
import thumb3 from "../assets/thumbnail-3.png";
import thumb4 from "../assets/thumbnail-4.jpeg";
import thumb5 from "../assets/thumbnail-5.png";
import thumb9 from "../assets/thumbnail-6.jpg";

import longVideo1 from "../assets/longform-1.mp4";
import longVideo2 from "../assets/longform-2.mp4";
import longVideo3 from "../assets/longform-3.mp4";
import longVideo4 from "../assets/longform-4.mp4";

import shortform1 from "../assets/shortform-1.mp4";
import shortform2 from "../assets/shortform-2.mp4";
import shortform3 from "../assets/shortform-3.mp4";
import shortform4 from "../assets/shortform-4.mp4";


const ShowcaseContainer = styled.div`
  padding: 40px;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-size: 80%;
  background-color: #0a0b10;
  color: white;
  overflow-x: hidden;
  h2 {
    margin-bottom: 40px;
  }
`;

const ShowcaseGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 20px;
  color: white;
  &:hover {
    color: var(--purple);
  }
`;

const Row = styled.div`
  display: grid;
  gap: 50px;
  justify-content: center;
  align-items: center;

  /* PC View: Shorts Grid */
  &.reels {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;  /* Reduced horizontal gap */
    row-gap: 20px;     /* Vertical gap remains */
    padding: 0 50px;   /* Increased left/right padding */
  }

  &.longs {
    grid-template-columns: repeat(2, 1fr);  /* 2x2 grid for long videos */
    max-width: 900px; /* Reduce size of long videos in PC view */
    margin: 0 auto;   /* Center the grid */
  }

  &.thumbs {
    grid-template-columns: repeat(3, 1fr);  /* 3x3 grid for thumbnails */
    img {
      height: auto; /* Let the aspect-ratio handle the height */
      aspect-ratio: 16 / 9; /* Ensure 16:9 aspect ratio */
      width: 100%; /* Ensure full width */
      object-fit: cover; /* Maintain aspect ratio */
      border-radius: 10px; /* Rounded corners */
    }
  }

  /* Mobile View Adjustments */
  @media (max-width: 768px) {
    &.reels {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 10px;
      column-gap: 20px;
      padding: 0 10px;
    }

    &.thumbs {
      grid-template-columns: repeat(1, 1fr); /* 1 column for mobile */
      gap: 10px; /* Reduced gap between thumbnails */
      padding: 0 10px; /* Add some padding to the sides */
      img {
        height: auto; /* Let the aspect-ratio handle the height */
        aspect-ratio: 16 / 9; /* Ensure 16:9 aspect ratio */
        width: 100%; /* Full width */
      }
    }

    &.longs {
      grid-template-columns: repeat(1, 1fr);
      video {
        width: 100%; /* Full width for long videos */
      }
    }
  }
`;

const VideoCard = styled.div`
  position: relative;
  background: transparent;
  border-radius: 15px;
  text-align: center;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 2px 6px var(--purple);
  }

  img,
  video {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  /* Short Video (Vertical Video - 9:16) */
  &.short-video {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.short-video video {
    aspect-ratio: 9 / 16; /* Vertical aspect ratio for short videos */
    width: 85%; /* Slightly smaller width for better aesthetics */
    display: block;
    margin: auto;
    transition: transform 0.3s ease-in-out;
  }

  /* Long Video (Horizontal Video - 16:9) */
  &.long-video video {
    aspect-ratio: 16 / 9; /* Horizontal aspect ratio for long videos */
    width: 100%; /* Full width */
    display: block;
    margin: auto;
    transition: transform 0.3s ease-in-out;
  }

  /* Thumbnail (Rectangular YouTube Style) */
  &.thumbnail img {
    aspect-ratio: 16 / 9;  /* Forces a horizontal rectangle */
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }
  
  /* Apply hover effect only to the video inside short-video */
  @media (min-width: 769px) {
    &.short-video:hover {
      transform: none;
    }

    &.short-video:hover video {
      transform: scale(1.1);
    }

    &.long-video:hover video {
      transform: scale(1.1);
    }
  }

  /* On mobile, thumbnails and videos remain responsive */
  @media (max-width: 768px) {
    &.short-video video {
      width: 100%; /* Full width on mobile */
    }

    &.long-video video {
      width: 100%; /* Full width on mobile */
    }

    &.thumbnail img {
      width: 100%;
    }
  }
`;

const ShowcasePage = () => {
  return (
    <ShowcaseContainer>
      <h2>Portfolio</h2>
      <ShowcaseGrid>
        <SectionTitle>Short Form</SectionTitle>
        <Row className="reels">
          <VideoCard className="short-video">
            <video controls>
              <source src={shortform1} type="video/mp4" />
            </video>
          </VideoCard>
          <VideoCard className="short-video">
            <video controls>
              <source src={shortform2} type="video/mp4" />
            </video>
          </VideoCard>
          <VideoCard className="short-video">
            <video controls>
              <source src={shortform3} type="video/mp4" />
            </video>
          </VideoCard>
          <VideoCard className="short-video">
            <video controls>
              <source src={shortform4} type="video/mp4" />
            </video>
          </VideoCard>
        </Row>

        <SectionTitle>Long Form</SectionTitle>
        <Row className="longs">
          <VideoCard className="long-video">
            <video controls>
              <source src={longVideo1} type="video/mp4" />
            </video>
          </VideoCard>
          <VideoCard className="long-video">
            <video controls>
              <source src={longVideo2} type="video/mp4" />
            </video>
          </VideoCard>
          <VideoCard className="long-video">
            <video controls>
              <source src={longVideo3} type="video/mp4" />
            </video>
          </VideoCard>
          <VideoCard className="long-video">
            <video controls>
              <source src={longVideo4} type="video/mp4" />
            </video>
          </VideoCard>
        </Row>

        <SectionTitle>Thumbnails</SectionTitle>
        <Row className="thumbs">
          <VideoCard>
            <img src={thumb1} alt="Thumbnail 1" />
          </VideoCard>
          <VideoCard>
            <img src={thumb2} alt="Thumbnail 2" />
          </VideoCard>
          <VideoCard>
            <img src={thumb3} alt="Thumbnail 3" />
          </VideoCard>
          <VideoCard>
            <img src={thumb4} alt="Thumbnail 1" />
          </VideoCard>
          <VideoCard>
            <img src={thumb5} alt="Thumbnail 2" />
          </VideoCard>
          <VideoCard>
            <img src={thumb9} alt="Thumbnail 3" />
          </VideoCard>
        </Row>
      </ShowcaseGrid>
    </ShowcaseContainer>
  );
};

export default ShowcasePage;
