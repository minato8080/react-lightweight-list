import { useState } from "react";

import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export const variableSizeData = (size: number) => {
  const res = [];
  const heights = [24, 48, 64];
  for (let i = 0; i < size; i++) {
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];
    res.push(<div className={`h-${randomHeight}`}>{i + 1}</div>);
  }
  return res;
};

const NodeComponent = ({
  height,
  index,
}: {
  height: number;
  index: number;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ height: `${height}px` }}>
      {index + 1}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-2 h-4">
          {visible ? (
            <Eye className="h-4 w-4 text-blue-600" />
          ) : (
            <EyeOff className="h-4 w-4 text-blue-400" />
          )}
          <Switch
            id="text-area-toggle"
            checked={visible}
            onCheckedChange={(checked) => {
              setVisible(checked);
            }}
            className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-blue-400"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const fixedSizeData = (height: number, size: number) => {
  const res = [];

  for (let i = 0; i < size; i++) {
    res.push(<NodeComponent key={i} height={height} index={i} />);
  }
  return res;
};
