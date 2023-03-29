import axios from "axios";

export const obtenerDatos = (parametro) => {
    // Aquí podrías realizar una llamada a una API o cualquier otra tarea que necesites para obtener los datos que necesitas
    console.log("enviando para metro al service", parametro)
    let datos = axios("data.json").then((res) => console.log(res));
    return datos;
  };