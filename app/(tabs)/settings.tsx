import "@/global.css";
import { useClerk, useUser } from "@clerk/expo";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const { signOut } = useClerk();
  const { user } = useUser();

  const email =
    user?.primaryEmailAddress?.emailAddress ||
    user?.emailAddresses?.[0]?.emailAddress ||
    "Signed-in user";

  return (
    <SafeAreaView className="flex-1 bg-background px-5 pt-6">
      <View className="gap-4">
        <Text className="text-2xl font-sans-bold text-foreground">
          Settings
        </Text>

        <View className="rounded-3xl bg-white p-5">
          <Text className="text-sm font-sans-medium text-black/50">
            Signed in as
          </Text>
          <Text className="mt-2 text-base font-sans-semibold text-foreground">
            {email}
          </Text>
        </View>

        <Pressable
          className="items-center rounded-2xl bg-red-500 px-5 py-4"
          onPress={() => signOut()}
        >
          <Text className="text-base font-sans-semibold text-white">
            Log out
          </Text>
        </Pressable>

        <Text className="text-sm leading-6 text-black/50">
          Use this button to retest the full Clerk authentication flow from the
          sign-in screen.
        </Text>
      </View>
    </SafeAreaView>
  );
}
