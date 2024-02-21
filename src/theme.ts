import { Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').fontScale;

export const theme = {
    colorPurple: '#454C73',
    colorWhite: '#fff',
    colorLavender: '#87677B',
    colorBlue: '#1D84B5',
    colorGrey: '#8E9AAF',
    colorPink: '#f75e91',

    //Fonts
    fontFamilyBold: 'Kalam-Bold',
    fontFamilyRegular: 'Kalam-Regular',
    fontFamilyLight: 'Kalam-Light',

    //Font Sizes
    fontSize8: 8 * 1.2,
    fontSize12: 12,
    fontSize14: 14,
};