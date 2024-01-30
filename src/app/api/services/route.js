import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 1,
    heading: "Angioplasty",
    body: "Our team of highly professionals uses the latest heal echnologies health quickly and easily.",
    readMore: "#",
  });
}

// export async function GET() {
//   return new Response(
//     "Our services"
//     // (services = {
//     //   id: 1,
//     //   heading: "Angioplasty",
//     //   body: "Our team of highly professionals uses the latest heal echnologies health quickly and easily.",
//     //   readMore: "#",
//     // })
//   );
// }
