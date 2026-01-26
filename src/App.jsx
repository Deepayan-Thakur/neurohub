import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Brain, 
  Code, 
  ChevronRight, 
  Database, 
  LineChart, 
  Menu, 
  MessageSquare, 
  Search, 
  Share2, 
  Terminal, 
  X,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Cpu,
  Layers,
  Zap,
  Map,
  GraduationCap,
  Calculator,
  Target,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

// --- Data & Content ---

const ROADMAP = [
  {
    phase: "Phase 1: Foundations",
    desc: "The mathematical and programming building blocks.",
    items: ["Linear Algebra (Vectors, Matrices)", "Calculus (Derivatives, Chain Rule)", "Python Programming", "NumPy & Pandas"]
  },
  {
    phase: "Phase 2: Classical Machine Learning",
    desc: "Understanding data relationships and statistical learning.",
    items: ["Supervised Learning (Regression, Classification)", "Unsupervised Learning (Clustering)", "Evaluation Metrics (Precision, Recall)", "Scikit-Learn"]
  },
  {
    phase: "Phase 3: Deep Learning Fundamentals",
    desc: "Neural networks and optimization.",
    items: ["Perceptrons & Activation Functions", "Backpropagation", "Optimizers (SGD, Adam)", "TensorFlow / PyTorch"]
  },
  {
    phase: "Phase 4: Specialized Architectures",
    desc: "Processing images, text, and sequences.",
    items: ["CNNs (Computer Vision)", "RNNs & LSTMs (Time Series)", "Transformers (NLP)", "Reinforcement Learning"]
  },
  {
    phase: "Phase 5: Generative AI & MLOps",
    desc: "The cutting edge and deployment.",
    items: ["GANs & Diffusers", "LLMs (Large Language Models)", "Model Deployment", "Ethics in AI"]
  }
];

const CONCEPTS = [
  {
    id: 'supervised-learning',
    title: 'Supervised Learning',
    icon: <Database className="w-6 h-6" />,
    difficulty: 'Beginner',
    summary: 'The machine learning task of learning a function that maps an input to an output based on example input-output pairs.',
    content: {
      definition: "Supervised learning is a paradigm in machine learning where input objects (typically a vector of predictors) and a desired output value (also known as the supervisory signal) are used to train a model. The algorithm analyzes the training data and produces an inferred function, which can be used for mapping new examples.",
      math: {
        title: "The Mathematical Formulation",
        desc: "We try to find a function f that minimizes the error between predictions and actual targets.",
        formulas: [
          { label: "Hypothesis Function", eq: "ŷ = f(x; θ)" },
          { label: "Cost Function (MSE)", eq: "J(θ) = (1/2m) * Σ(ŷ - y)²" },
          { label: "Goal", eq: "minimize J(θ) with respect to θ" }
        ]
      },
      keyTerms: [
        { term: 'Label (y)', def: 'The answer or result portion of an observation.' },
        { term: 'Feature (x)', def: 'An individual measurable property or characteristic.' },
        { term: 'Classification', def: 'Predicting a discrete class label (e.g., Spam vs Not Spam).' },
        { term: 'Regression', def: 'Predicting a continuous quantity (e.g., House Price).' }
      ],
      codeTitle: 'Simple Linear Regression with Scikit-Learn',
      code: `from sklearn.linear_model import LinearRegression
import numpy as np

# 1. Prepare the data
# Features (Hours Studied)
X = np.array([[1], [2], [3], [4], [5]]) 
# Labels (Test Score)
y = np.array([2, 4, 6, 8, 10])          

# 2. Create the model
model = LinearRegression()

# 3. Train the model (Fit the line)
model.fit(X, y)

# 4. Make a prediction
prediction = model.predict([[6]])
print(f"Prediction for 6 hours: {prediction[0]}") 
# Output: 12.0`,
      quiz: {
        question: "Which of the following is an example of a Regression problem?",
        options: ["Detecting if an email is spam", "Predicting the price of a house", "Identifying a cat in a photo", "Grouping customers by purchasing behavior"],
        answer: 1 // Index of correct answer
      }
    },
    faqs: [
      { q: "What is the difference between supervised and unsupervised learning?", a: "The main difference is labeled data. Supervised learning uses labeled data (input-output pairs), while unsupervised learning works with unlabeled data to find hidden patterns." },
      { q: "Is deep learning supervised?", a: "Deep learning models can be supervised, unsupervised, or semi-supervised. However, many popular applications like image classification are supervised." }
    ]
  },
  {
    id: 'neural-networks',
    title: 'Neural Networks',
    icon: <Brain className="w-6 h-6" />,
    difficulty: 'Intermediate',
    summary: 'Computing systems inspired by the biological neural networks that constitute animal brains.',
    content: {
      definition: "An Artificial Neural Network (ANN) is based on a collection of connected units or nodes called artificial neurons. Each connection, like the synapses in a biological brain, can transmit a signal to other neurons. The signal is processed by a non-linear activation function.",
      math: {
        title: "The Perceptron Rule",
        desc: "A single neuron calculates a weighted sum of inputs plus a bias, then applies an activation function.",
        formulas: [
          { label: "Weighted Sum (z)", eq: "z = w₁x₁ + w₂x₂ + ... + b" },
          { label: "Activation (a)", eq: "a = σ(z)" },
          { label: "Sigmoid Function", eq: "σ(z) = 1 / (1 + e⁻ᶻ)" }
        ]
      },
      keyTerms: [
        { term: 'Perceptron', def: 'The simplest type of feedforward neural network: a linear classifier.' },
        { term: 'Activation Function', def: 'Introduces non-linearity (e.g., ReLU, Sigmoid, Tanh).' },
        { term: 'Backpropagation', def: 'The algorithm used to update weights by calculating the gradient of the loss function via the Chain Rule.' }
      ],
      codeTitle: 'Basic Neural Network with TensorFlow/Keras',
      code: `import tensorflow as tf
from tensorflow.keras import layers, models

# 1. Define the model architecture
model = models.Sequential([
    # Hidden Layer: 64 neurons, ReLU activation
    layers.Dense(64, activation='relu', input_shape=(32,)),
    # Hidden Layer
    layers.Dense(64, activation='relu'),
    # Output Layer: 10 probabilities (Softmax)
    layers.Dense(10, activation='softmax') 
])

# 2. Compile the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# 3. Summary
model.summary()`,
      quiz: {
        question: "Why is an activation function necessary in a Neural Network?",
        options: ["To make the code run faster", "To introduce non-linearity so the model can learn complex patterns", "To ensure outputs are always positive", "It is not necessary"],
        answer: 1
      }
    },
    faqs: [
      { q: "Why do we need activation functions?", a: "Without activation functions, a neural network is just a giant linear regression model. Activation functions introduce non-linearity, allowing the network to learn complex patterns." },
      { q: "What is a 'hidden layer'?", a: "Any layer of neurons between the input layer and the output layer. 'Deep' learning refers to having multiple hidden layers." }
    ]
  },
  {
    id: 'cnn',
    title: 'Convolutional Neural Networks',
    icon: <Cpu className="w-6 h-6" />,
    difficulty: 'Advanced',
    summary: 'Specialized neural networks for processing grid-like data, such as images.',
    content: {
      definition: "CNNs use a mathematical operation called 'convolution' in place of general matrix multiplication in at least one of their layers. They are designed to automatically and adaptively learn spatial hierarchies of features from low-level patterns (edges) to high-level patterns (faces, objects).",
      math: {
        title: "The Convolution Operation",
        desc: "A filter (kernel) slides over the input image performing element-wise multiplication and summation.",
        formulas: [
          { label: "Output Size Formula", eq: "[(W - K + 2P) / S] + 1" },
          { label: "Where", eq: "W=Input Size, K=Filter Size, P=Padding, S=Stride" }
        ]
      },
      keyTerms: [
        { term: 'Kernel/Filter', def: 'A small matrix of weights that slides over the image to detect features.' },
        { term: 'Pooling', def: 'Downsampling operation (e.g., Max Pooling) to reduce dimensionality and computation.' },
        { term: 'Stride', def: 'The number of pixels the filter moves during each step.' }
      ],
      codeTitle: 'CNN for Image Classification (PyTorch style)',
      code: `import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        # Conv Layer: 1 input channel (grayscale), 32 output channels
        self.conv1 = nn.Conv2d(1, 32, kernel_size=3)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(32 * 13 * 13, 10)

    def forward(self, x):
        # Apply conv -> relu -> pooling
        x = self.pool(torch.relu(self.conv1(x)))
        # Flatten
        x = x.view(-1, 32 * 13 * 13)
        # Fully connected
        x = self.fc1(x)
        return x`,
      quiz: {
        question: "What is the main purpose of a Pooling layer in a CNN?",
        options: ["To increase the resolution of the image", "To change the colors of the image", "To reduce the spatial dimensions and computation parameters", "To add more filters"],
        answer: 2
      }
    },
    faqs: [
      { q: "Why are CNNs better than standard Dense networks for images?", a: "Standard networks lose spatial information when flattening images into vectors. CNNs preserve spatial relationships and use parameter sharing (the same filter looks for the same feature everywhere), making them much more efficient." }
    ]
  },
  {
    id: 'transformers',
    title: 'Transformers & Attention',
    icon: <Zap className="w-6 h-6" />,
    difficulty: 'Expert',
    summary: 'The architecture behind modern LLMs (like GPT), utilizing Self-Attention mechanisms.',
    content: {
      definition: "The Transformer model, introduced in 'Attention Is All You Need', dispenses with recurrence and convolutions entirely. Instead, it relies on a mechanism called Self-Attention to weigh the significance of different words in a sentence regardless of their distance from each other.",
      math: {
        title: "Scaled Dot-Product Attention",
        desc: "The core formula of the Transformer.",
        formulas: [
          { label: "Attention(Q, K, V)", eq: "softmax( (QKᵀ) / √d_k ) * V" },
          { label: "Inputs", eq: "Q=Query, K=Key, V=Value matrices" },
          { label: "Softmax", eq: "Converts scores into probabilities summing to 1" }
        ]
      },
      keyTerms: [
        { term: 'Self-Attention', def: 'Allows the model to relate words to each other within the same sentence.' },
        { term: 'Positional Encoding', def: 'Injects information about the position of tokens in the sequence since the model has no recurrence.' },
        { term: 'Encoder-Decoder', def: 'The original architecture had both. GPT uses only the Decoder (generative). BERT uses only the Encoder (understanding).' }
      ],
      codeTitle: 'Using HuggingFace Transformers',
      code: `from transformers import pipeline

# 1. Initialize a pipeline for text generation
generator = pipeline('text-generation', model='gpt2')

# 2. Provide a prompt
prompt = "The future of Artificial Intelligence is"

# 3. Generate text
result = generator(prompt, max_length=30, num_return_sequences=1)

print(result[0]['generated_text'])
# Output: "The future of Artificial Intelligence is likely to be shaped by..."`,
      quiz: {
        question: "What problem did Transformers solve that RNNs struggled with?",
        options: ["They are smaller models", "They handle long-range dependencies better via parallelization", "They only work with images", "They don't require any training data"],
        answer: 1
      }
    },
    faqs: [
      { q: "What is GPT?", a: "Generative Pre-trained Transformer. It is a decoder-only transformer model trained on massive amounts of text to predict the next word in a sequence." }
    ]
  },
  {
    id: 'unsupervised-learning',
    title: 'Unsupervised Learning',
    icon: <Layers className="w-6 h-6" />,
    difficulty: 'Intermediate',
    summary: 'Learning patterns from unlabeled data, such as clustering or dimensionality reduction.',
    content: {
      definition: "Unsupervised learning is a type of machine learning that looks for previously undetected patterns in a data set with no pre-existing labels. It allows for modeling of probability densities of given inputs.",
      math: {
        title: "K-Means Objective",
        desc: "Minimize the within-cluster sum of squares (variance).",
        formulas: [
          { label: "Objective", eq: "min Σ || x_i - μ_j ||²" },
          { label: "Meaning", eq: "Minimize distance between data point x and its cluster center μ." }
        ]
      },
      keyTerms: [
        { term: 'Clustering', def: 'Grouping a set of objects so that objects in the same group are more similar to each other.' },
        { term: 'K-Means', def: 'Iterative algorithm that partitions n observations into k clusters.' },
        { term: 'Dimensionality Reduction (PCA)', def: 'Reducing the number of random variables while retaining principal information.' }
      ],
      codeTitle: 'K-Means Clustering with Scikit-Learn',
      code: `from sklearn.cluster import KMeans
import numpy as np

# 1. Prepare data (No labels!)
X = np.array([[1, 2], [1, 4], [1, 0],
              [10, 2], [10, 4], [10, 0]])

# 2. Initialize and fit
kmeans = KMeans(n_clusters=2, random_state=0).fit(X)

# 3. Get labels and centers
print("Labels:", kmeans.labels_)
print("Centers:", kmeans.cluster_centers_)`,
      quiz: {
        question: "Which of these is NOT an Unsupervised Learning technique?",
        options: ["K-Means Clustering", "Principal Component Analysis (PCA)", "Linear Regression", "Anomaly Detection"],
        answer: 2
      }
    },
    faqs: [
      { q: "Can unsupervised learning be used for prediction?", a: "Generally no, it is used for analysis, finding patterns, or preprocessing (like reducing dimensions) before supervised learning." }
    ]
  }
];

const RESOURCES = [
  { title: "Deep Learning Book", author: "Ian Goodfellow et al.", type: "Book", link: "#", desc: "The 'Bible' of Deep Learning. Mathematical and comprehensive." },
  { title: "Scikit-Learn Documentation", author: "Community", type: "Documentation", link: "#", desc: "The official docs are arguably the best place to start for practical ML." },
  { title: "Fast.ai Practical Deep Learning", author: "Jeremy Howard", type: "Course", link: "#", desc: "Top-down approach to teaching deep learning. Very hands-on." },
  { title: "Attention Is All You Need", author: "Vaswani et al.", type: "Paper", link: "#", desc: "The seminal paper that introduced the Transformer architecture." },
  { title: "HuggingFace Course", author: "HuggingFace", type: "Course", link: "#", desc: "The best resource for learning NLP and Transformers." }
];

const BLOG_POSTS = [
  { id: 1, title: "The Rise of Transformers in NLP", date: "Oct 12, 2024", readTime: "5 min read", category: "Deep Learning", excerpt: "How the Transformer architecture replaced RNNs and changed the landscape of Natural Language Processing forever." },
  { id: 2, title: "Bias in Machine Learning Models", date: "Oct 08, 2024", readTime: "8 min read", category: "Ethics", excerpt: "Understanding how dataset bias propagates to model predictions and strategies to mitigate it." },
  { id: 3, title: "Getting Started with PyTorch", date: "Sep 25, 2024", readTime: "6 min read", category: "Tutorial", excerpt: "A beginner's guide to tensors, autograd, and building your first neural network in PyTorch." }
];

// --- Sub-Components ---

const CodeBlock = ({ title, code }) => (
  <div className="bg-slate-900 rounded-lg overflow-hidden my-6 shadow-xl border border-slate-700">
    <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
      <span className="text-slate-300 text-sm font-mono">{title}</span>
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
    <div className="p-4 overflow-x-auto">
      <pre className="font-mono text-sm text-green-400">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

// --- Visualization Tools ---

const InteractiveLinearRegression = () => {
  const [points, setPoints] = useState([{x: 50, y: 50}, {x: 200, y: 150}, {x: 300, y: 300}]);
  const [slope, setSlope] = useState(0);
  const [intercept, setIntercept] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (points.length < 2) return;
    const n = points.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    points.forEach(p => {
      const x = p.x;
      const y = 400 - p.y; 
      sumX += x;
      sumY += y;
      sumXY += x * y;
      sumXX += x * x;
    });
    const m = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const b = (sumY - m * sumX) / n;
    setSlope(m);
    setIntercept(b);
  }, [points]);

  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPoints([...points, { x, y }]);
  };

  const getLineCoords = () => {
    if (points.length < 2) return { x1: 0, y1: 0, x2: 0, y2: 0 };
    const x1 = 0;
    const y1_cart = slope * x1 + intercept;
    const y1 = 400 - y1_cart;
    const x2 = 600;
    const y2_cart = slope * x2 + intercept;
    const y2 = 400 - y2_cart;
    return { x1, y1, x2, y2 };
  };

  const line = getLineCoords();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><LineChart className="w-5 h-5 text-blue-600"/> Interactive Linear Regression</h3>
          <p className="text-slate-500 text-sm">Click graph to add data. Model learns best fit line instantly (Least Squares).</p>
        </div>
        <button onClick={() => setPoints([])} className="px-3 py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition">Reset</button>
      </div>
      <div className="relative border border-slate-200 bg-slate-50 rounded cursor-crosshair overflow-hidden" style={{ height: '400px' }}>
        <svg ref={canvasRef} onClick={handleCanvasClick} className="w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {points.length >= 2 && <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#3b82f6" strokeWidth="4" />}
          {points.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="6" fill="#ef4444" stroke="white" strokeWidth="2" />)}
        </svg>
      </div>
    </div>
  );
};

const GradientDescentVisualizer = () => {
  const [step, setStep] = useState(0);
  const [learningRate, setLearningRate] = useState(0.1);
  const [history, setHistory] = useState([{x: -9, y: 81}]);
  
  // y = x^2, derivative = 2x
  const f = (x) => x * x;
  const df = (x) => 2 * x;

  const nextStep = () => {
    const currentX = history[history.length - 1].x;
    const gradient = df(currentX);
    const newX = currentX - (learningRate * gradient);
    setHistory([...history, {x: newX, y: f(newX)}]);
    setStep(step + 1);
  };

  const reset = () => {
    setHistory([{x: -9, y: 81}]);
    setStep(0);
  };

  // Convert math coords to svg coords. X: [-10, 10] -> [0, 600]. Y: [0, 100] -> [400, 0]
  const mapX = (x) => (x + 10) * (600 / 20);
  const mapY = (y) => 400 - (y * (400 / 100));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Target className="w-5 h-5 text-purple-600"/> Gradient Descent Visualizer</h3>
        <p className="text-slate-500 text-sm">Visualize how a model finds the minimum loss (y=0) on the curve J(θ) = θ².</p>
      </div>
      
      <div className="flex gap-4 mb-4 items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
        <div className="flex-1">
           <label className="text-xs font-bold text-slate-500 uppercase">Learning Rate: {learningRate}</label>
           <input 
             type="range" min="0.01" max="1.1" step="0.05" 
             value={learningRate} onChange={(e) => setLearningRate(parseFloat(e.target.value))}
             className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
           />
        </div>
        <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition font-semibold text-sm">Step</button>
        <button onClick={reset} className="bg-white border border-slate-300 text-slate-600 px-4 py-2 rounded hover:bg-slate-50 transition text-sm">Reset</button>
      </div>

      <div className="relative border border-slate-200 bg-white rounded overflow-hidden" style={{ height: '400px' }}>
        <svg className="w-full h-full" viewBox="0 0 600 400">
           {/* Curve y = x^2 */}
           <path d={Array.from({length: 21}, (_, i) => i - 10).map((x, i) => 
             `${i===0 ? 'M' : 'L'} ${mapX(x)} ${mapY(x*x)}`
           ).join(' ')} stroke="#cbd5e1" strokeWidth="3" fill="none" />
           
           {/* Ball */}
           <circle 
             cx={mapX(history[history.length - 1].x)} 
             cy={mapY(history[history.length - 1].y)} 
             r="8" fill="#9333ea" 
             className="transition-all duration-300 ease-out"
           />
           
           {/* History Path */}
           {history.map((pt, i) => (
             <circle key={i} cx={mapX(pt.x)} cy={mapY(pt.y)} r="3" fill="#d8b4fe" />
           ))}
        </svg>
        <div className="absolute top-4 right-4 bg-white/90 p-3 rounded shadow backdrop-blur-sm border border-purple-100 text-sm">
           <div className="font-mono text-purple-700">Loss: {history[history.length-1].y.toFixed(4)}</div>
           <div className="font-mono text-slate-500">Steps: {step}</div>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500 bg-yellow-50 p-2 rounded border border-yellow-100">
        <span className="font-bold">Try this:</span> Set Learning Rate high (0.9) to see it overshoot (oscillate), or low (0.05) to see it crawl.
      </p>
    </div>
  )
};

// --- Main Pages ---

const Home = ({ onChangeView }) => (
  <div className="animate-in fade-in duration-500">
    <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
          <Brain className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Master the Future of <span className="text-blue-600">Intelligence</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          The complete interactive encyclopedia for Machine Learning. From simple Regression to Transformers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => onChangeView('roadmap')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center justify-center"
          >
            <Map className="mr-2 w-4 h-4" /> Start Roadmap
          </button>
          <button 
            onClick={() => onChangeView('concepts')}
            className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition flex items-center justify-center"
          >
            Browse Concepts <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Interactive Learning', icon: <Zap className="w-6 h-6 text-yellow-500"/>, desc: 'Don\'t just read formulas. Tweak parameters and watch algorithms learn in real-time.' },
          { title: 'Full Stack Code', icon: <Terminal className="w-6 h-6 text-green-500"/>, desc: 'Production-ready code snippets in PyTorch, TensorFlow, and Scikit-Learn.' },
          { title: 'Beginner to Expert', icon: <GraduationCap className="w-6 h-6 text-purple-500"/>, desc: 'Layered content. Start with simple definitions, toggle "Math Mode" for deep theory.' },
        ].map((feature, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
            <p className="text-slate-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const Roadmap = ({ onStart }) => (
  <div className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Path to Mastery</h2>
      <p className="text-slate-600 max-w-xl mx-auto">Machine Learning is vast. Follow this curated path to build a solid foundation before tackling advanced architectures.</p>
    </div>

    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {ROADMAP.map((item, index) => (
        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            {index + 1}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition">
            <h3 className="font-bold text-slate-800 text-lg mb-1">{item.phase}</h3>
            <p className="text-sm text-slate-500 mb-4">{item.desc}</p>
            <div className="flex flex-wrap gap-2">
              {item.items.map((tag, i) => (
                <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-16 text-center">
       <button onClick={onStart} className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition shadow-lg">Start Learning Now</button>
    </div>
  </div>
);

const ConceptsList = ({ onSelectConcept }) => (
  <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto px-6 py-12">
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Concepts</h2>
      <p className="text-lg text-slate-600 max-w-2xl">From basic regression to state-of-the-art Transformers. Filter by difficulty or explore sequentially.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CONCEPTS.map(concept => (
        <div 
          key={concept.id}
          onClick={() => onSelectConcept(concept)}
          className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition cursor-pointer flex flex-col h-full"
        >
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${
              concept.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' : 
              concept.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-600' :
              concept.difficulty === 'Advanced' ? 'bg-purple-100 text-purple-600' :
              'bg-orange-100 text-orange-600'
            }`}>
              {concept.icon}
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
              concept.difficulty === 'Beginner' ? 'bg-green-50 text-green-600 border border-green-100' : 
              concept.difficulty === 'Intermediate' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
              concept.difficulty === 'Advanced' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
              'bg-orange-50 text-orange-600 border border-orange-100'
            }`}>{concept.difficulty}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition">{concept.title}</h3>
          <p className="text-slate-600 text-sm flex-grow mb-6 leading-relaxed">{concept.summary}</p>
          <div className="flex items-center text-blue-600 text-sm font-bold border-t border-slate-100 pt-4">
            Start Module <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ConceptDetail = ({ concept, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizSubmitted(false);
    setSelectedOption(null);
  };

  return (
    <div className="animate-in slide-in-from-right-8 duration-500 max-w-5xl mx-auto px-4 md:px-6 py-8">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-slate-500 hover:text-blue-600 transition text-sm font-medium"
      >
        <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Back to Library
      </button>
      
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 border-b border-slate-200 pb-10">
        <div className="p-5 bg-blue-100 text-blue-600 rounded-2xl shadow-inner">
          {React.cloneElement(concept.icon, { className: "w-10 h-10" })}
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{concept.title}</h1>
          <p className="text-slate-600 text-lg">{concept.summary}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 mb-8 border-b border-slate-200">
        {['overview', 'math', 'code', 'quiz'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium text-sm capitalize whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab 
              ? 'border-blue-600 text-blue-600 bg-blue-50/50' 
              : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="animate-in fade-in space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Definition</h3>
              <p className="text-lg text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100">
                {concept.content.definition}
              </p>
            </section>
            
            <section>
               <h3 className="text-xl font-bold text-slate-800 mb-4">Key Terminology</h3>
               <div className="grid md:grid-cols-2 gap-4">
                 {concept.content.keyTerms.map((term, i) => (
                   <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-200 transition shadow-sm">
                     <span className="block font-bold text-blue-600 mb-1">{term.term}</span>
                     <span className="text-slate-600 text-sm leading-relaxed">{term.def}</span>
                   </div>
                 ))}
               </div>
            </section>

             <section>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Common Questions</h3>
              <div className="space-y-4">
                {concept.faqs.map((faq, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-1 flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-500 mt-1 shrink-0" /> {faq.q}
                    </h4>
                    <p className="text-slate-600 text-sm ml-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'math' && (
           <div className="animate-in fade-in">
             <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                <Calculator className="absolute top-4 right-4 text-slate-800 w-32 h-32 rotate-12" />
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{concept.content.math.title}</h3>
                <p className="text-slate-400 mb-8 relative z-10">{concept.content.math.desc}</p>
                
                <div className="space-y-6 relative z-10">
                  {concept.content.math.formulas.map((f, i) => (
                    <div key={i} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 backdrop-blur-sm">
                       <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{f.label}</span>
                       <div className="font-mono text-xl text-white mt-2">{f.eq}</div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="mt-6 p-4 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm">These mathematical foundations are critical for understanding how the algorithm actually optimizes parameters during training.</p>
             </div>
           </div>
        )}

        {activeTab === 'code' && (
          <div className="animate-in fade-in">
            <p className="text-slate-600 mb-2">Implementation using industry standard libraries.</p>
            <CodeBlock title={concept.content.codeTitle} code={concept.content.code} />
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="animate-in fade-in max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg text-center">
               <h3 className="text-xl font-bold text-slate-800 mb-6">{concept.content.quiz.question}</h3>
               
               <div className="space-y-3 mb-8">
                 {concept.content.quiz.options.map((opt, i) => (
                   <button 
                     key={i}
                     disabled={quizSubmitted}
                     onClick={() => setSelectedOption(i)}
                     className={`w-full p-4 rounded-xl text-left border-2 transition relative ${
                        quizSubmitted 
                          ? i === concept.content.quiz.answer 
                            ? 'border-green-500 bg-green-50 text-green-700 font-bold' 
                            : i === selectedOption ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-100 text-slate-400'
                          : selectedOption === i 
                            ? 'border-blue-600 bg-blue-50 text-blue-700' 
                            : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                     }`}
                   >
                     {opt}
                     {quizSubmitted && i === concept.content.quiz.answer && <CheckCircle className="absolute right-4 top-4 text-green-600" />}
                   </button>
                 ))}
               </div>

               {!quizSubmitted ? (
                 <button 
                   onClick={handleQuizSubmit}
                   disabled={selectedOption === null}
                   className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                 >
                   Submit Answer
                 </button>
               ) : (
                  <div>
                    <p className={`mb-4 font-bold ${selectedOption === concept.content.quiz.answer ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedOption === concept.content.quiz.answer ? "Correct! Great job." : "Not quite. Review the definition tab and try again."}
                    </p>
                    <button onClick={resetQuiz} className="text-slate-500 hover:text-slate-800 underline">Try Again</button>
                  </div>
               )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Tools = () => (
  <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Interactive Lab</h2>
      <p className="text-slate-600">Experiment with algorithms directly in your browser.</p>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-8">
      <InteractiveLinearRegression />
      <GradientDescentVisualizer />
    </div>

    <div className="mt-12 text-center">
       <div className="inline-block bg-slate-100 rounded-full px-4 py-1 text-slate-500 text-sm">More tools (Neural Net Builder, Confusion Matrix) coming in v2.1</div>
    </div>
  </div>
);

const Resources = () => (
  <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in">
    <div className="mb-12 border-b border-slate-200 pb-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Curated Resources</h2>
      <p className="text-slate-600">Hand-picked materials to accelerate your learning journey.</p>
    </div>
    
    <div className="grid gap-4">
      {RESOURCES.map((res, i) => (
        <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition flex items-start justify-between group">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide
                ${res.type === 'Book' ? 'bg-purple-100 text-purple-700' : 
                  res.type === 'Course' ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'}`}>
                {res.type}
              </span>
              <span className="text-slate-400 text-sm">•</span>
              <span className="text-slate-500 text-sm">{res.author}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition">{res.title}</h3>
            <p className="text-slate-600">{res.desc}</p>
          </div>
          <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors mt-2" />
        </div>
      ))}
    </div>
  </div>
);

const Blog = () => (
  <div className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in">
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Insights</h2>
      <p className="text-slate-600">Articles on trends, ethics, and advanced tutorials.</p>
    </div>

    <div className="grid gap-8">
      {BLOG_POSTS.map(post => (
        <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition cursor-pointer group">
          <div className="w-full md:w-48 h-32 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100">
             <Code className="w-8 h-8 text-slate-300 group-hover:text-blue-400 transition" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2 text-sm">
              <span className="font-semibold text-blue-600">{post.category}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">{post.date}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">{post.readTime}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition">{post.title}</h3>
            <p className="text-slate-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 animate-in fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
        <p className="text-slate-600">Have a suggestion for a new topic? Found a bug? Let us know.</p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-xl text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p>Thanks for reaching out. We'll get back to you shortly.</p>
          <button onClick={() => setSubmitted(false)} className="mt-6 text-sm underline hover:text-green-800">Send another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
              <input required type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <input required type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="jane@example.com" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
            <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
              <option>General Query</option>
              <option>Content Suggestion</option>
              <option>Report a Bug</option>
            </select>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
            <textarea required rows="4" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

// --- App Shell ---

const App = () => {
  const [view, setView] = useState('home');
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (newView) => {
    setView(newView);
    setSelectedConcept(null);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleConceptSelect = (concept) => {
    setSelectedConcept(concept);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'concepts', label: 'Library' },
    { id: 'tools', label: 'Lab' },
    { id: 'resources', label: 'Resources' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-3 transition duration-300">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Neuro<span className="text-blue-600">Hub</span> 2.0</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  view === item.id || (item.id === 'concepts' && selectedConcept)
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white absolute w-full p-4 shadow-xl flex flex-col gap-2 animate-in slide-in-from-top-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className="p-3 text-left rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {view === 'home' && <Home onChangeView={navigateTo} />}
        {view === 'roadmap' && <Roadmap onStart={() => navigateTo('concepts')} />}
        {view === 'concepts' && !selectedConcept && <ConceptsList onSelectConcept={handleConceptSelect} />}
        {selectedConcept && <ConceptDetail concept={selectedConcept} onBack={() => setSelectedConcept(null)} />}
        {view === 'tools' && <Tools />}
        {view === 'resources' && <Resources />}
        {view === 'blog' && <Blog />}
        {view === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Brain className="w-6 h-6" />
              <span className="text-xl font-bold">NeuroHub</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">Democratizing machine learning education through interactive tools, comprehensive theory, and accessible content.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition" onClick={() => navigateTo('roadmap')}>Roadmap</li>
              <li className="hover:text-white cursor-pointer transition" onClick={() => navigateTo('concepts')}>Concepts Library</li>
              <li className="hover:text-white cursor-pointer transition" onClick={() => navigateTo('tools')}>Interactive Lab</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Github className="w-5 h-5 hover:text-white cursor-pointer transition" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition" />
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition" />
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 text-center text-sm">
          &copy; 2024 NeuroHub Educational Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;