const index = require('./index.js')
const assert = require('assert')

it("Test Case 1 : Range out of bound....", function(){ 
	let date = {'2020-01-01':4,'2020-01-02':-1000001, '2020-01-05':18, '2020-01-06':-6,}; 
	assert.equal(index.solution(date), "Range out of bound...."); 
}) 

it("Test Case 2 : Range out of bound....", function(){ 
	let date = {'2020-01-01':4,'2020-01-02':1000001, '2020-01-05':18, '2020-01-06':-6,}; 
	assert.equal(index.solution(date), "Range out of bound...."); 
}) 

it("Test Case 3 : Date Invalid...", function(){ 
	let date = {'2101-01-01':4, '2020-01-02':-100000, '2020-01-05':18, '2020-01-06':-6,}; 
	assert.equal(index.solution(date), "Date Invalid..."); 
}) 

it("Test Case 4 : Date Invalid...", function(){ 
	let date = {'1969-01-01':4, '2020-01-02':-100000, '2020-01-05':18, '2020-01-06':-6,}; 
	assert.equal(index.solution(date), "Date Invalid..."); 
}) 


// input dictonary only has mon and sat
it("Test Case 5 : { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }", function(){ 
	let date = {'2020-01-05':14, '2020-01-06':2 }; 
	assert.equal(JSON.stringify(index.solution(date)), '{"Mon":2,"Tue":4,"Wed":6,"Thu":8,"Fri":10,"Sat":12,"Sun":14}'); 
})

// input dictonary didn't have  Tue, Thu, Sat,.
it("Test Case 6 : { Mon: -6, Tue: -1, Wed: 4, Thu: 5, Fri: 6, Sat: 4, Sun: 2 }", function(){ 
	let date = {'2020-01-01':4,  '2020-01-03':6, '2020-01-05':2, '2020-01-06':-6,}; 
	assert.equal(JSON.stringify(index.solution(date)), '{"Mon":-6,"Tue":-1,"Wed":4,"Thu":5,"Fri":6,"Sat":4,"Sun":2}'); 
})

it("Test Case 7 : Input must have at least Mon and Sun...", function(){ 
	let date = {'2020-01-02':4, '2020-01-02':-100000, '2020-01-06':-6,}; 
	assert.equal(index.solution(date), "Input must have at least Mon and Sun..."); 
})

it("Test Case 8 : Input must have at least Mon and Sun...", function(){ 
	let date = {'2020-01-01':4, '2020-01-02':-100000};
	assert.equal(index.solution(date), "Input must have at least Mon and Sun..."); 
})

// input dictonary didn't have  Mon, Tue, Fri, Sat,.
it("Test Case 9 : { Mon: -6, Tue: -1, Wed: 4, Thu: 12, Fri: 14, Sat: 16, Sun: 18 }", function(){ 
	let date = {'2020-01-01':4,'2020-01-02':12, '2020-01-05':18, '2020-01-06':-6,};
	assert.equal(JSON.stringify(index.solution(date)), '{"Mon":-6,"Tue":-1,"Wed":4,"Thu":12,"Fri":14,"Sat":16,"Sun":18}'); 
})

// input dictonary of all days.
it("Test Case 10 : { Mon: -6, Tue: -1, Wed: 4, Thu: 12, Fri: 14, Sat: 16, Sun: 18 }", function(){ 
	let date = {'2020-01-01':4, '2020-01-02':4, '2020-01-03':6, '2020-01-04':8,
			'2020-01-05':2, '2020-01-06':-6, '2020-01-07':2, '2020-01-08':-2};
	assert.equal(JSON.stringify(index.solution(date)), '{"Mon":-6,"Tue":2,"Wed":2,"Thu":4,"Fri":6,"Sat":8,"Sun":2}'); 
})