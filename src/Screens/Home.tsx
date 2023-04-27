import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Center, Text } from "native-base";

import Chat from "../Components/Chat";
import { Route } from "../navigation/routes.types";

type Props = NativeStackScreenProps<any, Route.HOME>;

const Home = ({ navigation }: Props) => {
  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex">
        Home
      </Text>
      <Button onPress={() => navigation.push("config")}>Go to config</Button>
      <Chat />
    </Center>
  );
};

export default Home;
