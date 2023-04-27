import { db } from "./dbConnect.js"//this is all the code in dbconnect

const coll = db.collection("tasks")// db means firestore, coll means got to our database and find "tasks" collection

export async function addNewItem(req, res){//this is a post request, it always comes with a body
    const newItem = req.body//the request is coming in with a body, add the body to the db. it's the new task. the body is the new iformation requesting to be added to the db.
    await coll.add(newItem)//add the new item to tasks, then wait until its done before returning the whole updated list
    getAllItems(req,res)// now return the whole updated list...
}

export async function getAllItems(req, res) { // this is READ
    const itemsMessy = await coll.get()
    const itemsClean = itemsMessy.docs.map(doc => ({...doc.data(), id:doc.id}))
    res.send(itemsClean)
}

export async function deleteItem(req, res) {
    const { itemId } = req.params
    await coll.doc(itemId).delete()
    getAllItems(req, res)
}