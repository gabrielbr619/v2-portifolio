export function MeshBackground() {
  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 -z-20 bg-[#050505]" />

      {/* Animated blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="mesh-blob mesh-blob-4" />
        <div className="mesh-blob mesh-blob-5" />
      </div>

      {/* Noise overlay */}
      <div className="noise" />
    </>
  );
}
