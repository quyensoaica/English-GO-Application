import FormGroup from "@/components/ui/FormGroup";
import InputCustom from "@/components/ui/Input";
import InputTypes from "@/constants/inputTypes";
import TEXTS from "@/constants/texts";
import globalStyle from "@/styles/globalStyle";
import { Button } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import loginStyles from "./Login.style";

const LoginScreen = () => {
  const router = useRouter();
  const handleGoToRegisterScreen = () => {
    // Navigate to register screen
    router.navigate("/register");
  };
  const handleGoToForgetPasswordScreen = () => {
    // Navigate to forget password screen
    router.navigate("/forget-password");
  };
  return (
    <View style={loginStyles.loginContainer}>
      <Text style={[globalStyle.headerText, loginStyles.screenTitle]}>{TEXTS.loginScreen.headerTitle}</Text>
      <Text style={loginStyles.screenDescription}>
        {TEXTS.loginScreen.welcomeMessage}
        <Text style={loginStyles.appName}>{TEXTS.app.appName}.</Text>
        {"\n"}
        {TEXTS.loginScreen.continueMessage}
      </Text>
      <View>
        <FormGroup style={loginStyles.formGroup}>
          <InputCustom style={loginStyles.inputStyle} placeholder={TEXTS.loginScreen.emailPlaceHolder} />
        </FormGroup>
        <FormGroup style={loginStyles.formGroup}>
          <InputCustom
            secureTextEntry
            type={InputTypes.PASSWORD}
            style={loginStyles.inputStyle}
            placeholder={TEXTS.loginScreen.passwordPlaceHolder}
          />
        </FormGroup>
        <Pressable onPress={handleGoToForgetPasswordScreen} style={loginStyles.forgotPassword}>
          <Text>{TEXTS.loginScreen.forgotPassword}</Text>
        </Pressable>
        <Button style={loginStyles.loginButton} onPress={() => {}}>
          <Text style={loginStyles.loginButtonText}>{TEXTS.loginScreen.loginButton}</Text>
        </Button>
      </View>
      <View style={loginStyles.donHaveAccount}>
        <Text style={loginStyles.donHaveAccountText}>{TEXTS.loginScreen.dontHaveAccount}</Text>
        <Pressable onPress={handleGoToRegisterScreen} style={loginStyles.registerNow}>
          <Text style={loginStyles.registerNowText}>{TEXTS.loginScreen.registerNow}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
