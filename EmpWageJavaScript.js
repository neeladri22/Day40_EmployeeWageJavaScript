console.log("Welcome to emp wage program using java script");

//UC1

/*
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
}
else {
    console.log("Employee is Present");
}


//UC2 -Calculate Daily Employee Wage part time or full time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("EmpWage:" + empWage);


//UC3- get Employee Working Hour
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Working Hour:" + empHrs);
console.log("EmpWage:" + empWage);


//UC4-Calculate Employee Wage for a month
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs in Month:" + empHrs + " " + "EmpWage: " + empWage);

//UC5-Calculate Employee Wage till contion of 160 hours or 20 Days
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days: " + totalWorkingDays +  " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);


//UC6-Store the Daily Wage  with the Total Wage

const IS_PART_TIME = 1; const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4; const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0, empWorkingDays = 0;
let dailyWageArray = new Array();
let empWage = 0, dailyWage = 0;
//Calculate Wages till a condition
while (totalEmpHrs <= MAX_HRS_IN_MONTH && empWorkingDays < MAX_WORKING_DAYS) {
    empWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3; 
    let workingHrs = GetEmpWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs + workingHrs;  //function call
    empWage = totalEmpHrs * WAGE_PER_HOUR;   //calculate from returned value
    //for wage per day
    dailyWage = workingHrs * WAGE_PER_HOUR;
    dailyWageArray.push(dailyWage);
}
console.log("\nTotal working Days : " + empWorkingDays + " | Total working hours : " + totalEmpHrs + " | Month's Total Employee Wage : " + empWage);
console.log("Daily wage : " + dailyWageArray)
function GetEmpWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;  
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;   
        default:
            return 0;
    }
}



//UC7 RG
//Daily Wage Opeartions
console.log("Welcome to EmpWage Calculation Program in JS")
//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;
//Variables
let monthlyEmpWage = 0;
let dailyWorkingHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();
while (totalWorkingDays < MAX_WORKING_DAY_PER_MONTH && totalWorkingHrs < MAX_WORKING_HRS_PER_MONTH) {
    dailyWorkingHrs = GetWorkingHrs();
    dailyEmpWageArray.push(GetDailyWage(dailyWorkingHrs));
    totalWorkingHrs += dailyWorkingHrs;
    totalWorkingDays++;
}
//UC7A
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
dailyEmpWageArray.forEach(sum);
function TotalEmpWages(totalEmpWage, dailyWage) {
    return totalEmpWage + dailyWage;
}
console.log("UC7A:- TotalEmpWage by Reduce Method :" + dailyEmpWageArray.reduce(TotalEmpWages, 0));
//UC7B
let dailyCounter = 0;
function MapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + "=" + dailyWage;
}
let mapDayWithWageArray = dailyEmpWageArray.map(MapDayWithWage);
console.log("UC7B Wage with Day " + mapDayWithWageArray);
console.log("Employee wage for this month is " + monthlyEmpWage + " Total hrs & days worked are " + totalWorkingHrs + ", " + totalWorkingDays);
//UC7C
function FullTimeWage(dailyWage) {
    return dailyWage.includes(160);
}
let fullDayWageArray = mapDayWithWageArray.filter(FullTimeWage);
console.log("UC7C:- Daily Wage filter when fullWage earned " + fullDayWageArray);
//UC7D
function FindFirstOccurenceOfFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D:- First Occurence of Full Time Wage: " + mapDayWithWageArray.find(FindFirstOccurenceOfFullTimeWage));
//UC7E 
function IsAllTimeFullWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E:- Check all elements have full time wage: " + fullDayWageArray.every(IsAllTimeFullWage));
//UC7F
function IsAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F:- If any part time wage is there: " + mapDayWithWageArray.some(IsAnyPartTimeWage));
//UC7G
function NoOfDaysEmployeePresentOrPartTime(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G:- No. of days employee present or part time: " + dailyEmpWageArray.reduce(NoOfDaysEmployeePresentOrPartTime, 0));
//Method to get Work hours
function GetWorkingHrs() {
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(dailyWorkingHrs) {
    return dailyWorkingHrs * WAGE_PER_HR;
}



//UC8 RG

//Store Day and Daily Wage along with Total Wage

//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;
//Variables
let monthlyEmpWage = 0;
let dailyWorkingHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();
//Daily EmpWage in Map
let dailyEmpWageMap = new Map();
while (totalWorkingDays < MAX_WORKING_DAY_PER_MONTH && totalWorkingHrs < MAX_WORKING_HRS_PER_MONTH) {
    dailyWorkingHrs = GetWorkingHrs();
    dailyEmpWageArray.push(GetDailyWage(dailyWorkingHrs));
    totalWorkingHrs += dailyWorkingHrs;
    totalWorkingDays++;
    dailyEmpWageMap.set(totalWorkingDays, GetDailyWage(dailyWorkingHrs));
}
console.log(dailyEmpWageMap);
console.log("UC8A:- Total EmpWage by Map: " + Array.from(dailyEmpWageMap.values()).reduce(TotalEmpWages, 0))
//UC7A
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
dailyEmpWageArray.forEach(sum);
function TotalEmpWages(totalEmpWage, dailyWage) {
    return totalEmpWage + dailyWage;
}
console.log("UC7A:- TotalEmpWage by Reduce Method :" + dailyEmpWageArray.reduce(TotalEmpWages, 0));
//UC7B
let dailyCounter = 0;
function MapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + "=" + dailyWage;
}
let mapDayWithWageArray = dailyEmpWageArray.map(MapDayWithWage);
console.log("UC7B Wage with Day " + mapDayWithWageArray);
console.log("Employee wage for this month is " + monthlyEmpWage + " Total hrs & days worked are " + totalWorkingHrs + ", " + totalWorkingDays);
//UC7C
function FullTimeWage(dailyWage) {
    return dailyWage.includes(160);
}
let fullDayWageArray = mapDayWithWageArray.filter(FullTimeWage);
console.log("UC7C:- Daily Wage filter when fullWage earned " + fullDayWageArray);
//UC7D
function FindFirstOccurenceOfFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D:- First Occurence of Full Time Wage: " + mapDayWithWageArray.find(FindFirstOccurenceOfFullTimeWage));
//UC7E 
function IsAllTimeFullWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E:- Check all elements have full time wage: " + fullDayWageArray.every(IsAllTimeFullWage));
//UC7F
function IsAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F:- If any part time wage is there: " + mapDayWithWageArray.some(IsAnyPartTimeWage));
//UC7G
function NoOfDaysEmployeePresentOrPartTime(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G:- No of days employee present or part time: " + dailyEmpWageArray.reduce(NoOfDaysEmployeePresentOrPartTime, 0));
//Method to get Work Hours
function GetWorkingHrs() {
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(dailyWorkingHrs) {
    return dailyWorkingHrs * WAGE_PER_HR;
}



//UC9
//Operation on Daily Wage Map

//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

//Variables
let monthlyEmpWage = 0;
let dailyWorkingHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();
//Daily EmpWage in Map
let dailyEmpWageMap = new Map();

while (totalWorkingDays < MAX_WORKING_DAY_PER_MONTH && totalWorkingHrs < MAX_WORKING_HRS_PER_MONTH) {
    dailyWorkingHrs = GetWorkingHrs();
    dailyEmpWageArray.push(GetDailyWage(dailyWorkingHrs));
    totalWorkingHrs += dailyWorkingHrs;
    totalWorkingDays++;
    dailyEmpWageMap.set(totalWorkingDays, GetDailyWage(dailyWorkingHrs));
}
console.log(dailyEmpWageMap);
console.log("UC8A:- Total EmpWage by Map: " + Array.from(dailyEmpWageMap.values()).reduce(TotalEmpWages, 0))
//UC7A
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
dailyEmpWageArray.forEach(sum);
function TotalEmpWages(totalEmpWage, dailyWage) {
    return totalEmpWage + dailyWage;
}
console.log("UC7A:- TotalEmpWage by Reduce Method :" + dailyEmpWageArray.reduce(TotalEmpWages, 0));
//UC7B
let dailyCounter = 0;
function MapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + "=" + dailyWage;
}
let mapDayWithWageArray = dailyEmpWageArray.map(MapDayWithWage);
console.log("UC7B Wage with Day " + mapDayWithWageArray);
console.log("Employee wage for this month is " + monthlyEmpWage + " Total hrs & days worked are " + totalWorkingHrs + ", " + totalWorkingDays);
//UC7C
function FullTimeWage(dailyWage) {
    return dailyWage.includes(160);
}
let fullDayWageArray = mapDayWithWageArray.filter(FullTimeWage);
console.log("UC7C:- Daily Wage filter when fullWage earned " + fullDayWageArray);

//UC7D
function FindFirstOccurenceOfFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D:- First Occurence of Full Time Wage: " + mapDayWithWageArray.find(FindFirstOccurenceOfFullTimeWage));

//UC7E 
function IsAllTimeFullWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E:- Check all elements have full time wage: " + fullDayWageArray.every(IsAllTimeFullWage));

//UC7F
function IsAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F:- If any part time wage is there: " + mapDayWithWageArray.some(IsAnyPartTimeWage));

//UC7G
function NoOfDaysEmployeePresentOrPartTime(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G:- No of days employee present or part time: " + dailyEmpWageArray.reduce(NoOfDaysEmployeePresentOrPartTime, 0));

//UC9A
const findTotal = (totalvalue, dailyvalue) => {
    return totalvalue + dailyvalue;
}
let count = 0;
let totalSalary = dailyEmpWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A: EmpWage with Arrow : " + " Total Wages: " + totalSalary);

//UC9B
let nonWorkingDays = new Array();
let noOfPartTimeDays = new Array();
let noOfFullTimeDays = new Array();
dailyEmpWageMap.forEach((value, key, map) => {
    if (value == 160) noOfFullTimeDays.push(key);
    else if (value == 80) noOfPartTimeDays.push(key);
    else nonWorkingDays.push(key);
})
console.log("Full working days are : " + noOfFullTimeDays);
console.log("Part Time  Working days are : " + noOfPartTimeDays);
console.log("Non Working days are : " + nonWorkingDays);
//Method to get Work Hours  
function GetWorkingHrs() {
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(dailyWorkingHrs) {
    return dailyWorkingHrs * WAGE_PER_HR;
}



//UC10
//
//Store Day, Hours Worked and Employee Wage earned in single object
//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

//Variables

let totalEmpHrs = 0
let totalWorkingDays = 0;
let empHrs =0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();

while (totalEmpHrs <= MAX_WORKING_HRS_PER_MONTH && totalWorkingDays < MAX_WORKING_DAY_PER_MONTH){
    totalWorkingDays++;

    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = GetWorkingHrs(empCheck);
    totalEmpHrs+=empHrs;
    dailyEmpWageArray.push({
        dayNum: totalWorkingDays,
        dailyHours:empHrs,
        dailyWage: GetDailyWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum + '=> Working Hours is ' + this.dailyHours+ ' And Wage earned = ' + this.dailyWage
        },
    
    });
}
console.log("UC 10 showing Daily Hours Worked and Wage Earned: " + dailyEmpWageArray);

function GetWorkingHrs() {
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}
*/

//UC11
//Object Operation using arrow functions
//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;
let totalEmpHrs=0;

//Variables
let totalWorkingDays = 0;
let empHrs =0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();

while (totalEmpHrs <= MAX_WORKING_HRS_PER_MONTH && totalWorkingDays < MAX_WORKING_DAY_PER_MONTH){
    totalWorkingDays++;

    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = GetWorkingHrs(empCheck);
    totalEmpHrs+=empHrs;
    dailyEmpWageArray.push({
        dayNum: totalWorkingDays,
        dailyHours:empHrs,
        dailyWage: GetDailyWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum + '=> Working Hours is ' + this.dailyHours+ ' And Wage earned = ' + this.dailyWage
        },
    
    });
}
console.log("UC 10 showing Daily Hours Worked and Wage Earned: " + dailyEmpWageArray);

function GetWorkingHrs() {
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}

//Variables
let monthlyEmpWage = 0;
let dailyWorkingHrs = 0;
let totalWorkingHrs = 0;

//Daily EmpWage in Map
let dailyEmpWageMap = new Map();

let totalEmpWage = dailyEmpWageArray.filter(dailyHrsandWage => dailyHrsandWage.dailyWage > 0)
                    .reduce((totalEmpWage, dailyHrsandWage)=>totalEmpWage+=dailyHrsandWage.dailyWage,0);
let TotalEmpHrs = dailyEmpWageArray.filter(dailyHrsandWage => dailyHrsandWage.dailyWage > 0)
                    .reduce((TotalEmpHrs, dailyHrsandWage)=>TotalEmpHrs+=dailyHrsandWage.dailyWage,0);
console.log("UC 11A Total Hours : " + TotalEmpHrs+ " Total Wages: " + totalEmpWage)

process.stdout.write("UC 11 B Logging Full Work Days")
dailyEmpWageArray.filter(dailyHrsandWage=> dailyHrsandWage.dailyHours==8)
                .forEach(dailyHrsandWage=> process.stdout.write(dailyHrsandWage.toString()));

let partWorkingDayStrArr=dailyEmpWageArray.filter(dailyHrsandWage=> dailyHrsandWage.dailyHours==4)
.map(dailyHrsandWage=> dailyHrsandWage.toString());

console.log("\nUC 11C PartWorkingDayString : " + partWorkingDayStrArr);

let nonWorkingDayNums = dailyEmpWageArray.filter(dailyHrsandWage=> dailyHrsandWage.dailyHours==0)
.map(dailyHrsandWage=> dailyHrsandWage.toString());
console.log("\nUC 11D NonWorkingDayString : " + nonWorkingDayNums);
