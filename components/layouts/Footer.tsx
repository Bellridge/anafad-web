"use client";

import Link from "next/link";
import Logo from "../shared/Logo";

const footerNavItems = [
  {
    title: "Company",
    otherOptions: [{ title: "About Us", route: "/about" }],
  },

  {
    title: "Contact",
    otherOptions: [
      { title: "Support", route: "/contact-us" },
      { title: "Get in Touch", route: "/contact", isPriority: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col ">
      <div className="bg-anafad-primary-blue text-white px-6 md:px-12 lg:px-16 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {footerNavItems.map((data, i) => (
            <div key={i} className="flex-1">
              <h4 className="font-sans text-md font-semibold mb-4">
                {data.title}
              </h4>

              <div className="flex flex-col space-y-3">
                {data.otherOptions?.map((datum, j) => (
                  <Link
                    key={j}
                    href={datum.route}
                    className={`transition-colors text-white ${
                      datum.isPriority
                        ? "font-semibold  hover:text-black"
                        : "font-medium hover:text-black"
                    } text-sm`}
                  >
                    {datum.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-anafad-primary-blue/10 text-anafad-primary-blue font-sans font-semibold text-sm uppercase text-center py-3 tracking-wide">
        &copy; {new Date().getFullYear()}. Anafad Inc.
      </div>
    </footer>
  );
}
