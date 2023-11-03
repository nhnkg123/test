
function isLeapYear (year) {
    if (year % 4 == 0 && year < 1918) {
        return true;
    } else if (year % 400 == 0 && year % 4 ==0 && year % 100 !=0) {
        return true;
    }
    return false;
}

function calculateDay (month, year) {
    let Day;
    
    //4,6,9,11 -> 30 ngay
    if (month==4 || month==6 || month==9 || month==11) {
        Day = 30;
    } else if (month==1 || month==3 || month== 5 || month==7 || month==8 || month== 10 || month==12) {
        Day = 31;
    }


    if(month ==2) {
        if (isLeapYear(year)) {
            Day = 29;
            if (year == 1918) {
                Day = Day - 14;
            }          
        } else {
            Day = 28;
            if (year == 1918) {
                Day = Day - 14;
            }   
        }
    }

    return Day;
}

function dayOfProgrammer(year) {
    // Write your code here
    // Juilian or Gregorian at 1918 
    // Feb on leap year is 29 (Julian % 4 =0; Gregorian %400 && %4, !% 100)
    // find 256th day --> { "thang": ngay} if ...
    let sumDay = 0;
    let MonthResult;
    
    for (let i=1; i<=12; i++) {
        if(sumDay + calculateDay(i,year) < 256) {
            sumDay += calculateDay(i,year);
            MonthResult = i;
        }
    }
    let DayResult = 256 - sumDay;

    return [DayResult, MonthResult, year];
}

let result = dayOfProgrammer(2017);
console.log(result);



