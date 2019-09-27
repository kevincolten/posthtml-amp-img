'use strict'

module.exports = () => {
  return tree => {
    tree.match({ tag: 'img' }, imgNode => ({
      tag: 'amp-img',
      attrs: { layout: 'responsive', ...imgNode.attrs }
    }))

    return tree
  }
}
