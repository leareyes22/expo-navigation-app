import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack = false }) => {
          return canGoBack ? (
            <Ionicons
              name="chevron-back-circle-outline"
              color={tintColor}
              onPress={() => onHeaderLeftClick(canGoBack)}
              className="mr-2"
              size={24}
            />
          ) : (
            <Ionicons
              name="grid-outline"
              color={tintColor}
              onPress={() => onHeaderLeftClick(canGoBack)}
              className="mr-2"
              size={24}
            />
          );
        },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Home Screen" }} />
      <Stack.Screen
        name="products/index"
        options={{ title: "Products Screen" }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Product Details",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: "Profile Screen" }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ title: "Settings Screen" }}
      />
    </Stack>
  );
};

export default StackLayout;
