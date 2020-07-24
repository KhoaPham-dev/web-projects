
const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path');
//Connect MongoDB
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const bodyParser= require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//First Initializing: Connect mongoDB, open port
mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db('map');
    app.listen(5000, () => {
      console.log('App listening on port 5000')
   })
})
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/preload', (req, res, next)=>{
  db.collection('dataPath').find({}).toArray((err, dataPath)=>{
    if(err) throw err;
    if(!dataPath[0]) throw new Error("Empty");
    result = {
      path: dataPath[0].path,
      vertexs: dataPath[0].vertexs,
      width: dataPath[0].width,
      height: dataPath[0].height,
      information: dataPath[0].information
    }
    console.log(result);
    res.json(result);
  })
})
//Upload dataPath to db
app.post('/upload-data', function(req,res,next){ 
  let dataPath = req.body; 
  let path = dataPath.path;
  let vertexs = dataPath.vertexs;
  let width = dataPath.width;
  let height = dataPath.height;
  let information = dataPath.information;
  db.collection('dataPath').updateOne(
    {},
    { $set: { path,
              vertexs,
              width,
              height,
              information
            } 
    },
    function(err, collection){ 
      if (err) throw err; 
      console.log("Record inserted Successfully"); 
	}); 
		
	return res.redirect('/');
}) 
