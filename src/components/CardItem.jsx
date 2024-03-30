import { Image, Text, View } from "react-native";
import { Title } from "../style/TextStyle";
import StarRating from "../utils/StarRating";

export default function CardItem({ item }) {
   return (
      <View className="bg-white m-2 h-80 rounded-md  shadow-md shadow-black p-4">
         <Image
            source={require("../../assets/pexels-photo-1279330.webp")}
            className="h-48 w-full  bg-white "
         ></Image>
         <Title>{item.name}</Title>
         <StarRating rating={item.rating}></StarRating>
         <Text className="text-[10px]">{item.location}</Text>
      </View>
   );
}
