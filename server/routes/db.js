    var Connection = require('tedious').Connection;  
    var config = {  
        userName: 'psogv0308',  
        password: 'cs20131583!@#',  
        server: 'capstonedb.database.windows.net',  
        // When you connect to Azure SQL Database, you need these next options.  
        options: {encrypt: true, database: 'capstone'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("DB Connected");  
    });  

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
    exports.create_id = function(id,password,token) {  
	request = new Request("INSERT INTO login (ID, PW, TOKEN ,LAST_VISITED) VALUES (\'" + id + "\',\'" + password + "\',\'"+token+"\' ,CURRENT_TIMESTAMP);", function(err,rowCount,rows) {  
	console.log(rows);
        if (err) {  
            console.log(err);
	    return false;
	}  
        }); 
	request.on('row', function(columns) { 
	    console.log(columns);
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                console.log("inserted id is " + column.value);  
              }  
            });  
        });       
        connection.execSql(request);  
   	return true;  
   }
   exports.login = function(token) {
	request = new Request("SELECT LAST_VISITED FROM login WHERE TOKEN = \'"+token+"\'", function(err,rowCount) {  
	if (err) {
	    console.log(err);}
	console.log("row is :"+rowCount);
	});
	request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log("error"); 
		return false; 
              } else {  
		var time=column.value;
                console.log(column.value);  
	      }
	    });
   	});
	request = new Request("UPDATE login SET LAST_VISITED = CURRENT_TIMESTAMP WHERE TOKEN= \'"+token+"\'", function(err) { 
	if (err) {
            console.log(err);}
        });
   	connection.execSql(request); 
	return true;
   }
   exports.sensing = function(id,posture_l,posture_r,waist,neck){
	console.log(id)
	s="INSERT INTO lightbros (DATE_TIME, ID, POSTURE_L , POSTURE_R , WAIST ,NECK) VALUES (CURRENT_TIMESTAMP, \'" + id + "\', " + posture_l + " , "+ posture_r+" , "+waist+" , "+neck+");";
	console.log(s)
	request = new Request("INSERT INTO lightbros (DATE_TIME, ID, POSTURE_L,POSTURE_R, WAIST ,NECK) VALUES (CURRENT_TIMESTAMP, \'" + id + "\', " + posture_l + " , "+ posture_r + " , "+waist+" , "+neck+");", function(err,rowCount,rows) {
        console.log(rows);
        if (err) {
            console.log(err);
            return false;
        }
        });
 	connection.execSql(request);
	return true;
   }
   exports.data = function(id,last_time,callback){
	var ret_json=[];
	request = new Request("SELECT DATE_TIME,POSTURE_L,POSTURE_R,WAIST,NECK FROM lightbros WHERE ID = \'"+id+"\' AND DATE_TIME > \'"+last_time+"\' ORDER BY DATE_TIME ASC", function(err,rowCount) {  
            if (err) {
            	console.log(err);
            }
	});
	request.on('row',function(columns){
	    ret_json.push({DATE_TIME:columns[0].value,POSTURE_L:columns[1].value,POSTURE_R:columns[2].value,WAIST:columns[3].value,NECK:columns[4].value}) 
	});
	request.on('doneInProc',function(){
	    console.log(ret_json);
	    callback(ret_json);
	});
	connection.execSql(request);
   }   
   exports.dump = function(callback){
	var temp=[],time_=[],row=0;
	request = new Request("SELECT TOP 1440 * FROM tempareture ORDER BY time_ ASC;", function(err,rowCount) {  
            if (err) {
            	console.log(err);
            }
	});
	request.on('row',function(columns){
	    temp.push(columns[0].value);
	    time_.push(columns[1].value);
	    row++;
	});
	request.on('doneInProc',function(){
	    //console.log(ret_json);
	    callback(row,time_,temp);
	});
	connection.execSql(request);
   }
   
   exports.temp_data = function(temp){
	s="INSERT INTO tempareture (time_, tempa) VALUES (CURRENT_TIMESTAMP, " + temp +");";
	console.log(s)
	request = new Request(s, function(err,rowCount,rows) {
        console.log(rows);
        if (err) {
            console.log(err);
            return false;
        }
        });
	connection.execSql(request);
	return true;
   }

