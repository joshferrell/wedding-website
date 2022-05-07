import AWS from "aws-sdk";
import { useCallback, useState } from "react";
import Measure from "react-measure";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Photos from "../media/photos.svg";

import ImageUploader from "../widgets/image-uploader";

export async function getStaticProps() {
  const Bucket = process.env.AWS_BUCKET as string;
  AWS.config.update({ region: "us-west-1" });

  const s3 = new AWS.S3();

  const { Contents = [] } = await s3
    .listObjects({ Bucket, Prefix: "approved" })
    .promise();

  const urls = Contents.map(({ Key }) => {
    if (!Key) return null;
    const [strWidth, strHeight] = Key.replace("approved/", "").split("_");
    const width = Number.parseInt(strWidth, 10);
    const height = Number.parseInt(strHeight, 10);

    return {
      width,
      height,
      src: s3.getSignedUrl("getObject", { Bucket, Key }),
    };
  });

  return {
    props: { urls },
  };
}

const Page: React.FC<{
  urls: { src: string; width: number; height: number }[];
}> = ({ urls }) => {
  const [dimensions, setDimensions] = useState({ width: -1, height: -1 });
  const [currentImage, setCurrentImage] = useState(0);
  const [viewIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((_: any, { index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Heading
        as="h2"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          my: "50px",
          svg: { fill: "green.800" },
        }}
      >
        <Photos width={271} height={125} />
      </Heading>
      <Measure
        bounds
        onResize={({ bounds }) => {
          setDimensions(bounds || { width: -1, height: -1 });
        }}
      >
        {({ measureRef }) => (
          <Box ref={measureRef} maxWidth={1100} mt={3} px="24px" mx="auto">
            {Boolean(urls.length) && (
              <>
                <Gallery
                  photos={urls}
                  onClick={openLightbox}
                  direction="column"
                  columns={dimensions.width < 600 ? 2 : 3}
                />
                {/* 
                // @ts-ignore */}
                <ModalGateway>
                  {viewIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={urls.map((x) => ({ ...x, source: x.src }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </>
            )}
          </Box>
        )}
      </Measure>
      <Box
        sx={{
          mt: "32px",
          py: "48px",
          bg: "green.50",
          width: "100%",
          mx: "auto",
          borderRadius: "8px",
        }}
      >
        <Box sx={{ mx: "auto", maxWidth: 800, px: "24px" }}>
          <Heading size="lg" as="h3" sx={{ mb: 3 }}>
            Don&apos;t see your photo?
          </Heading>
          <Box as="p" sx={{ mb: 5 }}>
            We would love to see it, try uploading it below. If you have already
            posted a photo but don&apos;t see it, we haven&apos;t gotten around
            to reviewing your photo just yet.
          </Box>
          <ImageUploader height={400} />
        </Box>
      </Box>
    </>
  );
};

export default Page;
