//Zachary Washburn
//resumeBuilder.js
//Helps build the resume page
var work = {
	"jobs": [
		{
			"employer" : "ZW Apps",
			"title" : "President",
			"datesWorked" : "A few years",
			"description" : "Leading a startup",
			"location" : "From Home"
		},
		{
			"employer" : "Coopersville High School Band",
			"title" : "Section Leader",
			"datesWorked" : "2014 - current",
			"description" : "Led the trumpets",
			"location" : "Coopersville High School"
		},
		{
			"employer" : "Coopersville HS Jazz Band",
			"title" : "Lead Trumpeter",
			"datesWorked" : "2014 - current",
			"description" : "Best Trumpeter",
			"location" : "Coopersville High School"
		}
	]
};
var projects = {
	"projects" : [
		{
			"title" : "Trumpet Utility",
			"datesWorked" : "2013 - current",
			"description" : "A Cordova Android App",
			"images" : {
				"URL1" : "http://washbz250.x10.mx",
				"URL2" : "http://images.google.com"
			}
		}
	]
};
var bio = {
	"name" : "Zachary Washburn",
	"role" : "Lead Programmer",
	"welcomeMessage" : "Hello, I'm Zach",
	"contacts" : {
		"Mobile" : "(616)929-2758",
		"Email" : "washbz250@gmail.com",
		"Github" : "washbz250",
		"Twitter" : "@washbz250"
	},
	"skills" : [
		"Programming",
		"Critical Thinking",
		"Attention to Detail",
		"Trumpet playing",
		"Music",
		"Planning"
	]
};
var education = {
	"schools" : [
		{
			"name" : "Coopersville Middle School",
			"location" : "Michigan, USA",
			"degree" : "Middle School Diploma",
			"majors" : [
				"Band",
				"History",
				"Science"
			],
			"datesAttended" : "2012-2013",
			"URL" : "http://coopersvillebroncos.org"
		},
		{
			"name" : "Coopersville High School",
			"location" : "Michigan, USA",
			"degree" : "HS Diploma",
			"majors" : [
				"Band",
				"Trumpet",
				"History",
				"CompSci"
			],
			"datesAttended" : "2013 - current",
			"URL" : "http://coopersvillebroncos.org"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"datesAttended" : "2015",
			"URL" : "http://udacity.com"
		},
		{
			"title" : "Python",
			"school" : "Codecademy",
			"datesAttended" : "2013 - 2015",
			"URL" : "http://codecademy.com"
		},
		{
			"title" : "HTML and CSS",
			"school" : "Codecademy",
			"datesAttended" : "2013 - 2014",
			"URL" : "http://codecademy.com"
		}
	]
};
// If statement
if(bio.skills.length > 0 ){
	// Append header
	$("#header").append(HTMLskillsStart);
	// Append Skills
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkills);
}
function displayWork(){
	for (job in work.jobs){
		//Append header/start
		$("#workExperience").append(HTMLworkStart);
		//Append Jobs/Employers
		//console.log(work.jobs[job].title);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocale = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + " " + formattedTitle + " " + formattedLocale + " " + formattedDates + " " + formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) {
	console.log("Screen X: " + loc.screenX);
	console.log("Screen Y: " + loc.screenY);
});
