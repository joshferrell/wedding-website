import { Component } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button, Box } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default class Main extends Component {
  state = {
    page: 0,
    pageCount: 0,
  };

  flipBook: any;

  nextButtonClick = () => {
    this.flipBook.pageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.pageFlip().flipPrev();
  };

  render = () => {
    // const pageCount = Array.from(Array(34).keys());
    return null;

  //   return (
  //     <>
  //       {/* 
  //       // @ts-ignore */}
  //       <HTMLFlipBook
  //         width={3037}
  //         ref={(el) => (this.flipBook = el)}
  //         height={2475}
  //         minWidth={400}
  //         size="stretch"
  //         showCover={true}
  //         usePortrait={true}
  //         autoSize={true}
  //         useMouseEvents={true}
  //         onInit={({ object }) => {
  //           this.setState({ pageCount: object.pages.pages.length });
  //         }}
  //         onFlip={({ data }) => {
  //           this.setState({ page: data });
  //         }}
  //         mobileScrollSupport={false}
  //       >
  //         <img
  //           data-density="hard"
  //           src="/our-story/cover-front.webp"
  //           width={3037}
  //           height={2475}
  //         />
  //         {pageCount.map((page) => (
  //           <Box key={page}>
  //             <img
  //               src={`/our-story/${page + 1}.png`}
  //               width={3037}
  //               height={2475}
  //               alt=""
  //             />
  //           </Box>
  //         ))}
  //         <img
  //           data-density="hard"
  //           src="our-story/cover-back.webp"
  //           width={3037}
  //           height={2475}
  //         />
  //       </HTMLFlipBook>
  //       <Box
  //         sx={{
  //           display: "flex",
  //           maxWidth: "400px",
  //           mx: "auto",
  //           gap: "24px",
  //           alignItems: "center",
  //           mt: "24px",
  //         }}
  //       >
  //         <Button
  //           disabled={this.state.page === 0}
  //           onClick={this.prevButtonClick}
  //           leftIcon={<ArrowBackIcon />}
  //           colorScheme="green"
  //         >
  //           Previous
  //         </Button>
  //         Page {this.state.page} / {this.state.pageCount}
  //         <Button
  //           disabled={this.state.page === this.state.pageCount - 1}
  //           onClick={this.nextButtonClick}
  //           rightIcon={<ArrowForwardIcon />}
  //           colorScheme="green"
  //         >
  //           Next Page
  //         </Button>
  //       </Box>
  //     </>
  //   );
  // };
}
