import React, { useState, useEffect } from "react";
import usePokeInfo from "../models/usePokeInfo";
import { useParams } from "react-router-dom";
import { Container, Image, Row, Col } from "react-bootstrap-v5";
import BackButton from './BackButton';

export default function HomePage(props) {
  const { pokeId } = useParams();
  const PokeInfo = usePokeInfo(pokeId);

  if (PokeInfo.length === 0) {
    return null;
  }

  const stats =
    PokeInfo.stats &&
    PokeInfo.stats.map((stat) => (
      <li>
        {stat.stat.name}: {stat.base_stat}
      </li>
    ));

  const types =
    PokeInfo.types &&
    PokeInfo.types.map((type) => (
      <li>
        Slot {type.slot}: {type.type.name}{" "}
      </li>
    ));

  const moves =
    PokeInfo.moves && PokeInfo.moves.map((move) => <li>{move.move.name}</li>);

  return (
    <Row>
    <Container className="profile-page" fluid>
      
      <Row>
      <BackButton />
      <Row>
      <Col lg={6}>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          pokeId +
          ".png"
        }
        fluid
      />
      </Col>
      <Col lg={6} className="right-col">
        <h2>{PokeInfo.name}</h2>
        <p>Species: {PokeInfo.species.name}</p>
        <p>Weight: {PokeInfo.weight}</p>
      </Col>
      </Row>
      <Row className="bottom-row">
        <Col lg={3} className="bottom-col">
          <p>Stats:</p>
          <ul>{stats}</ul>
        </Col>
        <Col lg={3} className="bottom-col">
          <p>Types: </p>
          <ul>{types}</ul>
        </Col>
        <Col lg={4} className="bottom-col"> 
          <p>Moves:</p>
          <ul>{moves}</ul>
        </Col>
        </Row>
      </Row>
    </Container>
    </Row>
  );
}
