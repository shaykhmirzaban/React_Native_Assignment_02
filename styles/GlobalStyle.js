import { StyleSheet } from "react-native"

const inputS = {
    width: "95%",
    marginVertical: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    color: "#333"
}

export default GlobalStyle = StyleSheet.create({
    inputStyle: {
        ...inputS,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        borderBottomStyle: "solid"
    },
    inputStyleWithShadow: {
        ...inputS,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.65,
        elevation: 8,
    },
    inputStyleWithBackground: {
        ...inputS,
        borderWidth: 2,
        borderColor: "#ccc",
        borderStyle: "solid",
        backgroundColor: "#eee",
    },
    textStyle: {
        fontSize: 17,
        padding: 10,
        color: "#333"
    },
    h1: {
        fontSize: 25,
        color: "#000",
        padding: 15,
        textTransform: "capitalize"
    },
    h2: {
        fontSize: 20,
        color: "#000",
        padding: 10,
        textTransform: "capitalize"
    },
    button: {
        minWidth: 120,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "tomato",
        marginVertical: 15,
        marginHorizontal: 10,
    },
    buttonText: {
        color: "#eee",
        fontSize: 17,
        fontWeight: "bold",
    },
    partition: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: 5
    }
}); 