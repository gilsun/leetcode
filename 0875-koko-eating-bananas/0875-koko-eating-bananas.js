/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var canEatAllBananas = (piles, K, t) => {
  let time = 0;

  for (const pile of piles) {
    time += Math.ceil(pile / K); //Math.ceil()은 소수점 이하가 존재하면 무조건 올림을 수행하고 반환함. Math.ceil(2.4)⇒ 3 
  }

  return time <= t;
};

var minEatingSpeed = (piles, H) => {
  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); //Math.floor()은 소수점을 버리고 정수만 반환, ⇒ Math.floor(4.9)⇒ 4 

    if (canEatAllBananas(piles, mid, H)) {
      // Koko가 모든 바나나를 t 시간 안에 먹을 수 있는 경우
      // 속도를 줄여서 더 최적의 속도를 찾기 위해 right 값을 줄임
      right = mid - 1;
    } else {
      // Koko가 모든 바나나를 t 시간 안에 먹을 수 없는 경우
      // 속도를 높여서 더 최적의 속도를 찾기 위해 left 값을 늘림
      left = mid + 1;
    }
  }

  return left;
};


//piles = [3,6,7,11], h = 8
// left =1 , right = 11 
// mid= 1+11/2 = 6 
// canEatAllBananas([3,6,7,11], 6, 8)
// 3/6 = 0.5=> 1, 6/6=>1 , 7/6=> 1.xxx => 2, 11/6=> 1.xxx=> 2  time=6   6<= 8 => true    right = mid(6)-1= 5 ,

//piles = [3,6,7,11], h = 8
// left =1, right= 5 
// mid = 1+5/ 2 = 3 
// canEatAllBananas(piles=[3,6,7,11], mid = 3, H = 8)
// 3/3= 1, 6/3=2, 7/3=2.xxx=> 3, 11/3 =3.xxx=> 4 time = 10  10<=8 => false   
// left= 3 +1 = 4 

//piles = [3,6,7,11], h = 8
// left = 4, right = 5 
// mid= 4 + 5 /2 =4.5=> 4 
//  canEatAllBananas(piles=[3,6,7,11], mid = 4, H = 8)
// 3/4=0.xxx=> 1, 6/4=> 1.xx=> 2, 7/4=> 1.xx=> 2, 11/4=2.xx=> 3, time= 8 8<=8 => true  right = mid(4)-1 = 3 


//piles = [3,6,7,11], h = 8
// left = 4, right = 3  

// return left = 4 





