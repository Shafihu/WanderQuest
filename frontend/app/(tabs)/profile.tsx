import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { PlacesType } from "@/types/placesType";

const Profile = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPlaces = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://172.20.10.2:3000/api/places");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setPlaces(data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: PlacesType }) => {
    return (
      <View>
        <Text>{item.category}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={getPlaces}
          style={{
            padding: 10,
            backgroundColor: Colors.primaryColor,
            borderRadius: 8,
          }}
        >
          <Text>Get All Places</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator
          size="small"
          color={Colors.primaryColor}
          style={{ flex: 1 }}
        />
      ) : (
        <FlatList
          data={places || []}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
});
