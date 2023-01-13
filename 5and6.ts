// 5) Objects can be types, declared like this:
// type MyObject = {
//     user: string;
// }

// import { Console } from "console";

// const me: MyObject = {
//     user: "Horsey"
// }

// function printUser(obj: MyObject) {
//     console.log(obj.user);
// }

// printUser(me);
// Knowing this, create a type that represents a discord user that has the following properties:
// name, which is a string
// isAdmin, which is a boolean
// isGMI, which is a boolean
// and roles, which is an array of strings.

// Then, create a type that represents a discord message that has the following properties:
// user, which is type DiscordUser
// text, which is a string
// keks, which is a number.



type discordUser = {
    name: string;
    isAdmin: boolean;
    isGMI: boolean;
    roles: string[];
}

type message = {
    user: discordUser;
    text: string;
    keks: number;
}

const yahoo: discordUser = {
    name: "yahoo",
    isAdmin: true,
    isGMI: false,
    roles: ["Team Guacemole", "code class"]
}

const myMessage: message = {
    user: yahoo,
    text: "wen moon",
    keks: 0

}
function printUser(obj: discordUser) {
    console.log(obj.name)
}

printUser(yahoo);


// 6) Create functions that use your types:
// - addKekToMessage which takes a discord message
// - canDeleteServer which takes a discord user and checks if they are admin or 
// not before returning a boolean
// - editMessage which takes a discord message, a discorduser, and newText, and IF 
// the user name is the same 
// as the user on the discordmessage itself, allows them to edit the message.

function addKekToMessage(x: message) {
    x.keks += 1
}
console.log("Before adding KEK: ", myMessage);
addKekToMessage(myMessage);
console.log("After adding Kek: ", myMessage);

function canDeleteServer(x: discordUser) {
    if (x.isAdmin === true) {
        return true;
    } else {
        return false;
    }
}

console.log("can delete server: ", canDeleteServer(yahoo));

function editMessage(x: message, y: discordUser, z: string,) {
    if (x.user === y) {
        x.text = z;

    } else {
        console.log("User is not the original sender")
    }
}

editMessage(myMessage, yahoo, "MOON CANCELLED");
console.log("edited message: ", myMessage);