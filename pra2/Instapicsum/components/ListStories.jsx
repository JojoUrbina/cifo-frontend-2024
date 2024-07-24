import { FlatList, Text, View } from "react-native";
import styles from "../common/GlobalStyles";

import { data } from "../public/data";
import Story from "./Story";

const ListStories = () => {
  const stories = data.stories;

  return (
    <View>
      <Text style={styles.title2}>LATEST STORIES</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={stories}
        renderItem={({ item }) => (
          <Story
            photo={item.picture}
            author={item.username}
            timestamp={item.timestamp}
            comments={item.comments}
          />
        )}
      />
    </View>
  );
};

export default ListStories;
