const DAYS = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

let date = new Date
console.log(date);

function getDay() {
    console.log('Hom nay la', DAYS[date.getUTCDay()]);
}

getDay();