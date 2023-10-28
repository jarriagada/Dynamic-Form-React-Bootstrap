import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardFruit from "./CardFruit";
import "./FirstStep.css";

export const fruits = [
  {
    id: 1,
    icon: "🍊",
    name: "Naranja",
    description:
      "Informacion de la card - Informacion de la card Informacion de la card -Informacion de la card",
  },

  {
    id: 2,
    icon: "🍏",
    name: "Manzana",
    description:
      "Informacion de la card - Informacion de la card Informacion de la card -Informacion de la card",
  },

  {
    id: 3,
    icon: "🍉",
    name: "Sandia",
    description:
      "Informacion de la card - Informacion de la card Informacion de la card -Informacion de la card",
  }

];

export default function FirstStep() {
  const [selectedCard, setSelectedCard] = useState(null);

  const clickCard = (fruit) => {
    setSelectedCard(fruit.id);
    localStorage.setItem("fruitName", fruit.name);
    localStorage.setItem("iconFruit", fruit.icon);
  };

  return (
    <div>
      <h2>Selecciona tu fruta favorita</h2>
      <h4>Selecciona tu fruta favorita y dale click al boton "Next Step" </h4>
      <Container className="p-5 text-center">
        <Row>
          {fruits.map((fruit, index) => (
            <CardFruit
              fruit={fruit}
              key={index}
              clickCard={clickCard}
              selectedCard={selectedCard}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}