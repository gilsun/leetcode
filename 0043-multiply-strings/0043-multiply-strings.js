/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
      // 두 입력값 중 하나라도 '0'이면 결과는 '0'
  if (num1 === "0" || num2 === "0") return "0";

  // 결과를 저장할 배열을 초기화합니다. 최대 길이는 두 입력값의 길이의 합입니다.
  const result = new Array(num1.length + num2.length).fill(0);

  // 두 입력값의 문자열을 뒤집어서 계산을 쉽게 합니다.
  num1 = num1.split('').reverse().join('');
  num2 = num2.split('').reverse().join('');

  // 각 자리수를 곱합니다.
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      // 곱셈 결과를 현재 자리에 더합니다.
      result[i + j] += num1[i] * num2[j];
      // 자리 올림을 처리합니다.
      if (result[i + j] >= 10) {
        result[i + j + 1] += Math.floor(result[i + j] / 10);
        result[i + j] %= 10;
      }
    }
  }

  // 결과 배열을 문자열로 변환합니다.
  // 뒤집어서 계산했기 때문에, 결과도 뒤집어서 반환합니다.
  const resultStr = result.reverse().join('');

  // 결과 문자열의 앞에 있는 '0'을 제거합니다.
  return resultStr.replace(/^0+/, '');
};