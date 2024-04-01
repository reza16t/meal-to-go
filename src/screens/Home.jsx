import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

export default function Home() {
   return (
      <View className="flex-1 bg-green-50">
         <SearchBar></SearchBar>
         <Card></Card>
      </View>
   );
}
