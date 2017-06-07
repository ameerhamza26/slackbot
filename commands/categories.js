var request = require('request'),
	util 	= require('../util');


module.exports = function (param) {
	var	channel		= param.channel,
		endpoint	= param.commandConfig.endpoint;
		
	request(endpoint, function (err, response, body) {
		var info = [];

		if (!err && response.statusCode === 200) {
			body = JSON.parse(body);

			for (var i=0; i<body.data.length; i++) {
				info.push("categoryname is:", body.data[i].category_name)
			}
		}
		else {
			info = ['No category found!'];
		}
		setInterval(function() {
			util.postMessage(channel, info.join('\n\n'));
		},5000);
		
	});

};