import { FlatList, Pressable, View } from "react-native";
import CardItem from "./CardItem";
import UseRestaurant from "../Services/query/UseRestaurant";
import { contextLocation } from "../Services/context/LocationContext";
import { useNavigation } from "@react-navigation/native";
import Loader from "./Loader";

export default function Card() {
   const { Location } = contextLocation();
   const { Mocks, isLoading } = UseRestaurant(Location);
   const navigation = useNavigation();
   // console.log(Mocks);
   return (
      <View className="bg-green-50 p-2 pt-12 flex-1">
         {isLoading && <Loader></Loader>}
         <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Mocks}
            renderItem={({ item }) => (
               <Pressable
                  onPress={() =>
                     navigation.navigate("RestaurantDetails", { item })
                  }
               >
                  <CardItem item={item}></CardItem>
               </Pressable>
            )}
            extraData={CardItem}
            keyExtractor={(el) => el.name}
         ></FlatList>
      </View>
   );
}
