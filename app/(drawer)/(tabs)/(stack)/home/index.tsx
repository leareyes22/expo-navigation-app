import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { SafeAreaView, View } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton className="mb-2" onPress={() => router.push("/products")}>
          Products
        </CustomButton>
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/profile")}
          color="secondary"
        >
          Profile
        </CustomButton>
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/settings")}
          color="tertiary"
        >
          Settings
        </CustomButton>
        <CustomButton onPress={onToggleDrawer} color="secondary">
          Open Menu
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default Home;
