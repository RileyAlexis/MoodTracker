import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { MoodOptionType } from "../types";

const moodOptions: MoodOptionType[] = [
    { emoji: '🧑‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {

    const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

    return (
        <View style={styles.moodOptions}>
            {moodOptions.map(option => (
                <View>

                    <Pressable
                        key={option.emoji}
                        onPress={() => setSelectedMood(option)}
                        style={[styles.moodItem, selectedMood?.emoji === option.emoji ? styles.selectedMoodItem : undefined]}
                    >
                        <Text>{option.emoji}</Text>
                    </Pressable>
                    <Text style={styles.descriptionText}>
                        {option.emoji === selectedMood?.emoji
                            ? option.description
                            : undefined}
                    </Text>
                </View>
            )
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    moodOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    moodItem: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 5,
        borderColor: 'white',
        borderWidth: 2,
    },
    selectedMoodItem: {
        borderWidth: 2,
        backgroundColor: '#454C73',
        borderColor: '#fff',
    },
    descriptionText: {
        color: '#454C73',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 10,
    }
})