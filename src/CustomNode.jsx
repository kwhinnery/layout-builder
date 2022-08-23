import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ArrowRight, Delete, Add, Edit } from "@mui/icons-material";
import { TypeIcon } from "./TypeIcon";
import styles from "./CustomNode.module.css";

export const CustomNode = (props) => {
  const [hover, setHover] = useState(false);
  const { droppable, data } = props.node;
  const indent = props.depth * 24;

  const handleToggle = (e) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  const handleSelect = () => props.onSelect(props.node);

  return (
    <div
      className={`tree-node ${styles.root} ${
        props.isSelected ? styles.isSelected : ""
      }`}
      style={{ paddingInlineStart: indent }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(event) => {
        if (event.detail === 2) {
          handleSelect();
        }
      }}
    >
      <div
        className={`${styles.expandIconWrapper} ${
          props.isOpen ? styles.isOpen : ""
        }`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ArrowRight />
          </div>
        )}
      </div>
      <div>
        <TypeIcon droppable={droppable || false} tagName={data?.tagName} />
      </div>
      <div className={styles.labelGridItem}>
        <Typography variant="body2">{`${props.node.text}`}</Typography>
      </div>
      {hover && (
        <div style={{ float: 'right' }}>
          <div className={styles.actionButton}>
            <IconButton size="small" onClick={handleSelect}>
              <Edit fontSize="small" />
            </IconButton>
          </div>
          <div className={styles.actionButton}>
            <IconButton size="small" onClick={(e) => {
                e.stopPropagation();
                props.onNew(props.node);
            }}>
              <Add fontSize="small" />
            </IconButton>
          </div>
          <div className={styles.actionButton}>
            <IconButton size="small" onClick={() => props.onDelete(props.node)}>
              <Delete fontSize="small" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};
