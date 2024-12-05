import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "sonner";

import type { Coordinates } from "@/hooks/types";
import useWindData from "@/hooks/useWindData";
import { CoordinateInput } from "@/components/CoordinateInput";
import { WindChart } from "@/components/WindChart";
import { Spinner } from "@/components/ui/spinner";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient();

const WindDataApp = () => {
  const { data, isLoading, error, setCoordinates } = useWindData();

  const handleCoordinateSubmit = (coords: Coordinates) => {
    setCoordinates(coords);
  };

  if (error) {
    toast.error("Failed to fetch wind data. Please try again.");
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center">Wind Monitor App</h1>
      <div className="max-w-md mx-auto">
        <CoordinateInput
          onSubmit={handleCoordinateSubmit}
          isLoading={isLoading}
        />
      </div>
      <div className="bg-white p-4 flex justify-center items-center min-h-[700px]">
        {isLoading ? <Spinner /> : <WindChart data={data || null} />}
      </div>
      <Toaster />
    </div>
  );
};

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <WindDataApp />
  </QueryClientProvider>
);
