import { View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function SearchBar() {
   return (
      <View className="p-2">
         <Searchbar className="bg-white border border-green-900/50 p-0 h-11 justify-center items-center"></Searchbar>
      </View>
   );
}
