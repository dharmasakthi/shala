function solution(date)
{
		let day =  {'Mon':null, 'Tue':null, 'Wed':null, 'Thu':null, 'Fri':null, 'Sat':null, 'Sun':null};
		for (let key in date)
		{
			let d = new Date(key);
			// Check input CASE:1
			if((d.getFullYear() < 1970) || (d.getFullYear() >= 2100))
			{

				if(!((d.getFullYear() == 2100) && (d.getMonth() == 0) && (d.getDate() == 1)))
				{

					return "Date Invalid...";
				}
			}
			// Check input CASE:2
			if(date[key] > 1000000 || date[key] < -1000000)
			{
				return "Range out of bound....";
			}
			// adding key value to the days
			day[days[d.getDay()]] += date[key]; 
			
		}
		day = checkDay(day);
		return day;
}

function checkDay(day)
{
	// Check input CASE:3
	if(day['Mon'] == null || day['Sun'] == null)
	{
		return "Input must have at least Mon and Sun..."
	}
	else
	{
		let start = 0, count = 0, c_count= 0;
		for(let i=0; i<7; i++)
		{
			// console.log("day[Object.keys(day)[i]]" + day[Object.keys(day)[i]])
			if(day[Object.keys(day)[i]] == null)
			{
				count+=1; // count continious missing days
				if(day[Object.keys(day)[i+1]] != 0) // to find end of the days
					c_count = 1;
			}
			else
			{
				if(c_count == 0)
				{
					start = i;
					// console.log("start" + start);
				}
				else if(c_count == 1 && count > 0)
				{
					// i is end value here
					// To calculate the mean average value 
					// formula is (start - end)/(no. of continious missing days/ missing day + 1)
					let value = (day[Object.keys(day)[i]]-day[Object.keys(day)[start]])/(count+1);
					for(let j=start+1; j<i; j++)
					{
						//Add the mean average value
						day[Object.keys(day)[j]] = day[Object.keys(day)[j-1]] + value;
					}
					count = 0; c_count=0;
					start = i; // immediate start of end day

				}
			}
		}
		return day;
	}
}

// retrieve day from getDate()
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];


// // input dictonary of all days.
// let date = {'2020-01-01':4, '2020-01-02':4, '2020-01-03':6, '2020-01-04':8,
// 			'2020-01-05':2, '2020-01-06':-6, '2020-01-07':2, '2020-01-08':-2};
// //OUTPUT { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }

// // function call to solution
// console.log(solution(date));

// // input dictonary only has mon and sat
// date = {'2020-01-05':14, '2020-01-06':2 }
// //OUTPUT { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }

// // function call to solution
// console.log(solution(date));

// // input dictonary didn't have  Tue, Thu, Sat,.
// date = {'2020-01-01':4,  '2020-01-03':6, '2020-01-05':2, '2020-01-06':-6,};
// //OUTPUT { Mon: -6, Tue: -1, Wed: 4, Thu: 5, Fri: 6, Sat: 4, Sun: 2 }

// function call to solution
// console.log(solution(date));

// input dictonary didn't have  Mon, Tue, Fri, Sat,.
// date = {'2020-01-01':4,'2020-01-02':12, '2020-01-05':18, '2020-01-06':-6,};
// //OUTPUT { Mon: -6, Tue: -1, Wed: 4, Thu: 12, Fri: 14, Sat: 16, Sun: 18 }

// // function call to solution
// console.log(solution(date));

// // input dictonary range out of bounce...
// date = {'2020-01-01':4,'2020-01-02':-1000001, '2020-01-05':18, '2020-01-06':-6,};
// //OUTPUT Range out of bound....

// // function call to solution
// console.log(solution(date));

// // input dictonary range out of bounce...
// date = {'2020-01-01':4,'2020-01-02':1000001, '2020-01-05':18, '2020-01-06':-6,};
// //OUTPUT Range out of bound....

// // function call to solution
// console.log(solution(date));

// // input dictonary date invalid...
// date = {'2101-01-01':4, '2020-01-02':-100000, '2020-01-05':18, '2020-01-06':-6,};
// //OUTPUT Date Invalid...

// // function call to solution
// console.log(solution(date));

// // input dictonary date invalid...
// date = {'1969-01-01':4, '2020-01-02':-100000, '2020-01-05':18, '2020-01-06':-6,};
// //OUTPUT Date Invalid...

// // function call to solution
// console.log(solution(date));

// // input dictonary missing sun...
// date = {'2020-01-02':4, '2020-01-02':-100000, '2020-01-06':-6,};
// //OUTPUT Input must have at least Mon and Sun...

// // function call to solution
// console.log(solution(date));

// // input dictonary missing mon...
// date = {'2020-01-01':4, '2020-01-02':-100000};
// //OUTPUT Input must have at least Mon and Sun...

// // function call to solution
// console.log(solution(date));


module.exports = { solution }
