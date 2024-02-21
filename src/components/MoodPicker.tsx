import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, useWindowDimensions } from "react-native";

import { MoodOptionType } from "../types";
import { theme } from "../theme";
import { PressableArea } from "./PressableArea";
import Reanimated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const imageSrc = require('../../assets/butterflies.png');

const moodOptions: MoodOptionType[] = [
    { emoji: '🧑‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
    handleSelectMood: (moodOption: MoodOptionType) => void;
}

export const MoodPicker: React.FC<MoodPickerProps> = ({ handleSelectMood }) => {

    const dimensions = useWindowDimensions(); //Gives width and height of window
    const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
    const [hasSelected, setHasSelected] = useState<boolean>(false);

    const buttonStyle = useAnimatedStyle(() => ({
        opacity: selectedMood ? withTiming(1) : withTiming(0.5),
        transform: [{ scale: selectedMood ? withTiming(1) : withTiming(0.8) }]
    }), [selectedMood]);

    const handleSelect = useCallback(() => {
        if (selectedMood) {
            handleSelectMood(selectedMood);
            setSelectedMood(undefined);
            setHasSelected(true);
        }
    }, [handleSelectMood, selectedMood]);

    if (hasSelected) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={imageSrc} />
                <Pressable style={[styles.button]}
                    onPress={() => setHasSelected(false)}>
                    <Text style={styles.buttonText}>Choose Another</Text>
                </Pressable>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>How Are You Right Now?</Text>
            <View style={styles.moodOptions}>
                {moodOptions.map(option => (
                    <View key={option.emoji}>

                        <Pressable
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
            <ReanimatedPressable style={[buttonStyle, styles.button]}
                onPress={handleSelect}>
                <Text style={styles.buttonText}>Choose</Text>
            </ReanimatedPressable>
        </View >
    )
};

const styles = StyleSheet.create({
    moodOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    moodItem: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 0.2,
        marginBottom: 5,
    },
    selectedMoodItem: {
        // borderWidth: 2,
        backgroundColor: '#454C73',
        borderColor: '#fff',
    },
    descriptionText: {
        color: theme.colorPurple,
        textAlign: 'center',
        fontSize: 10,
        fontFamily: theme.fontFamilyBold,
    },
    container: {
        height: 250,
        borderWidth: 2,
        borderColor: theme.colorPurple,
        margin: 10,
        borderRadius: 10,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        letterSpacing: 1,
        textAlign: 'center',
        color: theme.colorWhite,
        fontFamily: theme.fontFamilyBold,
    },
    button: {
        backgroundColor: theme.colorPurple,
        width: 150,
        borderRadius: 20,
        alignSelf: 'center',
        padding: 10,
    },
    buttonText: {
        color: theme.colorWhite,
        textAlign: 'center',
        fontFamily: theme.fontFamilyBold,
    },
    image: {
        alignSelf: 'center',
    }
})