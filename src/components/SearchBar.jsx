import { Text, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { contextLocation } from "../Services/context/LocationContext";
import { useEffect, useState } from "react";

const Suggestions = styled.View`
   background-color: white;
   height: 50px;
   display: flex;
   padding-left: 10px;
   left: 0;
   top: 0;
   justify-content: center;
`;

export default function SearchBar() {
   const { OnSubmit, data, KeyWord } = contextLocation();
   const [SearchTerm, setSearchTerm] = useState(KeyWord);
   useEffect(() => {
      setSearchTerm(KeyWord);
   }, [KeyWord]);
   const keys = data?.key?.filter((key) => {
      if (SearchTerm == key) {
         return;
      }
      return key.toLowerCase().includes(SearchTerm?.toLowerCase());
   });
   return (
      <View className="absolute top-0 w-full bg-transparent p-2">
         <Searchbar
            className="bg-white border border-green-900/50 p-0 h-11 rounded-none "
            placeholder="search for location"
            value={SearchTerm}
            onChangeText={(val) => setSearchTerm(val)}
            onSubmitEditing={() => OnSubmit(SearchTerm)}
         ></Searchbar>
         {keys?.length !== 0 && SearchTerm && (
            <View className=" max-h-52 border border-t-0 border-green-900/50">
               <FlatList
                  keyboardShouldPersistTaps={"handled"}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={keys}
                  renderItem={({ item }) => {
                     return (
                        <Suggestions>
                           <Text onPress={() => setSearchTerm(item)}>
                              {item}
                           </Text>
                        </Suggestions>
                     );
                  }}
                  keyExtractor={(el) => el}
               ></FlatList>
            </View>
         )}
      </View>
   );
}
