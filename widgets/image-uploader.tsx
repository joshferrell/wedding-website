import { useEffect, useRef } from "react";

import Dashboard from "@uppy/dashboard";
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";

const Uploader: React.FC<{ height?: number }> = ({ height = 200 }) => {
  const uppyContainer = useRef<HTMLDivElement>() as any;

  useEffect(() => {
    if (!uppyContainer) return () => undefined;

    const uppyOptions = {
      debug: true,
      restrictions: {
        maxFileSize: 15_000_000,
        allowedFileTypes: ["image/*", ".jpg", ".jpeg", ".png"],
      },
      locale: {
        strings: {
          youCanOnlyUploadFileTypes:
            "You can only upload images like .jpg or .png",
        },
      },
    };

    const uppy = new Uppy(uppyOptions);
    uppy
      .use(Dashboard, {
        target: uppyContainer.current,
        inline: true,
        height,
      })
      .use(Transloadit, {
        params: {
          auth: { key: "6b3145dd9efc497d96507d319ba053ce" },
          template_id: "f2d4059051d341ddb9276bd92cdfe095",
        },
      });

    if (typeof window) {
      Promise.all([
        import("@uppy/compressor"),
        import("@uppy/golden-retriever"),
      ]).then(([Compressor, GoldenRetriver]) => {
        uppy.use(Compressor.default).use(GoldenRetriver.default);
      });
    }

    return () => uppy.close();
  }, [uppyContainer, height]);

  return <div ref={uppyContainer} id="uppy-dashboard-container" />;
};

export default Uploader;
