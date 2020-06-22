import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Button,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import coreService from "../services/core.service";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function DateList() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  const month = new Date().getMonth(),
    year = new Date().getFullYear(),
    today = new Date().getDate(),
    scrollToToday = today - 1;
  const list = coreService.getMonthDates(year, month);

  let flatListRef;

  const selectToday = () => {
    flatListRef.scrollToIndex({
      index: scrollToToday,
      viewPosition: 0.5,
    });
  };

  const todayDateLabel = coreService.getTodayLabel();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={list}

        ref={(ref) => {
          flatListRef = ref;
        }}
        renderItem={
          ({ item }) => (
            <Item
              id={item}
              title={item}
              key={item.toString()}
              selected={selected}
              onSelect={setSelected}
            />
          )
          // <Text style={styles.item}>{item}</Text>
        }
        keyExtractor={(item) => item.toString()}
        extraData={selected}
      />
      <Button title={todayDateLabel} onPress={() => selectToday()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#393e46",
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  title: {
    fontSize: 32,
  },
});
