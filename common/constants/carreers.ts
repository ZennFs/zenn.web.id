import { CareerProps } from "../types/careers";

export const CAREERS: CareerProps[] = [
  {
    position: "ICT and Programmer",
    company: "Politeknik NSC Surabaya",
    logo: "/images/careers/nsc.png",
    location: "Surabaya, Indonesia 🇮🇩",
    location_type: "Onsite",
    type: "Internship",
    start_date: "2023-05",
    end_date: "2025-02",
    industry: "Education",
    link: "https://nscpolteksby.ac.id/",
    responsibilities: [
      "Developed and maintained backend services using Laravel for internal application.",
      "Implemented efficient data handling and secure API integrations to support daily attendance workflows.",
      "Collaborated with teams to ensure smooth functionality and seamless user experience.",
    ],
    isShow: true,
  },
  {
    position: "Frontend Web Developer",
    company: "Lembaga Kursus dan Pelatihan Enesce",
    logo: "https://lkpenesce.com/wp-content/uploads/2025/07/cropped-images-r.webp",
    location: "Surabaya, Indonesia 🇮🇩",
    location_type: "Remote",
    type: "Part-time",
    start_date: "2025-07",
    end_date: "2025-08",
    industry: "Education",
    link: "https://lkpenesce.com/",
    responsibilities: [
      "Developed a responsive and interactive landing page using Wordpress to promote company services and solutions.",
      "Ensured SEO optimization and fast performance by leveraging Next.js features such as static site generation.",
      "Collaborated with marketing teams to align web presence with brand identity.",
    ],
    isShow: true,
  },
];
