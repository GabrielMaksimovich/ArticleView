/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import HeaderWithoutIcons from "../components/HeaderWithoutIcons";
import BadgeArticle from "../components/BadgeArticle";
import {Block} from "../components/SimpleComponents/Block";
import ArticleSection from "../components/ArticleSection";
import Footer from "../components/Footer";
import HeaderWithIcons from "../components/HeaderWithIcons";

const Article = () => {
    return (
        <Block>
            <HeaderWithIcons />
            <HeaderWithoutIcons text='Confirm' title='Article in Carton'/>
            <BadgeArticle />
            <ArticleSection />
            <Footer title='Pull the trigger to start reading'/>
        </Block>
    );
};

export default Article;
