import React from "react";  

const User = ({USERCONST의인자값}) => {
    return(
        <tr>
            <td>{USERCONST의인자값.name}</td>
            <td>{USERCONST의인자값.email}</td>
        </tr>
    )
}


const UserList = () => {
    const ArrUsers = [
        { email : 'user1@gamil.com' , name : '김지수1'  },
        { email : 'user2@gamil.com' , name : '김지수2'  },
        { email : 'user3@gamil.com' , name : '김지수3'  },
        { email : 'user4@gamil.com' , name : '김지수4'  }, 
    ];


    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>  
            <tbody>
                {ArrUsers.map(아무말이나써도됨 => <User USERCONST의인자값={아무말이나써도됨} />)}
            </tbody>
        </table>
    )
}
export default UserList;