import { View, Text, useWindowDimensions } from "react-native";
import React, { useContext, useState } from "react";

import { TabView, SceneMap } from "react-native-tab-view";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";
import { NewsContext } from "../API/Context";

const InshortTabs = () => {
  const layout = useWindowDimensions();
  const { index, setIndex, news } = useContext(NewsContext);

  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });
  return (
    <>
      {/* {console.log("newsp", news)} */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
      />
    </>
  );
};

export default InshortTabs;
