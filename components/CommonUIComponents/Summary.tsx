import React, { useState } from "react";
import HeaderWithoutIcons from "../SimpleComponents/HeaderWithoutIcons";
import { Block } from "../../styles/Block";
import ArticleSection from "../SimpleComponents/ArticleSection";
import Footer from "../SimpleComponents/Footer";
import BadgeSummary from "../SimpleComponents/BadgeSummary";
import SwitchBtn from "../SimpleComponents/SwitchBtn";
import ArticleHeader from "../SimpleComponents/ArticleHeader";
import Carton from "../SimpleComponents/Carton";

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
