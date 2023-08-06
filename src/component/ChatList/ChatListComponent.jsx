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
        message: lastMessage?.message || null,
        time: lastMessage?.time || null,
      };
    })
    .sort((a, b) => {
      if (!a.time) return 1;
      if (!b.time) return -1;
      if (a.time > b.time) return -1;
      if (a.time < b.time) return 1;
      return 0;
    });

  return (
    <>
      {mergeRoom?.map((room, i) => {
        return (
          <div
            className="bg-white px-3 flex items-center cursor-pointer"
            key={i}
            onClick={() => handleRoomId(room._id)}
          >
            <div>
              <img
                alt="profile"
                className="h-12 w-12 rounded-full"
                src={srcImage(room.profile)}
              />
            </div>
            <div className="ml-4 flex-1 border-b border-[#dad9d9] py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">{room?.name}</p>
                <p className="text-xs text-grey-darkest">
                  {room.time && (
                    <span className="mr-1">{formatDistance(room.time)}</span>
                  )}
                </p>
              </div>
              {room.message ? (
                <div className="flex flex-row flex-grow justify-between">
                  <p className="text-[#666666] mt-1 text-md ">
                    {room.username && room?.username}
                  </p>
                  <p className="text-[#666666] mt-1 text-md mr-5">
                    {room.message && room?.message}
                  </p>
                </div>
              ) : (
                <p className="text-[#666666] mt-1 text-md">No message yet</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
