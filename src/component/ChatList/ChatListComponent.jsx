import { srcImage } from "../../helpers/url";
import { formatDistance } from "../../helpers/dateTime";

export default function ChatListComponent({
  rooms,
  handleRoomId,
  lastMessageRoom,
}) {
  // merge  lastMessageRoom and rooms and sort by time descending
  rooms = Object.values(rooms);
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
    <>
      {mergeRoom?.map((room, i) => (
        <div
          className="bg-white px-3 flex items-center cursor-pointer"
          key={i}
          onClick={() => handleRoomId(room._id)}
        >
          <div>
            <img
              className="h-12 w-12 rounded-full"
              src={srcImage(room.profile)}
            />
          </div>
          <div className="ml-4 flex-1 border-b border-[#dad9d9] py-4">
            <div className="flex items-bottom justify-between">
              <p className="text-grey-darkest">{room.name}</p>
              <p className="text-xs text-grey-darkest">
                {formatDistance(room.time)}
              </p>
            </div>
            {room.message ? (
              <div className="flex flex-row flex-grow justify-between">
                <p className="text-[#666666] mt-1 text-md ">{room.username}</p>
                <p className="text-[#666666] mt-1 text-md mr-5">
                  {room.message}
                </p>
              </div>
            ) : (
              <p className="text-[#666666] mt-1 text-md">No message yet</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
