function randomNum(num) {
    return Math.floor(Math.random() * num)
}
// object of activities
const activities = {
    morning: ['snooze in till 11', 'go for an early morning dip', 'wake up early to see the sun rise', 'go for brunch with friends', 'go for a run'],
    lunch: ['make yourself a sandwich', 'go to your favourite restaurant', 'grab lunch on the go', 'go for a picnic'],
    afternoon: ['go on a bike ride', 'head to the cinema', 'go to the museum', 'go to the Turkish baths', 'take a local history tour'],
    evening: ['get dressed up for a night of dancing', 'head to the swankiest restaurant in town', 'get a takeaway', 'cook a dinner for your friend or partner', 'head to the bowling alleys'],
    night: ['get an early night', 'climb into bed and watch a film', 'head to the casino, you\'re not ready for the night to end', 'head to a club it\'s too early for bed', 'fall asleep on the sofa']
}
// array to hold plans for the day
let dayPlan = [];

//iterate over object
for (let activity in activities) {
    let index = randomNum(activities[activity].length);


    //use switch statement to customise activity going to dayPlan
    switch(activity) {
        case 'morning':
            dayPlan.push(`This morning why not ${activities[activity] [index]}.`)
            break;
        case 'lunch':
            dayPlan.push(`At lunch time ${activities[activity] [index]}.`)
            break;
        case 'afternoon':
            dayPlan.push(`In the afternoon why not ${activities[activity] [index]}.`)
            break;
        case 'evening':
            dayPlan.push(`In the evening you can ${activities[activity] [index]}.`)
            break;
        case 'night':
            dayPlan.push(`After all of that why not ${activities[activity] [index]}.`)
            break;
        default:
            dayPlan.push('out of ideas')
    }
}

function formatPlan(plan) {
    const formatted = dayPlan.join('\n')
    console.log(formatted);
}

formatPlan(dayPlan);
