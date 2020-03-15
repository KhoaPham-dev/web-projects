//gọi thư viện express
var express = require('express');
var ObjectId = require('mongodb').ObjectID;
//tạo đối tượng có kiểu express()
var app = express();
//gọi thư viện fs
var fs = require("fs");
//khai báo PORT mặc định khi chạy(từ hệ thống, nó có PORT nào thì lấy PORT đó)
var port = 3000;
//chuỗi kết nối tới Cơ sở dữ liệu MongoDB
var url = "mongodb://localhost:27017/";
//Gọi thư viện mongoDB và khởi tạo đối tượng cho nó
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser'); 

app.use(bodyParser.json()); // support json encoded bodies
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


//Thêm URL qrcode, và status nếu chưa có trong DB
app.post('/getQrCode', function (req, res,next) {
	//định dạng content-type là application/x-www-form-urlencoded
	res.setHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
	//Khi định dạng content-type là application/x-www-form-urlencoded
	//thì để truy suất tới các biến từ Client gửi lên ta làm như sau:
	//Lấy đối tượng body trong req.body rồi req.body.[các biến từ client]
	//[các biến từ client] là do lập trình viên quy định
	//ta nên đặt tên biến trùng khớp với các cột trong các Bảng mà ta muốn thêm mới
	//để tránh việc nhầm lẫn cũng như giúp cho các lập trình viên khác và ta dễ đọc
	MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	//kết nối cơ sở dữ liệu demo
	var dbo = db.db("Desktop");
	//Tạo điều kiện chỉ tương tác trên testchecking có qrCode là undefined
	var condition = { $or: [
							{qrCode: undefined}, 
							{status: undefined}
						]
					};
	//Tạo đối tượng JSON đánh dấu chỉnh sửa thông qua từ khóa $set:
	//(chỉnh sửa Status) của testchecking có Status là SttFromClient
	var addCollections = { $set: { status: "0",
							   qrCode: "0"} };
	//gọi lệnh update để cập nhật
	dbo.collection("testchecking-qrcode").update(condition, addCollections, {multi: true},  function (err, obj) {
		if (err) throw err;
		//kết thúc session thì đóng kết nối CSDL
		//db.close();
		//kiểm tra xem cập nhật thành công hay không obj.result.n >0 là thành công
		if (obj.result.n > 0){
			console.log("Fields are added");
			dbo.collection("testchecking-qrcode").find({qrCode: "0"}).toArray(function (err, result) {
				if (err) throw err;
				//đưa dữ liệu lấy được về JSON
				for(const i in result){
					let urlQrcode = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${result[i]["_id"]}`;
					dbo.collection("testchecking-qrcode").updateOne({_id: result[i]["_id"]}, {$set:{qrCode: urlQrcode}}, function (err, obj) {
						console.log("add 1 Qrcode");
						if (err) throw err;
						//console.log("add 1 Qrcode");
						//kết thúc session thì đóng kết nối CSDL
						//db.close();
						//kiểm tra xem cập nhật thành công hay không obj.result.n >0 là thành công
						if (obj.result.n > 0)
						console.log("OK!")
						else console.log('Failed!');
				})
				//xuất ra client
				//res.send(s);
			 	};
			})
		}
		return;

			});
	})
		next();
	}).listen(port);

app.post('/editStatus', function (req, res,next) {
	//định dạng content-type là application/x-www-form-urlencoded
	res.setHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
	//Khi định dạng content-type là application/x-www-form-urlencoded
	//thì để truy suất tới các biến từ Client gửi lên ta làm như sau:
	//Lấy đối tượng body trong req.body rồi req.body.[các biến từ client]
	//[các biến từ client] là do lập trình viên quy định
	//ta nên đặt tên biến trùng khớp với các cột trong các Bảng mà ta muốn thêm mới
	//để tránh việc nhầm lẫn cũng như giúp cho các lập trình viên khác và ta dễ đọc
	var idFromClient = req.body.id;
	var statusFromClient = req.body.status;
	var result = "false";
	MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	//kết nối cơ sở dữ liệu demo
	var dbo = db.db("Desktop");

	if(idFromClient.length == 24){
		//Tạo điều kiện chỉ tương tác trên testchecking có Stt là SttFromClient
		var condition = { _id: ObjectId(idFromClient), status: { $ne: undefined} };
		//Tạo đối tượng JSON đánh dấu chỉnh sửa thông qua từ khóa $set:
		//(chỉnh sửa Status) của testchecking có Status là SttFromClient
		var editStatus = { $set: { status: statusFromClient} };
		//gọi lệnh updateOne để cập nhật
	
		dbo.collection("testchecking-qrcode").updateOne(condition, editStatus,{upsert: false}, function (err, obj) {
			if (err) throw err;
			console.log("1 document edited");
			//kết thúc session thì đóng kết nối CSDL
			//db.close();
			//kiểm tra xem cập nhật thành công hay không obj.result.n >0 là thành công
			if (obj.result.n > 0){
				dbo.collection("testchecking-qrcode").findOne(condition, function (err, result) {
					if (err) throw err;
					//đưa dữ liệu lấy được về JSON
					var s = JSON.stringify(result);
					//console.log(result);
					//xuất ra client
					res.send(s);
					//xong session thì đóng kết nối
					db.close();
					});
				result = "true";
			}
			else{
				res.send(undefined);
			}
			console.log(result);
			return;
		});
	}
	else{
		console.log(false);
		res.send(undefined);
	}
	});
		next();
	}, function(req,res, next){
		res.set({ 
			'Access-control-Allow-Origin': '*'
			}); 
			return; //res.redirect('index.html');).listen(port);
		})
console.log("server listening at port 3000"); 	

// app.get('/', function (req, res) {
// 	//lấy được giá trị truyền vào từ URI:
// 	var MaTim = req.query.Stt;
// 	res.writeHead(200, { 'Content-Type': 'text/json; charset=utf-8' });
// 	MongoClient.connect(url, function (err, db) {
// 	if (err) throw err;
// 	//tạo điều kiện lọc theo Mã
// 	//nó có cú pháp là 1 Json { Stt: MaTim } thì Stt là tên cột, MaTim là giá trị ta muốn lọc
// 	//MaTim lâsy từ req.params.id
// 	var query = { Stt: MaTim }
// 	//Kết nối Cơ sở dữ liệu demo
// 	var dbo = db.db("demo");
// 	//truy vấn dữ liệu từ bảng testchecking và lọc theo MaTim
// 	dbo.collection("testchecking").findOne(query, function (err, result) {
// 	if (err) throw err;
// 	//đưa dữ liệu lấy được về JSON
// 	var s = JSON.stringify(result);
// 	console.log(result);
// 	//xuất ra client
// 	res.end(s);
// 	//xong session thì đóng kết nối
// 	db.close();
// 	});
// 	});
// 	return res.redirect('/public/checking_success.html'); 
// })


	

