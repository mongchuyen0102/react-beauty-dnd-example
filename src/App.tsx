import './App.scss';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import GridLayout from 'react-grid-layout';
import { Table1 } from './components/Table-1.component';
import { Table2 } from './components/Table-2.component';
import { Table3 } from './components/Table-3.component';
import { Table4 } from './components/Table-4.component';

const randomContent = () => {
  const names = ['John', 'Paul', 'George', 'Ringo'];
  return names[Math.floor(Math.random() * names.length)];
};

/**
 * GridLayout
 * width: 1200px => 12 columns => 100px per column, nếu div có width > 100px thì sẽ bị dính vào div bên phải
 * rowHeight: 100px => 1 row => 100px per row, nếu div có height > 100px thì sẽ bị dính vào div dưới
 * x: thứ tự của column
 * y: thứ tự của row
 * w: số column mà div chiếm, nếu div hiển thị có width nhỏ hơn 100px thì phần bị chiếm sẽ nhìn như rỗng, nhưng vẫn chiếm space
 * h: số row mà div chiếm, nếu div hiển thị có height nhỏ hơn 100px thì phần bị chiếm sẽ nhìn như rỗng, nhưng vẫn chiếm space
 */
export const App = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 1 },
    { i: 'c', x: 2, y: 0, w: 1, h: 1 },
    { i: 'd', x: 3, y: 0, w: 1, h: 1 },
    { i: 'e', x: 4, y: 0, w: 1, h: 1 },
  ];

  return (
    <div className="App">
      <div className="wrap">
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          maxRows={1}
          rowHeight={100}
          width={1200}
          isResizable={false}>
          <div key="a">
            <Table1 content={randomContent()} />
          </div>
          <div key="b">
            <Table2 />
          </div>
          <div key="c">
            <Table3 content={randomContent()} />
          </div>
          <div key="d">
            <Table4 />
          </div>
        </GridLayout>
      </div>
    </div>
  );
};

export default App;
