import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Analytics: React.FC = () => {
    return (
        <View>
            <Text style={styles.heading}>
                Analytics
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})