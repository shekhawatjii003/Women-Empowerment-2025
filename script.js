document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script loaded");

  // 🟣 Schemes data with added 'category' for filtering
  const schemes = [
    { title: "Subhadra Yojana (Odisha)", description: "Annual ₹10,000 (₹5,000 x 2) to women aged 21–60 via Aadhaar-linked transfers, plus digital debit facilities.", link: "https://subhadra.odisha.gov.in/", category: "financial" },
    { title: "Namo Drone Didi Scheme", description: "Enables women SHG members to operate agri-drones, with training and support under a ₹1,261 crore program.", link: "https://en.wikipedia.org/wiki/Namo_Drone_Didi_Scheme", category: "employment" },
    { title: "Mission Shakti", description: "Umbrella women's empowerment scheme with safety (Sambal) and financial/employment (Samarthya) verticals.", link: "https://missionshakti.wcd.gov.in/", category: "safety" },
    { title: "Prime Minister Internship Scheme", description: "Govt internships across multiple sectors for youth, including women—10 million opportunities envisaged.", link: "https://pminternship.mca.gov.in", category: "employment" },
    { title: "Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)", description: "Pays ₹1,500/month plus three LPG cylinders annually, along with skill/health support.", link: "#", category: "financial" },
    { title: "Palakmantri Makan-Dukan Scheme (Kolhapur)", description: "₹30,000 aid for rural women to set up grocery shops adjacent to PMAY homes.", link: "#", category: "entrepreneurship" },
    { title: "Haryana Widowed Women Self-Reliance Scheme", description: "Loans up to ₹3 lakh with interest subsidy + vocational training for widows aged 18–60.", link: "#", category: "employment" },
    { title: "Stree Shakti (AP Free Bus Travel)", description: "Free APSRTC travel for women, significantly increasing ridership since August 2025.", link: "#", category: "safety" },
    { title: "Sakhi Express Scooters (Assam)", description: "Scooters, helmet, and ₹500 monthly fuel allowance for rural women community cadres.", link: "#", category: "employment" },
    { title: "PM Ujjwala Yojana 2.0", description: "Provides free LPG connections and subsidies to women from low-income households to promote clean cooking fuel.", link: "https://www.pmuy.gov.in/", category: "health" },
    { title: "One Stop Centre (OSC) Scheme", description: "Support centres for women facing violence—offering legal, medical, and counselling services in all districts.", link: "https://wcd.nic.in/schemes/one-stop-centre-scheme-2015", category: "safety" },
    { title: "Mahila E-Haat", description: "Digital marketing platform to help women entrepreneurs sell products and services online directly.", link: "http://mahilaehaat-rmk.gov.in/", category: "entrepreneurship" },
    { title: "Working Women Hostel Scheme", description: "Provides safe and affordable accommodation with childcare facilities for working women.", link: "https://wcd.nic.in/schemes/working-women-hostel", category: "employment" },
    { title: "STEP Scheme", description: "Offers skills training in sectors like agriculture, IT, handicrafts and services to boost employability.", link: "https://wcd.nic.in/schemes/support-training-and-employment-programme-women-step", category: "education" },
    { title: "Nirbhaya Fund Initiatives", description: "Central fund financing safety infrastructure, self-defence training, and emergency response for women.", link: "https://wcd.nic.in/nirbhaya", category: "safety" },
    { title: "Beti Bachao Beti Padhao (BBBP)", description: "Awareness + financial incentives to encourage girls’ education and reduce female foeticide.", link: "https://wcd.nic.in/bbbp-schemes", category: "education" }
  ];

  const container = document.getElementById("schemes-container");
  const searchInput = document.getElementById("search");
  const filterSelect = document.getElementById("filter");

  // 🟣 Function to display schemes based on search + filter
  function displaySchemes(searchTerm = "", selectedCategory = "all") {
    if (!container) {
      console.error("❌ Container not found");
      return;
    }

    container.innerHTML = "";

    const filteredSchemes = schemes.filter(scheme => {
      const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || scheme.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (filteredSchemes.length === 0) {
      container.innerHTML = "<p>No schemes found.</p>";
      return;
    }

    filteredSchemes.forEach((scheme, index) => {
      const card = document.createElement("div");
      card.className = "scheme-card";
      card.style.animationDelay = `${index * 0.1}s`;
      card.innerHTML = `
        <h3>${scheme.title}</h3>
        <p>${scheme.description}</p>
        <a href="${scheme.link}" target="_blank">Learn More →</a>
      `;
      container.appendChild(card);
    });
  }

  // 🟣 Initial display
  displaySchemes();

  // 🟣 Event listeners for search + filter
  if (searchInput && filterSelect) {
    searchInput.addEventListener("input", () => {
      displaySchemes(searchInput.value, filterSelect.value);
    });

    filterSelect.addEventListener("change", () => {
      displaySchemes(searchInput.value, filterSelect.value);
    });
  }
});
