//Hackerman

//WAP to look like a hacker . Write a async function which will simply display the following

// Initialising hacking program...
// hacking <user> username...
// username found <username>...
// connecting to facebook...
// TRy to use HTML and styling

let username = prompt("Enter your username")
let messages = [
    `Initialising   hacking    program . . . . . . . . . `,
    `Hacking    ${username.toUpperCase()}'s    username . . . . . . . . . .  `,
    `Username   found   ${username.slice(0,4)}***** . . . . . . . . . . .   `,
    `Fetching   ${username.toUpperCase()}'s   google   and   instagram . . . . `,
    `Getting   ${username.toUpperCase()}'s   google   password  . . . . .`,
    `Google   password   found   ( ******** ) . . . .`,
    `Instagram   password   found   ( ******** ) . . . .`,
    `Sending   password   to   Naqi . . . . .`,
    `${username.toUpperCase()}'s   account   is   successfully   hacked`
]
let mypromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise resolved");
        }, 2000);
    })
}

let a = async () => {
    for (let i = 0; i < messages.length; i++) {
        await mypromise();
        let div = document.createElement("div");
        div.innerText = `${messages[i]}`;
        document.body.firstElementChild.appendChild(div);
    }
}
a()

