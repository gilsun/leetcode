/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
// var distributeCookies = function(cookies, k) {
//     // 각 아이가 가진 쿠키의 단맛 합계를 저장하는 배열
//     const childSums = new Array(k).fill(0);

//     // 현재까지의 최소 최대 단맛 값을 저장하는 변수
//     let minMax = Infinity;

//     // 쿠키를 분배하는 함수
//     function distribute(index) {
//         // 모든 쿠키가 분배된 경우
//         if (index === cookies.length) {
//             // 현재의 최대 단맛 값을 찾음
//             const currentMax = Math.max(...childSums);
//             // 전역 최소 최대 단맛 값 업데이트
//             minMax = Math.min(minMax, currentMax);
//             return;
//         }

//         // 각 아이에게 현재 쿠키를 시도적으로 할당
//         for (let i = 0; i < k; i++) {
//             childSums[i] += cookies[index];
//             distribute(index + 1);
//             // 백트래킹: 할당 취소
//             childSums[i] -= cookies[index];
//         }
//     }

//     // 분배 시작
//     distribute(0);

//     // 최소 최대 단맛 값 반환
//     return minMax;
// };

var distributeCookies = function(cookies, k) {
  let result = Number.MAX_VALUE
  let children = Array(k).fill(0);
  function dfs(cookies, cur, k, children) {
    if (cur == cookies.length) {
        // let max = 0;
      
        curMax = Math.max(...children);
        result = Math.min(result, curMax);
        return;
    }
    for (let i = 0; i < k; i++) {
        children[i] += cookies[cur]; // choose
        dfs(cookies, cur + 1, k, children); //explore
        children[i] -= cookies[cur]; //un-choose
    }
  }

  dfs(cookies, 0, k, children);
  return result;
};