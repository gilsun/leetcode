var isPalindrome = function(s) {
  // 대소문자 구분 없이 비교하기 위해 모두 소문자로 변환
  s = s.toLowerCase();
  
  // 문자열에서 알파벳과 숫자만 추출하여 새로운 문자열 생성
  var alphanumeric = "";
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (isAlphaNumeric(char)) {
      alphanumeric += char;
    }
  }
  
  // 양 끝에서부터 비교하며 팰린드롬 여부 확인
  var left = 0;
  var right = alphanumeric.length - 1;
  
  while (left < right) {
    if (alphanumeric[left] !== alphanumeric[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
};

// 주어진 문자가 알파벳 또는 숫자인지 확인하는 함수
var isAlphaNumeric = function(char) {
  return /^[0-9a-zA-Z]+$/.test(char);
};