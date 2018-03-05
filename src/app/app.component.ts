import { Component } from '@angular/core';


var application_root = __dirname,
express = require("express"),
path = require("path");
var app = express();

var databaseUrl = "sampledb";
var collections = ["things"];
var db = require("mongojs").connect(databaseUrl, collections);


// Config

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});






// this section belongs to the started proyect with Angular 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
