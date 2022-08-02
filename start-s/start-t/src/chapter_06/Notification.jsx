import React from "react";

const styles = {
    wrapper: {
        margin : 9,
        padding : 9,
        display : "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius : 15
    },
    messageText: {
        color: "black"
        ,fontSize : 15

    },
};

class Notification extends React.Component{

    constructor(props){
        super(props);

        this.setState = {};
        console.log("NOTI@"+JSON.stringify(props))
    }
    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>

            </div>
        );
    }
}
export default Notification;