const experienceData = [
  {
    id: "rencom-networks",
    tier: "primary",
    position: "Data/AI Engineer",
    companyName: "Rencom Networks",
    companyUrl: "",
    summary:
      "RAG pipelines, hybrid retrieval, and FastAPI services on AKS for crypto research workflows.",
    responsibilities: [
      "Architected and deployed RAG pipelines on Databricks using Apache Spark, LangChain, and LlamaIndex to integrate proprietary crypto research data with OpenAI-based LLMs, reducing manual analyst lookup time by 45%.",
      "Built asynchronous Python microservices with FastAPI and asyncio, containerized with Docker and orchestrated on AKS, achieving 99.9% API uptime and reducing p95 latency by 30% through batching and caching.",
      "Implemented hybrid retrieval with Elasticsearch vector search and metadata filtering, improving answer relevance by 25% and reducing hallucinations through MLflow evaluation workflows.",
      "Engineered multi-agent research assistants with tool-calling patterns and Spark Structured Streaming integrations, increasing research task completion throughput by 40%."
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
      "Enterprise ETL, dimensional modeling, and ML platform delivery across Azure, Databricks, and Snowflake.",
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
      "Built a computer-vision attendance and insight system from CCTV feeds.",
    responsibilities: [
      "Built and deployed an attendance management and insight generation system that marked attendance through CCTV-based recognition, reducing administrative effort and saving operational time."
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
      "Researched model-selection workflows for toxicology prediction and biotech users.",
    responsibilities: [
      "Reduced ML algorithm selection time for biotech researchers by 65%, streamlining toxicology predictions and accelerating model evaluation for domain users."
    ],
    companyImage: "csir-iitr1.jpg",
    duration: "Jun 2019 - Jul 2019"
  }
];

export default experienceData;