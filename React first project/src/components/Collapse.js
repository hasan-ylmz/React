import React from "react";

const Collapse = (props) => {
    return (
        <div id="mainDiv">
            <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                React Button 
            </a>
            <div className="collapse show" id={props.href}>
                {props.children}
            </div>
        </div>
    )
}

export default Collapse;