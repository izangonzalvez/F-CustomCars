import React, { useState, useEffect } from 'react';
import { Typography, Button, Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Footer, PageTitle } from "@/widgets/layout";
import FloatingChatButton from "../chat/FloatingChatButton";

export function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(null);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/contacts', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      const result = await response.json();
      if (response.ok) {
        setContacts(result.data);
      } else {
        setError(result.message || 'Error al obtener los datos');
      }
    } catch (error) {
      console.error('Error fetching contacts: ', error);
      setError('Error al obtener los datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    setDeleteStatus('eliminando');
    setTimeout(async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/contacts/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        if (response.ok) {
          await fetchContacts();
          setDeleteStatus('eliminado');
          setTimeout(() => setDeleteStatus(null), 2000);
        } else {
          console.error('Error al eliminar el contacto');
          setDeleteStatus(null);
        }
      } catch (error) {
        console.error('Error al eliminar el contacto: ', error);
        setDeleteStatus(null);
      }
    }, 2000);
  };

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="container mx-auto">
          <PageTitle>
            Formularios de contacto recibidos
          </PageTitle>
          <br />
          {loading ? (
            <Typography variant="h6" color="gray" className="text-center mt-12">Cargando...</Typography>
          ) : error ? (
            <Typography variant="h6" color="red" className="text-center mt-12">{error}</Typography>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {contacts.map(contact => (
                <Card key={contact.id} className="transition transform hover:-translate-y-2 hover:shadow-xl">
                  <CardBody className="flex flex-col justify-between">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {contact.address}
                    </Typography>
                    <Typography>
                      <strong>Correo:</strong> {contact.email}
                    </Typography>
                    <Typography>
                      <strong>Teléfono:</strong> {contact.phone}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="blue"
                      className="mt-4 transition transform hover:scale-105"
                      onClick={() => handleDelete(contact.id)}
                    >
                      🗑️ Eliminar
                    </Button>
                  </CardBody>
                  <CardFooter className="bg-gray-100">
                    <Typography variant="small" className="text-gray-600 break-words">
                      <strong>Mensaje:</strong> {contact.message}
                    </Typography>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      {deleteStatus && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            {deleteStatus === 'eliminando' ? (
              <>
                <div className="animate-spin h-10 w-10 border-t-2 border-b-2 border-green-600 rounded-full mr-4"></div>
                <div>Eliminando contacto...</div>
              </>
            ) : (
              <>
                <div className="text-green-600 mr-4">✓</div>
                <div>Contacto eliminado</div>
              </>
            )}
          </div>
        </div>
      )}
      <FloatingChatButton />
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default ContactList;
