import { Button, Center, Text, useColorMode, useColorModeValue } from "native-base";

function ThemeExample() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center flex={1} bg={useColorModeValue('white', 'black')}>
      <Text fontSize="lg" display="flex">
        The active color mode is{' '}
        <Text bold>{useColorModeValue('Light', 'Dark')}</Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export default ThemeExample;
