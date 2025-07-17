import { products } from "@/store/product.store";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const Products = () => {
  return (
    <View className="flex flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="mt-10 px-4">
            <Text className="text-2xl font-space-mono">{item.title}</Text>
            <Text className="text-sm font-space-mono">{item.description}</Text>
            <View className="flex flex-row justify-between">
              <Text className="font-space-mono font-bold">{item.price}</Text>
              <Link
                href={`/(stack)/products/${item.id}`}
                className="text-primary"
              >
                View details
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Products;
