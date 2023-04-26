import { Button, Center, Text } from "native-base";
import { Route } from "../navigation/routes.types";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, Route.HOME>;

const Home = ({ navigation }: Props) => {
  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex">
        Home
      </Text>
      <Button onPress={() => navigation.push('config')}>Go to config</Button>
    </Center>
  )
}

export default Home;
