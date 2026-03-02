export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      {/* FEATURED PROJECTS */}
<section className="py-20 px-8 bg-gray-900">

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
    Featured Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-10">

    {/* ASHEN */}
    <div className="bg-black p-8 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold">
        ASHEN – AI Security Automation
      </h3>

      <p className="mt-4 text-gray-400">
        AI-powered automated penetration testing framework integrating Nmap,
        OpenVAS, Metasploit, Hydra and LLM-based vulnerability classification.
      </p>

      <ul className="mt-4 text-gray-500 text-sm space-y-2">
        <li>• Intelligent vulnerability severity classification</li>
        <li>• Automated remediation suggestion engine</li>
        <li>• Real-time monitoring dashboard</li>
        <li>• Dockerized deployment pipeline</li>
      </ul>
    </div>

    {/* Pedestrian Detection */}
    <div className="bg-black p-8 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold">
        Smart City Pedestrian Detection
      </h3>

      <p className="mt-4 text-gray-400">
        Real-time object detection using YOLOv8n and YOLOv8s models with
        precision, recall and mAP evaluation benchmarking.
      </p>

      <ul className="mt-4 text-gray-500 text-sm space-y-2">
        <li>• YOLOv8n mAP@0.5: 0.571</li>
        <li>• YOLOv8s mAP@0.5: 0.607</li>
        <li>• Model performance comparison study</li>
        <li>• OpenCV real-time pipeline</li>
      </ul>
    </div>

{/* Multimodal Cancer Prediction */}
<div className="bg-black p-8 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
  <h3 className="text-2xl font-semibold">
    Multimodal Cancer Outcome Prediction System
  </h3>

  <p className="mt-4 text-gray-400">
    Developed 12 deep learning models (9 unimodal + 3 multimodal) integrating
    clinical, imaging, and genomic data for Esophageal, Breast, and Lung cancer
    diagnosis, prognosis, and treatment response prediction.
  </p>

  <ul className="mt-4 text-gray-500 text-sm space-y-2">
    <li>• Clinical, Imaging & Genomic models</li>
    <li>• Multimodal feature fusion architecture</li>
    <li>• Explainable AI using SHAP & LIME</li>
    <li>• Performance evaluation (Accuracy, AUC, F1)</li>
  </ul>
</div>

  </div>

</section>
{/* All Projects */}
<section className="py-16 px-6 bg-black">
  <h2 className="text-3xl font-bold text-center mb-12 text-white">
    All Projects
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Crypto Data Pipeline
      </h3>
      <p className="text-gray-400">
        Built a real-time cryptocurrency data pipeline for data collection, processing, and analysis.
      </p>
    </div>

    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Diabetes Prediction System
      </h3>
      <p className="text-gray-400">
        Machine learning model for predicting diabetes using classification algorithms and data preprocessing techniques.
      </p>
    </div>

    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Inventory Management System (C++)
      </h3>
      <p className="text-gray-400">
        Console-based inventory system using object-oriented programming and file handling.
      </p>
    </div>

    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">
        GitHub Simulation (Data Structures)
      </h3>
      <p className="text-gray-400">
        Simulated core GitHub features using advanced data structures concepts.
      </p>
    </div>

    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Endless Runner Game
      </h3>
      <p className="text-gray-400">
        Developed a simple 2D endless runner game focusing on game logic and collision handling.
      </p>
    </div>

    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Arduino RGB LED System
      </h3>
      <p className="text-gray-400">
        Microcontroller-based RGB lighting system programmed using Arduino.
      </p>
    </div>

    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Autonomous Delivery Robot
      </h3>
      <p className="text-gray-400">
        Designed an AI-based autonomous navigation system using heuristic search
        algorithms for optimized path planning and dynamic obstacle handling.
      </p>
    </div>

  </div>
</section>
{/* ABOUT SECTION */}
<section className="py-20 px-8 bg-black">

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    About Me
  </h2>

  <div className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed space-y-6">

    <p>
      I am an AI-focused Computer Science undergraduate passionate about
      designing intelligent systems that solve complex real-world problems.
    </p>

    <p>
      My work spans machine learning model development, computer vision
      systems, AI-driven automation platforms, and agentic AI architectures.
      I focus on building scalable systems, integrating deep learning models
      into production workflows, and optimizing performance across the stack.
    </p>

    <p>
      I am particularly interested in Artificial Intelligence, agentic AI systems,
      applied machine learning, and intelligent system design.
    </p>

  </div>

</section>
{/* SKILLS SECTION */}
<section className="py-20 px-8 bg-gray-900">

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
    Technical Skills
  </h2>

  <div className="max-w-6xl mx-auto space-y-12 text-gray-400">

    {/* Programming Languages */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">
        Programming Languages
      </h3>
      <p>
        Python, C++, Java (Groovy), HTML, CSS, JavaScript (React)
      </p>
    </div>

    {/* AI & Machine Learning */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">
        AI & Machine Learning
      </h3>
      <p>
        Machine Learning, Deep Learning, Computer Vision, Natural Language Processing (NLP),
        Multimodal Learning, Convolutional Neural Networks (CNNs), Transfer Learning,
        Medical Image Analysis, Explainable AI (SHAP, LIME)
      </p>
    </div>

    {/* Frameworks & Libraries */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">
        Frameworks & Libraries
      </h3>
      <p>
        TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, OpenCV,
        Hugging Face Transformers
      </p>
    </div>

   {/* Tools & Platforms */}
<div>
  <h3 className="text-xl font-semibold text-white mb-4">
    Tools & Platforms
  </h3>
  <p>
    Docker, Linux (Ubuntu), Git, GitHub,
    VS Code, Google Colab, Kaggle,
    AWS, Jupyter Notebook
  </p>
</div>
    {/* Databases */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">
        Databases
      </h3>
      <p>
        SQL , Oracle
      </p>
    </div>

  </div>

</section>


      <section className="flex flex-col justify-center items-center text-center h-screen px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Maheen Naeem
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          AI Engineer | Machine Learning Practitioner | Applied Security Researcher
        </p>

        <p className="mt-4 text-gray-500 max-w-xl">
          Building intelligent automation systems, AI-driven security platforms,
          and real-time computer vision solutions.
        </p>

        <div className="mt-8 flex gap-6">
          <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
            View Projects
          </button>

          <button className="px-6 py-3 border border-gray-500 rounded-lg">
            Contact Me
          </button>
        </div>

      </section>

    </main>
  );
}