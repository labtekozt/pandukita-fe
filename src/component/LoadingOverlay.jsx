export default function LoadingOverlayComponent() {
  return (
    // create loading overlay
    <div
      className="fixed  inset-0 overflow-y-auto"
      style={{
        zIndex: 9999,
      }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-40"></div>
        <div className="relative opacity-40 bg-white rounded-lg p-5">
          <div className="flex opacity-40 justify-center items-center">
            <div
              style={{
                color: "#00a388",
                borderColor: "#00a388",
                borderTopWidth: "2px",
                borderBottomWidth: "2px",
              }}
              className="z-50 animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
