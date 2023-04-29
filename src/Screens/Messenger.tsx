import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Chat from "../Components/Chat";
import { Route } from "../navigation/routes.types";

type Props = NativeStackScreenProps<any, Route.Messenger>;

const Messenger = (props: Props) => {
  return <Chat />;
};

export default Messenger;
