/* The variable of 'topics' needs to be defined above the variable of 'randomTopic'. This is because the code is read top to bottom. */ 
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
/* Math functions used below to randomize the index selected from the length of the array. */ 
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
/* This function lists all available topics for study displayed on the website. */
function listTopics() {

    for (var x = 0; x < topics.length; x++) {
        console.log (topics[x]);
    }
}
/* This function selects a random topic for the user of the website to study from. */
function selectTopic() {

    if (randomTopic === 'HTML') {
        console.log ("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log ("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log ("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log ("Let's study JavaScript!");
    } else {
        console.log ('Please try again!');
    }
}
/* After functions have been defined, it is time to call them, this happens below... */
console.log('Here are the topics we learned through prework:');
listTopics();

console.log('What topic should we study first?');
selectTopic();
