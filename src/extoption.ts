interface MirrorOfBlockOption {
  outlineBlockUser: boolean
  enableBlockReflection: boolean
  blockMutedUser: boolean
  prefetchChainMirrorBlock: boolean
}

const ExtOption = {
  // eslint-disable-line no-unused-vars
  defaults: Object.freeze({
    outlineBlockUser: false,
    enableBlockReflection: false,
    blockMutedUser: false,
    prefetchChainMirrorBlock: false,
  }),
  async save(newOption: MirrorOfBlockOption) {
    const option = Object.assign<
      object,
      MirrorOfBlockOption,
      Partial<MirrorOfBlockOption>
    >({}, this.defaults, newOption)
    return browser.storage.local.set({
      option,
    })
  },
  async load(): Promise<MirrorOfBlockOption> {
    const loaded = await browser.storage.local.get('option')
    return Object.assign<object, MirrorOfBlockOption, any>(
      {},
      this.defaults,
      loaded.option
    )
  },
}