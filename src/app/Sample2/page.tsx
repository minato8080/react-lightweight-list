"use client";

import { DynamicList, Row } from "../components/DynamicList";
import { variableSizeData } from "../data/sample-data";

export default function Sample2() {
  const getItemSize = (index: number) => {
    const element = variableSizeData[index]();
    return parseInt(element.props.className.replace("h-", ""), 10) * 4;
  };
  return (
    <DynamicList
      getItemSize={getItemSize}
      itemCount={variableSizeData.length}
      renderItem={(index, _style) => (
        <Row
          item={variableSizeData[index]}
          index={index}
          setRowHeight={() => 500}
          // style={style}
        />
      )}
    />
  );
}
