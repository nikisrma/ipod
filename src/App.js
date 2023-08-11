import logo from './download.jpeg'; // Make sure to provide the correct path to your image
import './App.css';
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const AppContainer = styled.div`
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IpodScreen = styled.div`
  width: 320px;
  height: 480px;
  background-color: #000;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const BottomContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.li`
  font-size: 14px;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const CircularDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: #333;
  border-radius: 50%; /* Make it circular */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: #fff;
  font-size: 12px;
  position: absolute;
  transform-origin: top center;
  padding: 20px;
`;


function calculatePosition(index, totalItems) {
  const angleIncrement = 360 / totalItems;
  const rotationAngle = index * angleIncrement;

  return `
    rotate(${rotationAngle}deg)
    translate(0, -100px) /* Distance from the center */
    rotate(-${rotationAngle}deg)
  `;
}

function App() {
  return (
    <AppContainer>
      <IpodScreen>
        {/* Top Screen */}
        <TopContainer>
          <Menu>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Games</MenuItem>
            <MenuItem>Music</MenuItem>
            {/* Add more menu items here */}
          </Menu>
          <BackgroundImage src={logo} alt="Image" />
        </TopContainer>
        {/* Bottom Screen */}
        <BottomContainer>
          <CircularDiv>
            <Text style={{ transform: calculatePosition(0, 4) }} className="mt-8">
              Menu
            </Text>
            <Text style={{ transform: calculatePosition(1, 4) }} className="mr-8">
              {" "}
              <FontAwesomeIcon icon={faAngleRight} />
            </Text>
            <Text style={{ transform: calculatePosition(2, 4) }} className="mb-8">
              {" "}
              <FontAwesomeIcon icon={faPlay} />
              <FontAwesomeIcon icon={faPause} />
            </Text>
            <Text style={{ transform: calculatePosition(3, 4) }} className="ml-8">
              {" "}
              <FontAwesomeIcon icon={faAngleLeft} />
            </Text>
          </CircularDiv>
        </BottomContainer>
      </IpodScreen>
    </AppContainer>
  );
}

export default App;
