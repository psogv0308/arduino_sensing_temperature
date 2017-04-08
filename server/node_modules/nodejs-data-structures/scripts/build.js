#!/usr/bin/env node
'use strict';
var fs = require("fs");
var path = require("path");
var UglifyJS = require("uglify-js");
var glob = require("glob");
var dir = path.resolve("lib");
glob("**/*.js",{cwd:'lib'},function(err,files) {
    if(err) throw err;
    files.forEach(function(file){
        var file_path = path.resolve(dir + "/" +  file);
        var basename  = path.basename(file_path,'.js');
        var output_path = path.resolve("dist/" + basename + ".min.js");
        uglifyFiles(output_path,file_path);
    });
    console.log(files.length +  " file(s) minified");
});

function uglifyFiles(out_path,in_path) {
    fs.readFile(in_path,'utf8',function(err,data) {
        if(err) throw err;
        var result = UglifyJS.minify(data,{fromString:true});
        fs.writeFile(out_path,result.code,function(err) {
            if(err) throw err;
            console.log('Minified: ',in_path);
        });
    });
}

