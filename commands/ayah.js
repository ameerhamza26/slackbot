var request = require('request'),
	util 	= require('../util');


module.exports = function (param) {
	var	channel		= param.channel,
		endpoint	= param.commandConfig.endpoint;
		
	request(endpoint, function (err, response, body) {
		var info = [];

		if (!err && response.statusCode === 200) {
			body = JSON.parse(body);

			info[0] = body.data.text;
		}
		else {
			info = ['No category found!'];
		}
		util.postMessage(channel, info.join('\n\n'));
		
	});

};