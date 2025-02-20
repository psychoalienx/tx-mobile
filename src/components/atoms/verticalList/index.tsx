import * as React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";

export default function VerticalList({
  type,
  items,
  render,
  columns = 1,
  loading = false,
  empty,
  listStyles,
  headerRender,
  footerRender,
  separator = styles.separator,
  header = styles.header,
  footer = styles.footer,
}: {
  type?: string;
  items: any;
  render: any;
  columns?: number;
  loading?: boolean;
  empty?: any;
  listStyles?: object;
  headerRender?: any;
  footerRender?: any;
  separator?: {};
  header?: {};
  footer?: {};
}) {
  return (
    <FlatList
      columnWrapperStyle={listStyles}
      numColumns={columns}
      scrollEnabled={loading === false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={items}
      refreshing={loading}
      keyExtractor={(item: { id: 0 }, index: number) =>
        `${type}_${item?.id ?? index}`
      }
      renderItem={render}
      ItemSeparatorComponent={() => <View style={separator} />}
      ListHeaderComponent={() =>
        headerRender ? headerRender : <View style={header} />
      }
      ListFooterComponent={() =>
        footerRender ? footerRender : <View style={footer} />
      }
      ListEmptyComponent={empty}
    />
  );
}
