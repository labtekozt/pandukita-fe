import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Illustration } from "@kiwicom/orbit-components";
import { Link } from "react-router-dom";
import ChatListComponent from "./ChatListComponent";
import BottomNavigation from "../BottomNavigation";

export default function Chatlist({ rooms, handleRoomId, lastMessageRoom }) {
  return (
    <div className="containerWisata h-screen">
      <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
        <div className="flex">
          <div className="grow h-6">
            <Link to={"/"}>
              <IconArrowNarrowLeft color="black" />
            </Link>
          </div>
          <div className="grow-0 mr-7">Chat</div>
          <div className="grow h-1"></div>
        </div>
      </div>
      <div className="mt-3">
        <div>
          <div className="flex rounded py-2 h-screen bg-white">
            <div className="flex-1">
              {/* check is room not {} */}
              {JSON.stringify(rooms) !== "{}" ? (
                <ChatListComponent
                  rooms={rooms}
                  handleRoomId={handleRoomId}
                  lastMessageRoom={lastMessageRoom}
                />
              ) : (
                <div className="rounded py-2 h-screen bg-white ">
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center">
                      <p className="text-gray-500 text-2xl">Chat Tidak ada </p>
                      <Illustration name="NoResults" size="small" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
