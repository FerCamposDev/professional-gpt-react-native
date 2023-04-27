import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Button,
  Center,
  Text,
  useColorMode,
  useColorModeValue,
} from "native-base";

import { Route } from "../navigation/routes.types";

type Props = NativeStackScreenProps<any, Route.THEME>;

function ThemeExample({ navigation }: Props) {
  const { toggleColorMode } = useColorMode();

  return (
    <Center flex={1} bg={useColorModeValue("white", "black")}>
      <Text fontSize="lg" display="flex">
        The active color mode is{" "}
        <Text bold>{useColorModeValue("Light", "Dark")}</Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
      <Button onPress={() => navigation.push("config")}>Go to config</Button>
    </Center>
  );
}

export default ThemeExample;
