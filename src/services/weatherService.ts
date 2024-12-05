import axios from "axios";
import type { Coordinates, WindData } from "../hooks/types";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWindForecast = async ({ lat, lon }: Coordinates) => {
  const response = await axios.get(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return response.data.list.slice(0, 16) as WindData[];
};
