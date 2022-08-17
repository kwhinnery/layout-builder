import React, { useState, useEffect } from "react";
import styles from "./Preview.module.css";

const voidElements = [
  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 
  'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr',
];

function createChildren(nodes, selectedElement) {
  const components = [];

  nodes.forEach(node => {
    const TagType = node.data.tagName || 'div';
    let children = node.data.children || [];
    if (children.length > 0) {
      children = createChildren(children, selectedElement);
    }

    const cname = (selectedElement && selectedElement.id === node.id) ?
      styles.selected : '';

    components.push(
      // Some tags can't have children/innerHtml
      (voidElements.includes(node.data.tagName)) ?
        <TagType key={node.id} id={node.id} 
          {...node.data?.tagProps}
          className={ cname }
        />
      :
        <TagType key={node.id} id={node.id}  
          {...node.data?.tagProps}
          className={ cname }
        >
          { node.data.innerHtml || '' }
          { children }
        </TagType>
    );
  });

  return components;
}

function Preview({ uiState, selectedElement }) {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const newKids = createChildren(uiState, selectedElement);
    setChildren(newKids);
  }, [uiState, selectedElement]);

  return (
    <div className={styles.container}>
      <div style={{ position: 'relative', height: '100%', width: '100%'}}>
        { children }
      </div>
    </div>
  );
}

export default Preview;
