import styles from "../../common/GlobalStyles";
import Picture from "./Picture";
import Comments from "./Comments";
import { Ionicons } from "@expo/vector-icons";
import { View, FlatList } from "react-native";

const Story = ({ photo, author, timestamp, comments }) => {
  return (
    <View style={styles.story}>
      <Picture photo={photo} author={author} timestamp={timestamp} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={comments}
        renderItem={({ item }) => (
          <>
            <Comments
              icon={
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={15}
                  color="#000"
                />
              }
              author={item.username}
              text={item.comment}
            />
          </>
        )}
      />
      <Comments />
      <Ionicons
        style={{ textAlign: "center" }}
        name="ellipsis-horizontal"
        size={45}
        color="#939185"
      />
    </View>
  );
};

export default Story;
