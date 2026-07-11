import type { AtmosphereContentModel } from "./atmosphere.types";
import { AtmosphereCopy } from "./AtmosphereCopy";
import { AtmosphereEyebrow } from "./AtmosphereEyebrow";
import { AtmosphereHeadline } from "./AtmosphereHeadline";
import { AtmosphereQuote } from "./AtmosphereQuote";

type AtmosphereContentProps = {
  content: AtmosphereContentModel;
};

export function AtmosphereContent({ content }: AtmosphereContentProps) {
  return (
    <div className="atmosphere-content-column">
      <div className="atmosphere-content-frame">
        <AtmosphereEyebrow text={content.eyebrow} />
        <AtmosphereHeadline text={content.headline} />
        <AtmosphereCopy text={content.copy} />
        {content.quote ? <AtmosphereQuote text={content.quote} /> : null}
      </div>
    </div>
  );
}
