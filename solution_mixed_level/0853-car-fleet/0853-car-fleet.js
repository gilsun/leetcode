/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((pos, index) => ({
        position: pos,
        timeToTarget: (target - pos) / speed[index]
    }));
    
    console.log(cars)
    
    cars.sort((a, b) => b.position - a.position);
    console.log( 'afterSorted', cars)
    
    let fleets = 0;
    let currTime = 0;

    for (const car of cars) {
        if (car.timeToTarget > currTime) {
            fleets++;
            console.log(fleets)
            currTime = car.timeToTarget;
        }
    }

    return fleets;
};
