const fetchRecipes = async function (surname) {
  let data = await $.get(`/recipe/${ingredient}`)
  console.log(data)
}

//example of perfect code:
class ApiManager {
  constructor(stocksAPI, renderer) {
    this.stocksAPI = stocksAPI
    this.renderer = renderer
  }

  async fetchStockData(ticker) {
    let stockData = await $.get(`${this.stocksAPI}/${ticker}`)
    this.renderer.render(stockData)
  }
}
