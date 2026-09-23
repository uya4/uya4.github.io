/*
user_name = window.prompt("Please enter your name", "Type your name here");
document.write("<h1>Hello, welcome " + user_name + "!</h1>");
*/
var webmaps =
[
    [
        "Community Crime Map",
        "https://communitycrimemap.com/?address=%20San%20Antonio%20TX",
        "The Community Crime Map visualizes crime incidents in the City of San Antonio " +
        "and provides information such as crime type, date and time, location type, and address. " +
        "I found the map very user friendly and easy to understand. " +
        "One weakness is that the large number of points creates visual clutter. " +
        "I would improve the map by using point clustering so nearby crimes are grouped together " +
        "and separate as the user zooms in."
    ],

    [
        "Atlas Obscura",
        "https://www.atlasobscura.com/articles/all-places-in-the-atlas-on-one-map",
        "The Atlas Obscura map showcases unusual and surprising places around the world " +
        "for people who want to explore different areas. " +
        "A major strength is the large number and variety of places shown. " +
        "I found the map less user friendly because the controls are confusing and the map itself is fairly small. " +
        "I would improve it by making the map larger, making the zoom controls easier to use, " +
        "and reducing visual clutter in the symbology."
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
