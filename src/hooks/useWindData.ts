import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/api/apiClient";
import type { Coordinates, CurrentWeatherData } from "@/hooks/types";

const fetchWeatherData = async (
  lat: number,
  lon: number
): Promise<CurrentWeatherData> => {
  try {
    const response = await axiosInstance.get<CurrentWeatherData>("/weather", {
      params: {
        lat,
        lon,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const useWindData = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>({
    lat: 0,
    lon: 0,
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["windData", coordinates],
    queryFn: () =>
      coordinates ? fetchWeatherData(coordinates.lat, coordinates.lon) : null,
    refetchInterval: 10000,
  });

  return { data, isLoading, error, setCoordinates };
};

export default useWindData;
