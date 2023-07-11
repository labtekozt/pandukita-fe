export default function LoadingOverlayComponent() {
  return (
    // create loading overlay
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-40"></div>
        <div className="relative z-50 bg-white rounded-lg p-5">
          <div className="flex justify-center items-center">
            <div
              style={{
                color: "#00a388",
                borderColor: "#00a388",
                borderTopWidth: "2px",
                borderBottomWidth: "2px",
              }}
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
