import { useState } from "react";

import { toast } from "sonner";

import type { Coordinates } from "@/hooks/types";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type CoordinateInputProps = {
  onSubmit: (coordinates: Coordinates) => void;
  isLoading: boolean;
};

export const CoordinateInput = ({
  onSubmit,
  isLoading,
}: CoordinateInputProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 0,
    lon: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      isNaN(coordinates.lat) ||
      coordinates.lat < -90 ||
      coordinates.lat > 90
    ) {
      toast.error("Please enter a valid latitude between -90 and 90.");
      return;
    }

    if (
      isNaN(coordinates.lon) ||
      coordinates.lon < -180 ||
      coordinates.lon > 180
    ) {
      toast.error("Please enter a valid longitude between -180 and 180.");
      return;
    }

    onSubmit(coordinates);
  };

  const handleLatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoordinates((prev) => ({
      ...prev,
      lat: parseFloat(e.target.value),
    }));
  };

  const handleLonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoordinates((prev) => ({
      ...prev,
      lon: parseFloat(e.target.value),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            id="latitude"
            type="number"
            // min="-90"
            // max="90"
            value={coordinates.lat}
            onChange={handleLatChange}
            required
            aria-label="Latitude input"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            id="longitude"
            type="number"
            // min="-180"
            // max="180"
            value={coordinates.lon}
            onChange={handleLonChange}
            required
            aria-label="Longitude input"
          />
        </div>
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        Get Wind Data
      </Button>
    </form>
  );
};
