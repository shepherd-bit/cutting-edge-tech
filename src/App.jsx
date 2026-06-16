import React from 'react';
import './App.css';

function App() {
  return (
    <div className="vanguard-app">
      {/* 1. TOPMOST BAR (Pure White) */}
      <header className="top-bar">
        <div className="top-bar-left">
          <img src="/logo-removebg.png" alt="Vanguard Logo" className="logo-img" />
          <span className="logo-text">Vanguard</span>
        </div>
        
        <div className="top-bar-right">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search technologies, research, contracts..." 
              className="search-input" 
            />
            <button className="search-btn">Search</button>
          </div>
          {/* Added Log In button to the left of Sign Up */}
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      {/* 2. SECOND BAR FROM TOP (Navy Blue) */}
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#exhibitions">Exhibitions</a></li>
          <li><a href="#academic-programs">Academic Programs</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#grants-contracts">Grants & Contracts</a></li>
          <li><a href="#newsletters">Newsletters</a></li>
        </ul>
      </nav>
      {/* ========================================================= */}
      {/* 3. HERO SECTION (NEW CODE TO ADD)                        */}
      {/* ========================================================= */}
      <section className="hero-section">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={`${import.meta.env.BASE_URL}background.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Semi-transparent text container box */}
        <div className="hero-content-box">
          <p className="hero-text">
            Welcome to the ultimate intelligence network designed for researchers, students, and
            industry pioneers. We bridge the gap between groundbreaking discovery and
            real-world opportunity. Dive deep into the world's most cutting-edge
            technologies, unlock elite academic programs tailored to future industries, and
            secure high-value contracts and employment at the absolute frontier of science and engineering.
          </p>
          
          <div className="hero-actions">
            <button className="hero-btn-primary">Explore Database</button>
            <button className="hero-btn-secondary">Join the Network</button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. TRENDING CUTTING-EDGE TECHNOLOGIES GRID (NEW CODE)     */}
      {/* ========================================================= */}
      <section className="trending-section" id="trending-tech">
        <div className="trending-header">
          <span className="trending-tag">Market Intelligence</span>
          <h2 className="trending-title">Trending Cutting-Edge Technologies</h2>
          <p className="trending-subtitle">High-ranking paradigm shifts across deep-tech industries</p>
        </div>

        <div className="trending-grid">
          {/* Card 1 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/agentic-ai-visual.webp`} alt="Agentic AI & Multi-Modal Reasoners" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-ai">Artificial Intelligence (AI) & Machine Learning</span>
              <h3 className="tech-topic">Agentic AI & Multi-Modal Reasoners</h3>
              <p className="tech-summary">
                AI has shifted from passive text generation to autonomous "agents." These models don't just answer questions; they possess reasoning capabilities to break down complex goals, use external software tools, self-correct, and autonomously execute multi-step workflows over days or weeks without human intervention.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/assbs-visual.jpg`} alt="All-Solid-State Batteries" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-ev">Electric Vehicles (EVs) & Autonomous Driving</span>
              <h3 className="tech-topic">All-Solid-State Batteries (ASSBs) & End-to-End AI Driving</h3>
              <p className="tech-summary">
                On the hardware side, solid-state batteries are replacing liquid electrolytes, doubling driving ranges and cutting charging times to under 10 minutes while eliminating fire risks. For autonomy, vehicles use "end-to-end" neural networks, where a single AI model processes raw camera footage and directly outputs steering and braking commands, mimicking human instinct rather than following rigid, hard-coded rules.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/mobile-visual.webp`} alt="On-Device Hybrid AI & Tri-Fold Displays" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-mobile">Smartphones & Mobile Devices</span>
              <h3 className="tech-topic">On-Device Hybrid AI (Neural Processing Units) & Tri-Fold Displays</h3>
              <p className="tech-summary">
                Mobile processors now feature hyper-powerful, dedicated NPUs that allow complex, massive AI models to run completely offline on your device, ensuring total privacy and instant response times. Visually, hardware has moved past standard foldables into commercial tri-fold form factors that seamlessly transform a normal smartphone into a full-sized 10-inch workstation.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/defense-visual.jpg`} alt="Hypersonic Glide Vehicles & Autonomous Drone Swarms" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-defense">Defense Tech & Advanced Weapons</span>
              <h3 className="tech-topic">Systems Hypersonic Glide Vehicles (HGVs) & Autonomous Drone Swarms</h3>
              <p className="tech-summary">
                HGVs travel at speeds greater than Mach 5 and maneuver unpredictably inside the atmosphere, making legacy missile defense systems obsolete. Simultaneously, battlefield operations are dominated by decentralized AI drone swarms that communicate with one another to execute tactical missions collectively without needing a centralized operator.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/biotech-visual.webp`} alt="Biotechnology & Genetic Engineering" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-biotech">Biotechnology & Genetic Engineering</span>
              <h3 className="tech-topic">In Vivo CRISPR Base/Prime Editing & Generative Protein Design</h3>
              <p className="tech-summary">
                Instead of just cutting DNA, scientists can now perform single-letter "search-and-replace" editing directly inside a living patient's body to permanently erase genetic diseases. This is supercharged by generative AI models (like AlphaFold 3) that allow scientists to design entirely custom, synthetic proteins from scratch to target specific viruses.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/aerospace-visual.jpg`} alt="Aerospace & Space Exploration" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-space">Aerospace & Space Exploration</span>
              <h3 className="tech-topic">Tech Fully Reusable Megastructures & Orbital Debris Remediation</h3>
              <p className="tech-summary">
                The commercialization of massive, fully reusable rocket architectures (like SpaceX's Starship framework) has radically lowered the cost of launching cargo into orbit. This has unlocked the deployment of active orbital cleanup technologies that use magnetic docking and laser ablation to capture and safely de-orbit space junk.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 7 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/energy-visual.webp`} alt="Renewable Energy & Cleantech" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-energy">Renewable Energy & Cleantech</span>
              <h3 className="tech-topic">Perovskite-Silicon Tandem Solar Cells & Next-Gen Geothermal</h3>
              <p className="tech-summary">
                By layering a material called perovskite over traditional silicon, solar panels are breaking through their historical limits, achieving efficiency ratings greater than 30%. In baseload power, companies are drilling several miles into the Earth using advanced plasma-arc bits to harvest infinite, deep-earth geothermal energy anywhere on the globe.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 8 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/quantum-visual.png`} alt="Quantum Computing" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-quantum">Quantum Computing</span>
              <h3 className="tech-topic">Logical Qubits with Surface-Code Error Correction</h3>
              <p className="tech-summary">
                Quantum has evolved past noisy physical systems into the era of true error correction. Leading chips (like Google's 105-qubit Willow processor) use surface codes to group fragile physical qubits into perfectly stable "logical qubits," proving that error rates decrease exponentially as the hardware scales up.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 9 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/cloud-visual.webp`} alt="Cloud Computing & Infrastructure" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-cloud">Cloud Computing & Infrastructure</span>
              <h3 className="tech-topic">Sovereign Cloud 3.0 & Neuromorphic Infrastructure</h3>
              <p className="tech-summary">
                Driven by global data regulations and massive AI processing demands, cloud computing has evolved into "Cloud 3.0." This architecture features decentralized, sovereign clouds designed to keep data geographically locked, alongside neuromorphic chip clusters that mimic the physical structure of the human brain to process AI data at a fraction of the power consumption of standard servers.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 10 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/cyber-visual.webp`} alt="Cybersecurity" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-cyber">Cybersecurity</span>
              <h3 className="tech-topic">Post-Quantum Cryptography (PQC) & Hyper-Automated Zero Trust</h3>
              <p className="tech-summary">
                With quantum computers threatening to break global encryption, the absolute standard is migrating to Post-Quantum Cryptography algorithms designed to withstand quantum attacks. This is backed by AI-driven zero-trust security that continuously authenticates every user's behavior millisecond by millisecond, instantly isolating threats before they can spread.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 11 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/robotics-visual.jpg`} alt="Robotics & Automation" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-robotics">Robotics & Automation</span>
              <h3 className="tech-topic">General-Purpose Humanoid Robotics</h3>
              <p className="tech-summary">
                Humanoids have successfully stepped out of the lab and into industrial automotive factories and logistics centers. Powered by advanced vision-language-action models, these robots no longer need custom programming; they can watch a human perform a physical task, learn it instantly, and operate completely autonomously in human spaces.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 12 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/semiconductor-visual.webp`} alt="Semiconductors & Microchip Manufacturing" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-semi">Semiconductors & Microchip Manufacturing</span>
              <h3 className="tech-topic">Sub-2nm Process Nodes & High-NA EUV Lithography</h3>
              <p className="tech-summary">
                Major foundries are aggressively racing past the 2nm boundary toward a 1-nanometer milestone using High-Numerical Aperture Extreme Ultraviolet (High-NA EUV) lithography. These machines use incredibly precise optics to print transistor features so microscopic that they approach the atomic scale, stacking billions of additional transistors onto individual chips.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 13 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/arvr-visual.png`} alt="Virtual Reality (VR) & Augmented Reality (AR)" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-arvr">Virtual Reality (VR) & Augmented Reality (AR)</span>
              <h3 className="tech-topic">Micro-LED Waveguide Spatial Glasses</h3>
              <p className="tech-summary">
                The industry is moving away from bulky plastic headsets toward lightweight, everyday eyewear. By combining microscopic Micro-LED displays with advanced optical waveguides, these glasses project high-brightness holographic overlays directly into the wearer's eyes, flawlessly blending digital interface data with the real world.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 14 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/IoT-visual.webp`} alt="Internet of Things (IoT) & Smart Home Tech" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-iot">Internet of Things (IoT) & Smart Home Tech</span>
              <h3 className="tech-topic">Ambient Wireless Power & Matter-Over-Thread Networks</h3>
              <p className="tech-summary">
                The latest IoT sensors are abandoning batteries entirely. Instead, they use ambient energy-harvesting tech to power themselves wirelessly over the air using background radio waves, Wi-Fi signals, or indoor light. They communicate over low-latency Thread mesh networks, allowing thousands of smart devices to talk to each other locally without slowing down regular internet speeds.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>

          {/* Card 15 */}
          <div className="trending-card">
            <div className="card-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}trending/fintech-visual.jpg`} alt="FinTech (Financial Technology)" className="card-img" />
            </div>
            <div className="trending-card-body">
              <span className="tech-badge badge-fintech">FinTech (Financial Technology)</span>
              <h3 className="tech-topic">Decentralized Real-World Asset (RWA) Tokenization & Multi-Agent Financial Oracles</h3>
              <p className="tech-summary">
                FinTech is revolutionizing global asset ownership by converting real-world assets—like real estate, gold, and private credit—into digital cryptographic tokens. This allows for instantaneous, 24/7 fractional trading and settlement without relying on legacy clearinghouses, managed seamlessly by autonomous AI systems that execute high-frequency cross-border transactions safely.
              </p>
              <button className="tech-explore-btn">Explore Full Report &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. PAGINATION & NAVIGATION CONTROLS                       */}
      {/* ========================================================= */}
      <div className="pagination-container">
        <div className="pag-numbers-wrapper">
          <button className="pag-num active">1</button>
          <button className="pag-num">2</button>
          <button className="pag-num">3</button>
          <button className="pag-num">4</button>
          <button className="pag-num">5</button>
          <button className="pag-num">6</button>
          <button className="pag-num">7</button>
          <button className="pag-num">8</button>
          <button className="pag-num">9</button>
          <span className="pag-ellipsis">...</span>
          <button className="pag-next-prompt">
            Next Page <span className="arrow-icon">&rarr;</span>
          </button>
        </div>
      </div>

     {/* ========================================================= */}
      {/* 7. "FRONTIER OPPORTUNITIES" HUB (UPDATED)                 */}
      {/* ========================================================= */}
      <section className="opportunities-section" id="opportunities">
        <div className="opportunities-header">
          <span className="opp-tag">Ecosystem Integration</span>
          <h2 className="opp-title">Frontier Opportunities Hub</h2>
          <p className="opp-subtitle">Active capitalization structures and pioneer talent pipelines</p>
        </div>

        <div className="opportunities-split-grid">
          {/* Left Column: Active Research Grants & Contracts */}
          <div className="opp-column">
            <div className="opp-column-header">
              <h3>Active Research Grants & Contracts</h3>
            </div>
            
            <div className="opp-list">
              <div className="opp-item">
                <div className="opp-item-meta">
                  <span className="meta-badge contract-badge">Defense Logistics</span>
                  <span className="meta-value">$4.2M Funding</span>
                </div>
                <h4>Autonomous Swarm Mesh Networking Protocols</h4>
                <p>Seeking resilient decentralized communications architectures for low-altitude aerial drone clusters operating under active signal jamming conditions.</p>
                <div className="opp-item-footer">
                  <span>Closing: Aug 14, 2026</span>
                  <a href="#view-spec" className="opp-link">View Specification &rarr;</a>
                </div>
              </div>

              <div className="opp-item">
                <div className="opp-item-meta">
                  <span className="meta-badge contract-badge">Aerospace R&D</span>
                  <span className="meta-value">$8.5M Grant</span>
                </div>
                <h4>Perovskite-Silicon Tandem Structural Stabilization</h4>
                <p>Commercialization funding for high-throughput atmospheric layer deposition tech to eliminate structural decay under high thermal and moisture stress profiles.</p>
                <div className="opp-item-footer">
                  <span>Closing: Sept 02, 2026</span>
                  <a href="#view-spec" className="opp-link">View Specification &rarr;</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pioneer Career Openings */}
          <div className="opp-column">
            <div className="opp-column-header">
              <h3>Pioneer Career Openings</h3>
            </div>

            <div className="opp-list">
              <div className="opp-item">
                <div className="opp-item-meta">
                  <span className="meta-badge career-badge">Quantum Corp</span>
                  <span className="meta-value">Austin / Hybrid</span>
                </div>
                <h4>Senior High-NA EUV Optics Engineer</h4>
                <p>Lead sub-nanometer optical alignment protocols for pattern exposure systems using advanced laser-produced plasma source calibration matrices.</p>
                <div className="opp-item-footer">
                  <span>Salary: $240k – $310k + Equity</span>
                  <a href="#apply-now" className="opp-link">Apply to Role &rarr;</a>
                </div>
              </div>

              <div className="opp-item">
                <div className="opp-item-meta">
                  <span className="meta-badge career-badge">BioVenture Lab</span>
                  <span className="meta-value">Boston On-Site</span>
                </div>
                <h4>Principal AI Protein Architect</h4>
                <p>Deploy large multi-modal transformer architectures for structural mapping of target viral capsids using generative synthetic amino sequence patterns.</p>
                <div className="opp-item-footer">
                  <span>Salary: $195k – $250k + Equity</span>
                  <a href="#apply-now" className="opp-link">Apply to Role &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centralized Action Trigger Block */}
        <div className="opportunities-footer-action">
          <button className="opp-explore-global-btn">Explore Hub Network</button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. "THE BRIEF" (NEWSLETTER TEASER)                        */}
      {/* ========================================================= */}
      <section className="brief-newsletter-section" id="newsletter">
        <div className="brief-container">
          <div className="brief-content">
            <span className="brief-tag">Intelligence Stream</span>
            <h2 className="brief-headline">Stay Ahead of the Frontier.</h2>
            <p className="brief-subdeck">
              Get weekly intelligence briefings on breakthroughs, defense contracts, and deep-tech talent acquisitions.
            </p>
          </div>
          
          <div className="brief-action-form">
            <form onSubmit={(e) => e.preventDefault()} className="newsletter-inline-form">
              <input 
                type="email" 
                placeholder="Enter your institutional email address" 
                className="newsletter-input"
                required 
              />
              <button type="submit" className="newsletter-submit-btn">
                Subscribe
              </button>
            </form>
            <p className="newsletter-privacy-note">
              Join 45,000+ deep-tech operators. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* 9. GLOBAL STRATEGIC FOOTER                                */}
      {/* ========================================================= */}
      <footer className="global-footer">
        <div className="footer-container">
          
          {/* First Line: Social Networks [Discord -> LinkedIn -> GitHub] */}
          <div className="footer-line footer-socials">
            <a href="#discord" className="social-icon-link" aria-label="Discord">
              <svg width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.66-10.84A68.61,68.61,0,0,1,28,80.93c1-.75,2-1.53,3-2.33A74.4,74.4,0,0,0,96.16,78.6c1,.8,2,1.58,3,2.33a68.49,68.49,0,0,1-10.7,4.59,74.65,74.65,0,0,0,6.66,10.84,105.47,105.47,0,0,0,31.06-18.83C129.9,49.43,124,26.63,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.87,46,53.87,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.11,46,96.11,53,91,65.69,84.69,65.69Z"/></svg>
            </a>
            <a href="#linkedin" className="social-icon-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#github" className="social-icon-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>

          {/* Second Line: Copyright Notice */}
          <div className="footer-line footer-copyright">
            <p>&copy; 2026 Shepherd-bit</p>
          </div>

          {/* Third Line: Telecom Contact Metrics */}
          <div className="footer-line footer-contact">
            <p>
              <span>Email:</span> <a href="mailto:titusaolucoh@gmail.com">titusaolucoh@gmail.com</a>
              <span className="contact-divider">|</span>
              <span>Phone:</span> <a href="tel:+254112470926">+254 112 470 926</a>
            </p>
          </div>

          {/* Last Line: Glowing Demo Accent Indicator */}
          <div className="footer-line footer-disclaimer">
            <p className="glowing-disclaimer-text">
              Disclaimer: This is a demo landing page
            </p>
          </div>
          
        </div>
      </footer>

    </div>
  );
}
  
export default App;
