const sleep = (timeout: number) => new Promise((res) => setTimeout(res, timeout));

describe('My First Test', () => {
  it('1.5 sec test', async () => {
    await sleep(1500);
    expect(true).to.equal(true);
  });

  it('second 1.5 sec test', async () => {
    await sleep(1500);
    expect(true).to.equal(true);
  })
})
