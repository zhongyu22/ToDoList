const express = require("express");
const bodyParser = require("body-parser");
const { redirect } = require("express/lib/response");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var today = new Date();
var currentDay = today.getDay();
var day = "";
let items = [];
let workItems = [];

switch (currentDay) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";    
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day ="Saturday";
        break;
    default:
        console.log("Error");
}

app.get("/", function(req, res) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle:day, newListItem:items});
})

app.post("/", function(req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }
    // console.log(items);
    // console.log(workItems);
})

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItem: workItems})
})

// app.post("/work",  function(req, res){
//     res.redirect("/work");
// })

app.listen(3000, function() {
    console.log("");
})