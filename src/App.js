import React from "react";
import { Provider } from "react-redux";
import Navigation from "./Navigator";
import { store } from "./store";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated", "Module RCTImageLoader"]);
YellowBox.ignoreWarnings(["Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).", "Module RCTImageLoader"]);

const App = () => {
  return (
   	<Provider store={store}>
   		<Navigation />
   	</Provider>
  )
}

export default App;