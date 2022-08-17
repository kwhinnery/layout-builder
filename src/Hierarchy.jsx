import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import {
  Tree,
  MultiBackend,
  getBackendOptions
} from "@minoru/react-dnd-treeview";
import { CustomNode } from "./CustomNode";
import { Placeholder } from "./Placeholder";
import { CustomDragPreview } from "./CustomDragPreview";
import styles from "./Hierarchy.module.css";
import { treeDataToUiState, uiStateToTreeData } from './utils';

function Hierarchy({ 
  uiState, 
  setUiState, 
  selectedElement, 
  setSelectedElement 
}) {

  const treeData = uiStateToTreeData(uiState);

  const handleDrop = (newTree => {
    setUiState(treeDataToUiState(newTree));
  });

  const addNewById = (contextNode) => {
    const newNodeData = {
      text: 'Awesome New Element',
      id: new Date().getTime(),
      droppable: false,
      data: {
        tagName: 'div',
        tagProps: {
          style: { margin: '5px 0' }
        },
        innerHtml: 'I am a div, but I can be anything you want!',
        children: []
      }
    };

    if (contextNode.droppable) {
      newNodeData.parent = contextNode.id;
    } else {
      newNodeData.parent = contextNode.parent;
    }

    treeData.push(newNodeData);
    setUiState(treeDataToUiState(treeData));
    setTimeout(() => {
      setSelectedElement(newNodeData);
    },1);
  };

  const deleteById = (contextNode) => {
    const newTree = treeData.filter(node => node.id !== contextNode.id);
    setUiState(treeDataToUiState(newTree));
    setTimeout(() => {
      setSelectedElement(null);
    },1);
  };

  return (
    <div className={styles.container}>
      
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div>
          <Tree
            initialOpen={true}
            tree={treeData}
            rootId="root"
            render={(node, { depth, isOpen, onToggle }) => (
              <CustomNode
                node={node}
                depth={depth}
                isOpen={isOpen}
                onToggle={onToggle}
                isSelected={node.id === selectedElement?.id}
                onSelect={setSelectedElement}
                onNew={addNewById}
                onDelete={deleteById}
              />
            )}
            dragPreviewRender={(monitorProps) => (
              <CustomDragPreview monitorProps={monitorProps} />
            )}
            onDrop={handleDrop}
            classes={{
              root: styles.treeRoot,
              draggingSource: styles.draggingSource,
              placeholder: styles.placeholderContainer,
              dropTarget: styles.dropTarget
            }}
            sort={false}
            insertDroppableFirst={false}
            canDrop={(tree, { dragSource, dropTargetId, dropTarget }) => {
              if (dragSource?.parent === dropTargetId) {
                return true;
              }
            }}
            dropTargetOffset={5}
            placeholderRender={(node, { depth }) => (
              <Placeholder node={node} depth={depth} />
            )}
          />
        </div>
      </DndProvider>
    </div>
  );
}

export default Hierarchy;
