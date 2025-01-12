const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();


const fs = require("fs");

app.use(express.json());
app.use(cors());

const data =  JSON.parse(fs.readFileSync(path.resolve(__dirname, "data.json"),"utf-8"))[0]["page_config"];



app.get("/", (req,res) => {
    res.status(200).json("Hello World");
})

// API 1 : 
app.get("/page1", async (req,res) => {
    const page1Images1 = data.filter((ele) => ele.id==="1");
    const page1Images2 = data.filter((ele) => ele.id==="2");
    res.status(200).json({page1Images1,page1Images2});
});

app.get("/page2", async (req,res) => {
    const page2data = data.filter((ele) => ele.id==="3")[0];
    const {categories,props} = page2data;
    const healthCheckupPackages = props[0].packages;
    const categoryArray = categories["10386"]
    res.status(200).json({categoryArray,healthCheckupPackages});
})

app.get("/gethealthcheckpackages", async (req,res) => {
    let healthcheckpackages = data.filter((ele) => ele.id==="4")[0].props;
    // const newarray = healthcheckpackages.map((ele) => {"imgSrc":`https://medibuddy.in/${ele.imgSrcele});
    healthcheckpackages = healthcheckpackages.map((ele) => {
        return {...ele,imgSrc : `https://medibuddy.in/${ele.imgSrc}`}
    })
    res.status(200).json({healthcheckpackages:healthcheckpackages});
})

app.get("/bookhealthpackages", async (req,res) => {
    let result = data.filter((ele) => ele.id==="5")[0].props;
    result = result.map((ele) => {
        return {...ele,imgSrc : `https://medibuddy.in${ele.imgSrc}`}
    })
    res.status(200).json({healthpackages:result})
})

app.get("/whatouruserssay", async (req,res) => {
    let result2 = data.filter((ele) => ele.id==="8")[0].props;
    let result = data.filter((ele) => ele.id==="6")[0].props;
    result = result.map((ele) => {
        return {...ele,imgSrc : `https://medibuddy.in/${ele.imgSrc}`}
    })
    res.status(200).json({whatouruserssay:result,features:result2})
})

app.get("/howitworks", async (req,res) => {
    let result = data.filter((ele) => ele.id==="7")[0].props[0].points;
    result = result.map((ele) => {
        return {...ele,img : `https://medibuddy.in${ele.img}`}
    })
    res.status(200).json({howitworks:result});
})

app.get("/faqs", async (req,res) => {
    let result = data.filter((ele) => ele.id==="7")[0].props;
    let newarray = []
    for(let i=1; i<result.length;i++)
        newarray = [...newarray,result[i]]
    res.status(200).json({faqs:newarray});
})

app.use((err,req,res) => {
    res.status(404).json({Error : "Sorry Unexpected Error Occurred!"});
})


app.listen(3001);