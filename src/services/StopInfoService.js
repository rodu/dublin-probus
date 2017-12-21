class StopInfoService {
  get(stopid) {
    return Promise.resolve([
      { time: '9:00 am', route: '15' },
      { time: '9:10 am', route: '83' }
    ]);
  }
}

const stopInfoService = new StopInfoService();

export { stopInfoService };
