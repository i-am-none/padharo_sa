import type { AtmosphereContentModel } from "./atmosphere.types";
import { AtmosphereClient } from "./AtmosphereClient";

type AtmosphereProps = {
  content: AtmosphereContentModel;
};

export function Atmosphere({ content }: AtmosphereProps) {
  return <AtmosphereClient content={content} />;
}
