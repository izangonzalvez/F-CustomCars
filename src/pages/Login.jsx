import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { doLogin, doUser } from "@/slices/auth/thunks";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { setAuthToken } from "@/slices/auth/authSlice";


export function Login({ setLogin }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  let usuaris = []
  const navigate = useNavigate();
  // let [ error, setError] = useState("");

  const { usuari,authToken } = useSelector (state => state.auth)

  const dispatch = useDispatch()
  let token =  localStorage.getItem('authToken') || "";
  console.log(token)
  setAuthToken(token)
  usuaris = JSON.parse(localStorage.getItem('usuaris')) || [];


  const check_login = (data) => {
    const {email, password} = data
    dispatch(doLogin(email, password));
}

useEffect(() => {
  if (authToken) {
    const email = localStorage.getItem('user');
    dispatch(doUser(email));
    navigate("/");
  }
}, [authToken, dispatch, navigate]);




  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Login</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Escribe tu email y tu contraseña para Login.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium" >
              Tu email
            </Typography>
            <Input
              {...register("email", {
                required: "Por favor, introdueix el teu correu electrònic",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Por favor, introdueix un correu electrònic vàlid"
                }})} 
              size="lg"
              placeholder="nombre@email.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Contraseña
            </Typography>
            <Input
            {...register("password", { required: "Sisplau, la contrassenya no pot ser buida" })}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                Acepto los&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terminos y Condiciones
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button onClick={handleSubmit(check_login)} className="mt-6" fullWidth>
            Login
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">
                He olvidado la contraseña
              </a>
            </Typography>
          </div>
          
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            No estas registrado?
            <Link to="/register" className="text-gray-900 ml-1">Create una cuenta</Link>
          </Typography>
        </form>

      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/rx8-derecha.jpg"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default Login;
