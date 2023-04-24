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

    const item1 = {
        name: 'Tractor',
        description: 'A powerful vehicle designed to provide high traction and pulling force to haul heavy loads or operate various farming implements. Typically equipped with large, rugged tires or tracks, a sturdy chassis, and a powerful engine, tractors are widely used in agriculture, construction, forestry, and other industries that require heavy-duty machinery.',
        price: 10.99,
        image: images.Tractor,
    }

    const item2 = {
        name: 'Plows',
        description: 'Farming tool used for turning over soil and preparing fields for planting.',
        price: 9.99,
        image: images.Plows,
    };

    const item3 = {
        name: 'Irrigation systems',
        description: 'Farming system that delivers water to crops or pastures using pipes, sprinklers, or other methods, to supplement natural rainfall and ensure plant growth.',
        price: 9.99,
        image: images.Irrigation,
    };

    const item4 = {
        name: 'Cultivators',
        description: 'Farming implement used to remove weeds and loosen soil around growing crops.',
        price: 9.99,
        image: images.Cultivators,
    };

    const item5 = {
        name: 'Seed drills',
        description: 'Farming machine that sows seeds in evenly spaced rows and at the appropriate depth.',
        price: 9.99,
        image: images.Seed,
    };

    const item6 = {
        name: 'Harrows',
        description: 'Farming implement used for breaking up and smoothing soil after plowing, or for covering seeds after planting.',
        price: 9.99,
        image: images.Harrows,
    };

    const item7 = {
        name: 'Fertilizers',
        description: 'Farming equipment used to evenly distribute fertilizer or other soil amendments over a field or garden.',
        price: 9.99,
        image: images.Fertilizers,
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
                    <Card item={item1} />
                    <Card item={item2} />
                    <Card item={item3} />
                    <Card item={item4} />
                    <Card item={item5} />
                    <Card item={item6} />
                    <Card item={item7} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home; 
