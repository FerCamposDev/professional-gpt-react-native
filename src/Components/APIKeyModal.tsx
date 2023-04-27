import { Alert, Button, HStack, Link, Modal, Text, VStack } from "native-base";
import { useState } from "react";

const APIKeyModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onPress={() => setOpen(true)}>
        Como obtener mi API Key?
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Como obtener mi API Key?</Modal.Header>

          <Modal.Body>
            <VStack space={2}>
              <Text>
                Para poder obtener su api key es necesario tener una cuenta en{" "}
                <Link href="https://platform.openai.com">OpenAI</Link>
              </Text>
              <Text>
                Una vez creada la cuenta debe acceder a{" "}
                <Link href="https://platform.openai.com/account/api-keys">
                  Accounts/api-keys
                </Link>
              </Text>
              <Alert status="warning" colorScheme="warning">
                <HStack flexShrink={1} space={2} alignItems="center">
                  <Alert.Icon />
                  <Text>
                    Recuerde copiar su clave antes de cerrar la ventana porque
                    no podra visualizarla nuevamente. Puede crear y eliminar
                    tantas keys como usted quiera.
                  </Text>
                </HStack>
              </Alert>
            </VStack>
          </Modal.Body>

          <Modal.Footer>
            <Button onPress={() => setOpen(false)}>Entendido</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default APIKeyModal;
