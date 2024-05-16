import { useState } from "react";
import { Avatar, Typography, Button, Textarea, Checkbox, Input } from "@material-tailwind/react";
import { Footer, PageTitle } from "@/widgets/layout";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import FloatingChatButton from "../chat/FloatingChatButton";

export function Contact() {
  const position = [41.2298, 1.7075];
  const [formData, setFormData] = useState({
    address: '',
    email: '',
    phone: '',
    message: '',
  });

  const [notification, setNotification] = useState({
    message: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({ message: 'Datos enviados correctamente', type: 'success' });
        setFormData({
          address: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setNotification({ message: 'Error al enviar los datos', type: 'error' });
      }
    } catch (error) {
      console.error('Error enviando datos: ', error);
      setNotification({ message: 'Error al enviar los datos', type: 'error' });
    }
  };

  const closeNotification = () => {
    setNotification({ message: '', type: '' });
  };

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="container mx-auto">
          <PageTitle section="Contacto" heading="Contáctanos, no lo dudes">
            Completa el formulario y los técnicos te responderán lo antes posible.
          </PageTitle>
          {notification.message && (
            <div className={`p-4 mb-4 text-sm ${notification.type === 'success' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'} rounded-lg`} role="alert">
              <span className="font-medium">{notification.message}</span>
              <button type="button" className="ml-2 text-lg font-semibold" onClick={closeNotification}>×</button>
            </div>
          )}
          <form className="mx-auto w-full mt-12 lg:w-5/12" onSubmit={handleSubmit}>
            <div className="mb-8 flex gap-8">
              <Input
                variant="outlined"
                size="lg"
                label="Empresa"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <Input
                variant="outlined"
                size="lg"
                label="Dirección de correo"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <Input
              variant="outlined"
                size="lg"
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            <br/>
            <Textarea
              variant="outlined"
              size="lg"
              label="Mensaje"
              rows={8}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
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
            <Button variant="gradient" size="lg" className="mt-8" fullWidth type="submit">
              Enviar
            </Button>
          </form>
        </div>
        <br/><br/>
        <div className="container mx-auto">
          <PageTitle section="" heading="Visítanos, no lo dudes">
            También puedes optar por venir presencialmente.
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
      <FloatingChatButton />
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
