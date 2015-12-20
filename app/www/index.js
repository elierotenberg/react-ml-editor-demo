/* eslint-disable  react/jsx-key */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactML from 'react-ml';
import ReactMLEditor from 'react-ml-editor';
const { ReactMLEditorSplitEditor } = ReactMLEditor;

import WikipediaSuggestMenu from '../WikipediaSuggestMenu';
import ReactMLWikipedia from '../ReactMLWikipedia';

const components = Object.assign({}, ReactML.presets.basic, {
  'Wikipedia': (attribs, children) =>
    <ReactMLWikipedia>{children.map(({ type, data }) => {
      if(type === 'text') {
        return data;
      }
      return '';
    }).join('')}</ReactMLWikipedia>
  ,
});

ReactDOM.render(<ReactMLEditorSplitEditor
  SuggestMenu={WikipediaSuggestMenu}
  components={components}
/>, document.getElementById('app'));
