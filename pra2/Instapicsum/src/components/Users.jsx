import styles from "../../common/GlobalStyles";
import { Text, View, Image } from "react-native";

const User = ({ name, avatar, isPremium }) => {
  return (
    <View style={styles.containerAvatar}>
      <Image
        style={styles.avatar}
        source={{
          uri: avatar,
        }}
      />
      <Text style={styles.textAvatar}>{name}</Text>
      <Text style={styles.textAvatar}>{isPremium ? "❤️" : ""}</Text>
    </View>
  );
};

export default User;