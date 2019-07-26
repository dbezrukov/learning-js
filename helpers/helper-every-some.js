var computers = [
 { name: 'Apple', ram: 24 },
 { name: 'Lenovo', ram: 32 },
 { name: 'Compaq', ram: 4 },
]

// 'Every' helper determines whether all elements of the array match the predicate
var allComputersHave16Ram = computers.every(function(computer) {
    return computer.ram > 16;
})

// 'Some' helper determines whether whether at least one element of the array matches the given predicate
var someComputersHave16Ram = computers.some(function(computer) {
    return computer.ram > 16;
})