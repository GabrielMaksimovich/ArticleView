import React, { useState } from "react";
import HeaderWithoutIcons from "../components/SimpleComponents/HeaderWithoutIcons";
import { Block } from "../styles/Block";
import ArticleSection from "../components/SimpleComponents/ArticleSection";
import Footer from "../components/SimpleComponents/Footer";
import BadgeSummary from "../components/SimpleComponents/BadgeSummary";
import SwitchBtn from "../components/SimpleComponents/SwitchBtn";
import ArticleHeader from "../components/SimpleComponents/ArticleHeader";
import Carton from "../components/SimpleComponents/Carton";

const Summary = () => {
    const [activeButton, setActiveButton] = useState("Cartons");

    const handleActiveButtonChange = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <Block>
            <HeaderWithoutIcons text="Prepare" title="Summary" />
            <BadgeSummary />
            <SwitchBtn onButtonChange={handleActiveButtonChange} />
            <ArticleHeader title={activeButton === "Articles" ? "ARTICLE NO." : "CARTON NO."} />
            {activeButton === "Articles" ? (
                <ArticleSection />
            ) : (
                <>
                    <Carton />
                    <Footer title="Pull the trigger to scan a carton barcode." />
                </>
            )}
        </Block>
    );
};

export default Summary;
