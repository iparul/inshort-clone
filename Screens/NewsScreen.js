import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../API/Context";

// import Carousel from "react-native-snap-carousel";
import Carousel from "react-native-reanimated-carousel";
import SingleNews from "../components/SingleNews";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);
  const [activeIndex, setActiveIndex] = useState();
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.carousel}>
      <GestureHandlerRootView>
        {articles && (
          <Carousel
            data={articles.slice(0, 10)}
            loop
            height={windowHeight}
            vertical={true}
            sliderHeight={300}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item, index }) => (
              <SingleNews item={item} index={index} />
            )}
          />
        )}
      </GestureHandlerRootView>
    </View>
  );
};
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "black",
    transform: [{ scaleY: -1 }],
  },
});

export default NewsScreen;
