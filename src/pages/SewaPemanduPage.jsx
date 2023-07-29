import { TextLink, Button } from "@kiwicom/orbit-components/lib/";
import Card from "@kiwicom/orbit-components/lib/Card";
import {
  IconArrowNarrowLeft,
  IconCalendarEvent,
  IconMap,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import Onboarding from "../component/OnboardingPage";
import { useFetch } from "../hooks/useFetch";
import { humanizeDate } from "../helpers/dateTime";

function SewaPemandu() {
  // get id from url
  const id = useParams().id;
  const { loading, data, error } = useFetch(`/planners/${id}/summary`);
  
  return (
    <>
      {loading ? (
        <Onboarding />
      ) : (
        <div className="containerWisata">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <TextLink href={`/planner/${id}`}>
                  <IconArrowNarrowLeft color="black" />
                </TextLink>
              </div>
              <div className="grow-0 mr-7">Rencana</div>
              <div className="grow h-1"></div>
            </div>
          </div>

          <div className="m-5 mt-8">
            <div className="flex items-center mb-5">
              <span className="text-xl text-rent mt-[-10px]">
                Rangkuman Perjalanan kamu
              </span>
              <div className="grow"></div>
              <div className="flex mr-0 mb-3 mt-1">
                <Button size="small" type="primary" href={`/planner/${id}/map`}>
                  <span className="pl-5">Lihat di Peta </span>
                </Button>
                <span className="ml-2 mt-1 absolute">
                  <IconMap width={19} color="white" />
                </span>
              </div>
            </div>

            <div className="bg-[#eeeeee] rounded-md">
              <Card>
                <div
                  style={{ color: "black", fontSize: "13px" }}
                  className="p-3"
                >
                  <div className="flex">
                    <p className="mt-0.5">
                      <IconMap size={20} />
                    </p>
                    <span className="ml-2 font-bold text-black text-xl">
                      {data.name}
                    </span>
                  </div>
                  <div className="flex mt-3">
                    <p className="mt-0.5">
                      <IconCalendarEvent size={20} />
                    </p>
                    <span className="ml-2 text-md mt-0.5">
                      {data && humanizeDate(data.startDate)}
                      {data &&
                        humanizeDate(data.startDate) !==
                          humanizeDate(data.endDate) && (
                          <> - {humanizeDate(data.endDate)}</>
                        )}
                    </span>
                  </div>
                  <div className="flex mt-3">
                    <p className="mt-0.5">
                      <IconMapPin size={20} />
                    </p>
                    <span className="ml-2 text-md mt-0.5">
                      {data.city}, Indonesia
                      {data.plan?.length <= 0 && (
                        <div>
                          <p>Rencana kosong</p>
                        </div>
                      )}
                      <ull className="text-sm ml-2">
                        {data.plan?.length > 0 &&
                          data.plan.map((item, i) => (
                            <li key={i}>{item.distination.name}</li>
                          ))}
                      </ull>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="flex p-4 pb-[100%]">
            <Button fullWidth="true" submit={true} centered={true}>
              <Link to="tourguide/">Cari Pemandu Wisata</Link>
            </Button>
            <p className="mt-2 planner-icon absolute ml-[350px]">
              <IconSearch color="white" />
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SewaPemandu;
