export function createDom(node){
    if(typeof node === "string"){
        return document.createTextNode(node);
    }

    const e = document.createElement(node.tag);

    Object.entries(node.props).forEach(([name,value])=>{
        e.setAttribute(name,value)
    });


    node.children.map(createDom).forEach(e.appendChild.bind(e))
    return e;
}


export function render(vdom,container){
    container.appendChild(createDom(vdom));
}