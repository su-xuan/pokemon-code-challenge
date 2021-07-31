import React from "react";
import { Card } from "react-bootstrap-v5";

export default function PokeCard(props: any) {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Link href={props.link}>
      <Card.Img src={props.img} />
      <Card.Title>
        {props.name}
      </Card.Title>
      </Card.Link>
    </Card>
  );
}
