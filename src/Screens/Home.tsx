import { Fontisto } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Center, HStack, IconButton, Text, VStack } from "native-base";

import { RootStackParamList } from "../navigation/rootNavigator";
import { Route } from "../navigation/routes.types";

type Props = NativeStackScreenProps<RootStackParamList, Route.Home>;

const Home = ({ route, navigation }: Props) => {
  const apiKey = route.params?.apiKey;

  return (
    <VStack>
      <HStack justifyContent="flex-end">
        <IconButton
          icon={<Fontisto name="player-settings" size={24} color="black" />}
          onPress={() => navigation.push(Route.Config)}
        />
      </HStack>
      <Center alignItems="center">
        <Text fontSize="lg" display="flex">
          Bienvenido tienes configurada una api key:
        </Text>
        <Text fontSize="lg" display="flex">
          {apiKey}
        </Text>
        <Button
          onPress={() =>
            navigation.push(Route.Messenger, {
              screenTitle: "Dinamic title",
            })
          }
        >
          Ir al chat
        </Button>
      </Center>
    </VStack>
  );
};

export default Home;
