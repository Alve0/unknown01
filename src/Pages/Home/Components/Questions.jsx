import React from "react";

export default function Questions() {
  return (
    <div className="space-y-4 mb-16">
      <h3 className="lg:text-center font-bold text-2xl lg:text-5xl mb-24  sm:text-left">
        Frequently Asked Questions
      </h3>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-bold main-color">
          Do plumbers deal with heating?
        </div>
        <div className="collapse-content text-sm ">
          Yes, some of our local plumbers are also Gas Safe registered and
          experienced in working on heating systems, boilers, bathrooms, and
          kitchens.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-bold main-color">
          Do you charge a call out fee?
        </div>
        <div className="collapse-content text-sm">
          We do not charge a call out fee. You only pay for the work completed
          and the time spent on the job.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-bold main-color">
          How quickly can your company send out an engineer?
        </div>
        <div className="collapse-content text-sm">
          We aim to send an engineer within 1–2 hours for emergencies. For
          standard appointments, we can usually book you in the same day or at
          your preferred time.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-bold main-color">
          What should I do if I get a water leak?
        </div>
        <div className="collapse-content text-sm">
          If you experience a water leak, first turn off your main water supply
          to prevent flooding. Then contact us immediately so we can send out a
          plumber to fix the issue quickly.
        </div>
      </div>
    </div>
  );
}
