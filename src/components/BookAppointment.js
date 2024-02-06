import React from "react";
import AppointmentBanner from "./AppointmentBanner";
import Link from "next/link";

const BookAppointment = () => {
  return (
    <section className="w-screen gap-6 container  ">
      <AppointmentBanner
        title={" Schedule an imperson or virtual appointment today"}
      >
        <div className="buttons flex flex-col items-center gap-4 lg:flex-row ">
          <Link href="#" className="btnSec ">
            Book an Appointment
          </Link>
          {/* <span className="text-white font-medium"> (OR) </span>
          <Link href="#" className="btnHover ">
            Call: 1-800-123-9999
          </Link> */}
        </div>
      </AppointmentBanner>
    </section>
  );
};

export default BookAppointment;
