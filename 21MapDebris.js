/* 
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia: https://en.wikipedia.org/wiki/Orbital_period 

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris 
*/

function orbitalPeriod(arr) {
    // Physical constants 
    const GM = 398600.4418;         // [ km^3 * s^2 ]
    const earthRadius = 6367.4447;  // [ km ]
  
    return arr.map(obj => {
      const a = obj["avgAlt"] + earthRadius;
      const orbPer = 2 * Math.PI * Math.pow( Math.pow(a,3) / GM , 0.5);
      return {
        name: obj["name"],
        orbitalPeriod: Math.round(orbPer)
    };
  
    
})};