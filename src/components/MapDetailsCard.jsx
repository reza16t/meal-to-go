import { Image, View } from "react-native";
import { Callout, Marker } from "react-native-maps";
import { Title } from "../style/TextStyle";

export default function MapDetailsCard({ restaurant }) {
   return (
      <Marker
         title={restaurant.name}
         coordinate={{
            latitude: restaurant.geometry.location.lat,
            longitude: restaurant.geometry.location.lng,
         }}
      >
         <Callout>
            <View className="w-52">
               <Image
                  source={{
                     uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
                  }}
                  style={{ width: 100, height: 100 }}
               />
               <Title>{restaurant.name}</Title>
            </View>
         </Callout>
      </Marker>
   );
}
