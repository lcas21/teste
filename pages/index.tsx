import type { NextPage } from "next";
import NextLink from "next/link";
import ReactDOM from "react-dom";
import react from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { type } from "os";

interface login {
  name: string;
  password: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<login>();
  const onSubmit = (data: login) => console.log(data);
  ;
  return (
    <div className="min-h-screen flex flex-col justify-center bg-indigo-600">
      <div className="bg-white mx-auto max-w-md py-8 px-10 shadow rounded-lg">
        <div className="mb-4">
          <img src="logo.svg" alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm">Email</label>
            <input
              {...register("name", {
                required: true,
                pattern: /^[A-Za-z]+@[a-z0-9.-]+.[a-z]/i,
              })}
              id="nome"
              type="email"
              placeholder="email"
              className="appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none "
            />
            {errors?.name?.type === "required" && (
              <p className="text-red-500 text-xs italic">
                Por favor digite o email.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm">Senha</label>
            <input
              {...register("password", {
                required: true,
                pattern: /^[A-Za-z]/i,
              })}
              id="password"
              type="password"
              placeholder="senha"
              className="appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            />
            {errors?.password?.type === "required" && (
              <p className="text-red-500 text-xs italic">
                Por favor digite a senha.
              </p>
            )}
          </div>
          <div className="mb4">
          <NextLink href={"/Usuario"} passHref>
            <button
              

              type="submit"
              className="inline-block w-full px-8 py-4 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow  "
            >
                  
              login
            </button>
            </NextLink>
          </div>
        </form>
      </div>
    </div>
  );
}
