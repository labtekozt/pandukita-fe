import React, { useContext } from "react";
import { TextLink, Button } from "@kiwicom/orbit-components/lib/";
import Card from "@kiwicom/orbit-components/lib/Card";
import {
  IconArrowNarrowLeft,
  IconPencil,
  IconAlertCircle,
  IconUserPlus,
  IconChevronRight,
} from "@tabler/icons-react";
import { GlobalContext } from "../store";
import { logout } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

function ProfilePage() {
  const { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const onLogout = async () => {
    await logout(dispatch);
  };

  return (
    <div className="containerWisata">
      <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
        <div className="flex">
          <div className="grow h-6">
            <TextLink onClick={() => navigate("/")}>
              <IconArrowNarrowLeft color="black" />
            </TextLink>
          </div>
          <div className="grow-0 mr-7">Profile</div>
          <div className="grow h-1"></div>
        </div>
      </div>
      <div className="m-5 mt-8 pb-[50%]">
        <div className="flex items-center mb-5">
          <div className="ml-3">
            <strong>{state && state.user.username}</strong>
            <br />
            <span className="text-gray text-md">
              {state && state.user.email}
            </span>
          </div>
        </div>

        <div className="shadow">
          <Card>
            <div
              style={{
                border: "1px solid #eeeeee",
                color: "gray",
                fontSize: "13px",
              }}
              className="p-3"
            >
              <div className="flex">
                <p>
                  <Link to="/profile/update">
                    <IconPencil color="black" />
                  </Link>
                </p>
                <Link to="/profile/update" className="ml-2 mt-0.5">
                  Edit Profil
                </Link>
                <div className="grow"></div>
                <Link to="/profile/update">
                  <IconChevronRight />
                </Link>
              </div>
              <div className="flex mt-6">
                <IconAlertCircle color="black" />
                Tentang PanduKita
                <div className="grow"></div>
                <div className="flex-none w-100">
                  <IconChevronRight />
                </div>
              </div>
              {state && state.user.role !== "guideTour" && (
                <div className="flex mt-6">
                  <Link to="/tourguide/register">
                    <IconUserPlus color="black" />
                  </Link>
                  <Link to="/tourguide/register" className="ml-2 mt-0.5">
                    Bergabung Menjadi Pemandu Wisata <br />
                    <span className="text-[10px]">
                      Jadilah Tour Guide yang berpengalaman dan
                    </span>{" "}
                    <br />
                    <span className="text-[10px]">
                      bergabunglah dengan aplikasi kami untuk berbagi
                    </span>{" "}
                    <br />
                    <span className="text-[10px]">
                      keindahan destinasi dengan orang-orang dari seluruh
                    </span>
                  </Link>
                  <div className="grow"></div>
                  <div className="flex-none w-100">
                    <Link to="/tourguide/register">
                      <IconChevronRight />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
      <div className="p-4">
        <Button
          type="critical"
          fullWidth="true"
          centered={true}
          onClick={() => onLogout()}
        >
          Keluar
        </Button>
      </div>
    </div>
  );
}

export default ProfilePage;
