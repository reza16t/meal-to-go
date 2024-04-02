import { ActivityIndicator, FlatList, View } from "react-native";
import CardItem from "./CardItem";
import UseRestaurant from "../Services/UseRestaurant";
import { contextLocation } from "../Services/LocationContext";

export default function Card() {
   const { Location } = contextLocation();
   const { Mocks, isLoading } = UseRestaurant(Location);

   // console.log(Mocks);
   return (
      <View className="bg-green-50 p-2 pt-12 flex-1">
         {isLoading && (
            <ActivityIndicator
               size={100}
               className="absolute mt-[-50]   bg-white opacity-70  h-screen w-screen z-10"
            ></ActivityIndicator>
         )}
         <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Mocks}
            renderItem={CardItem}
            extraData={CardItem}
            keyExtractor={(el) => el.name}
         ></FlatList>
      </View>
   );
}
