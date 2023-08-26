var Twitter = function() {
    this.tweets = new Map();  // 각 사용자의 트윗을 저장하기 위한 Map
    this.followees = new Map();  // 사용자의 팔로우 목록을 저장하기 위한 Map
    this.time = 0;  // 트윗의 타임스탬프를 추적하기 위한 변수
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.tweets.has(userId)) {
        this.tweets.set(userId, []);
    }
    this.tweets.get(userId).push({ id: tweetId, time: this.time++ });
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const res = [];
    
    if (this.tweets.has(userId)) {
        res.push(...this.tweets.get(userId));
    }

    if (this.followees.has(userId)) {
        for (let user of this.followees.get(userId)) {
            if (this.tweets.has(user)) {
                res.push(...this.tweets.get(user));
            }
        }
    }

    return res.sort((a, b) => b.time - a.time).slice(0, 10).map(tweet => tweet.id);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (followerId === followeeId) return;

    if (!this.followees.has(followerId)) {
        this.followees.set(followerId, new Set());
    }

    this.followees.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.followees.has(followerId)) {
        this.followees.get(followerId).delete(followeeId);
    }
};


/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */