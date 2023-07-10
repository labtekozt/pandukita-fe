import { Illustration, Text } from "@kiwicom/orbit-components";

export default function NotFoundComponent({ text }) {
  return (
    <div
      className="empty grid place-content-center min-h-screen"
      style={{ width: "300px", backgroundColor: "white" }}
    >
      <div className="mt-[10%]">
        <div>
          <div
            className="flex
                    items-center
                    justify-center"
          >
            <div>
              <Illustration name="NoResults" size="small" />
            </div>
          </div>
          <div
            className="flex
                    items-center
                    justify-center
                    p-1"
          >
            <Text align="center">{text}</Text>
          </div>
          <div
            className="flex
                    items-center
                    justify-center
                    p-1"
          ></div>
        </div>
      </div>
    </div>
  );
}
