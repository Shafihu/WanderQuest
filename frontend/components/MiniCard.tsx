import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const MiniCard = ({ children }: { children: any }) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};

export default MiniCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
    marginRight: 10,
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 8,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.primaryColor,
    marginLeft: 5,
  },
  itemReview: {
    fontSize: 14,
    color: "#999",
    marginLeft: 5,
  },
});
