import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  image: {
    height: 90,
    width: 90,
    backgroundColor: "white",
  },
  temperature_box: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 100,
  },
});
