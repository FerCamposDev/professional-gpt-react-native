import { FontAwesome5 } from "@expo/vector-icons";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { getStringAsync } from "expo-clipboard";
import { Button, IconButton, Input, VStack } from "native-base";
import { useEffect, useState } from "react";

import useAlert from "../hooks/useAlert";

const APIKeyKeeper = () => {
  const { getItem, setItem } = useAsyncStorage("@api-key");
  const alert = useAlert();

  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    async function loadApiKey() {
      const data = await getItem();
      setApiKey(data ?? "");
    }
    loadApiKey();
  }, []);

  const handlePaste = async () => {
    try {
      const data = await getStringAsync();
      setApiKey(data);
    } catch (error) {
      alert.unknownError(error);
    }
  };

  const handleSave = async () => {
    try {
      await setItem(apiKey);
      alert.success("Api key guardada!");
    } catch (error) {
      alert.unknownError(error);
    }
  };

  return (
    <VStack space={4}>
      <Input
        value={apiKey}
        onChangeText={setApiKey}
        placeholder="Pegue su API-Key"
        InputRightElement={
          <IconButton
            onPress={handlePaste}
            icon={<FontAwesome5 name="paste" size={24} color="black" />}
          />
        }
      />
      <Button onPress={handleSave}>Guardar</Button>
    </VStack>
  );
};

export default APIKeyKeeper;
