import Image from "next/image";
import Link from "next/link";

// const keyMetrics = [
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
//       </svg>
//     ),
//     title: "Page views",
//     desc: "Track the number of times your pages are viewed.",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
//       </svg>
//     ),
//     title: "Use Engagement",
//     desc: "Measure how users interact with your content.",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Zm-69.48,73.76.06-.05Zm95.15-.09-49.66-49.67a16,16,0,0,0-26,4.94l-19.42,44.65L48,48l159.87,52.21-44.64,19.41a16,16,0,0,0-4.94,26L208,195.31ZM88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM8,96a8,8,0,0,1,8-8h8a8,8,0,0,1,0,16H16A8,8,0,0,1,8,96ZM120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16Zm-81.69,96a8,8,0,0,1-3.58,10.74l-16,8a8,8,0,0,1-7.16-14.31l16-8A8,8,0,0,1,39.16,124.42Z"></path>
//       </svg>
//     ),
//     title: "Conversion Rates",
//     desc: "Monitor the percentage of users who complete a desired action.",
//   },
// ];

// const useAnalytics = [
//   {
//     title: "Step 1: Integrating",
//     desc: "Add the analytics script to your site&apos;s header.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
//       </svg>
//     ),
//   },
//   {
//     title: "Step 2: Tracking",
//     desc: "Use the analytics code to track user behavior and actions.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
//       </svg>
//     ),
//   },
//   {
//     title: "Step 3: Analysis",
//     desc: "Access your dashboard to view and analyze the collected data.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
//       </svg>
//     ),
//   },
// ];

// const benefits = [
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm108.34,72.28A15.92,15.92,0,0,0,144,139.17v55.49L112,216V139.17a15.92,15.92,0,0,0-4.32-10.94L40,56H216Z"></path>
//       </svg>
//     ),
//     desc: "Improve User Experience",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"></path>
//       </svg>
//     ),
//     desc: "Improve User Experience",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm108.34,72.28A15.92,15.92,0,0,0,144,139.17v55.49L112,216V139.17a15.92,15.92,0,0,0-4.32-10.94L40,56H216Z"></path>
//       </svg>
//     ),
//     desc: "Increase Conversion Rates",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24px"
//         height="24px"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
//       </svg>
//     ),
//     desc: "Understand Your Audience",
//   },
// ];

// const newImgLinks = [
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Production%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/materials-management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Quality%20Control%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Inventory%20Tracking%20System.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Purchase%20&%20Sales%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Transportation.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Test%20Certificate%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Plant%20Maintenance%20&%20Schedules.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Finance%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Process%20Automation.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Asset%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Bills%20of%20Materials.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/warehouse-management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Smart%20Manufacturing%20Integration.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Vendor%20Management%20Module.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Retail%20POS.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/GST%20Accounting.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Business%20Intelligence.png",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Human%20Resource%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/RFID%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Mill-wise%20Planning%20and%20Status%20of%20WIP.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Procurement%20Management.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Sales%20Consolidation.webp",
//   "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Stock%20Transaction%20Analysis.webp",
// ];

const erpManufacturingFeatures = [
  {
    title: "Production Management",
    description:
      "Better planning, scheduling, and control of production processes with modules for production planning, and real-time monitoring of production activities.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Production%20Management.webp",
  },
  {
    title: "Materials Management",
    description:
      "Manage the entire lifecycle of materials from procurement to storage and usage including inventory management, supply, and order processing.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/materials-management.webp",
  },
  {
    title: "Quality Control Management",
    description:
      "Ensures that products meet the required quality standards by features for quality planning, inspections, and corrective actions.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Quality%20Control%20Management.webp",
  },
  {
    title: "Inventory Tracking System",
    description:
      "Monitor the transportation of unprocessed raw materials and finished products within the supply chain and check the work-in-progress status",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Inventory%20Tracking%20System.webp",
  },
  {
    title: "Purchase & Sales Management",
    description:
      "Streamline raw material procurement & the sale of finished goods with features for purchase order management, supplier management, etc.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Purchase%20&%20Sales%20Management.webp",
  },
  {
    title: "Packaging/Transportation",
    description:
      "Manages the packaging and transportation of finished goods to distribution centers while optimizing logistics for timely deliveries.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Transportation.webp",
  },
  {
    title: "Test Certificate Management",
    description:
      "Manages and records test certificates for products to ensure compliance with quality standards and regulatory requirements.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Test%20Certificate%20Management.webp",
  },
  {
    title: "Plant Maintenance & Schedules",
    description:
      "Monitors and schedules maintenance activities for machinery and equipment to minimize downtime and keep production at optimum levels",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Plant%20Maintenance%20&%20Schedules.webp",
  },
  {
    title: "Finance Management",
    description:
      "Manages financials including accounting, budgeting, and reporting. Ensure compliance with financial regulations.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Finance%20Management.webp",
  },
  {
    title: "Process Automation",
    description:
      "Save working hours with administrative process automation such as work orders, sales bills, bills of materials, purchase records, etc.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Process%20Automation.webp",
  },
  {
    title: "Asset Management",
    description:
      "Keep a record of equipment age, life span, current condition, location, etc., and track all physical assets to prevent incidents of theft/loss.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Asset%20Management.webp",
  },
  {
    title: "Bills of Materials",
    description:
      "Generate bills of materials and track changes in them by multiple departments and identify discrepancies if any at the earliest.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Bills%20of%20Materials.webp",
  },
  {
    title: "Warehouse Management",
    description:
      "Organize warehouse, optimize space, improve warehouse layout for stocks, and enhance performance with in-built modules for warehouse management.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/warehouse-management.webp",
  },
  {
    title: "Smart Manufacturing Integration",
    description:
      "Integration with the latest CAD, AI, and Machine learning tools, Chatbot integrations, and others for smart manufacturing enablement.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Smart%20Manufacturing%20Integration.webp",
  },
  {
    title: "Vendor Management Module",
    description:
      "Keep vendor information and data in one place and manage vendor communication with an in-built vendor management module",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Vendor%20Management%20Module.webp",
  },
  {
    title: "Retail POS",
    description:
      "Integrated POS module that helps manufacturing units with retail outlets generate invoices and manage retail transactions and payments.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Retail%20POS.webp",
  },
  {
    title: "GST Accounting",
    description:
      "Automation of GST-compliant invoicing and accounting module that calculates and tracks GST flawlessly. Submission of GSTR directly from ERP.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/GST%20Accounting.webp",
  },
  {
    title: "Business Intelligence",
    description:
      "Advanced tools for business intelligence that report on KPIs, resource utilization, etc, and provide presentable reports on interactive dashboards",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Business%20Intelligence.png",
  },
  {
    title: "Human Resource Management",
    description:
      "Manages all aspects related to human resources, including employee information, payroll, attendance, and performance evaluations.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Human%20Resource%20Management.webp",
  },
  {
    title: "Bar Code / RFID Management",
    description:
      "Utilizes barcode or RFID technology to track the movement of materials from raw form to finished products. Enhance accuracy in stock management.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/RFID%20Management.webp",
  },
  {
    title: "Mill-wise Planning and Status of WIP",
    description:
      "Provides detailed planning and real-time status updates for work-in-progress at different manufacturing mills/production units.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Mill-wise%20Planning%20and%20Status%20of%20WIP.webp",
  },
  {
    title: "Procurement Management",
    description:
      "From purchase order creation, quotations, and CPQ processing to finalizing vendors, VasyERP streamlines the procurement process",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Procurement%20Management.webp",
  },
  {
    title: "Sales Consolidation",
    description:
      "Consolidates sales data from various sources to provide a comprehensive view of the overall sales performance and helps strategize production",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Sales%20Consolidation.webp",
  },
  {
    title: "Stock Transaction Analysis",
    description:
      "Analyzes stock transactions to identify trends, patterns, and areas for improvement in production quantities and inventory management.",
    image:
      "https://www.vasyerp.com/assets-new/images/erp/manufacturing-industry/Stock%20Transaction%20Analysis.webp",
  },
];

export default function Analytics() {
  return (
    <>
      <section className="bg-white ">
        <div className="bg-indigo-50 rounded-lg px-6 py-10">
          <h1 className="text-4xl font-bold text-indigo-700 text-center mb-10">
            Analytics
          </h1>

          <nav className="flex justify-center" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-700 "
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="/features"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-indigo-700 md:ms-2 "
                  >
                    Features
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 ">
                    Analytics
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="container px-6 py-10 mx-auto">
          <div className="flex flex-col justify-center items-center mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
              Top <span className="text-indigo-500">Features of ERP</span> for
              Manufacturing
            </h1>

            <p className="mt-3">
              Master Manufacturing with the power-packed features of our ERP
              system
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {erpManufacturingFeatures.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 space-y-3 text-center bg-indigo-50 rounded-xl hover:shadow-md transition duration-300 ease-in-out hover:-translate-2"
              >
                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  <Image src={item.image} width={48} height={48} alt="" />
                </div>

                <h1 className="text-xl font-semibold text-gray-700 capitalize ">
                  {item.title}
                </h1>

                <p className="text-gray-500 ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
