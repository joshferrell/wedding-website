import { NextResponse, type NextRequest } from "next/server";
import { DateTime } from "luxon";

export const middleware = (request: NextRequest) => {
  const dt = DateTime.now();
  const weddingTime = DateTime.fromISO("2022-06-29T16:05:00");

  if (dt < weddingTime) {
    return NextResponse.redirect("https://www.zola.com/wedding/stein-ferrell");
  }

  return NextResponse.next();
};
