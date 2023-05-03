import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import { Button, Center, HStack, Heading, Spinner, Text } from "native-base";

import useAlert from "../hooks/useAlert";
import { Route } from "../navigation/routes.types";

type Props = NativeStackScreenProps<any, Route.Init>;

const Init = ({ navigation }: Props) => {
  const { getItem } = useAsyncStorage("@api-key");
  const alert = useAlert();

  const { isLoading, isFetching } = useQuery({
    queryKey: ["api-key"],
    queryFn: () => getItem(),
    onError: alert.unknownError,
    onSuccess: (data) => {
      if (data) {
        navigation.replace(Route.Home, {
          apiKey: data,
        });
      }
    },
  });

  if (isLoading || isFetching) {
    return (
      <Center flex={1}>
        <HStack space={4}>
          <Spinner />
          <Heading color="primary.500" fontSize="md">
            Cargando...
          </Heading>
        </HStack>
      </Center>
    );
  }

  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex">
        No tienes configurada tu api key
      </Text>
      <Button onPress={() => navigation.push("config")}>Configurar</Button>
    </Center>
  );
};

export default Init;