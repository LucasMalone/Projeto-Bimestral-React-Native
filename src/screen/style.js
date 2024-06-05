import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent:"center"  
    },

    titleLogin: {
        flex:"between",
        //backgroundColor:'blue',
        alignItems: "center",
        justifyContent:"center"
    },

    formLogin: {
        flex:"between",
        //backgroundColor:'green',
        alignItems: "center",
        justifyContent:"center",
        marginTop: 300
    },

    input: { 
        border: "2px solid #ffcbdb",
        outline: "none",
    },

    pageTitle: {
        color: "red",
        fontSize: 75,
    },
})

export default styles;