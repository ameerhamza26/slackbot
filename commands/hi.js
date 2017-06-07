var slackTerminal = require('slack-terminalize'),
    commands = slackTerminal.getCommands(),
    util = require('../util');
var schedule = require('node-schedule');
module.exports = function(param) {
    console.log("param", param);
    var channel = param.channel,
        response;

    //if (!param.args.length) {
    //	response = _helpAll();
    //}
    //else {
    response = "Hi everyone, test bot is here";
    //}

    util.postMessage(channel, response);
};



// var j = schedule.scheduleJob('42 * * * * *', function() {
//     console.log('The answer to life, the universe, and everything!');
//     module.exports({
//         command: 'hi',
//         args: [],
//         user: 'U4H1UDPTL',
//         channel: 'C4H2WU3E0',
//         commandConfig: {
//             alias: ['hi', 'hello'],
//             endpoint: '#',
//             description: 'Greetings'
//         }
//     })
// });
