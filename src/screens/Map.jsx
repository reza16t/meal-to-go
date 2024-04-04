import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapSearchBar from "../components/MapSearchbar";
import { contextLocation } from "../Services/LocationContext";
import UseRestaurant from "../Services/UseRestaurant";
import { useEffect, useState } from "react";
import MapDetailsCard from "../components/MapDetailsCard";

export default function Map() {
   const { Location } = contextLocation();
   const [LatDelta, setLatDelta] = useState();
   const { Mocks } = UseRestaurant(Location);
   const { lat, lng, viewport } = Location;
   useEffect(() => {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
      setLatDelta(northeastLat - southwestLat);
   }, [Location]);
   return (
      <View className="flex-1 bg-green-50">
         <MapView
            className="h-screen w-screen"
            region={{
               latitude: lat,
               longitude: lng,
               latitudeDelta: LatDelta,
               longitudeDelta: 0.02,
            }}
         >
            {Mocks?.map((restaurant) => (
               <MapDetailsCard
                  key={restaurant.name}
                  restaurant={restaurant}
               ></MapDetailsCard>
            ))}
         </MapView>
         <MapSearchBar></MapSearchBar>
      </View>
   );
}
