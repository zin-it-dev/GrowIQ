import { View, Text } from "react-native";
import React from "react";

import Item from "@/components/ui/Item";

const Home = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to GrowIQ!
            </Text>

            <Item />
        </View>
    );
};

export default Home;
