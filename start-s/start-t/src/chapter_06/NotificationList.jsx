import React from "react";
import Notification from "./Notification"

const reservedNotifications = [
   
    {
        message : "안녕하세요, 오늘 일정을 알려드립니다.",
        
    },
    {
        message : "안녕하세요, 오늘 점심을 알려드립니다.",
        
    },
    {
        message : "안녕하세요, 오늘 저녁을 알려드립니다.",
        
    },
];

var timer ;

class NotificationList extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            notificationarr : [{
                message : "안녕하세요 ."
                
            }] ,
        }
    }

    componentDidMount(){
        const { notificationarr } = this.state;
        
        
         timer = setInterval(() => { 
            
            if(notificationarr && notificationarr.length < reservedNotifications.length){
                const index = notificationarr.length;
                console.log(index);
                notificationarr.push(reservedNotifications[index]);
                this.setState({
                    notification: notificationarr,
                });
            }else{
                
                clearInterval(timer);
                return;
            }
        },  1000);


    }
    render() {
        return(
            <div>
                {  this.state.notificationarr.map((notification) => {
                    
                    return<Notification message={notification.message} />
                })}
            </div>
        );
    }
}
export default NotificationList