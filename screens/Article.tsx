/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import HeaderWithoutIcons from "../components/SimpleComponents/HeaderWithoutIcons";
import BadgeArticle from "../components/SimpleComponents/BadgeArticle";
import {Block} from "../styles/Block";
import ArticleSection from "../components/SimpleComponents/ArticleSection";
import Footer from "../components/SimpleComponents/Footer";

const Article = () => {
    return (
        <Block>
            <HeaderWithoutIcons text='Confirm' title='Article in Carton'/>
            <BadgeArticle />
            <ArticleSection />
            <Footer title='Pull the trigger to start reading'/>
        </Block>
    );
};

export default Article;
