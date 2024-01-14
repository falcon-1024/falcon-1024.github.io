const projectsData = [
    {
      "title": "PUBG Player Clustering",
      "shortDescription":
        "Dive into PUBG player behavior, leveraging cutting-edge clustering techniques to unveil gameplay patterns.",
      "detailedDescription":
        "Explore the world of PUBG through behavioral data analysis. Utilizing K-means clustering and PCA, this project classifies players based on their in-game actions, offering unprecedented insights for game enhancement. The study pioneers the application of behavioral data in clustering, a novel approach for understanding player dynamics.",
      "image": "pubg-clustering.png",
      "categories": [
        "Machine Learning", "Hash Function"
      ],
      "duration": "Jan. ’23 - April ’23 (Semester 2)"
    },
    {
      "title":
        "UWin MAC ChatBot",
      "shortDescription":
        "Revolutionize MAC department communication with our AI-driven chatbot. Seamless integration of advanced paraphrasing ensures precise responses and dynamic adaptability, setting a new standard for intelligent interaction.",
      "detailedDescription":
        "Introducing a sophisticated chatbot for the MAC department, this project amalgamates artificial intelligence, Flask backend development, and Bootstrap frontend for a holistic solution. Leveraging a state-of-the-art paraphrase model, the chatbot dynamically generates and stores paraphrased questions, enhancing user query understanding. Administrators can effortlessly update FAQs, ensuring adaptability. The report delves into architectural intricacies, motivations, and outcomes, aiming to redefine MAC community interaction standards. Our chatbot represents a transformative solution, fostering responsive and anticipatory communication within the MAC community.",
      "image": "chatbot.png", 
      "categories": ["Machine Learning","Software Engineering"],
      "duration": "June ’19 – July ‘19 (Summer Internship)"
    },
    {
      "title": "Storage as a Service",
      "shortDescription":
        "Cloud-based data storage service with replication and fault tolerance.",
      "detailedDescription":
        "Cloud-Based Data Storage Service is created from scratch. Setup of a cluster of computers acting as data nodes and a server. Distributing and receiving blocks of files across server and nodes is done with Message Passing Interface(MPI) with replication factor and fault tolerance in consideration.",
      "image": "cloud-storage.png", 
      "categories": ["Cloud Computing"],
      "duration": "Aug. ’19 – Dec. ‘19 (Semester 7)"
    },
    {
      "title": "Bloom Filter",
      "shortDescription":
        "Explore Bloom Filter's space-saving algorithm for quick set membership tests, ideal for Big Data applications.",
      "detailedDescription":
        "The Bloom filter optimizes set membership tests in Big Data by drastically reducing storage needs. Using hash functions, it efficiently determines if an item is present in a set. However, false positives may occur, presenting a unique challenge. This project delves into the implementation and significance of Bloom Filters in improving storage efficiency and retrieval processes.",
      "image": "bloom-filter.png", 
      "categories": ["Big Data", "Hash Function"],
      "duration": "Aug. ’19 – Dec. ‘19 (Semester 7)"
    },
    {
      "title": "Forex Rate Prediction",
      "shortDescription": "Prediction of foreign exchange rates using ARIMA model.",
      "detailedDescription":
        "Foreign exchange rate is predicted Using Auto Regressive Integrated Moving Average(ARIMA) Model. Four countries are selected, and exchange rates between them are predicted using only the previous exchange rates applied to the optimized ARIMA model.",
      "image": "forex-arima.png",
      "categories": ["Big Data", "Machine Learning"],
      "duration": "Jan. ’19 – April ‘19 (Semester 6)"
    },
    {
      "title": "Gnutella Protocol",
      "shortDescription":
        "Implementation of the Gnutella peer-to-peer network protocol.",
      "detailedDescription":
        "Gnutella is a peer-to-peer network protocol that was implemented by writing a client program. These client programs connect to each other and can transfer files with each other over the internet.",
      "image": "gnutella.png", 
      "categories": ["Computer Networks"],
      "duration": "Aug. ’18 – Dec. ‘18 (Semester 5)"
    },
    {
      "title": "Spatial-Temporal Cooperative Spectrum Sensing in CR-VANET",
      "shortDescription":
        "Enhance CR-VANET cooperation with a novel hybrid scheme, leveraging joint spatial-temporal correlation to boost decision accuracy while minimizing overheads. Simulation results validate improved performance.",
      "detailedDescription":
        "This project introduces a groundbreaking hybrid cooperative spectrum sensing scheme for Cognitive Radio Vehicular Ad Hoc Networks (CR-VANETs). By exploiting joint spatial-temporal correlation, the system achieves enhanced decision accuracy and reduced overheads. Theoretical insights into joint spatial-temporal correlation's impact on cooperative spectrum sensing performance are presented. Optimal probability of detection expressions, considering the target probability of false alarm, are derived. An efficient double-threshold optimization problem is formulated to select vehicles for cooperation, proposing a hybrid scheme. Simulation results affirm the scheme's efficacy in addressing user frequency selection challenges while boosting decision accuracy in CR-VANET cooperative spectrum sensing.",
      "image": "vehicle.PNG", 
      "categories": ["Probability and Random Processing", "Hash Function"],
      "duration": "Jan. ’18 – Dec ‘18 (Semester 5)"
    },
    {
      "title": "EduConnect: Bridging Gaps for Orphanage Kids",
      "shortDescription":
        "Employing SDLC, this project connects orphanages, volunteer teachers, and asset donors, facilitating free, organized lectures for orphaned children.",
      "detailedDescription":
        "Following Software Development Life Cycle (SDLC) steps in bi-weekly cycles, the initiative leverages technology to unite orphanages, teachers, and donors. EduConnect ensures a systematic, iterative approach to delivering impactful education opportunities.",
      "image": "educating-orphans.png", 
      "categories": ["Software Engineering"],
      "duration": "Jan. ’17 – April ‘17 (Semester 2)"
    },
    {
      "title": "Image Compression and Decompression",
      "shortDescription":
        "Implementation of JPEG image compression technique on MATLAB and FPGA.",
      "detailedDescription":
        "Lossy image Compression technique called JPEG is implemented using programming on MATLAB and on FPGA to see the working and complexity of programming in basic circuits, and also its decompression.",
      "image": "fpga.png",
      "categories": [
        "Linear Algebra"
      ],
      "duration": "Aug. ’17 – Dec. ‘17 (Semester 3)"
    },
    {//
      "title": "Automatic Parallel Parking Car Model",
      "shortDescription":
        "Development of an autonomous car-maneuvering system for parallel parking.",
      "detailedDescription":
        "An autonomous car-maneuvering system that moves a vehicle from a traffic lane into a parking spot to perform parallel parking. Micro-controller called Arduino Uno with necessary sensors attached to a car model is programmed with commands and conditions for autonomous movement and parallel parking.",
      "image": "parallel-parking-car.jpg",
      "categories": ["Internet of Things", "Linear Algebra"],
      "duration": "Aug. ’16 – Dec. ‘16 (Semester 1)"
    },
    {
      "title": "Dynamic Image Wizard",
      "shortDescription":
        "Robust image processing app integrating enhancement, transformation, restoration, encoding, and compression. Empowering users with versatile features through a structured Software Development Life Cycle (SDLC) approach.",
      "detailedDescription":
        "A dynamic digital image processing application is developed using a structured Software Development Life Cycle (SDLC) approach. The application excels in performing diverse operations such as enhancement, transformation, restoration, encoding, and compression. Guided by SDLC principles, each project phase, from conceptualization to iterative development, ensured a reliable and feature-rich outcome. Users can effortlessly apply advanced image processing techniques through an intuitive interface. This project showcases the successful integration of SDLC practices and cutting-edge image processing functionalities.",
      "image": "dip.png",
      "categories": ["Linear Algebra"],
      "duration": "Aug. ’18 – Dec. ‘18 (Semester 5)"
    },
    {
      "title":
        "IoT based Plant Health Monitoring using image Processing and Machine Learning",
      "shortDescription":
        "Development of an IoT-based system for plant health monitoring using image processing and ML.",
      "detailedDescription":
        "Live stream of data from the sensors related to the plant is stored on a server and processed, and can also be monitored. Data is analyzed based on pretrained ML models and in case of discrepancies, the user is alerted.",
      "image": "iot-plant-health.png", 
      "categories": ["Internet of Things", "Machine Learning"],
      "duration": "Aug. ’19 – Dec. ‘19 (Semester 7)"
    }
  ]

  export default projectsData;