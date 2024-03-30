import { FlatList, View } from "react-native";
import CardItem from "./CardItem";

const cardItem = [
   {
      name: "zuin cafe",
      rating: 3,
      icon: "",
      location: "1658 Market street, san francisco",
      photos:
         "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagePath: "@expo/assets/pexels-photo-1279330.webp",
      address: "",
   },
   {
      name: "zuin cafe1",
      rating: 3,
      location: "1658 Market street, san francisco",
      imageUrl:
         "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagePath: "@expo/assets/pexels-photo-1279330.webp",
   },
   {
      name: "zuin cafe2",
      rating: 3,
      location: "1658 Market street, san francisco",
      imageUrl:
         "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagePath: "@expo/assets/pexels-photo-1279330.webp",
   },
   {
      name: "zuin cafe3",
      rating: 3,
      location: "1658 Market street, san francisco",
      imageUrl:
         "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagePath: "@expo/assets/pexels-photo-1279330.webp",
   },
   {
      name: "zuin cafe4",
      rating: 3,
      location: "1658 Market street, san francisco",
      imageUrl:
         "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagePath: "@expo/assets/pexels-photo-1279330.webp",
   },
];
export default function Card() {
   return (
      <View className="bg-green-50 p-2 flex-1 ">
         <FlatList
            data={cardItem}
            renderItem={CardItem}
            keyExtractor={(cardItem) => cardItem.name}
         ></FlatList>
      </View>
   );
}
