import { View, StatusBar, SafeAreaView, Text } from "react-native";
import SearchBar from "./src/components/SearchBar";
import Card from "./src/components/Card";
// const ONE_SECOND_IN_MS = 1000;

const cardItem = [
   {
      name: "zuin cafe",
      rating: 5,
      location: "1658 Market street, san francisco",
      imageUrl:
         "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagePath: "@expo/assets/pexels-photo-1279330.webp",
   },
];
export default function App() {
   return (
      <>
         <SafeAreaView className="flex-1 ">
            <SearchBar></SearchBar>
            <Card item={cardItem}></Card>
         </SafeAreaView>
         <StatusBar style="auto" />
      </>
   );
}

// const styles = StyleSheet.create({
//    flax: {
//       flex: 1,
//    },
// });
