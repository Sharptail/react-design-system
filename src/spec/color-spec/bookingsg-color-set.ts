import { ColorSet, ValidationTypes } from "../../color/types";

export const BookingSGColorSet: ColorSet = {
    Brand: {
        1: "#EF413D",
        2: "#F26664",
        3: "#F58E8B",
        4: "#F9B5B2",
        5: "#FDDDD7",
        6: "#FFEEEA",
    },
    Primary: "#6F4AB8",
    PrimaryDark: "#6443A6",
    Secondary: "#6443A6",
    Accent: {
        Dark: {
            1: "#355985",
            2: "#68819D",
            3: "#9AABBE",
        },
        Light: {
            1: "#9F82D9",
            2: "#B5A5D7",
            3: "#CEC3E4 ",
            4: "#E2DBEF",
            5: "#F2EFF8",
            6: "#F7F6FB",
        },
    },
    Neutral: {
        1: "#282828", // Text Black
        2: "#424242",
        3: "#686868", // Text Grey
        4: "#A4A4A4",
        5: "#E0E4E5",
        6: "#ECEFEF",
        7: "#F8F8F8",
        8: "#FFFFFF",
    },
    Validation: {
        Green: {
            Text: "#097123", // Validation Text
            Icon: "#4FC029",
            Border: "#95D97F",
            Background: "#F9FDF8", // Validation Background
        },
        Orange: {
            Text: "#B34E00", // Validation Text
            Icon: "#FEAB10",
            Border: "#F9CB77",
            Background: "#FFFCF7", // Validation Background
            Badge: "#F57F17", // Orange Badge Notification
        },
        Red: {
            Text: "#C60000", // Validation Text
            Icon: "#C60000",
            Border: "#DD6666",
            Background: "#FDF7F7", // Validation Background
        },
    } as ValidationTypes,
};
