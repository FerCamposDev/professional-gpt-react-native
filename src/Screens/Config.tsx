import { Heading, Button, Text, VStack } from "native-base"
import APIKeyModal from "../Components/APIKeyModal"

type Props = {}

const Config = (props: Props) => {
  return (
    <VStack>
      <Heading textAlign="center">Bienvenido a Professional AI</Heading>
      <Text>Para hacer funcionar la app necesitas proporsionar un API Key(codigo de acceso a chat GPT), solo se almacenara en tu dispositivo y sera utilizado por ti.</Text>
      <APIKeyModal />
    </VStack>
  )
}

export default Config