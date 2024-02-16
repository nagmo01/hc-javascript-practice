

import {parseArgs} from 'node:util';

const {
  values: {
    optionMonth
  }
} = parseArgs({
  options: {
    optionMonth: {
      type: 'string',
      short: 'm',
    }
  }
});

const numbers = Array.from({length: 12}, (_, i) => (i + 1).toString());


//関数内で使う今日の日付、これにオプションで取得した月をセットしなおす形で使う

function checkOption(optionMonth){
  if(optionMonth === undefined){
    //未指定なので今月のカレンダーを表示させる
    return new Date();

  } else if(numbers.includes(optionMonth)){

    //1~12月で指定されたので指定された月のカレンダーを表示させる
    //こちらの変数にオプション引数の値が1の場合も01に直して文字列取得で使える形にして返す。
    let stringMonth
    let today = new Date();

    if (optionMonth.length === 1){
      stringMonth = "0"+ optionMonth;
    } else {
      stringMonth = optionMonth;
    }
    return new Date(String(today.getFullYear())+"-"+stringMonth+"-"+"01");

  } else {
    console.log("不正な月が指定されたのでエラーを表示させる")
    return "error";
  }
}


console.log("表示するカレンダーの日付");
//dateに入力された月、または当月どちらかの1日のデータを入れる
let date = checkOption(optionMonth);
console.log(date);





const weekArray = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];


const getDay = date.getDate;

//let date = checkOption((optionMonth));
//console.log(date);
console.log("1日は何曜日か？");
console.log(getDay);

//const firstDate = date.getDay();
console.log(weekArray[date.getDay()])

console.log("変更前date");
console.log(date);


console.log("今日");
console.log(date.getFullYear()+" "+String(date.getMonth()+1)+" "+date.getDate());

//date.setMonth(date.getMonth()+1, 0);

date.setMonth(date.getMonth()+1, 0);

console.log("date");
console.log(date);


console.log("最終日");
console.log(date.getFullYear()+" "+String(date.getMonth()+1)+" "+date.getDate());



//console.log(lastDay);

//getMonthで取得できる数値は実際の月-1になっているので足す。
const year = date.getFullYear();
const month = date.getMonth()+1;

console.log("      "+month+"月 "+year);
console.log("日 月 火 水 木 金 土");

let i = 1;
let t = 0;
//let day = new Date();

while (i <= date.getDate()){
  
  while (t < getDay){
    process.stdout.write("   ");
    t += 1;
  };


  //改行を作る
  if (t !==0 && t % 7 === 0){
    console.log(" ");
  }

  //if (i === 1) {
  //process.stdout.write(parseInt(day.getDay()) * "a");
  //}

  if (i < 10){
    process.stdout.write(" "+String(i)+" ");
  } else {
    process.stdout.write(""+String(i)+" ");
  }

  


  //if (day.getDay() === 6 ){
  //process.stdout.write("\n");
  //}


  i += 1;
  t += 1;
}

console.log(" ");
