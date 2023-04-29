import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Center, Text } from "native-base";

import { Route } from "../navigation/routes.types";

type Params = {
  apiKey: string;
};

type Props = NativeStackScreenProps<any, Route.Home>;

const Home = ({ route, navigation }: Props) => {
  const apiKey = route.params?.apiKey;

  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex">
        Bienvenido tienes configurada una api key:
      </Text>
      <Text fontSize="lg" display="flex">
        {apiKey}
      </Text>
      <Button onPress={() => navigation.push(Route.Config)}>
        Configurar otra
      </Button>
    </Center>
  );
};

export default Home;
