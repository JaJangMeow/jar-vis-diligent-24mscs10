# J.A.R.V.I.S - Technical Documentation

**Just A Rather Very Intelligent System**

## Executive Summary

J.A.R.V.I.S is a web-based AI assistant application that provides conversational AI capabilities with knowledge management, voice interaction, and customizable communication styles. 
The application is built as a single-page application (SPA) using React and leverages a Backend-as-a-Service (BaaS) platform for data persistence and AI integration. 
The system is powered by a self-hosted large language model (LLM)** that processes user queries and generates contextually relevant responses. 
Knowledge is stored and retrieved using a vector database for efficient semantic search and retrieval, enabling the assistant to provide accurate, context-aware information. 
The application features a conversational chatbot interface that provides an intuitive, real-time interaction experience.

---

## Application Overview

### What the Application Does

J.A.R.V.I.S is an intelligent personal assistant that:

1. **Conversational Chatbot Interface**: Provides a real-time, interactive chatbot UI that enables natural language conversations with a self-hosted LLM-powered AI assistant. The interface displays messages in a conversational format with typing indicators, message history, and smooth animations.

2. **Self-Hosted LLM Integration**: Utilizes a self-hosted large language model that processes user queries and generates contextually relevant responses. The LLM understands natural language input and responds with intelligent, context-aware information tailored to user preferences.

3. **Vector Database for Knowledge Retrieval**: Implements a vector database system for storing and retrieving knowledge. Knowledge entries are converted to vector embeddings, enabling semantic search that finds relevant information based on meaning rather than just keywords. This allows the assistant to retrieve contextually relevant knowledge even when exact keyword matches don't exist.

4. **Knowledge Management**: Allows users to create, store, and manage a personal knowledge base. When users ask questions, the system performs semantic search in the vector database to find relevant knowledge entries, which are then used as context for the LLM to generate accurate responses.

5. **File Processing**: Supports uploading documents (PDF, DOC, DOCX, TXT, MD, CSV, JSON) and automatically extracts knowledge from them using the LLM. Extracted content is processed and stored in the vector database for future retrieval.

6. **Voice Interaction**: Provides speech-to-text input and text-to-speech output capabilities integrated into the chatbot interface.

7. **Customizable AI Behavior**: Allows users to configure the AI's communication style (formality, verbosity, tone), which influences how the LLM generates responses.

8. **Conversation Management**: Organizes interactions into separate conversations with export and summarization features, all accessible through the chatbot UI.

### How It Works

The application follows a client-server architecture:

1. **Frontend (React SPA)**: The user interface is built entirely in React, running in the browser
2. **Backend Service (base44)**: All data operations, authentication, and AI processing are handled by the base44 Backend-as-a-Service platform
3. **Data Flow**:
   - User interactions trigger API calls to base44
   - base44 handles data persistence, authentication, and AI model invocations
   - Responses are returned to the React frontend for display
   - React Query manages client-side caching and state synchronization

---

## Technology Stack

### Frontend Technologies

#### Core Framework
- **React 18+**: JavaScript library for building user interfaces
- **React Router**: Client-side routing for navigation between pages
- **React Query (TanStack Query)**: Data fetching, caching, and state management for server state

#### UI Libraries & Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Framer Motion**: Animation library for smooth UI transitions
- **Lucide React**: Icon library

#### Additional Libraries
- **React Markdown**: Renders markdown content in chat messages
- **Web Speech API**: Browser-native speech recognition and synthesis

### Backend & Data Storage

#### Backend-as-a-Service Platform
- **base44**: A Backend-as-a-Service (BaaS) platform that provides:
  - **Authentication Service**: User management and authentication (`base44.auth`)
  - **Entity Management**: CRUD operations for data entities (`base44.entities`)
  - **Self-Hosted LLM Integration**: Large Language Model (LLM) invocation through `base44.integrations.Core.InvokeLLM()`. The LLM is self-hosted, providing full control over the AI model and ensuring data privacy and security.
  - **Vector Database**: Knowledge storage and retrieval using vector embeddings. The base44 platform manages the vector database infrastructure, handling embedding generation, similarity search, and semantic retrieval of knowledge entries.
  - **File Storage**: File upload and management (`base44.integrations.Core.UploadFile`)

**Important Note**: The application does NOT use traditional database services like Supabase, Firebase, or PostgreSQL. Instead, it relies entirely on the base44 platform for all backend operations, including data persistence. The knowledge base uses a **vector database** for semantic search and retrieval, which is managed by the base44 platform.

### Data Storage Architecture

#### Storage Method
The application uses a **hybrid storage approach** combining entity-based storage and vector database:

1. **Entity-Based Storage** (via base44):
   - **Conversation Entity**: Stores conversation metadata (title, last_message, timestamps)
   - **Message Entity**: Stores individual messages within conversations (role, content, context_used, timestamps)
   - **User Entity**: Stores user preferences and settings (formality, verbosity, tone, voice_enabled)

2. **Vector Database** (for Knowledge Retrieval):
   - **KnowledgeBase Entity**: Knowledge entries are stored with their vector embeddings
   - When a knowledge entry is created, its content is converted to vector embeddings
   - Vector embeddings enable semantic search - finding relevant knowledge based on meaning and context
   - During query processing, the user's question is converted to a query vector
   - The vector database performs similarity search to find the most relevant knowledge entries
   - Retrieved knowledge is injected into the LLM prompt as context

#### Vector Database Workflow
1. **Knowledge Ingestion**: When knowledge is added (manually or via file upload):
   - Content is processed and converted to vector embeddings
   - Embeddings are stored in the vector database with metadata (title, category, tags)
   
2. **Query Processing**: When a user asks a question:
   - User query is converted to a query vector
   - Vector database performs cosine similarity search
   - Top-k most relevant knowledge entries are retrieved
   - Retrieved knowledge is formatted as context for the LLM
   - LLM generates response using both the query and retrieved context

3. **Semantic Search Advantages**:
   - Finds relevant information even without exact keyword matches
   - Understands synonyms and related concepts
   - Ranks results by semantic similarity rather than keyword frequency
   - Enables contextually relevant responses

#### Data Access Pattern
- All data operations are performed through base44's API client
- Knowledge retrieval uses vector similarity search through base44's vector database
- Data is filtered by user email (`created_by` field) to ensure user isolation
- React Query caches data on the client side for performance
- Real-time updates are handled through query invalidation after mutations

#### Entity Schemas
Entities are defined using JSON Schema format in the `Entities/` directory:
- `Entities/Conversation`: Defines conversation structure
- `Entities/Message`: Defines message structure
- `Entities/KnowledgeBase`: Defines knowledge base entry structure (stored with vector embeddings)

---

## Application Architecture

### Component Structure

```
jar_vis/
├── Components/
│   ├── chat/
│   │   ├── ChatMessage          # Renders individual chat messages
│   │   ├── ConversationActions  # Conversation management (export, summarize)
│   │   ├── MessageInput         # Text input for messages
│   │   ├── ReactiveSphere       # Visual indicator component
│   │   ├── TypingIndicator      # Shows when AI is typing
│   │   ├── VoiceInput           # Speech-to-text input
│   │   └── VoiceToggle          # Toggle voice output
│   └── knowledge/
│       ├── FileUploader          # File upload and processing
│       ├── KnowledgeExporter    # Export knowledge base
│       └── KnowledgeItem        # Display knowledge entry
├── Entities/                     # JSON Schema definitions
│   ├── Conversation
│   ├── KnowledgeBase
│   └── Message
├── Pages/                        # Route components
│   ├── About                     # About page
│   ├── Chat                      # Main chat interface
│   ├── KnowledgeBase            # Knowledge management
│   └── Settings                  # User preferences
└── Layout.js                     # Main application layout
```

### Data Flow Architecture

1. **User Action** → React Component
2. **Component** → React Query Mutation/Query
3. **React Query** → base44 API Client
4. **base44 API** → Backend Service (data storage, AI processing)
5. **Response** → React Query Cache
6. **Cache Update** → Component Re-render

### Key Features Implementation

#### 1. Conversational Chatbot Interface
- **Real-time Chat UI**: The chatbot interface (`Pages/Chat`) provides a conversational experience with:
  - Message bubbles displaying user and AI messages
  - Typing indicators when the LLM is processing
  - Smooth animations and transitions (Framer Motion)
  - Message history with scroll-to-bottom functionality
  - Voice input/output controls integrated into the chat interface
  
- **Message Flow**: 
  - User types or speaks a message
  - Message is displayed immediately in the chat UI
  - Typing indicator appears while LLM processes
  - LLM response is streamed/displayed in the chat
  - Conversation history is maintained and displayed

#### 2. Self-Hosted LLM Processing
- User messages are sent to `base44.integrations.Core.InvokeLLM()` which connects to the self-hosted LLM
- The self-hosted LLM processes natural language queries and generates contextually relevant responses
- User preferences (formality, verbosity, tone) are dynamically added to the prompt to customize response style
- LLM response is returned and displayed in the chatbot interface
- Response is stored as a Message entity for conversation history

#### 3. Vector Database Knowledge Retrieval
- **Semantic Search Process**:
  1. User query is converted to a vector embedding
  2. Vector database performs similarity search across all knowledge embeddings
  3. Top-k most semantically similar knowledge entries are retrieved
  4. Retrieved knowledge is ranked by relevance score
  
- **Context Integration**:
  - Retrieved knowledge entries are formatted into context strings
  - Context is injected into the LLM prompt alongside the user query
  - LLM uses this context to generate informed, accurate responses
  - Used knowledge sources are tracked in the `context_used` field and displayed in the chat UI

- **Advantages of Vector Search**:
  - Finds relevant information based on semantic meaning, not just keywords
  - Handles synonyms, related concepts, and contextual understanding
  - More accurate than traditional keyword-based search
  - Enables the assistant to provide contextually relevant information

#### 4. File Processing
- Files are uploaded via `base44.integrations.Core.UploadFile()`
- File content is extracted using the self-hosted LLM with a specialized prompt
- Extracted content is converted to vector embeddings and stored in the vector database
- Progress is tracked through upload → extraction → vectorization → storage pipeline

#### 5. Voice Features
- **Input**: Uses Web Speech API (`SpeechRecognition`) for speech-to-text
- **Output**: Uses Web Speech API (`SpeechSynthesis`) for text-to-speech
- Voice settings are stored in user preferences
- Browser compatibility: Chrome/Edge (WebKit Speech Recognition)

---

## Technical Specifications

### Development Environment
- **Language**: JavaScript (ES6+)
- **Module System**: ES Modules
- **Build Tool**: (Not specified in codebase - likely Vite or Create React App)
- **Package Manager**: (Not specified - likely npm or yarn)

### API Integration
- **Authentication**: Email-based authentication via base44
- **Data Operations**: CRUD operations through base44 entity API
- **AI Processing**: LLM invocation through base44 integration API
- **File Handling**: File upload and URL retrieval through base44

### State Management
- **Server State**: React Query (TanStack Query)
- **Local State**: React useState/useEffect hooks
- **Form State**: Controlled components with local state

### Styling Approach
- **Utility-First CSS**: Tailwind CSS classes
- **Component Library**: shadcn/ui components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme**: Dark theme with gradient accents (cyan, blue, purple, red)

### Performance Considerations
- React Query caching reduces unnecessary API calls
- Query invalidation ensures data freshness after mutations
- Lazy loading and code splitting (if implemented in build configuration)
- Optimistic updates for better UX

---

## Security & Data Privacy

- **Authentication**: Handled by base44 platform
- **Data Isolation**: User data filtered by email (`created_by` field)
- **API Security**: Managed by base44 platform (authentication tokens, etc.)
- **Client-Side**: No sensitive data stored in localStorage or sessionStorage

---

## Limitations & Dependencies

### External Dependencies
- **base44 Platform**: Complete dependency on base44 for backend functionality
- **Browser APIs**: Requires modern browser with Web Speech API support
- **Network**: Requires internet connection for all operations

### Browser Compatibility
- **Speech Recognition**: Chrome, Edge (WebKit-based)
- **Speech Synthesis**: Most modern browsers
- **General**: Modern browsers with ES6+ support

---

## Conclusion

J.A.R.V.I.S is a modern, full-stack web application that demonstrates the integration of self-hosted LLM, vector database, and conversational chatbot interface. The application implements a sophisticated architecture where:

1. **Self-Hosted LLM**: Provides full control over the AI model, ensuring data privacy and allowing customization of the language model behavior.

2. **Vector Database**: Enables semantic search and retrieval of knowledge, allowing the assistant to find and use relevant information based on meaning rather than keywords, resulting in more accurate and contextually relevant responses.

3. **Conversational Chatbot UI**: Provides an intuitive, real-time interface for natural language interaction, making the AI assistant accessible and user-friendly.

The application separates concerns effectively: the frontend handles presentation and user interaction through the chatbot interface, while the backend service (base44) manages data persistence, vector database operations, authentication, and self-hosted LLM processing. This architecture allows for rapid development while maintaining scalability, user data isolation, and advanced AI capabilities through semantic knowledge retrieval.

---

**Developer**: Joel Lalrinhlua (24MSCS10)  
**Application Type**: Single-Page Application (SPA)  
**Architecture Pattern**: Client-Server with BaaS Backend

