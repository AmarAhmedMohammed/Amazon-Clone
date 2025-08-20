const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors")


app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "form-db",
    password: "1234",
    database: "form-db",
});

app.get("/", (req, res) => {
    res.send("<h1> WELCOME TO FORM PAGE </h1>")
});

app.get("/create", (req, res) => {

    connection.connect((err) => {
        if(err) console.log(`Error happen In Coection: ${err}`);
    });

    let logIn = `CREATE TABLE if not exists Login (
        Number INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(255),
        Email VARCHAR(200),
        Password VARCHAR(100)
    )`;

    connection.query(logIn, (err, res) => {
        if(err) console.log(`Error Happen In Creating Table: ${err}`);
    });

    res.send("<h1> Table Created </h1>");
    console.log("Table Created")
    
});

app.post("/form", (req, res) => {

    const { name, email, password} = req.body;

    let insertInfo = `INSERT INTO Login (Name, Email, Password) VALUES (?, ?, ?)`;

    connection.query(insertInfo, [name, email, password], (err, res) => {
        if(err) console.log(`Error Happen In Inserting Data: ${err}`);
    });

    res.end("Your Form Succesfuly Submited");
    console.log("Data Submited")
});

app.get("/users", (req, res) => {
    const userInfo = `SELECT * FROM Login`;
    connection.query(userInfo, (err, results, field) => {
        if(err) throw err;
        res.send(results)
    })
})

app.listen(1515, () => {
    console.log("Listen On Port http://localhost:1515/");
});