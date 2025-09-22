let encodedStr = "How's%20it%20going%3F";
let normalStr = "How's it going?";
let webUri = "http://www.basescripts.com?=Hello World";


console.log("Decoded String:", decodeURIComponent(encodedStr));
console.log("Encoded String:", encodeURIComponent(normalStr));

let encodeWebUri = encodeURI(webUri);
console.log("Encoded Web URI:", encodeWebUri);