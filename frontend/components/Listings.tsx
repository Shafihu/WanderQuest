import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useFavoriteStore } from "../store/favorite-store";
import { usePlacesStore } from "../store/places-store";
import PlacesType from "@/types/placesType";

type Props = {
  category: string;
};

const Listings = ({ category }: Props) => {
  const { addToFavorites } = useFavoriteStore((state) => ({
    addToFavorites: state.addToFavorites,
  }));

  const { places, fetchPlaces } = usePlacesStore((state) => ({
    places: state.places,
    fetchPlaces: state.fetchPlaces,
  }));

  useEffect(() => {
    fetchPlaces();
  }, [category]);

  const filteredPlaces = places.filter((x) => x.category === category);

  const renderItems: ListRenderItem<PlacesType> = ({ item }) => {
    return (
      <Link href={`/listing/${item._id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <TouchableOpacity
              onPress={() => addToFavorites(item)}
              style={styles.bookmark}
            >
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.white}
              />
            </TouchableOpacity>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemTxt}>
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={styles.itemLocationTxt}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceTxt}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={filteredPlaces.length > 0 ? filteredPlaces : places}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});
