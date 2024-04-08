import { View } from "react-native";
import CardItem from "../components/CardItem";
import { DetailsMenu } from "../components/DetailsMenu";

export default function Details({ route }) {
   const { item } = route.params;
   return (
      <View className=" p-0 flex-1">
         <CardItem item={item}></CardItem>
         <DetailsMenu></DetailsMenu>
      </View>
   );
}
