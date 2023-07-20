import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";
interface SpecificsProp {
  title: string;
  points: Record<string, any>;
}
const Specifics: React.FC<SpecificsProp> = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        {points.map((item: string, id: any) => (
          <View style={styles.pointWrapper} key={item + id}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
