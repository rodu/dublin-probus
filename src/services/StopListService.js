class StopListService {
  get() {
    return Promise.resolve([
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 }
    ]);
  }
}

const stopListService = new StopListService();

export { stopListService };
