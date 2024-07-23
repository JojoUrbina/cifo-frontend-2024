import { Text, View, Image } from "react-native";
import styles from "../common/GlobalStyles";

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
    </View>
  );
};

export default User;
