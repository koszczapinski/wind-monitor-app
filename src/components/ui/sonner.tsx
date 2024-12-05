import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          success: "bg-green-500 text-white",
          error: "bg-red-500 text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
