/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import HeaderWithoutIcons from "../SimpleComponents/HeaderWithoutIcons";
import BadgeArticle from "../SimpleComponents/BadgeArticle";
import {Block} from "../../styles/Block";
import ArticleSection from "../SimpleComponents/ArticleSection";
import Footer from "../SimpleComponents/Footer";

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
