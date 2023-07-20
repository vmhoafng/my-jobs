import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SIZES } from "../../../constants";
import styles from "./tabs.style";
interface TabsProps {
  tabs: Array<string>;
  activeTab: string;
  setActiveTab: (item: string) => void;
}
interface TabButtonProps {
  name: string;
  activeTab: string;
  onhandleSearchType: () => void;
}
const TabButton: React.FC<TabButtonProps> = ({
  name,
  activeTab,
  onhandleSearchType,
}) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onhandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);
const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onhandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
