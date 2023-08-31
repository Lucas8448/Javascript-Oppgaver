let now = new Date();
let time = 0;
now = new Date();
time = now.getHours();
let startHour = 10;
let length = 1;
let endHour = 20;
let hourLabel;
let weekStart = 1;
let weekEnd = 7;
const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let week = document.getElementById('gridContainer');
for (let i = weekStart; i <= weekEnd; i++){
    let count = 2;
    let day = (now.getDay()+6)%7;
    let today = day == i-1 ? true : false;
    let header = document.createElement('h3')
    header.textContent = weekDays[i-1]
    week.appendChild(header);
    for (let j = startHour; j <= endHour; j+=length){
        let item = document.createElement('div');
        item.classList.add('item');
        item.style.gridArea = count+' / '+i
        if(j >= 24){
            hourLabel = j-24+":00";
        }else{
            hourLabel = j+":00";
        }
        item.textContent = hourLabel;
        item.style.backgroundColor = j >= 17 ? "rgb(117, 154, 184)" : "wheat";
        item.style.color = j == time&&today ? "brown":"black";
        week.appendChild(item);
        count++
    }
}
