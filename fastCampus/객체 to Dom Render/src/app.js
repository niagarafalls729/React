console.log("gkgkgk");
import { createDom,render } from "./react";
 
const vdom = {
    tag : 'p',
    props : {},
    children : [
        {
            tag : 'h1',
            props : {},
            children : [
                "리엑트만들기"
            ],
        },
        {
            tage : 'ul',
            props : {},
            children : [
                {
                    tage : 'li',
                    props : {style :"color:red"},
                    children : [
                        '안녕하세요'
                    ]
                    
                },{
                    
                    tage : 'li',
                    props : {},
                    children : [
                        '안녕하세요2'
                    ]
                }
            ]
        }
    ],
}
render(vdom,document.querySelector('#root'))