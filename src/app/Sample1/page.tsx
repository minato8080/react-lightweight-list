"use client";

import React from "react";

import { VariableSizeList } from "react-window";

import { variableSizeData } from "../data/sample-data";

function Item({ item }: { item: React.JSX.Element }) {
  return <div>{item}</div>;
}

function MyList() {
  const data = variableSizeData(100);
  const getItemSize = (index: number) => {
    const element = data[index];
    return parseInt(element.props.className.replace("h-", ""), 10) * 4;
  };

  const totalHeight = data.reduce((sum, item) => {
    return sum + parseInt(item.props.className.replace("h-", ""), 10) * 4;
  }, 0);

  return (
    <div
      style={{ height: "calc(100vh - 90px - 100px)" }}
      className="overflow-hidden"
    >
      <VariableSizeList
        height={90 + totalHeight}
        itemCount={data.length}
        itemSize={getItemSize}
        width={1000}
      >
        {({ index }) => <Item item={data[index]} />}
      </VariableSizeList>
    </div>
  );
}

function Sample1() {
  return (
    <div>
      <MyList />
    </div>
  );
}

export default Sample1;
