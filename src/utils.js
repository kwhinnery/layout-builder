// Generate required flat data structure for the tree view component
function uiStateToTreeData(nodes, parentId='root') {
  let treeData = [];

  nodes.forEach(node => {
    const item = Object.assign({}, node);
    item.parent = parentId;
    treeData.push(item);

    if (item.data.children && item.data.children.length > 0) {
      const children = uiStateToTreeData(item.data.children, item.id);
      treeData = treeData.concat(children);
    }
  });

  return treeData;
}

// Generate nested data structure from flat structure
function treeDataToUiState(treeData) {
  const uiState = [];
  
  const parentChildMap = {};

  // Find all parent/child relationships
  treeData.forEach(node => {
    if (!parentChildMap[node.parent]) {
      parentChildMap[node.parent] = [];
    }

    parentChildMap[node.parent].push(node);
  });

  function addChildren(parentId, childrenArray) {
    if (!parentChildMap[parentId]) {
      return;
    }
    
    childrenArray.push(...parentChildMap[parentId]);

    // Find children for children
    childrenArray.forEach(child => {
      child.data.children = [];
      addChildren(child.id, child.data.children);
    });
  }

  addChildren('root', uiState);
  
  return uiState;
}

export {
  uiStateToTreeData,
  treeDataToUiState
};
