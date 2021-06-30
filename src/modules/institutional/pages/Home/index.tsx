/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import logo from "../../../../shared/assets/images/logo.svg";

import { api } from "@/shared/services/api";

import { Container, PlataformSlug, PetsSection, PetsSlider } from "./styles";
import Header from "@/shared/components/organisms/Header";
import { IPets } from "@/shared/dtos/pets";
import PetCard from "./components/Pets";

const Home = () => {
  const [pets, setPets] = useState<IPets>(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await api.get("/pets");

        setPets(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    getPets();
  }, []);

  return (
    <Container>
      <Header />

      <PlataformSlug>
        <img src={logo} alt="logo" />
        <h1>Adote um pet... adote um amigo para toda vida</h1>
      </PlataformSlug>

      <PetsSection>
        <PetsSlider>
          <h2>Ultimos pets adicionados</h2>

          <section className="pets">
            {pets?.length ? (
              pets.map((pet) => <PetCard pet={pet} key={pet.id} />)
            ) : (
              <span>Nenhum pet disponivel para adoção</span>
            )}
          </section>
        </PetsSlider>

        <PetsSlider>
          <h2>De uma chance - mais antigos da casa</h2>

          <section className="pets">
            {pets?.length ? (
              pets.map((pet) => <PetCard pet={pet} key={pet.id} />)
            ) : (
              <span>Nenhum pet disponivel para adoção</span>
            )}
          </section>
        </PetsSlider>
      </PetsSection>
    </Container>
  );
};

export default Home;
