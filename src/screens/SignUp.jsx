import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BgImage } from "../style/BackgroundImage";
import styled from "styled-components/native";
import useSignUp from "../Services/query/useSignUp";
const ViewCard = styled.View`
   background-color: #9b9b9b94;
   border-radius: 20px;
   filter: blur(2px);
`;
const Input = styled.TextInput`
   background-color: white;
   border-radius: 50px;
   padding: 12px;
   margin-top: 8px;
`;

export default function SignUp() {
   const [Password, setPassword] = useState("");
   const [ConfirmPassword, setConfirmPassword] = useState("fff");
   const [Email, setEmail] = useState("");
   const { mutate, isPending } = useSignUp();
   const EmailRegex = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+.+.[a-zA-Z]{2,4}$/gim,
   );
   const PasswordRegex = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_#])[A-Za-z\d$@$!%*?&_#]{8,16}$/,
   );

   const isEmail = Email == "" || EmailRegex.test(Email);
   const isPassword = Password == "" || PasswordRegex.test(Password);
   const onSubmit = () => {
      if (isEmail) {
         mutate({ email: Email, password: Password });
      }
   };

   return (
      <BgImage className=" items-center justify-center ">
         <ViewCard className="bg-gray h-64 w-[90%] pb-5 pl-2 pr-2 pt-5">
            <Input
               placeholder="Email"
               value={Email}
               onChangeText={(Email) => setEmail(Email)}
               autoFocus
               className={`${isEmail ? "border border-white focus:border focus:border-green-300 " : "border border-red-300 "}`}
            />
            <Input
               placeholder="Password"
               value={Password}
               onChangeText={(Password) => setPassword(Password)}
               className={`${isPassword ? "border border-white focus:border focus:border-green-300 " : "border border-red-300 "}`}
            />
            <Input
               placeholder="Confirm Password"
               value={() => ConfirmPassword.split("").map(() => "* ")}
               onChangeText={(ConfirmPassword) =>
                  setConfirmPassword(ConfirmPassword)
               }
               className={`${isPassword ? "border border-white focus:border focus:border-green-300 " : "border border-red-300 "}`}
            />
            <TouchableOpacity
               className="items-center rounded-2xl  "
               onPress={() => onSubmit()}
            >
               <View className="mt-8 h-12 w-[100%] items-center justify-center rounded-full bg-green-400">
                  <Text className="text-lg text-white">SignUp</Text>
               </View>
            </TouchableOpacity>
         </ViewCard>
      </BgImage>
   );
}
