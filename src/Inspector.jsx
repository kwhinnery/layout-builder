import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import CodeEditor from '@uiw/react-textarea-code-editor';
import styles from './Inspector.module.css';
import { treeDataToUiState, uiStateToTreeData } from './utils';

function updateUiState(element, previousState, input) {
  const flatTree = uiStateToTreeData(previousState);

  for (let i = 0, l = flatTree.length; i < l; i++) {
    const elem = flatTree[i];
    if (elem.id === element.id) {
      elem.text = input.text;
      elem.droppable = input.droppable;
      elem.data.tagName = input._tagName;
      elem.data.tagProps = JSON.parse(input.tagProps);
      elem.data.innerHtml = input.innerHtml;
      break;
    }
  }

  return treeDataToUiState(flatTree);
}

function ElementEditor({ uiState, setUiState, selectedElement, setSelectedElement }) {
  const [formValues, setFormValues] = useState({
    text: '',
    droppable: true,
    _tagName: '',
    tagProps: JSON.stringify({}, null, 2),
    innerHtml: ''
  });

  useEffect(() => {
    setFormValues({
      text: selectedElement.text,
      droppable: selectedElement.droppable,
      _tagName: selectedElement.data.tagName,
      tagProps: JSON.stringify(selectedElement.data.tagProps || {}, null, 2),
      innerHtml: selectedElement.data.innerHtml || ''
    });
  }, [selectedElement]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const newState = updateUiState(
      selectedElement, uiState, formValues
    );
    setUiState(newState);
  };

  return (
    <form className={styles.form}>
      <TextField
        id="text-input"
        name="text"
        label="Friendly Name"
        type="text"
        value={formValues.text}
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="tagName-input"
        name="_tagName"
        label="HTML Tag Name"
        type="text"
        value={formValues._tagName}
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <InputLabel htmlFor="input-with-icon-adornment" style={{
        fontSize: '14px',
        marginBottom: '-15px'
      }}>
        React Component Props (JSON)
      </InputLabel>

      <CodeEditor
        value={formValues.tagProps}
        name="tagProps"
        language="json"
        placeholder="Please enter JSON code."
        onChange={handleInputChange}
        padding={10}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          overflow: 'scroll',
          maxHeight: '220px',
        }}
      />

      <InputLabel htmlFor="input-with-icon-adornment" style={{
        fontSize: '14px',
        marginBottom: '-15px'
      }}>
        Inner HTML
      </InputLabel>

      <CodeEditor
        value={formValues.innerHtml}
        name="innerHtml"
        language="html"
        onChange={handleInputChange}
        padding={10}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          overflow: 'scroll',
          maxHeight: '220px',
        }}
      />

      <FormGroup>
        <FormControlLabel 
          control={
            <Checkbox checked={formValues.droppable} 
              onChange={(e) => {
                handleInputChange({
                  target: {
                    name: 'droppable',
                    value: e.target.checked
                  }
                })
              }}
            />
          }
          label="Allow Child Components?"
        />
      </FormGroup>

      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update Widget
      </Button>

      <Button variant="outlined" onClick={ () => setSelectedElement(null) }>
        Cancel
      </Button>
    </form>
  );
}

function Inspector(props) {
  return (
    <div className={styles.container}>
      {
        (!props.selectedElement) ? 
          <p style={{ padding: '10px'}}>No element selected.</p>
        : 
          <ElementEditor {...props} />
      }
    </div>
  );
}

export default Inspector;
