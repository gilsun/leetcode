var checkInclusion = function (s1, s2) {
  let map1 = {};
  let map2 = {};

  for (let ch of s1) {
    map1[ch] = (map1[ch] || 0) + 1;
  }

  console.log("map1", map1);

  const matchMap = (map1, map2) => {
    if (Object.keys(map1).length !== Object.keys(map2).length) return false;
    for (let key in map1) {
      if (!key in map2 || map1[key] !== map2[key]) return false;
    }
    return true;
  };

  for (let i = 0; i < s2.length; i++) {
    let ch = s2[i];
    map2[ch] = (map2[ch] || 0) + 1;

    if (i >= s1.length) {
      let removeChar = s2[i - s1.length];
      map2[removeChar]--;
      if (map2[removeChar] === 0) {
        delete map2[removeChar];
      }
    }

    if (matchMap(map1, map2)) {
      return true;
    }
  }

  return false;
};
