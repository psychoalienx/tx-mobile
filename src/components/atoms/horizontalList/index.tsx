import * as React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";

export default function HorizontalList({
  type,
  items,
  render,
  empty,
  loading = false,
  header = styles.header,
  footer = styles.footer,
  separator = styles.separator,
}: {
  type: string;
  items: any;
  render: any;
  loading: boolean;
  empty?: any;
  header?: {};
  footer?: {};
  separator?: {};
}) {
  return (
    <FlatList
      horizontal={true}
      scrollEnabled={loading === false}
      showsHorizontalScrollIndicator={false}
      data={items}
      refreshing={loading}
      keyExtractor={(item: { id: 0 }, index) => `${type}_${item?.id ?? index}`}
      renderItem={render}
      ItemSeparatorComponent={() => <View style={separator} />}
      ListHeaderComponent={() => <View style={header} />}
      ListFooterComponent={() => <View style={footer} />}
      ListEmptyComponent={empty}
    />
  );
}
