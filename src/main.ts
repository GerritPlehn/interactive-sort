const dummy: DummyObject = {
  foo: 'Hello World',
  bar: 2,
}

const main = async () => {
  await sleep(dummy.bar)
  console.log(dummy.foo)
}

const sleep = async (delaySeconds: number) => {
  return new Promise((res) => setTimeout(res, delaySeconds * 1000))
}

main()
