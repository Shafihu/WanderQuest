import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useFavoriteStore } from "@/store/favorite-store";
import { ListingType } from "@/types/listingsType";

const Bookmarks = () => {
  const { favorites, removeFromFavorites } = useFavoriteStore((state) => ({
    favorites: state.favorites,
    removeFromFavorites: state.removeFromFavorites,
  }));

  const renderItem = ({ item }: { item: ListingType }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  item: {},
});
