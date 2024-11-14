const url = 'https://facebook-media-api.p.rapidapi.com/user/token';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '94a8caff39msh7eb10b8cfb6423ap1c9a0ejsna38267d63f4f',
		'x-rapidapi-host': 'facebook-media-api.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {
		username: 'username',
		password: 'password',
		twofa: ''
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}