import './App.scss';

import { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import { Table1 } from './components/Table-1.component';
import { Table2 } from './components/Table-2.component';
import { Table3 } from './components/Table-3.component';
import { Table4 } from './components/Table-4.component';

interface ITable {
  id: string;
  index: number;
  tableComponent: <T>(props: T) => React.ReactElement<T>;
}
const fixedTables: ITable[] = [
  { id: 'table-1', index: 0, tableComponent: (props) => <Table1 {...props} /> },
  { id: 'table-2', index: 1, tableComponent: (props) => <Table2 {...props} /> },
  { id: 'table-3', index: 2, tableComponent: (props) => <Table3 {...props} /> },
  { id: 'table-4', index: 3, tableComponent: (props) => <Table4 {...props} /> },
];

// Đổi vị trí của 2 phần tử trong mảng
// bằng cách thay đổi index của 2 phần tử đó
const reorder = (list: ITable[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);

  result[startIndex].index = endIndex;
  result[endIndex].index = startIndex;

  return result.sort((a, b) => a.index - b.index);
};

export const App = () => {
  const [tables, setTables] = useState(fixedTables);

  const onDragEnd = (result: DropResult) => {
    // Thả ra ngoài vùng droppable
    if (!result.destination) return;

    console.log('source', result.source);
    console.log('destination', result.destination);

    const items = reorder(
      tables,
      result.source.index,
      result.destination.index
    );
    setTables(items);
  };

  // Render table mới bằng cách map qua mảng tables
  return (
    <div className="App">
      <div className="wrap">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="vertical">
            {(provided) => (
              <div ref={provided.innerRef}>
                {tables.map((table) => (
                  <Draggable
                    draggableId={table.id}
                    index={table.index}
                    key={table.id}>
                    {(provided) => {
                      return table.tableComponent(provided) as any;
                    }}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
