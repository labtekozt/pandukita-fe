import { formatDistance } from "../../helpers/dateTime";

const ChatBar = ({ rooms, handleRoomId, lastMessageRoom }) => {
  // merge lastMessageRoom and rooms
  const mergeRoom = rooms
    ?.map((room) => {
      const lastMessage = lastMessageRoom[room._id];
      return {
        ...room,
        message: lastMessage?.message,
        time: lastMessage?.time,
      };
    })
    .sort((a, b) => new Date(b?.time) - new Date(a?.time));

  return (
    <div className="chat__sidebar flex-1">
      <h2>PANDUKITA Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE CHAT</h4>
        {/* create chatlist component */}
        {mergeRoom?.map((room, i) => {
          return (
            <div
              className="chat__user hover:bg-gray-200 cursor-pointer p-2 rounded-md hover:shadow-md transition duration-300 ease-in-out border-b-2 border-gray-50"
              key={i}
              onClick={() =>
                handleRoomId((prev) => (prev === room._id ? null : room._id))
              }
            >
              <div
                className="chat__user__name"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontSize: "1rem",
                }}
              >
                {room?.name || "YOU"}
              </div>
              <div
                className="chat__user__username"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontSize: "1rem",
                  }}
                >
                  {room?.username || "YOU"}
                </h4>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontSize: "0.8rem",
                    color: "gray",
                    marginLeft: "0.5rem",
                  }}
                >
                  {/* get lastMessageRoom that roomId == room._id  */}
                  {room?.message || "No message yet"}
                </p>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    fontSize: "0.8rem",
                    color: "gray",
                    marginLeft: "0.5rem",
                    width: "100%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  className="chat__user__time"
                >
                  {formatDistance(room?.time || new Date())}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatBar;
