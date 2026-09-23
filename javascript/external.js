/*
user_name = window.prompt("Please enter your name", "Type your name here");
document.write("<h1>Hello, welcome " + user_name + "!</h1>");
*/
var webmaps =
[
    [
        "Community Crime Map",
        "https://communitycrimemap.com/?address=%20San%20Antonio%20TX",
        "PUT YOUR SHORT COMMUNITY CRIME MAP REVIEW HERE."
    ],

    [
        "Atlas Obscura",
        "https://www.atlasobscura.com/articles/all-places-in-the-atlas-on-one-map",
        "PUT YOUR SHORT ATLAS OBSCURA REVIEW HERE."
    ]
];


function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";

    // A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);

    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";

    return message;
}

function webmap_table()
{
    document.write("<table width=100%>");

    for (var row=0; row < webmaps.length; row++)
    {
        document.write("<tr>");

        for (var column=0; column < webmaps[0].length; column++)
        {
            document.write("<td>" + webmaps[row][column] + "</td>");
        }

        document.write("</tr>");
    }

    document.write("</table>");

    return "";
}
