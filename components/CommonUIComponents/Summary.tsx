/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import HeaderWithoutIcons from "../SimpleComponents/HeaderWithoutIcons";
import {Block} from "../../styles/Block";
import ArticleSection from "../SimpleComponents/ArticleSection";
import Footer from "../SimpleComponents/Footer";
import BadgeSummary from "../SimpleComponents/BadgeSummary";
import SwitchBtn from "../SimpleComponents/SwitchBtn";

const Summary = () => {
    return (
        <Block>
            <HeaderWithoutIcons text='Prepare' title='Summary'/>
            <BadgeSummary />
            <SwitchBtn />
            <ArticleSection />
            <Footer title='Pull the trigger to scan a carton barcode.'/>
        </Block>
    );
};

export default Summary;
