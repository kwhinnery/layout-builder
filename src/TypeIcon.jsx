import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import ImageIcon from "@mui/icons-material/Image";
import NotesIcon from "@mui/icons-material/Notes";
import DescriptionIcon from "@mui/icons-material/Description";

export const TypeIcon = (props) => {
  switch (props.tagName) {
    case "img":
      return <ImageIcon />;
    case "span":
      return <NotesIcon />;
    case "p":
      return <DescriptionIcon />;
    default:
      return <CodeIcon />;
  }
};
