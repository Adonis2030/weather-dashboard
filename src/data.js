import { ReactComponent as Sun } from "./assets/svgs/clearSky.svg";
import { ReactComponent as CloudSun } from "./assets/svgs/sky.svg";
import { ReactComponent as Rain } from "./assets/svgs/rain.svg";
import { ReactComponent as Thunderstorm } from "./assets/svgs/thunderstorm.svg";
import { ReactComponent as Drizzle } from "./assets/svgs/drizzle.svg";
import { ReactComponent as Fog } from "./assets/svgs/fog.svg";
import { ReactComponent as Snow } from "./assets/svgs/snow.svg";

const weatherCodeData = {
  0: { status: "Clear Sky", icon: Sun },
  1: { status: "Partly Cloudy", icon: CloudSun },
  2: { status: "Partly Cloudy", icon: CloudSun },
  3: { status: "Partly Cloudy", icon: CloudSun },
  45: { status: "Fog", icon: Fog },
  48: { status: "Fog", icon: Fog },
  51: { status: "Drizzle", icon: Drizzle },
  53: { status: "Drizzle", icon: Drizzle },
  55: { status: "Drizzle", icon: Drizzle },
  56: { status: "Drizzle", icon: Drizzle },
  57: { status: "Drizzle", icon: Drizzle },
  61: { status: "Rain", icon: Rain },
  63: { status: "Rain", icon: Rain },
  65: { status: "Rain", icon: Rain },
  66: { status: "Rain", icon: Rain },
  67: { status: "Rain", icon: Rain },
  80: { status: "Rain", icon: Rain },
  81: { status: "Rain", icon: Rain },
  82: { status: "Rain", icon: Rain },
  71: { status: "Snow", icon: Snow },
  73: { status: "Snow", icon: Snow },
  75: { status: "Snow", icon: Snow },
  77: { status: "Snow", icon: Snow },
  85: { status: "Snow", icon: Snow },
  86: { status: "Snow", icon: Snow },
  95: { status: "Thunderstorm", icon: Thunderstorm },
  96: { status: "Thunderstorm", icon: Thunderstorm },
  99: { status: "Thunderstorm", icon: Thunderstorm },
};

export default weatherCodeData;
