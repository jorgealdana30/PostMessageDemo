import {useState} from "react";
import {render} from "react-dom";

export const App = () => {

    const clickMe = () => {
        window.parent.postMessage(
            "Hola esto es un post Message",
            "*"
        );
    };

    const [userInput, setUserInput] = useState("");
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };


    window.addEventListener("message", function (event) {
        // We are receiveing messages from any origin, you can check of the origin by
        // using event.origin

        // get the port then use it for communication.
        var port = event.ports[0];
        if (typeof port === 'undefined') return;

        // Post message on this port.
        port.postMessage("Test")

        // Receive upcoming messages on this port.
        port.onmessage = function (event) {
            console.log("[PostMessage1] Got message" + event.data);
        };
    });


    return (
        <div
            style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <input onChange={handleChange} value={userInput}/>
            <button onClick={clickMe}>Submit</button>
        </div>
    );
}