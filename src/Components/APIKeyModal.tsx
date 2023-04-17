import { Button, Modal, Text } from "native-base"
import { useState } from "react";

type Props = {}

const APIKeyModal = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onPress={() => setOpen(true)}>
        Como obtener mi API Key?
      </Button>
      <Modal isOpen={open} onClose={setOpen}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Como obtener mi API Key</Modal.Header> 
          
          <Modal.Body>
            <Text>My modal</Text>
          </Modal.Body>

          <Modal.Footer>
            <Button onPress={()=> setOpen(false)}>
              Entendido
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default APIKeyModal