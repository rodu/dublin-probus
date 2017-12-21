class StopListService {
  constructor() {
    this.stopList = null;
  }

  get() {
    if (this.stopList) {
      return Promise.resolve(this.stopList);
    }

    return new Promise((resolve, reject) => {
      fetch(`${process.env.PUBLIC_URL}/api/busstopinformation.json`)
        .then((response) => response.json())
        .then((data) => data.results)
        .then((stopList) => {
          this.stopList = stopList;

          return stopList;
        })
        .then(resolve)
        .catch(reject);
    });
  }
}

const stopListService = new StopListService();

export { stopListService };
