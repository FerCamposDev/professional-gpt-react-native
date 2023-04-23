import { Heading, Button, Text, VStack, Alert, HStack } from "native-base"
import APIKeyModal from "../Components/APIKeyModal"
import APIKeyKeeper from "../Components/APIKeyKeeper"

type Props = {}

const Config = (props: Props) => {
  return (
    <VStack padding={4} space={4}>
      <Heading textAlign="center">Bienvenido a Professional AI</Heading>
      <Text textAlign="center">
        Para hacer funcionar la app necesitas proporsionar un API Key(codigo de acceso a chat GPT), solo se almacenara en tu dispositivo y sera utilizado por ti.
      </Text>
      <Alert status="info">
        <HStack space={4} alignItems="center" paddingX={6}>
          <Alert.Icon />
          <Text textAlign="justify">
            Necesitamos hacer esto ya que usar inteligencia artificial tiene un costo el cual no podemos cubrir para todos los usuarios, al cargar su propia key usted podra utilizar la aplicacion hasta agotar la cantidad de consultas mensuales gratis.
          </Text>
        </HStack>
      </Alert>
      <APIKeyModal />
      <APIKeyKeeper />
    </VStack>
  )
}

export default Config