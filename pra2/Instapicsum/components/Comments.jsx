import { Text, View } from "react-native";
import styles from "../common/GlobalStyles";

const Comments = ({ author, text, icon }) => {
  return (
    <View style={styles.storyComments}>
      <View style={{flexDirection:"row"}}>
        <Text style={{ marginRight: 5 }}>{icon}</Text>
        <Text style={styles.authorComment}>{author}</Text>
      </View>
      <Text style={styles.comment}>{text}</Text>
    </View>
  );
};

export default Comments;
