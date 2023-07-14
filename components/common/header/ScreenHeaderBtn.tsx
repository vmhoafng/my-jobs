import React from "react";
import { TouchableOpacity, Image, ViewStyle, ImageStyle } from "react-native";

import styles from "./screenheader.style";
interface ScreenHeaderBtnProps {
  iconUrl: any;
  dimension: string;
  handlePress: () => void;
}
const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        //ts-ignore
        style={styles.btnImg(dimension) as ImageStyle}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
