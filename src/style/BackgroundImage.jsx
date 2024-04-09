import styled from "styled-components/native";
export const BgImage = styled.ImageBackground.attrs({
   // eslint-disable-next-line no-undef
   source: require("../../assets/home_bg.jpg"),
   blurRadius: 1.5,
})`
   display: flex;
   flex: 1;
`;
