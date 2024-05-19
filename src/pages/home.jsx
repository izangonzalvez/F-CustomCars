import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { Link } from 'react-router-dom';
import { featuresData, teamData, contactData } from "@/data";
import FloatingChatButton from "./chat/FloatingChatButton";

export function Home() {
  return (
    <>

      {/* CABECERA */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black">
                Convierte tus sueños en realidades sobre ruedas.
              </Typography>
              <Link to="/project" className="bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
                Empieza con el tuyo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="" heading="Proyectos de la comunidad">
          Explora los proyectos creados por la comunidad para encontrar inspiración y nuevas ideas para tu propio vehículo personalizado.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>
      
      <FloatingChatButton />
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
