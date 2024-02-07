import ContentData from '../host/src/components/contentData/contentData';
import React from 'react';
import ReactDOM from 'react-dom';

describe('ContentData', () => {
  test('renders content correctly', () => {
    const testData = {
      title: 'Test Title',
      name: 'Test Name',
      text: 'Test Text'
    };

    const container = document.createElement('div');
    ReactDOM.render(<ContentData {...testData} />, container);

    expect(container.querySelector('h2').textContent).toEqual(testData.title);
    expect(container.querySelector('h3').textContent).toEqual(testData.name);
    expect(container.querySelector('p').textContent).toEqual(testData.text);

    ReactDOM.unmountComponentAtNode(container);
  });
});

