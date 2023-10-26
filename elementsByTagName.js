function byTagName(node, tagName) {
  let elms = [];
  for (let child of node.children) {
    if(child.nodeName == tagName.toUpperCase()) {
      elms = elms.concat(child);
    } else if(child.children.length) {
      elms = elms.concat(byTagName(child, tagName));
    }
  }
  return elms;
}
