import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "¡Hola! ¿En qué puedo ayudarte hoy?", sender: "Chat" }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageSubmit = () => {
    if (inputText.trim() === '') return;
    setMessages([...messages, { text: inputText, sender: "Yo" }]);
    setInputText('');
    const parser = new MessageParser(new ActionProvider(setMessages));
    parser.parse(inputText);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleShowQuestions = () => {
    alert('Preguntas disponibles:\n\n- Hola\n- Esto que es\n- Quienes sois\n- Como creo un proyecto\n- Como veo un presupuesto\n- Como borro un proyecto\n- Como veo un proyecto\n- Como edito un proyecto\n- Como publico un proyecto\n- Como contacto\n- Gracias');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-md w-96">
          <div className="flex justify-between bg-blue-500 text-white p-2 rounded-t-lg">
            <span>ChatBot</span>
            <button onClick={handleShowQuestions} className="bg-green-500 text-white px-4 py-2 rounded-full">
              Preguntas
            </button>
          </div>
          <div className="p-4 space-y-4 overflow-y-auto max-h-72">
            {messages.map((message, index) => (
              <div key={index} className={`rounded-md p-2 ${message.sender === "Yo" ? "bg-gray-200" : "bg-gray-100"}`}>
                <span className="font-bold">{message.sender}:</span> {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex p-4 bg-gray-100">
            <button onClick={handleClearChat} className="text-red-500">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={inputText}
              onChange={handleInputChange}
              className="flex-1 rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button onClick={handleMessageSubmit} className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-full">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
      <button className="bg-blue-500 text-white rounded-full px-8 py-4 shadow-md" onClick={toggleChat}>
        {isOpen ? 'Cerrar' : 'Chat'}
      </button>
    </div>
  );
};

class ActionProvider {
  constructor(setMessages) {
    this.setMessages = setMessages;
  }

  respondToKeyword(keyword) {
    let response;
    switch (keyword.toLowerCase()) {
      case 'hola':
        response = "Hola de nuevo, en que puedo ayudarte";
        break;
      case 'esto que es':
        response = "¡Esta aplicación está diseñada para poder customizar tus propios coches, guardar tus proyectos, ver el presupuesto de tu proyecto, ver los proyectos publicados de la comunidad y muchas cosas más!";
        break;
      case 'quienes sois':
        response = "Nosotros somos un equipo de dos Developers del Institut Joaquim Mir, Izan Gonzálvez Aranda y Andrés León Rodríguez";
        break;
      case 'como creo un proyecto':
        response = "¡Para crear un proyecto, deberás de dirigirte a la página de Proyectos, clicar al botón superior que dice Crear Proyecto, rellenas los campos necesarios y Listo!";
        break;
      case 'como veo un presupuesto':
        response = "Para ver un presupuesto, debe de visualizar su proyecto clicando el símbolo del ojo y deberás de darle al botón superior que dice Descargar Presupuesto";
        break;
      case 'como borro un proyecto':
        response = "Para borrar un proyecto, debe de dirigirse al proyecto que quiere borrar y clicar el icono de la papelera";
        break;
      case 'como veo un proyecto':
        response = "Para ver un proyecto, debe de dirigirse al proyecto que quiere ver y clicar el icono del ojo";
        break;
      case 'como edito un proyecto':
        response = "Para editar un proyecto, debe de dirigirse al proyecto que quiere editar y clicar el icono del lápiz";
        break;
      case 'como publico un proyecto':
        response = "Para publicar un proyecto, debe de dirigirse al proyecto que quiere publicar y clicar el botón que dice publicar";
        break;
      case 'como contacto':
        response = "Para contactar con nosotros, deberás de dirigirse a la página de contacto, donde podrás rellenar un formulario o ver la dirección física de nuestra sede";
        break;
      case 'gracias':
        response = "¡De Nada! Encantado de ayudarte";
        break;
      default:
        response = "Lo siento, no entiendo esa palabra clave.";
    }
    return response;
  }

  handleDefault() {
    const defaultMessage = { text: "Lo siento, no entiendo esa pregunta. ¿Puedes ser más específico?", sender: "Chat" };
    this.setMessages(prevMessages => [...prevMessages, defaultMessage]);
  }
}

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const keyword = message.toLowerCase();
    const response = this.actionProvider.respondToKeyword(keyword);
    const chatbotMessage = { text: response, sender: "Chat" };
    this.actionProvider.setMessages(prevMessages => [...prevMessages, chatbotMessage]);
  }
}

export default FloatingChatButton;
