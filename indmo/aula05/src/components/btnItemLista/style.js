import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    v: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#3A3A3A",
        marginTop: 10
    },
    imagem: {
        display: "flex",
        height: 50,
        width: 50
    },
    text: {
        fontSize: 15,
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        marginLeft: 10
        
    },
    bv: {
        borderBottomWidth: 2,
        borderBottomColor: "#53693C",
        flex: 1,
        display: "flex",
        justifyContent: "center"
    }
});