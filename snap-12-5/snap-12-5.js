axios({
	method: 'post',
	url: 'https://dog.ceo/dog-api/breeds-list',
	data: {
		target: 'all the goodest bois',
	}
);
//try 2

const options = {
	method: 'post',
	url: 'https://dog.ceo/dog-api/breeds-list',
	data: {
		target: 'doggos!',
	},
	transformResponse: [(breeds) => {
		// transform the response

		return breeds;
	}]
};

// send the request
axios(options);