import React, { useState } from 'react'
import ReactFlow, { Background, Controls } from 'react-flow-renderer';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Inicio' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Tarea A' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Tarea B' }, position: { x: 400, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
];

const Diagrams = () => {
  const [elements, setElements] = useState(initialElements);

  const onConnect = (params) => setElements((els) => addEdge(params, els));
}

export const Diagram = () => {
  return (
    <div style={{ height: 500 }}>
    <ReactFlow
      elements={elements}
      onConnect={onConnect}
      snapToGrid={true}
      snapGrid={[15, 15]}
    >
      <Background />
      <Controls />
    </ReactFlow>
  </div>
);
};

export default Diagram;