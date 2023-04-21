/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import HeaderWithoutIcons from "../SimpleComponents/HeaderWithoutIcons";
import BadgeSection from "../SimpleComponents/BadgeSection";
import {Block} from "../../styles/Block";
import ArticleSection from "../SimpleComponents/ArticleSection";
import Footer from "../SimpleComponents/Footer";

const Summary = () => {
    return (
        <Block>
            <HeaderWithoutIcons />
            <BadgeSection />
            <ArticleSection />
            <Footer />
        </Block>
    );
};

export default Summary;
