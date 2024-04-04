import { View } from "react-native";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function Home({ navigation }) {
   return (
      <View className="flex-1 bg-green-50 relative">
         <Card Navigation={navigation}></Card>
         <SearchBar></SearchBar>
      </View>
   );
}
