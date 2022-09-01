import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/imgCards";
import Collapse  from "./components/Collapse";
import PropTypes from 'prop-types'; 

const App = () => {

    return (
        <div id="mainDiv">
            <div className="container">
                <div className="row mt-2">
                    <div className="card-group w-100">
                    
                        <div className="col">
                            <Collapse href="collapseExample1">
                                <Card
                                    cardTitle="Nature 1"
                                    ımage="https://picsum.photos/id/1000/200/300"
                                    cardText="Lorem ipsum dolor sit amet 1"
                                    lastUpdate="last update 1 min ago"
                                />
                            </Collapse>
                        </div>

                        <div className="col">
                            <Collapse href="collapseExample2">
                                <Card
                                    cardTitle="Nature 2"
                                    ımage="https://picsum.photos/id/400/200/300"
                                    cardText="Lorem ipsum dolor sit amet 2"
                                    lastUpdate="last update 2 min ago"
                                />
                            </Collapse>
                        </div>

                        <div className="col">
                            <Collapse href="collapseExample3">
                                <Card
                                    ımage="https://picsum.photos/id/1001/200/300"                                
                                    cardText="lorem ipsum dolor sit amet 3"
                                    lastUpdate="last upadte 3 min ago"
                                />
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root"),
);