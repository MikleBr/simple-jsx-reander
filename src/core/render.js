function setElementProps(element, props) {
  const propsArray = Object.entries(props);
  propsArray.forEach(prop => {
    element.setAttribute(...prop);
  });
}

export function renderNode(node) {
  if (typeof node === 'string') return document.createTextNode(node);
  const { tagName, props, children } = node;
  const currentElement = document.createElement(tagName);

  if (props) {
    setElementProps(currentElement, props);
  }

  if (children !== null || children !== undefined || children !== false) {
    if (Array.isArray(node.children)) {
      node.children.forEach(element => {
        const childElement = renderNode(element);
        currentElement.appendChild(childElement);
      });
    } else {
      const childElement = renderNode(node.children);
      currentElement.appendChild(childElement);
    }
  }

  return currentElement;
}
