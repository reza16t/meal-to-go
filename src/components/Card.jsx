import { ActivityIndicator, FlatList, View } from "react-native";
import CardItem from "./CardItem";
import UseRestaurant from "../Services/UseRestaurant";

export default function Card() {
   const { Mocks, isLoading } = UseRestaurant();

   // console.log(Mocks);
   return (
      <View className="bg-green-50 p-2 flex-1 ">
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
            keyExtractor={(el) => el.name}
         ></FlatList>
      </View>
   );
}
