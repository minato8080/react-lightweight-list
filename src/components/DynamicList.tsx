"use client";

import type { CSSProperties } from "react";
import { useRef, forwardRef, useEffect } from "react";

import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";

export interface ListProps {
  itemCount: number;
  renderItem: (index: number, style: CSSProperties) => React.ReactNode;
  getItemSize: (index: number) => number;
}

export const DynamicList = forwardRef<VariableSizeList, ListProps>(
  ({ renderItem, itemCount, getItemSize }, ref) => {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <VariableSizeList
            height={height}
            itemCount={itemCount}
            itemSize={getItemSize}
            width={width}
            ref={ref}
          >
            {({ index, style }) => <>{renderItem(index, style)}</>}
          </VariableSizeList>
        )}
      </AutoSizer>
    );
  }
);
DynamicList.displayName = "DynamicList";

interface RowProps {
  item: React.JSX.Element;
  index: number;
  setRowHeight: (index: number, height: number) => void;
}

export const Row: React.FC<RowProps> = (
  { item, index, setRowHeight },
  style
) => {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const measureAndSet = () => {
    if (rowRef.current) {
      setRowHeight(index, rowRef.current.clientHeight);
    }
  };

  useEffect(() => {
    // 高さ情報を更新
    measureAndSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowRef]);
  
  return <div ref={rowRef} style={style}>{item}</div>;
};
