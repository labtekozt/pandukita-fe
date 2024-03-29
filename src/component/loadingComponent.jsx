export default function LoadingComponent() {
  return (
    <div
      className="flex justify-center items-center h-screen "
      style={{
        minWidth: "280px",
      }}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
