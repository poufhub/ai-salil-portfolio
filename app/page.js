'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Settings, Lock, Plus, Trash2, Moon, Sun, Upload, Link2, X } from 'lucide-react';

const SALIL_CONTEXT = `You are Salil Shahane, a Melbourne-based Social & Content Strategist. You're talking to someone who may be a recruiter, employer, or just curious about your work.

🚨 ABSOLUTE RULES - NEVER VIOLATE:
1. NEVER MAKE UP INFORMATION - Only use facts explicitly provided in this context. If you don't know something, say "I'm not sure" or "That's not something I've worked on yet."
2. NEVER INVENT BACKSTORIES, DETAILS, OR EXPERIENCES - Stick strictly to what's written here.
3. If asked about something not covered in this context, be honest: "I don't have that info handy, but you can check my portfolio at salilshahane.com or ask me directly at salilshahane@gmail.com"

RESPONSE STYLE:
- BE CONCISE: Simple question = 1-3 sentences. Complex question = more detail.
- NO REPETITION: Don't list the same achievements every time. Pick what's relevant.
- BE CONVERSATIONAL: Natural, human tone. Use contractions.
- OCCASIONAL WIT: Slightly playful when appropriate, but don't force it.
- ASK QUESTIONS SPARINGLY: Only ask follow-up questions when it genuinely makes sense (maybe 1 in 4 responses). Don't be over-enthusiastic.
- ADAPT TO CONTEXT: Don't assume who you're talking to. Let the conversation reveal that naturally.

EXAMPLES OF GOOD RESPONSES:

Q: "Tell me about yourself"
A: "I'm a strategist and creative who's spent 10+ years helping brands do interesting things with tech - from AI deepfakes in Malaysia to India's first live-commerce launch. Currently freelancing in Melbourne."

Q: "What's your experience with AI?"
A: "I've built award-winning AI campaigns like Aidentiti Kita, where we used generative AI to let Malaysians sing in languages they couldn't speak. Won 5 Kancils for that. I also love demystifying AI for creative teams since I'm a computer science engineer."

Q: "Do you have experience with influencer marketing?"
A: "Yeah - everything from managing 2,000+ creator communities to campaigns that hit 2.3 billion views. Also increased influencer effectiveness 50x for a pharma client."

CONTACT & STATUS:
- Based: Collingwood, Melbourne, Australia
- Visa: TSS-482 (upgrading to PR), full work rights, TFN + ABN ready
- Phone: +61 452 035 258
- Email: salilshahane@gmail.com
- Website: www.salilshahane.com
- Portfolio: vimeo.com/user70254787 (20+ case study videos)
- Status: Freelancing, open to mid/senior strategy, content, or social roles

SIGNATURE WORK (mention only when relevant, don't list all at once):

MALAYSIA & SINGAPORE:
- Telekom Malaysia "Aidentiti Kita": AI deepfake tool that let Malaysians sing in languages they couldn't speak. 23M reach, 65% first-time AI users, 5 Kancil awards.
- Giga e-Scanner: Turned every letter "e" into an e-sim signup opportunity. 27k new users. Markies 2025 Silver.
- TM Raya: Generative AI music tool creating 2,000+ culturally relevant songs.
- Takeda #HumansAgainstDengue: Influencer campaign, 3x video views, 50x engagement vs benchmark.

INDIA:
- OPPO Reno6 Live Commerce: India's first live-commerce launch. 169% engagement rate, doubled sales.
- Pepsi Swag Step Challenge: Summer influencer campaign, 2.3 billion views, 54k UGC pieces.
- Pepsi x Netflix Money Heist: AR experience, boosted youth brand score 30%.
- HP IPL Partnership: Made HP the #2 brand during India's biggest cricket tournament (IPL). Also created HP's highest-performing film in India (14.5M views, 539k shares) - "Umeed Ka Diya".
- Microsoft Ruuh Chatbot: Launch campaign that convinced 100k strangers to chat with an AI. DMA Echo Asia Silver. 40% earned media.
- Xbox One India: Partnered with comedy group AIB to launch despite government scrutiny. Grew developer community 25%.
- Luminous "The Luminaries": CSR platform, 64M impressions. Set up solar power in remote Indian village with Schneider Group.
- Diageo #GiftsMenLove: Made product the #3 trending gift in India.
- Dettol Anti-Pollution Masks: Launched pre-COVID, 87% awareness.
- Windows 10 India Launch: #UpgradeYourWorld / #DiwaliUpgrade campaign.

SPORTS MARKETING EXPERIENCE:
- HP + IPL (Indian Premier League Cricket): Led partnership strategy making HP #2 brand during tournament. This was major sports marketing work during India's biggest sporting event.
- Domino's #DostOfTheYear: Campaign during festive season, doubled ROI.

KEY POSITIONING (use selectively, not all at once):
1. Not just another strategist - seasoned creative who writes everything from films to memes
2. Think big on small budgets - help challenger brands compete
3. The tech guy - Computer science engineer who makes AI/tech accessible

FULL WORK HISTORY (only share if specifically asked about career progression):

**Grey Worldwide – Head of Digital & Social** (Malaysia & Singapore, Jul 2023 – Dec 2024)
Brands: Lenovo, Giga, TM, NEA, Takeda, P&G, EPF
Key work: Giga e-scanner, TM Aidentiti Kita, TM Raya AI music, Takeda influencer campaign, EPF TikTok (134M reach)

**Antler – Founder, Gamerr.gg** (Singapore, Nov 2022 – May 2023)
Built esports startup MVP, 1k+ users, MoUs with esports communities

**Razorlabs – Associate VP, Strategy** (Remote, Dec 2021 – Nov 2022)
Product and business strategy for voyze.io and other B2B SaaS products

**Grey Group – Senior Creative Director / Strategy Lead** (India, Aug 2019 – Dec 2021)
Brands: OPPO, Pepsi, Mountain Dew, Domino's, HP, Changi Airport
Key work: OPPO live commerce, Pepsi campaigns, HP IPL partnership

**Alpine Creations – Marketing Manager** (Singapore, Oct 2018 – Aug 2019)
Digital transformation for textile manufacturer. Biofuze sustainable polyester. Fast Company nominee.

**Autumn Worldwide – Creative Planner / Copywriter** (India, Sep 2014 – Oct 2018)
Brands: HP, Microsoft, Xbox, Reckitt, Diageo, Pantene, Luminous
Key work: HP IPL, Microsoft Ruuh, Xbox One launch, Windows 10 launch, Luminous CSR

EDUCATION:
B.Tech Computer Science Engineering – NorthCap University, Gurgaon (2010-2014)

AWARDS (only mention if relevant):
- 5x Kancil Malaysia (2024) - TM Aidentiti Kita
- Markies 2025 Silver - Giga
- DMA Echo Asia Silver (2018) - Microsoft Ruuh
- Fast Company Innovation by Design Nominee (2019) - Alpine Creations
- The Drum Social Buzz Rising Star nominee (2018)
- Various Social Samosa & LinkedIn Content Marketing awards

CURRENT PROJECT - "ONE NEW PIN":
YouTube channel (@FindingSalil) exploring Victorian towns monthly. Connects local observations to brand/business insights.
- Beaufort: Vegemite Museum in repurposed gas station (Australia decentralizes cultural icons)
- Castlemaine: Wild restaurant in old fire station (heritage reimagined)
- Nagambie: Bridge being demolished respectfully (letting go of past for future)
- Dandenong Ranges: Accessible trails (trust by design)
- Daylesford: Sunday market (decentralized commerce)

PERSONALITY & INTERESTS:
- Foodie by day, gamer by night (PS5, Switch, PC)
- Cultural observer and storyteller
- Computer engineer turned creative
- Honest about limitations - will say "I don't know" rather than make things up

TONE REMINDERS:
- Don't assume who you're talking to - adapt based on what they ask
- Ask follow-up questions sparingly (maybe 1 in 5 responses, only when genuinely relevant)
- Keep it natural, not salesy or over-enthusiastic
- If you don't know something, say so - never make up information`;

export default function AISalilChatSecure() {
  const [view, setView] = useState('chat');
  const [darkMode, setDarkMode] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey! 👋 I'm Salil's AI assistant. Ask me anything about his work, experience, or projects."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [newInfoTitle, setNewInfoTitle] = useState('');
  const [newInfoContent, setNewInfoContent] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    loadAdditionalInfo();
    loadUploadedFiles();
    // Auto-focus input on page load
    setTimeout(() => inputRef.current?.focus(), 300);
  }, []);

  const loadAdditionalInfo = async () => {
    try {
      const result = await window.storage.get('salil-additional-info');
      if (result && result.value) {
        setAdditionalInfo(JSON.parse(result.value));
      }
    } catch (error) {
      console.log('No additional info stored yet');
    }
  };

  const loadUploadedFiles = async () => {
    try {
      const result = await window.storage.get('salil-uploaded-files');
      if (result && result.value) {
        setUploadedFiles(JSON.parse(result.value));
      }
    } catch (error) {
      console.log('No files stored yet');
    }
  };

  const saveAdditionalInfo = async (info) => {
    try {
      await window.storage.set('salil-additional-info', JSON.stringify(info));
      setAdditionalInfo(info);
    } catch (error) {
      console.error('Failed to save info:', error);
    }
  };

  const saveUploadedFiles = async (files) => {
    try {
      await window.storage.set('salil-uploaded-files', JSON.stringify(files));
      setUploadedFiles(files);
    } catch (error) {
      console.error('Failed to save files:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const buildFullContext = () => {
    let fullContext = SALIL_CONTEXT;
    
    if (additionalInfo.length > 0) {
      fullContext += '\n\nRECENT UPDATES:\n';
      additionalInfo.forEach(info => {
        fullContext += `\n${info.title}: ${info.content}\n`;
      });
    }
    
    if (uploadedFiles.length > 0) {
      fullContext += '\n\nADDITIONAL DOCUMENTS & LINKS:\n';
      uploadedFiles.forEach(file => {
        fullContext += `\n${file.name}: ${file.content}\n`;
      });
    }
    
    return fullContext;
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target.result;
      const newFile = {
        id: Date.now(),
        name: file.name,
        type: file.type,
        content: content.substring(0, 10000), // Limit content size
        dateAdded: new Date().toISOString()
      };
      
      const updatedFiles = [...uploadedFiles, newFile];
      saveUploadedFiles(updatedFiles);
    };
    
    reader.readAsText(file);
  };

  const handleUrlAdd = async () => {
    if (!newUrl.trim()) return;
    
    const newFile = {
      id: Date.now(),
      name: `Link: ${newUrl}`,
      type: 'url',
      content: `User provided this URL for reference: ${newUrl}`,
      dateAdded: new Date().toISOString()
    };
    
    const updatedFiles = [...uploadedFiles, newFile];
    saveUploadedFiles(updatedFiles);
    setNewUrl('');
  };

  const handleDeleteFile = (id) => {
    const updatedFiles = uploadedFiles.filter(file => file.id !== id);
    saveUploadedFiles(updatedFiles);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const conversationHistory = messages.filter(m => m.role !== 'assistant' || m.content !== messages[0].content);
    const fullContext = buildFullContext();

    try {
      const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          max_tokens: 600,
          temperature: 0.7,
          messages: [
            { role: 'system', content: fullContext },
            ...conversationHistory,
            userMessage
          ].map(m => ({
            role: m.role === 'assistant' ? 'assistant' : 'user',
            content: m.content
          }))
        })
      });

      if (!groqResponse.ok) throw new Error('Groq API failed');

      const groqData = await groqResponse.json();
      const assistantMessage = {
        role: 'assistant',
        content: groqData.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (groqError) {
      console.log('Groq failed, falling back to Claude...');
      
      try {
        const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 600,
            temperature: 0.7,
            system: fullContext,
            messages: [
              ...conversationHistory,
              userMessage
            ].map(m => ({
              role: m.role === 'assistant' ? 'assistant' : 'user',
              content: m.content
            }))
          })
        });

        if (!claudeResponse.ok) throw new Error('Claude API failed');

        const claudeData = await claudeResponse.json();
        const assistantMessage = {
          role: 'assistant',
          content: claudeData.content[0].text
        };

        setMessages(prev => [...prev, assistantMessage]);
      } catch (claudeError) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Sorry, I\'m having trouble connecting right now. Try again in a moment?'
        }]);
      }
    } finally {
      setIsLoading(false);
      // Auto-focus input after sending
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAdminLogin = () => {
    if (adminPassword === 'salil2025secure') {
      setIsAdminAuthenticated(true);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddInfo = () => {
    if (!newInfoTitle.trim() || !newInfoContent.trim()) return;
    
    const newInfo = {
      id: Date.now(),
      title: newInfoTitle,
      content: newInfoContent,
      dateAdded: new Date().toISOString()
    };
    
    const updatedInfo = [...additionalInfo, newInfo];
    saveAdditionalInfo(updatedInfo);
    setNewInfoTitle('');
    setNewInfoContent('');
  };

  const handleDeleteInfo = (id) => {
    const updatedInfo = additionalInfo.filter(info => info.id !== id);
    saveAdditionalInfo(updatedInfo);
  };

  // Theme classes
  const bgClass = darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50';
  const cardBg = darkMode ? 'bg-slate-800/80 backdrop-blur-xl border-slate-700' : 'bg-white/80 backdrop-blur-xl border-purple-100';
  const textPrimary = darkMode ? 'text-slate-100' : 'text-slate-800';
  const textSecondary = darkMode ? 'text-slate-400' : 'text-slate-600';
  const inputBg = darkMode ? 'bg-slate-700/50 border-slate-600 text-white' : 'bg-white/50 border-purple-200 text-slate-800';
  const messageBubbleUser = darkMode ? 'bg-gradient-to-r from-violet-600 to-purple-600' : 'bg-gradient-to-r from-violet-500 to-purple-500';
  const messageBubbleBot = darkMode ? 'bg-slate-700/50' : 'bg-white/70';

  if (view === 'admin') {
    if (!isAdminAuthenticated) {
      return (
        <div className={`flex items-center justify-center min-h-screen ${bgClass}`}>
          <div className={`${cardBg} rounded-3xl shadow-2xl p-8 w-96 border`}>
            <div className="flex items-center gap-3 mb-6">
              <Lock className={`w-6 h-6 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`} />
              <h2 className={`text-2xl font-bold ${textPrimary}`}>Admin Access</h2>
            </div>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              placeholder="Enter admin password"
              className={`w-full px-4 py-3 ${inputBg} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 mb-4`}
            />
            <button
              onClick={handleAdminLogin}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all font-medium shadow-lg"
            >
              Login
            </button>
            <button
              onClick={() => setView('chat')}
              className={`w-full mt-2 ${textSecondary} px-4 py-2 rounded-xl hover:bg-slate-700/20 transition-colors`}
            >
              Back to Chat
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={`flex flex-col min-h-screen ${bgClass}`}>
        <div className={`${cardBg} border-b px-6 py-4`}>
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className={`text-xl font-bold ${textPrimary}`}>Admin Panel</h1>
            <button
              onClick={() => { setView('chat'); setIsAdminAuthenticated(false); }}
              className={`${textSecondary} hover:${textPrimary} transition-colors text-sm`}
            >
              Back to Chat
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Upload Files & Add Links */}
            <div className={`${cardBg} rounded-2xl p-6 border shadow-lg`}>
              <h3 className={`text-lg font-bold ${textPrimary} mb-4 flex items-center gap-2`}>
                <Upload className="w-5 h-5" />
                Upload Documents & Add Links
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm ${textSecondary} mb-2`}>Upload PDF or Text File</label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.txt,.doc,.docx"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Choose File
                  </button>
                </div>
                
                <div>
                  <label className={`block text-sm ${textSecondary} mb-2`}>Add URL Link</label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={newUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleUrlAdd()}
                      placeholder="https://example.com"
                      className={`flex-1 px-4 py-3 ${inputBg} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    />
                    <button
                      onClick={handleUrlAdd}
                      disabled={!newUrl.trim()}
                      className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <h4 className={`text-sm font-semibold ${textPrimary} mb-2`}>Uploaded Files & Links</h4>
                  <div className="space-y-2">
                    {uploadedFiles.map(file => (
                      <div key={file.id} className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50/50'} rounded-xl p-3 flex justify-between items-center`}>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${textPrimary}`}>{file.name}</p>
                          <p className={`text-xs ${textSecondary}`}>
                            Added: {new Date(file.dateAdded).toLocaleDateString()}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteFile(file.id)}
                          className="text-red-500 hover:text-red-600 ml-4"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Add Text Information */}
            <div className={`${cardBg} rounded-2xl p-6 border shadow-lg`}>
              <h3 className={`text-lg font-bold ${textPrimary} mb-4 flex items-center gap-2`}>
                <Plus className="w-5 h-5" />
                Add Text Information
              </h3>
              <input
                type="text"
                value={newInfoTitle}
                onChange={(e) => setNewInfoTitle(e.target.value)}
                placeholder="Title (e.g., 'New Project', 'Award Won')"
                className={`w-full px-4 py-3 ${inputBg} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 mb-3`}
              />
              <textarea
                value={newInfoContent}
                onChange={(e) => setNewInfoContent(e.target.value)}
                placeholder="Details..."
                rows={4}
                className={`w-full px-4 py-3 ${inputBg} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 mb-3`}
              />
              <button
                onClick={handleAddInfo}
                disabled={!newInfoTitle.trim() || !newInfoContent.trim()}
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg"
              >
                Add Information
              </button>
            </div>

            {/* Current Information */}
            {additionalInfo.length > 0 && (
              <div className={`${cardBg} rounded-2xl p-6 border shadow-lg`}>
                <h3 className={`text-lg font-bold ${textPrimary} mb-4`}>Current Text Information</h3>
                <div className="space-y-3">
                  {additionalInfo.map(info => (
                    <div key={info.id} className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50/50'} rounded-xl p-4 flex justify-between items-start`}>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${textPrimary} mb-1`}>{info.title}</h4>
                        <p className={`text-sm ${textSecondary} whitespace-pre-wrap`}>{info.content}</p>
                        <p className={`text-xs ${textSecondary} mt-2 opacity-70`}>
                          Added: {new Date(info.dateAdded).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteInfo(info.id)}
                        className="text-red-500 hover:text-red-600 ml-4"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Chat View
  return (
    <div className={`flex flex-col h-screen ${bgClass} font-sans overflow-hidden`}>
      {/* Header */}
      <div className={`${cardBg} px-4 sm:px-6 py-3 sm:py-4 border-b flex justify-between items-center backdrop-blur-xl flex-shrink-0`}>
        <div>
          <h1 className={`text-lg sm:text-lg font-semibold ${textPrimary} tracking-tight`}>Salil Shahane</h1>
          <p className={`text-xs ${textSecondary}`}>AI Assistant</p>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${textSecondary} hover:${textPrimary} transition-colors p-2 rounded-lg hover:bg-slate-700/20`}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setView('admin')}
            className={`${textSecondary} hover:${textPrimary} transition-colors p-2 rounded-lg hover:bg-slate-700/20`}
            title="Admin"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4 sm:py-6 min-h-0">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-4 pb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-2 sm:gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-11 h-11 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <Bot className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                </div>
              )}
              <div
                className={`rounded-2xl px-5 py-3.5 sm:px-4 sm:py-3 max-w-[80%] sm:max-w-md shadow-lg ${
                  message.role === 'user'
                    ? `${messageBubbleUser} text-white rounded-tr-md`
                    : `${messageBubbleBot} ${textPrimary} rounded-tl-md border ${darkMode ? 'border-slate-600' : 'border-purple-100'}`
                }`}
              >
                <p className="text-[17px] sm:text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className={`w-11 h-11 sm:w-9 sm:h-9 rounded-2xl ${darkMode ? 'bg-slate-700' : 'bg-purple-200'} flex items-center justify-center flex-shrink-0 mt-1 shadow-lg`}>
                  <User className={`w-6 h-6 sm:w-5 sm:h-5 ${darkMode ? 'text-slate-300' : 'text-purple-600'}`} />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2 sm:gap-3">
              <div className="w-11 h-11 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Bot className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className={`${messageBubbleBot} rounded-2xl rounded-tl-md px-5 py-4 shadow-lg border ${darkMode ? 'border-slate-600' : 'border-purple-100'}`}>
                <div className="flex gap-1.5">
                  <div className={`w-2.5 h-2.5 ${darkMode ? 'bg-slate-500' : 'bg-purple-400'} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
                  <div className={`w-2.5 h-2.5 ${darkMode ? 'bg-slate-500' : 'bg-purple-400'} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
                  <div className={`w-2.5 h-2.5 ${darkMode ? 'bg-slate-500' : 'bg-purple-400'} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input - Always visible at bottom */}
      <div className={`${cardBg} px-3 sm:px-4 py-4 sm:py-4 border-t backdrop-blur-xl flex-shrink-0`}>
        <div className="max-w-3xl mx-auto flex gap-2 sm:gap-3 items-end">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            autoFocus
            className={`flex-1 px-5 sm:px-5 py-4 sm:py-3.5 text-[17px] sm:text-sm ${inputBg} rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-opacity-50 shadow-lg transition-all`}
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 sm:p-3.5 rounded-2xl hover:from-violet-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex-shrink-0"
          >
            <Send className="w-6 h-6 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}