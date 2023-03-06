import React from 'react';
import { HolderOutlined } from '@ant-design/icons';

export const Table4: React.FC<any> = (props) => {
  return (
    <div
      className="table"
      ref={props.innerRef}
      {...props.draggableProps}
      {...props.dragHandleProps}>
      <div className="icon">
        <HolderOutlined />
      </div>
      <div className="content">Content 4</div>
    </div>
  );
};
