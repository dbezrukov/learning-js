// In js we should avoid mutating original data 
// so it is a good practice to return new array

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var distances = trips.map(function(trip) {
    return trip.distance;
})

var speeds = trips.map(function(trip) {
    return (trip.distance / trip.time);
})
