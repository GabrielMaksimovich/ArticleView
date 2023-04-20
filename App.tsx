import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme, View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import HeaderWithIcons from "./components/CommonUIComponents/HeaderWithIcons";
import {Block} from "./styles/Block";
import BadgeSection from "./components/CommonUIComponents/BadgeSection";
import ArticleSection from "./components/CommonUIComponents/ArticleSection";
import Footer from "./components/CommonUIComponents/Footer";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        >
          <HeaderWithIcons />

          <BadgeSection />

          <ArticleSection />

          <Footer />
        </ScrollView>
    </SafeAreaView>
  );
}

export default App;
