import clone from 'clone';
import React from 'react';
import Tree from 'react-tree-graph';
import data from './data';
import lodash from 'lodash';
import 'react-tree-graph/dist/style.css'
import './App.css';

const App: React.FC = (props: any) => {
  const handleClick = (event: any, node: any) => {
    console.log('handle click ', event);
    console.log('handle click node', node);
    alert(`${node} got clicked`);
  }
  return (
    <Tree
      animated={true}
      data={data}
      nodeRadius={15}
      margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
      gProps={{
					className: 'node',
					onClick: handleClick
				}}
	    height={700}
	    width={1000}/>
  );
}

export default App;
