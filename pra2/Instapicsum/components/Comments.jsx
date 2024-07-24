import { Text, View } from "react-native";
import styles from "../common/GlobalStyles";


const Comments = ({author,text}) => {
  return (
    <View style={styles.storyComments}>
      <Text style={styles.authorComment}>{author}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Comments;
