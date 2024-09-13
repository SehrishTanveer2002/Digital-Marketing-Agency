// Left Column
const leftItems = [
    "One-size-fits-all approach",
    "Commission breath",
    "Low-quality output",
    "Underwhelming"
];

//Right Column
const rightItems = [
    "Granular attention to detail",
    "Aligned with unique needs",
    "Industry specialization",
    "Invested in your growth"
];

function generateItemHTML(text, colorClass) {
    return `
        <div class="flex items-center ml-[30px] mt-5">
            <div class="w-1.5 ${colorClass} h-[60px]"></div>
            <div class="ml-4 relative w-[90%]">
                <p class="text-[28px] font-medium font-DMSans tracking-wide">${text}</p>
                <div class="absolute -bottom-2 -left-4 w-full border-b border-customgray"></div>
            </div>
        </div>
    `;
}

// for Left Column
document.getElementById("leftItemsContainer").innerHTML = leftItems
    .map(item => generateItemHTML(item, "bg-customgray"))
    .join('');

// for Right Column
const rightColors = ['bg-customYellow', 'bg-customBlue', 'bg-customlightseagreen', 'bg-customred'];
document.getElementById("rightItemsContainer").innerHTML = rightItems
    .map((item, index) => generateItemHTML(item, rightColors[index]))
    .join('');

// teamMembers section
const teamMembers = [
    {
      name: "Josh Moody",
      location: "INDIANA, UNITED STATES",
      email: "jmoody@digitalmarketingagency.com",
      imgSrc: "/images/Client1.jpeg"
    },
    {
      name: "Melissa Oien",
      location: "FLORIDA, UNITED STATES",
      email: "moien@digitalmarketingagency.com",
      imgSrc: "/images/Client2.jpeg"
    },
    {
      name: "Diogo Monteiro",
      location: "NEW JERSEY, UNITED STATES",
      email: "dmonteiro@digitalmarketingagency.com",
      imgSrc: "/images/Client3.jpeg"
    }
  ];
  
  const generateTeamMembers = () => {
    const container = document.getElementById('team-members');
    container.innerHTML = teamMembers.map(member => `
      <div class="text-left flex flex-col items-center">
        <img src="${member.imgSrc}" alt="${member.name}" class="mb-4">
        <h5 class="font-550 text-1.325rem leading-[1.725] text-black font-DMSans">${member.name.toUpperCase()}</h5>
        <span class="block font-DMSans font-normal text-sm leading-5 text-gray-500">${member.location}</span>
        <p class="text-gray-500 font-normal text-xs leading-[1.25] tracking-wider font-DMSans">${member.email}</p>
        <div class="w-[160px] h-[45px] mt-[10px] border border-customSkyBlue">
          <p class="text-customSkyBlue font-bold font-DMSans text-xs leading-[10px] py-[17px] px-[11px] text-center">SCHEDULE A CALL</p>
        </div>
      </div>
    `).join('');
  };

  generateTeamMembers();
  
