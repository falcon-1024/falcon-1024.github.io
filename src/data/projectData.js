const projectsData = [
  {
    id: "financial-intelligence",
    featured: true,
    title: "Financial Intelligence Platform",
    shortDescription:
      "Financial document intelligence service for SEC filings with split API and ingestion runtimes, job-tracked processing, and grounded question answering.",
    detailedDescription:
      "Built FIP as a financial document intelligence service for SEC filings and related disclosures. The current release separates API and ingestion services, uses an orchestrator plus SQS-backed worker fleet for job-tracked parallel ingestion, stores metadata in PostgreSQL and vectors in Qdrant, and serves grounded question answering through FastAPI. The repo also ships Docker-based local development with Ollama, AWS-first infrastructure definitions, API demo artifacts, and repeatable portfolio evaluation workflows.",
    image: "financial-intelligence-hero.svg",
    categories: ["Generative AI", "Data Engineering"],
    stack: [
      "FastAPI",
      "Amazon SQS",
      "Amazon S3",
      "AWS Bedrock",
      "Qdrant",
      "PostgreSQL",
      "Redis",
      "Ollama",
      "Docker",
      "Python",
    ],
    highlights: [
      "Separated API and ingestion into distinct runtime services with orchestrator, queue, worker, and poller roles instead of a single-process demo path.",
      "Implemented SEC filing ingestion across PostgreSQL metadata, Qdrant vectors, S3 raw storage, and Bedrock-backed retrieval.",
      "Published repeatable local smoke, API-demo, and portfolio-evaluation workflows with reported faithfulness 0.864, answer relevance 0.916, and context recall 1.000.",
    ],
    systemProfile: [
      {
        label: "Architecture",
        value: "Client query flows, evaluation, and asynchronous ingestion split across FastAPI, orchestrator plus SQS, worker fleet, and retrieval services.",
      },
      {
        label: "Scale signal",
        value: "AWS deployment topology includes Bedrock, S3, Qdrant, PostgreSQL, Redis, and CloudWatch instead of a single-process demo path.",
      },
      {
        label: "Primary outcome",
        value: "Grounded question answering over SEC filings and disclosure documents with traceable source context and tracked ingestion jobs.",
      },
      {
        label: "Operating surface",
        value: "Local Docker plus Ollama smoke runs, AWS-oriented infrastructure, REST endpoints, API artifact generation, and reproducible evaluation outputs.",
      },
    ],
    repoUrl: "https://github.com/falcon-1024/financial-intelligence",
    duration: "2025",
  },
  {
    id: "healthcare-dwh",
    featured: true,
    title: "Healthcare Data Warehouse",
    shortDescription:
      "Healthcare Snowflake warehouse with a shared RAW_DATA_STAGE contract, dbt medallion modeling, and governed KPI marts for BI and SQL consumption.",
    detailedDescription:
      "Built a healthcare analytics warehouse around an Azure target architecture and a validated Snowflake-first local mode. The current release loads checked-in sample healthcare data into a shared RAW_DATA_STAGE, materializes BRONZE, SILVER, and GOLD layers through dbt, and supports Power BI or SQL analysis over governed KPI marts. The validated path produces 21 bronze tables, 48 dbt models, 256 passing dbt tests, and 18 RBAC grant checks, with Terraform retained for the Azure target deployment path.",
    image: "healthcare-dwh-hero.svg",
    categories: ["Data Engineering", "Analytics Engineering"],
    stack: [
      "Azure Blob Storage",
      "Snowflake",
      "dbt",
      "Terraform",
      "Power BI",
      "Python",
      "SQL",
    ],
    highlights: [
      "Implemented the shared RAW_DATA_STAGE contract so the same bronze-load SQL works for Azure external stages or Snowflake internal stages.",
      "Built 48 dbt models and 16 KPI-oriented gold outputs across clinical, financial, operational, and patient-experience reporting.",
      "Validated governance and least-privilege flows with 18 RBAC grant checks, 21 bronze tables loaded, and 256 passing dbt tests.",
    ],
    systemProfile: [
      {
        label: "Architecture",
        value: "Azure landing or local staged CSV ingestion into Snowflake medallion schemas, dbt transforms, and BI-ready gold marts.",
      },
      {
        label: "Scale signal",
        value: "Validated local execution loads 21 bronze tables and builds 48 dbt models before downstream BI consumption.",
      },
      {
        label: "Primary outcome",
        value: "Governed KPI marts for healthcare reporting over sample and synthetic data without overstating formal HIPAA certification.",
      },
      {
        label: "Operating surface",
        value: "Snowflake bootstrap scripts, stage uploads, dbt run and test flows, RBAC grant validation, SQL demo queries, and Terraform for the target architecture.",
      },
    ],
    repoUrl: "https://github.com/falcon-1024/healthcare-dwh",
    duration: "2025",
  },
  {
    id: "prediction-market-backtesting",
    featured: true,
    title: "Prediction Market Backtesting",
    shortDescription:
      "Prediction-market research stack with Kalshi and Polymarket adapters, PMXT raw mirroring, venue-agnostic strategies, and replayable NautilusTrader backtests.",
    detailedDescription:
      "Built an open-source prediction-market research framework on top of NautilusTrader with custom Kalshi and Polymarket adapters, a separate venue-agnostic strategy package, and replayable backtests that model fees, position sizing, and Polymarket L2 order-book behavior. The current public release also includes a PMXT mirror-focused relay service with raw archive access, SQLite-backed state, live observability badges, and publication-grade analytics for equity, drawdown, Sharpe, monthly returns, and cumulative Brier advantage.",
    image: "prediction-market-backtesting-hero.svg",
    categories: ["Quant Systems", "Trading Infrastructure"],
    stack: [
      "Python",
      "Rust",
      "NautilusTrader",
      "Kalshi Adapter",
      "Polymarket Adapter",
      "PMXT Relay",
      "SQLite",
      "uv",
      "Execution Modeling",
    ],
    highlights: [
      "Supports multi-market strategies, better position sizing, fee modeling, and Polymarket L2 order-book backtests.",
      "Separates venue-specific research and loading code from reusable strategy modules and backtest runners.",
      "Ships a public PMXT mirror and badge surface with raw archive delivery, queue and state visibility, and local processing support.",
    ],
    systemProfile: [
      {
        label: "Architecture",
        value: "Vendor and local market data flows through PMXT mirror services, exchange adapters, strategy modules, Nautilus backtests, and analytics outputs.",
      },
      {
        label: "Scale signal",
        value: "Public mirror operations, relay observability badges, and multi-market runner support move the repo beyond a single-strategy demo.",
      },
      {
        label: "Primary outcome",
        value: "Replayable Kalshi and Polymarket research with exchange-aware execution modeling and decision-grade charting.",
      },
      {
        label: "Operating surface",
        value: "uv and Makefile-based local runs, PMXT raw API plus worker, public docs, observability badges, and regression tests.",
      },
    ],
    repoUrl: "https://github.com/falcon-1024/prediction-market-backtesting",
    duration: "2025",
  },
  {
    id: "uwin-mac-chatbot",
    featured: false,
    title: "UWin MAC ChatBot",
    shortDescription:
      "AI-assisted departmental chatbot with FAQ administration and dynamic paraphrasing to improve query matching.",
    detailedDescription:
      "Built a chatbot for the MAC department by combining a Flask backend with an administrative FAQ workflow and a paraphrase model to improve how user questions are matched. The project focused on practical departmental support, dynamic content updates, and more resilient question understanding than a static FAQ page.",
    image: "chatbot.png",
    categories: ["Machine Learning", "Software Engineering"],
    stack: ["Flask", "Python", "Bootstrap", "NLP"],
    duration: "2023",
  },
  {
    id: "storage-as-a-service",
    featured: false,
    title: "Storage as a Service",
    shortDescription:
      "Distributed storage service built from scratch with replication and fault tolerance across a node cluster.",
    detailedDescription:
      "Implemented a cloud-style storage service from scratch using a server and distributed data nodes communicating over MPI. The system focused on block distribution, replication, and fault tolerance, making it one of the better early indicators of distributed-systems interest in the portfolio.",
    image: "cloud-storage.png",
    categories: ["Distributed Systems", "Cloud Computing"],
    stack: ["MPI", "Python", "Distributed Storage"],
    duration: "2019",
  },
  {
    id: "pubg-player-clustering",
    featured: false,
    title: "PUBG Player Clustering",
    shortDescription:
      "Behavioral clustering project using PCA and K-means to segment player styles from gameplay telemetry.",
    detailedDescription:
      "Analyzed PUBG behavioral data with PCA and K-means clustering to identify gameplay patterns and player archetypes. The work demonstrated applied machine learning around unsupervised analysis, feature reduction, and turning raw behavioral data into interpretable clusters.",
    image: "pubg-clustering.png",
    categories: ["Machine Learning", "Analytics"],
    stack: ["Python", "PCA", "K-means"],
    duration: "2023",
  },
  {
    id: "iot-plant-health",
    featured: false,
    title: "Plant Health Monitoring",
    shortDescription:
      "IoT and ML workflow for plant monitoring using sensor streams, image analysis, and alerting.",
    detailedDescription:
      "Developed an IoT-based monitoring workflow that streams plant-related sensor data to a server, applies image processing and machine learning analysis, and alerts users when anomalies appear. The project combined hardware-driven data capture with server-side analytics and monitoring logic.",
    image: "iot-plant-health.png",
    categories: ["Internet of Things", "Machine Learning"],
    stack: ["Python", "IoT", "Image Processing", "ML"],
    duration: "2019",
  },
  {
    id: "parallel-parking-car",
    featured: false,
    title: "Automatic Parallel Parking Car Model",
    shortDescription:
      "Autonomous parking prototype using an Arduino-controlled car model with sensor-based maneuvering logic.",
    detailedDescription:
      "Built an Arduino-driven car model that can move from a traffic lane into a parallel parking space using programmed control flow and sensor input. While early-career work, it still demonstrates comfort with embedded control logic and translating algorithms into physical systems.",
    image: "parallel-parking-car.jpg",
    categories: ["Internet of Things", "Embedded Systems"],
    stack: ["Arduino", "Sensors", "Control Logic"],
    duration: "2016",
  },
];

export default projectsData;