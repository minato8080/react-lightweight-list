"use client";

import React from "react";

import { VariableSizeList } from "react-window";

import { variableSizeData } from "../data/sample-data";

function Item({ item }: { item: React.JSX.Element }) {
  return <div>{item}</div>;
}

function MyList() {
  const getItemSize = (index: number) => {
    const element = variableSizeData[index]();
    return parseInt(element.props.className.replace("h-", ""), 10) * 4;
  };

  const totalHeight = variableSizeData.reduce((sum, item) => {
    const element = item();
    return sum + parseInt(element.props.className.replace("h-", ""), 10) * 4;
  }, 0);

  return (
    <div style={{ height: "calc(100vh - 90px - 100px)" }} className="overflow-hidden">
      <VariableSizeList
        height={90 + totalHeight}
        itemCount={variableSizeData.length}
        itemSize={getItemSize}
        width={1000}
      >
        {({ index }) => <Item item={variableSizeData[index]()} />}
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
