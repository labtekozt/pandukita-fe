// create component react function with name SummaryPlanner

import { Button, Card } from "@kiwicom/orbit-components/lib/";
import { IconMap, IconCalendarEvent, IconMapPin } from "@tabler/icons-react";
import { humanizeDate } from "../helpers/dateTime";

function SummaryPlanner({ id, name, startDate, endDate, city, plan }) {
  return (
    <>
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
          <div style={{ color: "black", fontSize: "13px" }} className="p-3">
            <div className="flex">
              <p className="mt-0.5">
                <IconMap size={20} />
              </p>
              <span className="ml-2 font-bold text-black text-xl">{name}</span>
            </div>
            <div className="flex mt-3">
              <p className="mt-0.5">
                <IconCalendarEvent size={20} />
              </p>
              <span className="ml-2 text-md mt-0.5">
                {humanizeDate(startDate)}
                {humanizeDate(startDate) !== humanizeDate(endDate) && (
                  <> - {humanizeDate(endDate)}</>
                )}
              </span>
            </div>
            <div className="flex mt-3">
              <p className="mt-0.5">
                <IconMapPin size={20} />
              </p>
              <span className="ml-2 text-md mt-0.5">
                {city}, Indonesia
                {plan?.length <= 0 && (
                  <div>
                    <p>Rencana kosong</p>
                  </div>
                )}
                <div className="text-sm ml-2">
                  {plan?.length > 0 &&
                    plan.map((item, i) => (
                      <li key={i}>{item.distination.name}</li>
                    ))}
                </div>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default SummaryPlanner;
