import { Avatar, Typography, Button, Textarea, Checkbox, Input} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer, PageTitle } from "@/widgets/layout";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

export function Contact() {
  const position = [41.2298, 1.7075];

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
      <div className="container mx-auto">
          <PageTitle section="Contacto" heading="Contactanos, no lo dudes">
            Completa el formulario y los técnicos te responderan lo antes possible.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Nombre completo" />
              <Input variant="outlined" size="lg" label="Dirección de correo" />
            </div>
            <Textarea variant="outlined" size="lg" label="Mensaje" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Acepto
                  <a
                    href="../../public/upload/Condiciones.pdf"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Términos y condiciones
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Enviar
            </Button>
          </form>
        </div>
        <br/><br/>
        <div className="container mx-auto">
            <PageTitle section="" heading="Visítanos, no lo dudes">
              También puedes optar en venir presencialmente.
            </PageTitle>
            <div style={{ height: "400px" }}>
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    Vilanova i la Geltrú
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Contact;
