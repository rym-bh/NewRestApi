const express=require('express')
const assert =require('assert')
const{MongoClient,ObjectID}=require('mongodb')
const app=express()
app.use(express.json())


const mongoURI="mongodb+srv://rym:taym2017@cluster0-jnrdb.mongodb.net/test?retryWrites=true&w=majority"
const dataBase='contact-list'

MongoClient.connect(mongoURI, { useUnifiedTopology: true },(err,client)=>{
    assert.equal(err,null,'dataBase connection failed')
    const db=client.db(dataBase)
//post
    app.post('/add_contact',(req,res)=>{
        let newContact=req.body
        db.collection('contacts').insertOne(newContact,(err,data)=>{
            err?console.log('cant add product') : res.send(data)
        })
    })
    //get
    app.get('/contacts',(req,res)=>{
        db.collection('contacts').find().toArray((err,data)=>{
            err? console.log('cant get contact') : res.send(data)
        })
    })
    //delete
    app.delete('/delete_contact/:id', (req, res) => {
        let contact = req.params.id;
        db.collection('contacts').findOneAndDelete(
          { _id: ObjectID(contact) },
          (err, data) =>
            err
              ? console.log('cannot delete contact')
              : res.send('contact deleted ')
            
        )
        })
        //edit
        app.put('/edit_contact/:id', (req, res) => {
            let contact = req.params.id;
            db.collection('contacts').findOneAndUpdate(
              { _id: ObjectID(contact) },
              { $set: req.body },
              (err, data) =>
                err
                  ? console.log('cannot modifie contact')
                  : res.send('contact modified')
            );
          });
        // app.put('/edit_contact/:id', (req, res) => {
        //     let id = ObjectID(req.params.id)
        //      let modifiedContact=req.body
        //      db.collection('contacts').findOneAndUpdate({
        //          _id:id},{...modifiedContact},(err,data)=>{
        //             err? console.log('cant get contact') : res.send(data)
        //          })
        //      })

        
})








const port =process.env.PORT || 5000
app.listen(port,(err)=>{
    err? console.log('cannot connect'):console.log(`server is running on ${port}...`)
})