const userInput = document.getElementById('input');
const morseOutput = document.getElementById('output');
const encodeButton = document.getElementById('encodeButton');
encodeButton.addEventListener('click', function () { textOrMorse(userInput.value); });

const morse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    _: "/",
    _1:".----",
    _2:"..---",
    _3:"...--",
    _4:"....-",
    _5:".....",
    _6:"-....",
    _7:"--...",
    _8:"---..",
    _9:"----.",
    _0:"-----",
};

valueKeys = Object.values(morse);
keyValues = Object.keys(morse);

const textOrMorse = (message) => {
    if (message.match(/[a-zA-Z]/)) return msg2morse(message);
    return morse2msg(message);
};

const msg2morse = (message) => {
    const morseArray = message.toUpperCase().split("").map(char => char == " " ? "_" : char);
    return encode(morseArray);
};

const encode = (message) => {
    const morseCode = [];
    for (i = 0; i <= message.length; i++) {
        morseCode[i] = morse[message[i]];
    }
    return output(morseCode.join(" "));
};

const morse2msg = (morse) => {
    const msgArray = morse.split(" ");
    return decode(msgArray);
};

const decode = (message) => {
    const text = message.map(code => valueKeys.indexOf(code));
    const decodedMessage = text.map(char => keyValues[char] == "_" ? " " : keyValues[char]).join("");
    return output(decodedMessage);
};

const output = (encodedMessage) => {
    morseOutput.value = encodedMessage;
};


