// importing DB connection file
import "./config/database.js";
import app from "./config/app.js";
import "dotenv/config";

import { getBucketList, addNewBucket, addNewCard, updateBucketName, getCardList, deleteCard, updateCard, saveHistory, getHistoryList } from './routes/index.js'

const PORT = process.env.PORT || 9002;

app.get("/", (req, res) => {
    res.send("hello Server started!");
});


app.get("/getBucketList", getBucketList);
app.post("/addNewBucket", addNewBucket);
app.post("/updateBucketName", updateBucketName);


app.post("/addNewCard", addNewCard);
app.post("/getCardList", getCardList);
app.post("/deleteCard", deleteCard);
app.post("/updateCard", updateCard);

app.post("/saveHistory", saveHistory);
app.get("/getHistoryList", getHistoryList);


app.listen(PORT, () => {
    console.log("Server is running on port 9002");
});