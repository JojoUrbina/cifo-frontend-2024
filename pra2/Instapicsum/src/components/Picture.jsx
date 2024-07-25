import styles from "../../common/GlobalStyles";
import { Image, Text, View } from "react-native";

const Picture = ({ photo, author, timestamp }) => {
  const photoTime = new Date(timestamp);
  const today = new Date();
  const diffTime = Math.abs(today - photoTime);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const textHoy = diffDays === 0 && "today";
  const textYesterday = diffDays === 1 && "yesterday";
  const todayYesterdayOrDaysAgo = textHoy || textYesterday || "days ago";
  return (
    <View>
      <Image style={styles.photoStory} source={{ uri: photo }} />
      <Text style={styles.storyFigcaption}>{`Posted ${
        diffDays <= 1 ? "" : diffDays
      } ${todayYesterdayOrDaysAgo} by ${author}`}</Text>
    </View>
  );
};

export default Picture;
