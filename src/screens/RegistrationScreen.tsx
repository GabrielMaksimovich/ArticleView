import React, { useMemo } from "react";
import {Alert, KeyboardTypeOptions } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Block } from "../components/SimpleComponents/Block";
import { Text } from "../components/SimpleComponents/Text";
import Logo from "../components/Logo";
import SimpleInput from "../components/SimpleInput";
import { Button } from "../components/SimpleComponents/Button";
import { ValidationItem } from "../components/ValidationItem";

type FormField = 'email' | 'password';

type AutoCapitalizeOptions = "none" | "sentences" | "words" | "characters";

type InputFieldConfig = {
    key: FormField,
    header: string,
    keyboardType?: KeyboardTypeOptions,
    autoCapitalize?: AutoCapitalizeOptions,
    secureTextEntry?: boolean,
};


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

    const inputFields: InputFieldConfig[] = useMemo(() => ([
        {
            key: "email",
            header: "EMAIL",
            keyboardType: "email-address",
            autoCapitalize: "none"
        },
        {
            key: "password",
            header: "PASSWORD",
            secureTextEntry: true
        }
    ]), []);

    return (
        <Block flex={1}>
            <Block flex={1} justifyContent={"center"} alignItems={"center"} bg={"orange"}>
                <Logo />
            </Block>
            <Block flex={2} paddingHorizontal={20} paddingTop={5}>
                {inputFields.map(({ key, header, keyboardType, autoCapitalize, secureTextEntry }) => (
                    <SimpleInput
                        key={key}
                        header={header}
                        value={formik.values[key]}
                        onChangeText={formik.handleChange(key)}
                        onBlur={formik.handleBlur(key)}
                        keyboardType={keyboardType}
                        autoCapitalize={autoCapitalize}
                        secureTextEntry={secureTextEntry}
                        errorMessage={formik.touched[key] && formik.errors[key]}
                    />
                ))}
                <Block marginVertical={10}>
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
