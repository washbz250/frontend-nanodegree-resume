//Zachary Washburn
//resumeBuilder.js
//Helps build the resume page
var skills = ["leadership", "Web dev", "JS", "HTML"];
//Object declaration
var bio = {
	"name" : "Zach",
	"age" : 32,
	"skills" : skills
};

//$("#main").append(bio.name);
// Add properties
bio.city = "Mountain View";
bio.email = "washbz250@gmail.com";

// object.property = "Value"

bio["email"] = "newemail@web.com";

//object[property] = "Value";

var work = {};

work.position = "Lead Programmer";
work.employer = "Myself";
work.yearsWorked = "12";
work.cityBusiness = "Coopersville";


var education = {};

education["lastSchool"] = "Coopersville High School";
education["yearsAttended"] = "12";
education["schoolCity"] = "Coopersville";

$("#main").append(work.position);
$("#main").append(education.lastSchool);