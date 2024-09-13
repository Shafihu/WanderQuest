import Colors from "@/constants/Colors";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useFavoriteStore } from "@/store/favorite-store";

export default function TabLayout() {
  const { favorites } = useFavoriteStore((state) => ({
    favorites: state.favorites,
  }));

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 10,
                height: 50,
              }}
            >
              <Ionicons name="search-outline" size={24} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "relative" }}>
              {favorites.length > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -12,
                    borderRadius: 100,
                    paddingHorizontal: 5,
                    zIndex: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: Colors.bgColor,
                    backgroundColor: Colors.primaryColor,
                  }}
                >
                  <Text style={{ color: Colors.white, textAlign: "center" }}>
                    {favorites.length}
                  </Text>
                </View>
              )}
              <Ionicons name="bookmark" size={28} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
