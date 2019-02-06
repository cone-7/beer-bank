class BeerService {
  async getBeers(){
		return fetch(`https://api.punkapi.com/v2/beers`, {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json'
		  }
		}).then((response) => {
			return response.json();
		}).then((data) => {
			return data;
        })
	}

	async getSimilarBeersByYeast(malt){
		const maltWithUnderscore = malt.split(' ').join('_')
		return fetch(`https://api.punkapi.com/v2/beers?yeast=${maltWithUnderscore}&per_page=3`, {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json'
		  }
		}).then((response) => {
			return response.json();
		}).then((data) => {
			return data;
        })
	}
}

export default BeerService;