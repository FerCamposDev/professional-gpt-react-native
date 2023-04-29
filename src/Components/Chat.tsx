import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { IMessage } from "react-native-gifted-chat/lib/Models";

const getMockMessage = () => ({
  _id: new Date().getTime(),
  text: "Hello developer",
  createdAt: new Date(),
  user: {
    _id: 2,
    name: "React Native",
    avatar: "https://picsum.photos/140",
  },
});

function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([getMockMessage()]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    setTimeout(() => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [getMockMessage()])
      );
    }, 1500);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      showUserAvatar
      user={{
        _id: 1,
        avatar: "https://picsum.photos/140/140",
        name: "Fer",
      }}
    />
  );
}

export default Chat;
