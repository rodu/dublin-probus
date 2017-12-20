class StopListService {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${process.env.PUBLIC_URL}/api/busstopinformation.json`)
        .then((response) => response.json())
        .then((data) => data.results)
        .then(resolve)
        .catch(reject);
    });
  }
}

const stopListService = new StopListService();

export { stopListService };
