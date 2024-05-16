    import {
      Input,
      Checkbox,
      Button,
      Typography,
    } from "@material-tailwind/react";
    import { Link, Navigate } from "react-router-dom";
    import { doRegister, doUser } from "@/slices/auth/thunks";
    import { useSelector, useDispatch } from 'react-redux';
    import { useNavigate } from "react-router-dom";
    import { useForm } from "react-hook-form";
    import { useEffect, useState } from "react";


    export const Register = ({ setLogin }) => {
      const { usuari,authToken } = useSelector (state => state.auth)
      const navigate = useNavigate();
      const dispatch = useDispatch() 
      const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors },
      } = useForm();

      let usuaris = [];

      usuaris = JSON.parse(localStorage.getItem("usuaris")) || [];
      console.log(usuaris)

      const onSubmit = (data) => {
        dispatch(doRegister(data));
      };

      useEffect(() => {
        if (authToken) {
          const email = localStorage.getItem('user');
          dispatch(doUser(email));
          navigate("/");
        }
      }, [authToken, dispatch, navigate]);
      

      return (
        <section className="m-8 flex">
                <div className="w-2/5 h-full hidden lg:block">
            <img
              src="/img/rx8-izquierda.jpg"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
          <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
            <div className="text-center">
              <Typography variant="h2" className="font-bold mb-4">Unete a nosotros hoy</Typography>
              <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Escribe tu email y contraseña para hacer el registro.</Typography>
            </div>
            <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="small" color="blue-gray" className="-mb-3 font-medium" >
                  Tu nombre
                </Typography>
                <Input
                {...register("name", { requiered: "Este campo es obligatorio"})}
                  size="lg"
                  placeholder="nombre"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="small" color="blue-gray" className="-mb-3 font-medium" >
                  Tu email
                </Typography>
                <Input
                {...register("email", { requiered: "Este campo es obligatorio"})}
                  size="lg"
                  placeholder="nombre@email.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="small" color="blue-gray" className="-mb-3 font-medium" >
                  Tu contraseña
                </Typography>
                <Input
                {...register("password", { requiered: "Este campo es obligatorio"})}
                  size="lg"
                  placeholder="Password1234"
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
              <Button onClick={handleSubmit(onSubmit)} className="mt-6" fullWidth>
                Registrate
              </Button>
              <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                Ya tienes una cuenta?
                <Link to="/login" className="text-gray-900 ml-1">Sign in</Link>
              </Typography>
              <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                Eres un proveedor?
                <Link to="/proveedorRegister" className="text-gray-900 ml-1">Sign in</Link>
              </Typography>
            </form>

          </div>
        </section>
      );
    }
    export default Register;
