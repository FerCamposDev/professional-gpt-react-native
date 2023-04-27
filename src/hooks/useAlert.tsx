import { useToast } from "native-base";

function useAlert() {
  const { show } = useToast();

  const unknownError = (error: any) => {
    const description = error?.message || error.msg || error.toString();
    console.error(error);
    show({
      title: "Error",
      description,
      bgColor: "error.600",
    });
  };

  const error = (description: string) => {
    show({
      title: "Error",
      description,
      bgColor: "error.600",
    });
  };

  const success = (description: string, title?: string) => {
    show({
      title,
      description,
      bgColor: "success.600",
    });
  };

  const warning = (description: string, title?: string) => {
    show({
      title,
      description,
      bgColor: "warning.600",
    });
  };

  const info = (description: string, title?: string) => {
    show({
      title,
      description,
      bgColor: "info.600",
    });
  };

  return {
    error,
    warning,
    info,
    success,
    unknownError,
  };
}

export default useAlert;
