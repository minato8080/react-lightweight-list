"use client";

import React from "react";

import { VariableSizeList } from "react-window";

import { variableSizeData } from "../data/sample-data";

const data = variableSizeData(1000);

const Row = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => {
  const Item = ({ item }: { item: React.JSX.Element }) => <>{item}</>; // 仮のItemコンポーネントを定義
  return (
    <div style={style}>
      <Item item={data[index]} />
    </div>
  );
};

const getItemSize = (index: number) => {
  const element = data[index];
  return parseInt(element.props.className.replace("h-", ""), 10) * 4;
};

const Sample4 = () => (
  <VariableSizeList
    height={500}
    width={500}
    itemCount={data.length}
    itemSize={getItemSize}
  >
    {Row}
  </VariableSizeList>
);

export default Sample4;
