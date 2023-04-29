import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import { Button, Center, Text } from "native-base";

import Chat from "../Components/Chat";
import useAlert from "../hooks/useAlert";
import { Route } from "../navigation/routes.types";

type Props = NativeStackScreenProps<any, Route.Init>;

const Init = ({ navigation }: Props) => {
  const { getItem } = useAsyncStorage("@api-key");
  const alert = useAlert();

  const { isLoading } = useQuery({
    queryKey: ["api-key"],
    queryFn: () => getItem(),
    onError: alert.unknownError,
    onSuccess: (data) => {
      if (data) {
        navigation.push(Route.Home, {
          apiKey: data,
        });
      }
    },
  });

  if (isLoading) {
    return (
      <Center flex={1}>
        <Text fontSize="lg" display="flex">
          Cargando...
        </Text>
        <Chat />
      </Center>
    );
  }

  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex">
        No tienes configurada tu api key
      </Text>
      <Button onPress={() => navigation.push("config")}>Configurar</Button>
      <Chat />
    </Center>
  );
};

export default Init;
