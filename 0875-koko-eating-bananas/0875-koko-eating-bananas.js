/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const canEatAllBananas = (piles, K, t) => {
  let time = 0;

  for (const pile of piles) {
    time += Math.ceil(pile / K);
  }

  return time <= t;
};

const minEatingSpeed = (piles, H) => {
  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

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