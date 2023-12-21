import {useState} from "react";

export const App = () => {

    const clickMe = () => {
        window.postMessage(
            "Hola esto es un post Message",
            "https://postmessages.netlify.app/"
        );
    };

    const [userInput, setUserInput] = useState("");
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

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