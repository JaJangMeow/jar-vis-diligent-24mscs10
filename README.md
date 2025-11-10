# J.A.R.V.I.S 

**AI ASSISTANT - Joel Lalrinhlua - MSc. Computer Science**

A modern, AI-powered personal assistant web application powered by a **self-hosted large language model (LLM)** that understands user queries and responds with contextually relevant information. The assistant stores and retrieves knowledge using a **vector database** for semantic search, and provides an intuitive **conversational chatbot interface** for natural language interaction.

![J.A.R.V.I.S](https://img.shields.io/badge/JARVIS-AI%20Assistant-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


<div align="center">
  <video controls width="720" src="https://github.com/joelmscs10/jar-vis-diligent-24mscs10/raw/main/assets/working-of-jarvis.mp4">
    Your browser does not support the video tag. You can
    <a href="https://github.com/joelmscs10/jar-vis-diligent-24mscs10/raw/main/assets/working-of-jarvis.mp4">
      download the video here
    </a>.
  </video>
</div>

---

## ✨ Features

### 🤖 AI-Powered Conversations
- **Self-Hosted LLM**: Powered by a self-hosted large language model that processes queries and generates intelligent, contextually relevant responses
- **Conversational Chatbot Interface**: Real-time, interactive chatbot UI with message history, typing indicators, and smooth animations
- **Context-Aware Responses**: Uses vector database semantic search to retrieve relevant knowledge and provide accurate answers
- **Natural Language Understanding**: The LLM understands user queries in natural language and responds intelligently
- **Customizable AI Communication Style**: Adjust formality, verbosity, and tone to personalize responses
- **Conversation Management**: Export conversations, generate summaries, and manage chat history

### 📚 Knowledge Management with Vector Database
- **Vector Database Storage**: Knowledge is stored as vector embeddings, enabling semantic search and retrieval
- **Semantic Search**: Find relevant information based on meaning, not just keywords - understands synonyms and related concepts
- **Create and Organize**: Build your personal knowledge base with categorized and tagged entries
- **Document Processing**: Upload documents (PDF, DOC, DOCX, TXT, MD, CSV, JSON) for automatic knowledge extraction and vectorization
- **Intelligent Retrieval**: The vector database automatically finds the most relevant knowledge entries when you ask questions
- **Export Options**: Export knowledge base in multiple formats (TXT, JSON, HTML)

### 🎤 Voice Interaction
- Speech-to-text input using your microphone
- Text-to-speech output for AI responses
- Toggle voice features on/off
- Real-time voice transcription

### 🎨 Modern UI/UX
- Beautiful dark theme with gradient accents
- Smooth animations and transitions
- Responsive design for all devices
- Intuitive navigation and user experience

### ⚙️ Customizable Settings
- Adjust AI formality level (Formal, Neutral, Casual)
- Control response length (Concise, Balanced, Detailed)
- Set communication tone (Friendly, Professional, Enthusiastic, Empathetic)
- Enable/disable voice output

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Edge recommended for voice features)
- base44 account and API credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jar_vis.git
   cd jar_vis
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure base44 API**
   - Create a `src/api/base44Client.js` file (or update existing)
   - Add your base44 API credentials:
   ```javascript
   import { Base44Client } from '@base44/sdk';
   
   export const base44 = new Base44Client({
     apiKey: 'your-api-key',
     // other configuration
   });
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000` (or the port shown in terminal)

OR


   **You can just follow the link to use the Application online**
   - [https://diligent-jar-vis-joelmscs10.base44.app](https://diligent-jar-vis-joelmscs10.base44.app/)

---




## 📖 Usage

### Starting a Conversation

1. Navigate to the **Chat** page from the sidebar
2. Click **New** to start a new conversation
3. Type your message or use the microphone button for voice input
4. J.A.R.V.I.S will respond using your knowledge base and preferences

### Managing Knowledge Base

1. Go to the **Knowledge Base** page
2. Click **Add Knowledge** to create a new entry manually
3. Or use **Upload File** to extract knowledge from documents
4. Search, edit, or delete entries as needed
5. Export your knowledge base using the **Export** button

### Customizing AI Behavior

1. Visit the **Settings** page
2. Adjust formality, verbosity, and tone preferences
3. Toggle voice output on/off
4. Click **Save Preferences** to apply changes

---

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI framework
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **React Markdown** - Markdown rendering

### Backend & Services
- **base44** - Backend-as-a-Service (BaaS)
  - Authentication
  - Data persistence
  - **Self-Hosted LLM Integration** - Connects to and invokes self-hosted large language models
  - **Vector Database** - Manages vector embeddings, semantic search, and knowledge retrieval
  - File storage

### Browser APIs
- **Web Speech API** - Voice recognition and synthesis
- **File API** - File handling

---

## 📁 Project Structure

```
jar_vis/
├── Components/
│   ├── chat/              # Chat-related components
│   └── knowledge/         # Knowledge base components
├── Entities/              # Data schema definitions
├── Pages/                 # Main page components
├── Layout.js             # Application layout
└── README.md             # This file
```

---

## 🎯 Key Features Explained

### Self-Hosted LLM Architecture
J.A.R.V.I.S is powered by a **self-hosted large language model** that provides:
- **Full Control**: Complete control over the AI model and data processing
- **Privacy & Security**: All data processing happens on your infrastructure
- **Customization**: Ability to fine-tune and customize the LLM behavior
- **Contextual Understanding**: The LLM understands natural language queries and generates intelligent, contextually relevant responses

### Vector Database for Knowledge Retrieval
The system uses a **vector database** to store and retrieve knowledge:
- **Semantic Search**: Knowledge entries are converted to vector embeddings, enabling semantic similarity search
- **Intelligent Matching**: Finds relevant information based on meaning, not just exact keyword matches
- **Context Retrieval**: When you ask a question, the vector database finds the most semantically similar knowledge entries
- **Enhanced Accuracy**: Provides more accurate and contextually relevant responses compared to keyword-based search

### Conversational Chatbot Interface
The application features a modern **chatbot UI** that provides:
- **Real-time Interaction**: Instant message display with typing indicators
- **Message History**: Complete conversation history with scroll and navigation
- **Visual Feedback**: Smooth animations and visual indicators for better UX
- **Voice Integration**: Seamless voice input/output within the chat interface
- **Context Display**: Shows which knowledge sources were used in responses

### AI Context Integration
J.A.R.V.I.S intelligently uses your knowledge base when answering questions:
1. Your question is converted to a query vector
2. The vector database performs semantic search to find relevant knowledge
3. Retrieved knowledge is injected into the LLM prompt as context
4. The self-hosted LLM generates a response using both your question and the retrieved context
5. The chatbot interface displays the response and shows which knowledge sources were used

### File Processing
Upload documents and J.A.R.V.I.S will:
1. Upload the file to secure storage
2. Extract key information using the self-hosted LLM
3. Convert extracted content to vector embeddings
4. Store in the vector database for semantic retrieval
5. Make it available for future conversations through semantic search

### Voice Features
- **Speech Recognition**: Click the microphone button and speak naturally
- **Text-to-Speech**: Enable voice output to hear responses aloud
- **Browser Support**: Works best in Chrome and Edge browsers

---

## 🔒 Privacy & Security

- All data is stored securely through the base44 platform
- User data is isolated by authentication
- No data is stored locally in your browser
- Conversations and knowledge base are private to your account

---

## 🌐 Browser Compatibility

- **Chrome/Edge**: Full support including voice features
- **Firefox**: Core features supported (voice may be limited)
- **Safari**: Core features supported (voice may be limited)
- **Mobile**: Responsive design works on mobile browsers

---


## 👤 Author

**Joel Lalrinhlua** (24MSCS10)

---

## 🙏 Acknowledgments

- Inspired by Tony Stark's J.A.R.V.I.S from the Marvel Cinematic Universe
- Built with modern web technologies and AI capabilities
- Powered by self-hosted LLM and vector database technology
- Backend infrastructure provided by base44 Backend-as-a-Service platform

---

## 📧 Support

For issues, questions, or contributions, please open an issue on the GitHub repository.

---

**Made with ❤️ and AI,if ❤️ means vibecoding hehe**

