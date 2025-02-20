import * as React from "react";
import { View } from "react-native";
import styles from "./styles";
import TabListItem from "@molecules/tabListItem";
import PreviewItem from "@molecules/previewItem";
import Accordion from "@molecules/accordion";
import Button from "@atoms/button";
import Image from "@atoms/image";

export default function TabList({
  items,
  onPress,
  selected,
  onChange,
  loading,
  style,
}: {
  items?: any;
  onPress?: any;
  selected?: any;
  onChange?: any;
  loading?: any;
  style?: any;
}) {
  const groupBySeason = (seasons, items) => {
    let response: any = [];

    Object.keys(seasons).map((slug, index) => {
      let title = seasons[slug];
      let newItems = items.filter(
        (item) => String(item?.season) === String(slug)
      );
      if (newItems?.length !== undefined && newItems?.length > 0) {
        response.push({
          title,
          slug,
          items: newItems,
        });
      }
    });
    return response;
  };

  const renderSeason = (type, { slug, title, items }, key) => (
    <Accordion key={`season_${slug}_${key}`} title={title} visible={key === 0}>
      <View style={styles.separator}></View>
      {items.length > 0 &&
        items.map((seasonItem, index) =>
          renderItem(type, seasonItem, index, index !== items.length - 1)
        )}
      <View style={styles.separator}></View>
    </Accordion>
  );

  const renderItem = (type, item, index, separator = false) => (
    <React.Fragment key={`item_${item?.id}_${index}`}>
      {type === "list"
        ? renderListItem(item, index, separator)
        : renderGridItem(item, index, separator)}
    </React.Fragment>
  );

  const renderListItem = (item, index, separator) => (
    <>
      <PreviewItem
        name={item?.name}
        image={item?.image}
        duration={item?.duration}
        desc={item?.desc}
        onPress={() => onPress(item)}
        style={styles.preview_list}
      />
      {separator && <View style={styles.separator}></View>}
    </>
  );

  const renderGridItem = (item, index, separator) => (
    <Button
      buttonText={<Image src={item.image} style={styles.image} />}
      buttonStyle={{
        ...styles.preview_grid,
        marginRight: (index + 1) % 3 ? 4 : 0,
      }}
      onPress={() => onPress(item)}
    />
  );

  const renderSection = ({ seasons, items, type = "list" }) => {
    let data = seasons === undefined ? items : groupBySeason(seasons, items);

    return (
      <View style={[type === "grid" && styles.grid]}>
        {data.map((item, index) => {
          return item?.slug
            ? renderSeason(type, item, index)
            : renderItem(type, item, index, index !== data.length - 1);
        })}
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.tabs]}>
        {items.map((item: any, index: number) => (
          <TabListItem
            key={`tab_${item?.slug ?? index}`}
            title={item?.title}
            selected={item?.slug === selected}
            onPress={() => onChange(item?.slug)}
          />
        ))}
      </View>
      <View style={styles.header}></View>
      {!loading &&
        items?.length !== undefined &&
        items
          .filter((item) => item?.slug === selected)
          .map((item: any, index: number) => renderSection(item))}
      <View style={styles.footer}></View>
    </View>
  );
}
