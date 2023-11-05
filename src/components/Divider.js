import React from 'react';

export function DividerW() {
  return (
    <div className="flex w-full h-12 flex-col justify-center items-center">
      <div className="w-full border-2" />
    </div>
  );
}

export function DividerH() {
  return (
    <div className="flex  w-12 flex-row justify-center items-center">
      <div className="h-full border-2" />
    </div>
  );
}
