import { StyleSheet } from "react-native";

// https://ethercreative.github.io/react-native-shadow-generator/
export const s = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 40,
    paddingLeft: 20,
    borderRadius: 20,
    fontFamily: "Alatar-Regular",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
