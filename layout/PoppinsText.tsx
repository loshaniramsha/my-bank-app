import {Text, TextProps, StyleSheet, TextStyle} from "react-native";
import React from "react";


const PoppinsText:React.FC<TextProps>=({children,style,...props})=>{
    let customFont = "Poppins_400Regular";
    const fontWeight = (style as TextStyle)?.fontWeight;
    console.log(style);


    if (fontWeight) {
        if (fontWeight === "500" || fontWeight === "medium") {
            customFont = "Poppins_500Medium";
        } else if (fontWeight === "600" || fontWeight === "semibold") {
            customFont = "Poppins_600SemiBold";
        } else if (fontWeight === "700" || fontWeight === "bold") {
            customFont = "Poppins_700Bold";
        }
    }


    return(
        <Text style={[{fontFamily:customFont}, style]} {...props}>
            {children}
        </Text>

    );
};

const styles = StyleSheet.create({
    poppinsText: {
        fontFamily: "Poppins_400Regular", // Apply the correct font
    },
});

export default PoppinsText;