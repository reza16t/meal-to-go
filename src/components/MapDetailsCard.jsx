import { Image, Platform, View } from "react-native";
import { Callout, Marker } from "react-native-maps";
import { Title } from "../style/TextStyle";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

export default function MapDetailsCard({ restaurant }) {
   const navigation = useNavigation();
   return (
      <Marker
         title={restaurant.name}
         coordinate={{
            latitude: restaurant?.geometry.location.lat,
            longitude: restaurant?.geometry.location.lng,
         }}
      >
         <Callout
            onPress={() =>
               navigation.navigate("RestaurantDetails", { item: restaurant })
            }
         >
            <View className="w-52  rounded-lg ">
               {Platform.OS == "ios" ? (
                  <Image
                     source={{
                        uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
                     }}
                  />
               ) : (
                  <View className="overflow-hidden rounded-md">
                     <WebView
                        // eslint-disable-next-line no-undef
                        source={require("../../assets/pexels-photo-1279330.webp")}
                        className="h-32 w-full bg-white rounded-[20px]"
                     ></WebView>
                  </View>
               )}
               <Title>{restaurant.name}</Title>
            </View>
         </Callout>
      </Marker>
   );
}
