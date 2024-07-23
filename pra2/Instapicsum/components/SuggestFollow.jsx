import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import User from "./Users";
import styles from "../common/GlobalStyles";
import { data } from "../public/data";
console.log(data.suggestedFollows);

const SuggestFollow = () => {
  const usersSuggested = data.suggestedFollows;

  return (
    <>
      <Text style={styles.title2}>WHO TO FOLLOW</Text>
      <FlatList
        horizontal
        data={usersSuggested}
        renderItem={({ item, index }) => (
          <User
            key={index}
            name={item.username}
            avatar={item.avatar}
            isPremium={item.premium}
          />
        )}
      />
    </>
  );
};

export default SuggestFollow;
