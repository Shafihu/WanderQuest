import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useFavoriteStore } from "@/store/favorite-store";
import MiniCard from "@/components/MiniCard";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import PlacesType from "@/types/placesType";

const Bookmarks = () => {
  const { favorites, removeFromFavorites } = useFavoriteStore((state) => ({
    favorites: state.favorites,
    removeFromFavorites: state.removeFromFavorites,
  }));

  const renderItem: ListRenderItem<PlacesType> = ({ item }) => {
    return (
      <Link href={`/listing/${item._id}`} asChild>
        <TouchableOpacity style={styles.item}>
          <Image src={item.image} style={styles.image} />
          <View
            style={{
              width: "70%",
              height: 100,
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.itemTxt}>{item.name}</Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color={Colors.primaryColor}
              />
              <Text style={styles.itemReview}>{item.location}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => removeFromFavorites(item._id)}
                style={styles.removeBtn}
              >
                <Text style={styles.removeBtnTxt}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  if (favorites.length < 1) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ textAlign: "center" }}>
          Places you bookmarked will appear here.
        </Text>
      </View>
    );
  }

  return (
    <MiniCard>
      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
        }}
      >
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{
            gap: 10,
            paddingTop: 20,
          }}
          style={{ flex: 1 }}
        />
      </View>
    </MiniCard>
  );
};

export default Bookmarks;

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
    flexDirection: "row",
    alignItems: "flex-start",
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
  removeBtn: {
    backgroundColor: Colors.black,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
    width: 120,
  },

  removeBtnTxt: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
    zIndex: 100,
  },
});
