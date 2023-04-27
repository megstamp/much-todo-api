import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { addNewItem, deleteItem, getAllItems } from "./src/items.js"

const app = express()
app.use(cors())
app.use(express.json())

// these are allowed requests
app.post("/items", addNewItem)
app.get("/items", getAllItems)
app.delete('/items/:itemId', deleteItem)

export const api = functions.https.onRequest(app)//this creates the cloud function,lets it work in the cloud/