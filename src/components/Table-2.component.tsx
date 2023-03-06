import React from 'react';
import { HolderOutlined } from '@ant-design/icons';

export const Table2: React.FC<any> = (props) => {
  return (
    <div
      className="table"
      ref={props.innerRef}
      {...props.draggableProps}
      {...props.dragHandleProps}>
      <div className="icon">
        <HolderOutlined />
      </div>
      <div className="content">Content 2</div>
    </div>
  );
};
