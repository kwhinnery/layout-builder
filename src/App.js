import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Hierarchy from "./Hierarchy";
import Preview from './Preview';
import Inspector from './Inspector';
import { theme } from "./theme";
import { UI_STATE } from './default_ui';

function App() {
  const [uiState, setUiState] = useState(UI_STATE);
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hierarchy
        uiState={uiState} setUiState={setUiState} 
        selectedElement={selectedElement} 
        setSelectedElement={setSelectedElement}
      />
      <Preview
        uiState={uiState} setUiState={setUiState} 
        selectedElement={selectedElement} 
        setSelectedElement={setSelectedElement}
      />
      {
        (!selectedElement) ? '' :
          <Inspector 
          uiState={uiState} setUiState={setUiState} 
          selectedElement={selectedElement} 
          setSelectedElement={setSelectedElement}
        />
      }
    </ThemeProvider>
  );
}

export default App;
