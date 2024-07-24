import { Text, View,FlatList } from "react-native";
import styles from "../common/GlobalStyles";

import Picture from "./Picture";
import Comments from "./Comments";

const Story = ({ photo, author, timestamp,comments }) => {
  return (
    <View style={styles.story}>
      <Picture photo={photo} author={author} timestamp={timestamp} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={comments}
        renderItem={({ item }) => (
          <Comments
            author={item.username}
            text={item.comment}
          />
        )}
      />

      <Comments />
    </View>
  );
};

export default Story;
