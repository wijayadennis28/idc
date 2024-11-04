import React from "react";

const Branches = () => {
  const branches = [
    {
      name: "Senayan Branch",
      address: "Jl. Hang Tuah Raya No.35, Kby. Baru, South Jakarta - 12120",
      schedule: [
        "Mon - Fri = 10.00 AM - 06.00 PM",
        "Sat = 10.00 AM - 06.00 PM",
      ],
      phone: "+62 812-808-0011",
      phoneLabel: "Senayan",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2281968094794!2d106.79508307575067!3d-6.2336209937545455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d91cc5e8e4f%3A0x482830c08a46f6e2!2sINDO%20DENTAL%20CENTER%20-%20Klinik%20Gigi%20Spesialis!5e0!3m2!1sen!2sid!4v1729369270940!5m2!1sen!2sid.", // Replace with actual Google Maps embed link
    },
    {
      name: "Pluit Branch",
      address:
        "Ruko CBD Pluit No. B2, Jl. Pluit Selatan Raya, Penjaringan, North Jakarta City - 14440",
      schedule: [
        "Mon - Fri = 10.00 AM - 06.00 PM",
        "Sat = 10.00 AM - 06.00 PM",
      ],
      phone: "+62 812-808-0011",
      phoneLabel: "Pluit",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0180537971087!2d106.78734657575!3d-6.128272493858513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d6bd3175651%3A0xea7f602f2981257!2sINDO%20DENTAL%20CENTER%20-%20Klinik%20Gigi%20Spesialis!5e0!3m2!1sen!2sid!4v1729369350556!5m2!1sen!2sid", // Replace with actual Google Maps embed link
    },
  ];

  return (
    <div id="branches" className="m-8">
      <h2 className="mb-8 text-3xl font-bold text-purple-700">Address</h2>
      <div className="flex flex-col gap-8">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden bg-white lg:flex-row"
          >
            <div
              className="rounded-2xl bg-gray-100 p-6"
              style={{ width: "382px", height: "347px" }}
            >
              <h3 className="mb-2 text-xl font-bold">{branch.name}</h3>
              <p className="mb-2 text-gray-600">{branch.address}</p>
              <div className="mb-4">
                Schedule
                <ul className="ml-2 list-inside list-disc text-sm text-gray-500">
                  {branch.schedule.map((time, idx) => (
                    <li key={idx}>{time}</li>
                  ))}
                </ul>
              </div>
              <a
                href={`tel:${branch.phone}`}
                className="mt-2 flex items-center justify-center rounded-full bg-purple-700 px-4 py-2 text-white transition hover:bg-purple-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 px-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                {branch.phone} ({branch.phoneLabel})
              </a>
            </div>
            <div className="h-64 flex-1 px-4 lg:h-auto lg:w-1/2">
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="566px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
