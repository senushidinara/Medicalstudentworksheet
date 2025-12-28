import { useState } from 'react';

interface Hotspot {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  info: string;
}

interface ImageHotspotProps {
  imageSrc: string;
  hotspots: Hotspot[];
  instructions: string;
}

export function ImageHotspot({ imageSrc, hotspots, instructions }: ImageHotspotProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [foundHotspots, setFoundHotspots] = useState<Set<string>>(new Set());

  const handleHotspotClick = (hotspotId: string) => {
    setSelectedHotspot(hotspotId);
    setFoundHotspots(new Set([...foundHotspots, hotspotId]));
  };

  const selectedInfo = hotspots.find((h) => h.id === selectedHotspot);
  const progress = (foundHotspots.size / hotspots.length) * 100;

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">{instructions}</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-medium">
            {foundHotspots.size}/{hotspots.length}
          </span>
        </div>
      </div>

      <div className="relative inline-block">
        <img
          src={imageSrc}
          alt="Interactive anatomical diagram"
          className="max-w-full h-auto rounded-lg border-2 border-gray-300"
        />
        {hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className={`absolute cursor-pointer transition-all ${
              foundHotspots.has(hotspot.id)
                ? 'bg-green-400 border-green-600'
                : 'bg-blue-400 border-blue-600 hover:bg-blue-500'
            } border-2 rounded opacity-30 hover:opacity-60`}
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              width: `${hotspot.width}%`,
              height: `${hotspot.height}%`,
            }}
            onClick={() => handleHotspotClick(hotspot.id)}
          />
        ))}
      </div>

      {selectedInfo && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 rounded-lg p-4 animate-in fade-in duration-300">
          <h4 className="text-purple-900 mb-2">{selectedInfo.label}</h4>
          <p className="text-purple-800 text-sm">{selectedInfo.info}</p>
        </div>
      )}

      {foundHotspots.size === hotspots.length && (
        <div className="bg-green-50 border border-green-300 rounded-lg p-4 text-center">
          <p className="text-green-800">
            🎉 Excellent! You've identified all anatomical structures!
          </p>
        </div>
      )}
    </div>
  );
}
