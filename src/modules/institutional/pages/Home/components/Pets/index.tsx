/* eslint-disable @next/next/no-img-element */
import React from "react";
import animal_exmp from "../../../../../../shared/assets/images/animal_exmp.svg";
import { IPet } from "@/shared/dtos/pets";

import { Container } from "./styles";

interface PetCardProps {
  pet: IPet;
}

const PetCard = ({ pet }: PetCardProps) => {
  return (
    <Container>
      <figure>
        <img src={animal_exmp} alt="animal_exmp" />
      </figure>

      <p>{pet.description}</p>
      <button type="button">Quero conhecer o {pet.name}</button>
    </Container>
  );
};

export default PetCard;
