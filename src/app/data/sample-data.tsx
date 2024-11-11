export const variableSizeData = [
  () => <div className="h-24">1</div>,
  () => <div className="h-48">2</div>,
  () => <div className="h-64">3</div>,
  () => <div className="h-24">4</div>,
  () => <div className="h-48">5</div>,
  () => <div className="h-64">6</div>,
  () => <div className="h-24">7</div>,
  () => <div className="h-48">8</div>,
  () => <div className="h-64">9</div>,
];
export const fixedSizeData = (height: number) => [
  () => <div style={{ height: `${height}px` }}>1</div>,
  () => <div style={{ height: `${height}px` }}>2</div>,
  () => <div style={{ height: `${height}px` }}>3</div>,
  () => <div style={{ height: `${height}px` }}>4</div>,
  () => <div style={{ height: `${height}px` }}>5</div>,
  () => <div style={{ height: `${height}px` }}>6</div>,
  () => <div style={{ height: `${height}px` }}>7</div>,
  () => <div style={{ height: `${height}px` }}>8</div>,
  () => <div style={{ height: `${height}px` }}>9</div>,
];
