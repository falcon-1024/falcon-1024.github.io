const experienceData = [
  {
    id: "rencom-networks",
    tier: "primary",
    position: "Data/AI Engineer",
    companyName: "Rencom Networks",
    companyUrl: "",
    summary:
      "Retrieval pipelines, backend services, and analyst-facing research tooling on Databricks, Elasticsearch, FastAPI, and AKS.",
    roleProfile: [
      {
        label: "Scope",
        value:
          "Owned analyst-facing retrieval workflows across data preparation, search quality, and service delivery rather than isolated model experimentation.",
      },
      {
        label: "Environment",
        value:
          "Worked across Databricks, Spark, Elasticsearch, FastAPI, Docker, AKS, and MLflow in a production research-tooling stack.",
      },
      {
        label: "Outcome",
        value:
          "Shipped systems that reduced manual lookup time, improved answer quality, and maintained high service reliability for internal users.",
      },
    ],
    responsibilities: [
      "Architected retrieval and ingestion pipelines on Databricks using Apache Spark, LangChain, and LlamaIndex to connect proprietary research data with LLM-backed workflows, reducing manual analyst lookup time by 45%.",
      "Built asynchronous Python microservices with FastAPI and asyncio, containerized with Docker and orchestrated on AKS, achieving 99.9% API uptime and reducing p95 latency by 30% through batching and caching.",
      "Implemented hybrid retrieval with Elasticsearch vector search and metadata filtering, improving answer relevance by 25% and reducing hallucinations through MLflow evaluation workflows.",
      "Engineered tool-calling research assistants and Spark Structured Streaming integrations, increasing research task completion throughput by 40% while keeping the workflow grounded in internal data."
    ],
    companyImage: "rencom-analytics-hero.svg",
    duration: "Aug 2024 - Apr 2025"
  },
  {
    id: "accenture",
    tier: "primary",
    position: "Data Engineer",
    companyName: "Accenture",
    companyUrl: "https://www.accenture.com/in-en/about/company/india",
    summary:
      "Enterprise ETL, warehouse modeling, and platform delivery across Azure Data Factory, Databricks, Snowflake, and AKS.",
    roleProfile: [
      {
        label: "Scope",
        value:
          "Built batch and incremental pipelines, analytics-ready models, and supporting service deployment patterns for large enterprise datasets.",
      },
      {
        label: "Environment",
        value:
          "Delivered on Azure Data Factory, Databricks, Spark, Snowflake, Azure SQL, Docker, AKS, and ArgoCD across consulting engagements.",
      },
      {
        label: "Outcome",
        value:
          "Improved processing time, downstream query performance, and release speed while supporting both BI and real-time scoring workloads.",
      },
    ],
    responsibilities: [
      "Architected batch and incremental ETL pipelines with Azure Data Factory, Azure Databricks, and Apache Spark for enterprise datasets exceeding TB/day, reducing end-to-end processing time by 35%.",
      "Designed dimensional models and analytics layers in Snowflake and Azure SQL, improving downstream BI and ML query performance by 40% through clustering and indexing strategies.",
      "Deployed FastAPI-based ML inference services with Docker, Azure Kubernetes Service, and ArgoCD, enabling scalable real-time scoring and zero-downtime releases.",
      "Established CI/CD, monitoring, and drift checks across Databricks and AKS workloads, reducing release cycles by 30% and incident resolution time by 25%."
    ],
    companyImage: "accenture-AI.jpg",
    duration: "May 2020 - Jul 2022"
  },
  {
    id: "byte-prophecy",
    tier: "early",
    position: "Data Engineering Intern",
    companyName: "Byte Prophecy Pvt. Ltd.",
    companyUrl:
      "https://newsroom.accenture.com/news/2020/accenture-acquires-byte-prophecy-to-enhance-ai-and-digital-analytics-capabilities-in-emerging-markets",
    summary:
      "Computer-vision attendance workflow combining CCTV ingestion, recognition, and operational insight generation.",
    roleProfile: [
      {
        label: "Scope",
        value:
          "Built an early end-to-end automation workflow from image capture through attendance marking and operational reporting.",
      },
      {
        label: "Environment",
        value:
          "Worked with computer-vision inference, Python-based processing, and operational automation around CCTV input.",
      },
      {
        label: "Outcome",
        value:
          "Reduced manual attendance effort and surfaced useful operational insights from captured events.",
      },
    ],
    responsibilities: [
      "Built and deployed a CCTV-based attendance workflow combining computer-vision inference, event processing, and insight generation to reduce administrative effort and save operational time."
    ],
    companyImage: "byte-prophecy1.jpg",
    duration: "Dec 2019 - May 2020"
  },
  {
    id: "csir-iitr",
    tier: "early",
    position: "Machine Learning Research Intern",
    companyName: "CSIR - Indian Institute of Toxicology Research",
    companyUrl: "http://iitrindia.org/en/index.aspx",
    summary:
      "Model-evaluation workflow support for toxicology prediction and researcher-facing analysis.",
    roleProfile: [
      {
        label: "Scope",
        value:
          "Supported researcher-facing evaluation workflows for selecting suitable models in toxicology prediction tasks.",
      },
      {
        label: "Environment",
        value:
          "Worked in a Python-based research setting around comparative model assessment and domain-user support.",
      },
      {
        label: "Outcome",
        value:
          "Shortened algorithm selection time and made prediction experiments more usable for biotech researchers.",
      },
    ],
    responsibilities: [
      "Reduced ML algorithm selection time for biotech researchers by 65% by structuring comparative evaluation workflows for toxicology prediction models."
    ],
    companyImage: "csir-iitr1.jpg",
    duration: "Jun 2019 - Jul 2019"
  }
];

export default experienceData;