"use client";

import { FixedSizeList } from "react-window";

import { Row } from "../../components/DynamicList";
import { fixedSizeData } from "../data/sample-data";

export default function Sample3() {
  const data = fixedSizeData(500, 100);

  return (
    <div className="App">
      <FixedSizeList
        height={1000}
        width={1000}
        itemSize={500}
        itemCount={data.length}
      >
        {({ index }) => (
          <Row item={data[index]} index={index} setRowHeight={() => 500} />
        )}
      </FixedSizeList>
    </div>
  );
}
