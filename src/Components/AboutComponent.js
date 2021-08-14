import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap"
import phoenix from "../Img/valorant_phonenix.png"

function AboutPage() {
  return (
    <Container fluid className="">
      <Container className="agentBg bgContainer">
        <h1 className="bgHeader my-5 py-5 text-dark">ABOUT</h1>
      </Container>
      <Row>
        <Col lg={1}></Col>
        <Col lg={5} className="aboutContainer" >
          <Container>
            <p className="aboutFont">VALORANT is a team-based first-person hero shooter set in the near future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world.In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or spike actions. Every player starts each round with a "classic" pistol and one or more "signature ability" charges. Other weapons and ability charges can be purchased using an in-game economic system that awards money based on the outcome of the previous round, any kills the player is responsible for, and any actions taken with the spike. The game has an assortment of weapons including secondary guns like sidearms and primary guns like submachine guns, shotguns, machine guns, assault rifles and sniper rifles. There are automatic and semi-automatic weapons that each have a unique shooting pattern that has to be controlled by the player to be able to shoot accurately. Different agents allow players to find more ways to plant the Spike and style on enemies with scrappers, strategists, and hunters of every description. It currently offers 16 agents to choose from. They are Brimstone, Viper, Omen, Cypher, Sova, Sage, Phoenix, Jett, Raze, Breach, Reyna, Killjoy, Skye, Yoru, Astra, and KAY/O.
            </p>
          </Container>
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <Image src={phoenix} className="phoenixImg" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;