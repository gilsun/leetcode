import java.util.ArrayList;
import java.util.List;

public class Solution {
    // 전화 번호의 각 숫자에 대응되는 문자들을 저장하는 배열
    private String[] letterMap = {
        "0",
        "1",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    };
    
    // 결과를 저장할 리스트
    private List<String> results = new ArrayList<>();
    
    public List<String> letterCombinations(String digits) {
        // 입력 문자열이 null이거나 길이가 0이면 빈 결과를 반환
        if (digits == null || digits.length() == 0) {
            return results;
        }
        // 백트래킹 시작. 초기 문자 조합은 빈 문자열("")로 시작하며, 숫자 문자열의 첫 번째 인덱스(0)부터 시작한다.
        backtrack("", digits, 0);
        return results;
    }
    
    private void backtrack(String currentCombination, String digits, int index) {
        // 현재 문자 조합의 길이가 입력 숫자 문자열의 길이와 같으면 결과 리스트에 추가
        if (index == digits.length()) {
            results.add(currentCombination);
            return;
        }
        
        // 현재 인덱스에 해당하는 숫자를 가져온다.
        Character digit = digits.charAt(index);
        // 숫자에 대응하는 문자들을 가져온다.
        String letters = letterMap[Character.getNumericValue(digit)];
        // 숫자에 대응하는 각 문자에 대해 재귀적으로 백트래킹을 수행
        for (int i = 0; i < letters.length(); i++) {
            // 현재 문자 조합에 문자를 추가하고, 다음 인덱스로 재귀 호출
            backtrack(currentCombination + letters.charAt(i), digits, index + 1);
        }
    }
}