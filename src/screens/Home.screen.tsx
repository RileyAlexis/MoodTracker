import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useAppContext } from "../App.provider";

import { MoodPicker } from "../components/MoodPicker";
import { MoodOptionType, MoodOptionWithTimestamp } from "../types";
import { format } from 'date-fns';
import { MoodItemRow } from "../components/MoodItemRow";
import { HomeIcon } from "../components/icons";
import Reanimated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const imageUrl =
    'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

export const Home: React.FC = () => {
    const appContext = useAppContext();

    const shared = useSharedValue(0);
    const style = useAnimatedStyle(() => ({
        transform: [
            { translateX: shared.value }
        ]
    }), []);

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
            <View style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}>
                <MoodPicker handleSelectMood={appContext.handleSelectMood} />
                {/* <ReanimatedPressable onPress={() => {
                    shared.value = withTiming(shared.value + 20, { duration: 500 });
                }}
                    style={[styles.square, style]} /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'lightgreen',
    }
})