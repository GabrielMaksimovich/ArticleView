import React, { useState } from "react";
import HeaderWithoutIcons from "../components/HeaderWithoutIcons";
import { Block } from "../styles/Block";
import ArticleSection from "../components/ArticleSection";
import Footer from "../components/Footer";
import BadgeSummary from "../components/BadgeSummary";
import SwitchBtn from "../components/SwitchBtn";
import ArticleHeader from "../components/ArticleHeader";
import Carton from "../components/Carton";
import HeaderWithIcons from "../components/HeaderWithIcons";

const Summary = () => {
    const [activeButton, setActiveButton] = useState("Cartons");

    const handleActiveButtonChange = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <Block>
            <HeaderWithIcons />
            <HeaderWithoutIcons text="Prepare" title="Summary" />
            <BadgeSummary />
            <SwitchBtn onButtonChange={handleActiveButtonChange} />
            <ArticleHeader title={activeButton === "Articles" ? "ARTICLE NO." : "CARTON NO."} />
            {activeButton === "Articles" ? (
                <ArticleSection />
            ) : (
                <Block
                    justifyContent={'space-between'}
                    height={'61%'}
                >
                    <Carton />
                    <Footer title="Pull the trigger to scan a carton barcode." />
                </Block>
            )}
        </Block>
    );
};

export default Summary;
