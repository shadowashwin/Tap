import { Tabs } from "./Tabs";
import WeatherContent from "../weather/WeatherContext";
import Network from "../network/network";


export function TabsDemo() {
  const tabs = [
    {
      title: "Weather",
      value: "product",
      content: (
        <div className="w-full relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-white bg-black">
          <WeatherContent />
        </div>
      ),
    },
    {
      title: "Geo-Net",
      value: "services",
      content: (
        <div className="w-full relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-white bg-black">
          <Network/>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[100%] [perspective:1000px] relative b p-1 flex flex-col w-full overflow-hidden">
      <Tabs tabs={tabs} />
    </div>
  );
}