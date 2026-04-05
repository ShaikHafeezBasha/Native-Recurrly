import images from "@/constants/images";
import "@/global.css";
import type { PropsWithChildren, ReactNode } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AuthShellProps = PropsWithChildren<{
  title: string;
  subtitle: string;
  footer?: ReactNode;
}>;

export default function AuthShell({
  title,
  subtitle,
  footer,
  children,
}: AuthShellProps) {
  return (
    <SafeAreaView className="auth-safe-area">
      <KeyboardAvoidingView
        className="auth-screen"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="auth-scroll"
          contentContainerClassName="auth-content"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="auth-brand-block">
            <View className="auth-logo-wrap">
              <View className="auth-logo-mark">
                <Image
                  source={images.splashPattern}
                  resizeMode="cover"
                  className="absolute inset-0 h-full w-full opacity-20"
                />
                <Text className="auth-logo-mark-text">R</Text>
              </View>

              <View>
                <Text className="auth-wordmark">Recurrly</Text>
                <Text className="auth-wordmark-sub">
                  Subscription clarity, built in
                </Text>
              </View>
            </View>

            <Text className="auth-title">{title}</Text>
            <Text className="auth-subtitle">{subtitle}</Text>
          </View>

          <View className="auth-card">{children}</View>

          {footer}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
