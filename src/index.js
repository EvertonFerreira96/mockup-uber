import React from "react";
import Map from "./components/Map";
import {StatusBar} from 'react-native'

const App = () => 
(
  <>
  <StatusBar backgroundColor="transparent" translucent barStyle="dark-content"  />
<Map />
</>
);

export default App;
