import CustomButton from "@/components/shared/CustomButton";
import { router } from "expo-router";
import { SafeAreaView, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/tabs/(stack)/products")}
        >
          Productos
        </CustomButton>
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/tabs/(stack)/profile")}
          color="secondary"
        >
          Perfil
        </CustomButton>
        <CustomButton
          onPress={() => router.push("/tabs/(stack)/settings")}
          color="tertiary"
        >
          Ajustes
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default Home;
