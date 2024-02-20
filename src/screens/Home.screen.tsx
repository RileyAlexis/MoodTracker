import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useAppContext } from "../App.provider";

import { MoodPicker } from "../components/MoodPicker";
import { MoodOptionType, MoodOptionWithTimestamp } from "../types";
import { format } from 'date-fns';
import { MoodItemRow } from "../components/MoodItemRow";
import { HomeIcon } from "../components/icons";

const imageUrl =
    'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: React.FC = () => {
    const appContext = useAppContext();

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
            <View style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}>
                <MoodPicker handleSelectMood={appContext.handleSelectMood} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})