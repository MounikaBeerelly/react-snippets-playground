import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

const items = new Array(1000).fill(true).map((_, i) => `Row #${i}`);

const ReactVirtualComponent = () => {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60, // average height in px
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: '400px',
        overflow: 'auto',
        border: '1px solid #ccc',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            ref={rowVirtualizer.measureElement}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
              padding: '15px',
              background: virtualRow.index % 2 === 0 ? '#fafafa' : '#fff',
              borderBottom: '1px solid #eee',
            }}
          >
            {items[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactVirtualComponent;
