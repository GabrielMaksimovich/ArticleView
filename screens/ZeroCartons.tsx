/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import {Block} from "../styles/Block";
import ArticleSection from "../components/ArticleSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BadgeZero from "../components/BadgeZero";

const ZeroCartons = () => {
    return (
        <Block>
            <Header />
            <BadgeZero />
            <Footer title='Pull the trigger to start reading'/>
        </Block>
    );
};

export default ZeroCartons;
