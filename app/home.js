import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, ScrollView } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import {
    Header,
    Welcome,
    Card,
} from "../components";

const Home = () => {

    const item = {
        name: 'Product Name',
        description: 'Product Description',
        price: 9.99,
        image: images.Tractor,
    };

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
            <View>
                <Header />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    margin: SIZES.large,
                }}>
                    <Text style={{
                    fontSize: SIZES.large,
                    padding: 10,
                }}>Farming Products</Text>
                    <Card item={item} />
                    <Card item={item} />
                    <Card item={item} />
                    <Card item={item} />
                    <Card item={item} />
                    <Card item={item} />
                    <Card item={item} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home; 
