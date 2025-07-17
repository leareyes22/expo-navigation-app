import { products } from "@/store/product.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Product Details",
    });
  }, [navigation, product]);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-segoe-ui font-bold text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-segoe-ui">{product.price}</Text>
    </View>
  );
};
export default ProductScreen;
