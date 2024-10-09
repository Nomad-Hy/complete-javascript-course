// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*문제 해결: 1.문제를 명확히 파악하기.
2.큰문제를 작은 문제로 최대한 쪼갠다.

/* 문제: 주어진 테스트 배열을 문자열로 표시하기

서브문제: 데이터 배열을 각각 따로 분석.
       : 날짜 앞 1,2,3을 표시
       :printoforecast 함수 작성

       */

/*My first Problem Solving!!      
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const array = [];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    array[i] = `... ${arr[i]}C in ${i + 1} days`;
  }
  console.log(...array);
};

console.log(printForecast(data1), printForecast(data2));
*/

/* 해결 하기 위해 console.log를 한문장으로 출력하는 기능이 필요했다. ... 사용 
빈 배열을 만들고 for문을 통해 각 요소별 지정된 형식의 문자열을 만든 후 이를 빈배열에 추가해준다.
마지막으로 ...을 사용해 배열에 추가된 각 문자열은 한문장으로 출력해준다.*/
