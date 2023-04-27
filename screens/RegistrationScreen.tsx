import React, { useMemo } from "react";
import { Alert } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Block } from "../../styles/Block";
import { Text } from "../../styles/Text";
import Logo from "../SimpleComponents/Logo";
import SimpleInput from "../SimpleComponents/SimpleInput";
import { Button } from "../../styles/Button";
import { ValidationItem } from "../SimpleComponents/ValidationItem";

const RegistrationScreen = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Valid email").required("Email is required"),
        password: Yup.string()
            .matches(/[a-zA-Z]/, "Includes letters")
            .matches(/\d/, "Includes numbers")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Includes special characters")
            .min(8, "At least 8 characters")
            .matches(/^(?!.*(.)\1{2,}).*$/, "No more than two repetitions of the same character")
            .required("Password is required"),
    });

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema,
        onSubmit: () => {
            Alert.alert("Registration successful");
        },
    });

    const handleSubmit = async () => {
        if (formik.isValid) {
            await formik.submitForm();
        } else {
            Alert.alert("Please correct the invalid fields");
        }
    };

    const passwordValidations = useMemo(() => {
        return [
            { key: "minLength", validation: () => formik.values.password.length >= 8 },
            { key: "hasNumbers", validation: () => /\d/.test(formik.values.password) },
            { key: "hasLetters", validation: () => /[a-zA-Z]/.test(formik.values.password) },
            { key: "hasSpecialChars", validation: () => /[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password) },
            { key: "noRepetitions", validation: () => !/(.)\1{2,}/.test(formik.values.password) },
        ];
    }, [formik.values.password]);

    const renderValidationItems = () => {
        const { password } = formik.values;
        return (
            <>
                <ValidationItem valid={validationSchema.isValidSync(password)} text="Valid password" />
                {passwordValidations.map(({ key, validation }) => (
                    <ValidationItem key={key} valid={validation()} text={key} />
                ))}
            </>
        );
    };

    return (
        <Block flex={1}>
            <Block flex={1} justifyContent={"center"} alignItems={"center"} bg={"orange"}>
                <Logo />
            </Block>
            <Block flex={2} paddingHorizontal={"20px"} paddingTop={"5px"}>
                <SimpleInput
                    header="EMAIL"
                    value={formik.values.email}
                    onChangeText={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    errorMessage={formik.touched.email && formik.errors.email}
                />
                <SimpleInput
                    header="PASSWORD"
                    value={formik.values.password}
                    onChangeText={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    secureTextEntry={true}
                    errorMessage={formik.touched.password && formik.errors.password}
                />
                <Block marginTop={"10px"} marginBottom={"10px"}>
                    {renderValidationItems()}
                </Block>
                <Button
                    onPress={handleSubmit}
                    alignItems={"center"}
                    justifyContent={"center"}
                    bg={"#3b5998"}
                    width={"100%"}
                    height={"30px"}
                >
                    <Text color={"#fff"}>LOGIN</Text>
                </Button>
                <Block
                    marginTop={'5px'}
                >
                    <Text
                        color={'grey'}
                        textAlign={'center'}
                        marginBottom={10}
                    >
                        FORGOT PASSWORD?
                    </Text>
                    <Text
                        fontSize={8}
                        textAlign={'center'}
                    >
                        2.3.19 (202012041745) - DEBUG
                    </Text>
                </Block>
            </Block>
        </Block>
    );
};

export default RegistrationScreen;
