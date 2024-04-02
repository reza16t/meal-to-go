import { Image, Text, View } from "react-native";
import { Title } from "../style/TextStyle";
import StarRating from "../utils/StarRating";
import styled from "styled-components";
import OpenIcon from "../utils/OpenIcon";
export const Icon = styled.Image`
   width: 15px;
   height: 15px;
`;
export default function CardItem({ item }) {
   // console.log(item.isOpenNow, item.isClosedTemporarily);
   return (
      <View className="bg-white m-2 rounded-md  shadow-md shadow-black p-4">
         <Image
            // eslint-disable-next-line no-undef
            source={require("../../assets/pexels-photo-1279330.webp")}
            className="h-48 w-full  bg-white "
         ></Image>
         <Title>{item.name}</Title>
         <View className="flex-row flex items-center ">
            <StarRating rating={item.rating}></StarRating>
            <View className="flex flex-1 items-center flex-row justify-end">
               {item.isClosedTemporarily && (
                  <Text variant="error" className="text-red-500 text-xs pr-2">
                     CLOSED
                  </Text>
               )}
               {item.isOpenNow && <OpenIcon></OpenIcon>}
               <Icon source={{ uri: item.icon }} />
            </View>
         </View>
         <Text className="text-[10px]">{item.vicinity}</Text>
      </View>
   );
}
