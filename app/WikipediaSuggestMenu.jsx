import React from 'react';
import ReactMLEditor from 'react-ml-editor';
const { ReactMLEditorBasicSuggestMenu } = ReactMLEditor;

import wikipediaSuggest from './wikipediaSuggest';

function WikipediaSuggestMenu(props) {
  return React.cloneElement(<ReactMLEditorBasicSuggestMenu {...props} />, {
    suggest: wikipediaSuggest,
  });
}

export default WikipediaSuggestMenu;
