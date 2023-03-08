import { forwardRef } from 'react';
import { HolderOutlined } from '@ant-design/icons';

export const Table4 = forwardRef((props: { content?: string }, ref?: any) => {
  return (
    <div {...props} className="table" ref={ref}>
      <div className="icon">
        <HolderOutlined />
      </div>
      <div className="content">Table 4: {props.content || 'Mong Chuyen'}</div>
    </div>
  );
});
