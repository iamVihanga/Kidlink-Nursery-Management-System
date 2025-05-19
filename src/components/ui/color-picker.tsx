"use client";

import React from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  showInput?: boolean;
  showPresets?: boolean;
}

export function ColorPicker({
  value,
  onChange,
  showInput = true,
  showPresets = true
}: ColorPickerProps) {
  const presetColors = [
    "#FF6B6B",
    "#FFC107",
    "#4CAF50",
    "#2196F3",
    "#9B59B6",
    "#E91E63",
    "#673AB7",
    "#3F51B5",
    "#00BCD4",
    "#8BC34A"
  ];

  return (
    <div className="space-y-4">
      {/* Color Preview */}
      <div className="flex items-center gap-4">
        <div
          style={{ backgroundColor: value }}
          className="h-10 w-10 rounded-full border border-gray-200 dark:border-gray-800"
        />
        <span className="text-sm font-medium">{value}</span>
      </div>

      {/* Color Wheel */}
      <div className="flex justify-center">
        <HexColorPicker
          color={value}
          onChange={onChange}
          className="mb-4"
          style={{ width: "100%", height: "170px" }}
        />
      </div>

      {/* Preset Colors */}
      {showPresets && (
        <div className="mt-3">
          <p className="text-xs text-muted-foreground mb-2">Preset Colors</p>
          <div className="grid grid-cols-5 gap-3">
            {presetColors.map((color) => (
              <button
                key={color}
                type="button"
                className="h-10 w-10 rounded-full"
                style={{ backgroundColor: color }}
                onClick={() => onChange(color)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Color Input */}
      {showInput && (
        <div className="flex items-center gap-2">
          <Input
            value={value}
            placeholder="#FFFFFF"
            className="flex-1"
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
