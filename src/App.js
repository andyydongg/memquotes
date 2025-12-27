import React, { useState, useEffect } from 'react';
import { Plus, Search, Clock, Calendar, User, Trash2, Edit2, Upload, X, Filter, Settings, ChevronDown, ChevronUp, Star, Volume2 } from 'lucide-react';
import './App.css';

export default function MovieQuotesTracker() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      movieId: "movie-1",
      movieName: "Spider-Man: Homecoming",
      title: "Spider-Man: Homecoming",
      type: "Movie",
      series: "Spider-man",
      author: "Tony Stark",
      year: "2017",
      genre: "Science Fiction | Action",
      length: "127 min",
      timestamp: "1:21:48",
      quote: "If you're nothing without this suit, then you shouldn't have it. Okay?",
      backgroundImage: "/images/spiderman_homecoming.jpg",
      audioFile: "",
      collapsed: false
    },
    {
      id: 2,
      movieId: "movie-1",
      movieName: "Spider-Man: Homecoming",
      title: "Spider-Man: Homecoming",
      type: "Movie",
      series: "Spider-man",
      author: "Tony Stark",
      year: "2017",
      genre: "Science Fiction | Action",
      length: "127 min",
      timestamp: "1:21:32",
      quote: "[I just wanted to be like you.] And I wanted you to be better.",
      backgroundImage: "/images/spiderman_homecoming.jpg",
      audioFile: "",
      collapsed: false
    },
    {
      id: 3,
      movieName: "斗破苍穹缘起",
      title: "斗破苍穹缘起",
      type: "TV Show",
      series: "斗破苍穹",
      author: "萧炎",
      year: "2022",
      genre: "Fantasy | Foreign Continent",
      length: "3 EP",
      timestamp: "EP 01 00:17:38",
      quote: "三十年河东，三十年河西，莫欺少年穷！",
      backgroundImage: "/images/btth.webp",
      audioFile: "",
      collapsed: false
    },
    {
      id: 4,
      movieName: "斗破苍穹特别篇2沙之澜歌",
      title: "斗破苍穹特别篇2沙之澜歌",
      type: "TV Show",
      series: "斗破苍穹",
      author: "海波东",
      year: "2019",
      genre: "Fantasy | Foreign Continent",
      length: "3 EP",
      timestamp: "EP 03 00:19:38",
      quote: "我不认为我今天会藏身于此，并且我从来都没有如此神清气爽过，我仿佛看到了重生，因为从今以后，我海波东，将不受束缚！",
      backgroundImage: "/images/btth_s2.jpg",
      audioFile: "",
      collapsed: false
    },
    {
      id: 5,
      movieName: "斗破苍穹第四季",
      title: "斗破苍穹第四季",
      type: "TV Show",
      series: "斗破苍穹",
      author: "萧战 | 药尘",
      year: "2021",
      genre: "Fantasy | Adventure",
      length: "24 EP",
      timestamp: "EP 19 00:12:45",
      quote: "萧炎，你要知道年少轻狂的岁月，沉淀下来的是那些再也回不到的过去。而总让人感叹的，则是未曾珍惜而失去的那些。（但这些）恰恰也是我们想让你去体会的，因为年少轻狂的岁月，一生也只有一次。世间最珍贵的不是得不到和已失去的而是现在能把握的，我们生活在一个复杂而又充满无奈的世界，身上背负了太多太多的责任和使命，有时我们处理不当就会不堪重负难以忍受。最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的胸怀。当你紧握双手，里面什么也没有，当你打开双手，世界就在你手中。",
      backgroundImage: "/images/btth_s4.png",
      audioFile: "",
      collapsed: false
    },
    {
      id: 6,
      movieName: "The Intouchables",
      title: "The Intouchables",
      type: "Movie",
      series: "",
      author: "Philippe",
      year: "2011",
      genre: "Comedy | Drama",
      length: "112 min",
      timestamp: "0:33:34",
      // [Why are people interested in art?] It's the trace of our passage on this earth.
      quote: "[Dites-moi, à votre avis, pourquoi les gens s'intéressent à l'art?] Parce que c'est la seule trace de notre passage sur terre.",
      backgroundImage: "/images/intouchables.png",
      audioFile: "",
      collapsed: false
    },
    {
      id: 7,
      movieId: "movie-2",
      movieName: "A Working Man",
      title: "A Working Man",
      type: "Movie",
      series: "",
      author: "Merry Cade",
      year: "2025",
      genre: "Action | Suspense",
      length: "116 min",
      timestamp: "1:49:40",
      quote: "[So, what did I miss?] Well, I made friends with a crow and an owl. And there's a goat I taught to say my name.",
      backgroundImage: "/images/working-man.jpg",
      audioFile: "",
      collapsed: false
    },
    {
      id: 8,
      movieId: "movie-2",
      movieName: "A Working Man",
      title: "A Working Man",
      type: "Movie",
      series: "",
      author: "Gunny Lefferty",
      year: "2025",
      genre: "Action | Suspense",
      length: "116 min",
      timestamp: "1:50:10",
      quote: "Welcome back, Brother. You're home.",
      backgroundImage: "/images/working-man.jpg",
      audioFile: "",
      collapsed: false
    },
    {
      id: 9,
      movieId: "movie-3",
      movieName: "Enter the Fat Dragon",
      title: "Enter the Fat Dragon",
      type: "Movie",
      series: "",
      author: "Fallon Zhu",
      year: "2020",
      genre: "Action | Comedy | Humorous",
      length: "96 min",
      timestamp: "0:24:05",
      quote: "在最緊要咩呀？最緊要冇事吖嘛",
      backgroundImage: "/images/enterTheFatDragon.jpg",
      audioFile: "",
      collapsed: false
    },
    {
      id: 10,
      movieId: "movie-3",
      movieName: "Enter the Fat Dragon",
      title: "Enter the Fat Dragon",
      type: "Movie",
      series: "",
      author: "Fallon Zhu",
      year: "2020",
      genre: "Action | Comedy | Humorous",
      length: "96 min",
      timestamp: "1:04:10",
      quote: "[其實我哋兩個都咁愛大家。點解成日都嗌交嘅？]冇嗌交啊，我哋大家互相溝通咋嘛",
      backgroundImage: "/images/enterTheFatDragon.jpg",
      audioFile: "",
      collapsed: false
    }
  ]);
  const [spotlightQuote, setSpotlightQuote] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [filters, setFilters] = useState({
    title: '',
    type: '',
    series: '',
    author: '',
    year: '',
    genre: '',
    lengthRange: '',
    timestampFraction: ''
  });
  const [formData, setFormData] = useState({
    movieName: '',
    title: '',
    type: 'Movie',
    series: '',
    author: '',
    year: '',
    genre: '',
    length: '',
    timestamp: '',
    quote: '',
    backgroundImage: '',
    audioFile: ''
  });

  const fullText = "Capture and browse memorable moments all in one spot";

  useEffect(() => {
    const savedQuotes = localStorage.getItem('movieQuotes');
    if (savedQuotes) {
      try {
        const parsed = JSON.parse(savedQuotes);
        if (parsed && parsed.length > 0) {
          setQuotes(parsed);
          setSpotlightQuote(parsed[Math.floor(Math.random() * parsed.length)]);
        }
      } catch (e) {
        console.error('Error loading quotes:', e);
      }
    } else {
      setSpotlightQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShowCursor(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  const saveQuotes = (updatedQuotes) => {
    setQuotes(updatedQuotes);
    localStorage.setItem('movieQuotes', JSON.stringify(updatedQuotes));
  };

  const toggleCollapse = (id) => {
    const updated = quotes.map(q => 
      q.id === id ? { ...q, collapsed: !q.collapsed } : q
    );
    saveQuotes(updated);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({...formData, backgroundImage: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({...formData, audioFile: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const playAudio = (audioFile) => {
    if (audioFile) {
      try {
        const audio = new Audio(audioFile);
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  const handleSubmit = () => {
    if (!formData.movieName || !formData.type || !formData.author || !formData.year || !formData.genre || !formData.length || !formData.timestamp || !formData.quote) {
      alert('Please fill in all required fields');
      return;
    }
    
    const quoteData = {
      ...formData,
      title: formData.movieName,
      collapsed: false
    };
    
    if (editingId) {
      const updated = quotes.map(q => q.id === editingId ? { ...quoteData, id: editingId, movieId: q.movieId } : q);
      saveQuotes(updated);
      setEditingId(null);
    } else {
      // Find if movie already exists
      const existingMovie = quotes.find(q => 
        (q.movieName || q.title) === formData.movieName && 
        q.type === formData.type
      );
      
      const movieId = existingMovie ? existingMovie.movieId : `movie-${Date.now()}`;
      const newQuote = { ...quoteData, id: Date.now(), movieId };
      const updatedQuotes = [...quotes, newQuote];
      saveQuotes(updatedQuotes);
      if (!spotlightQuote) {
        setSpotlightQuote(newQuote);
      }
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      movieName: '',
      title: '',
      type: 'Movie',
      series: '',
      author: '',
      year: '',
      genre: '',
      length: '',
      timestamp: '',
      quote: '',
      backgroundImage: '',
      audioFile: ''
    });
    setIsAdding(false);
  };

  const handleEdit = (quote) => {
    setFormData(quote);
    setEditingId(quote.id);
    setIsAdding(true);
    setShowAddButton(true);
  };

  const handleDelete = (id) => {
    const updatedQuotes = quotes.filter(q => q.id !== id);
    saveQuotes(updatedQuotes);
    if (spotlightQuote && spotlightQuote.id === id) {
      setSpotlightQuote(updatedQuotes.length > 0 ? updatedQuotes[Math.floor(Math.random() * updatedQuotes.length)] : null);
    }
  };

  const getUniqueValues = (field) => {
    if (field === 'title') {
      return [...new Set(quotes.map(q => q.movieName || q.title))].filter(Boolean).sort();
    }
    return [...new Set(quotes.map(q => q[field]))].filter(Boolean).sort();
  };

  const getLengthInMinutes = (lengthStr) => {
    if (!lengthStr) return null;
    const match = lengthStr.match(/(\d+)\s*min/);
    return match ? parseInt(match[1]) : null;
  };

  const getTimestampFraction = (timestamp, length) => {
    if (!timestamp || !length) return null;
    
    const timeMatch = timestamp.match(/(\d+):(\d+):(\d+)/);
    if (timeMatch) {
      const totalMinutes = parseInt(timeMatch[1]) * 60 + parseInt(timeMatch[2]);
      const lengthMinutes = getLengthInMinutes(length);
      if (lengthMinutes) {
        const fraction = totalMinutes / lengthMinutes;
        if (fraction < 0.25) return 'beginning';
        if (fraction < 0.5) return 'quarter';
        if (fraction < 0.66) return 'half';
        if (fraction < 0.75) return 'two-thirds';
        return 'end';
      }
    }
    
    const chapterMatch = timestamp.match(/Chapter\s+(\d+)/i);
    if (chapterMatch) {
      const chapter = parseInt(chapterMatch[1]);
      if (chapter <= 5) return 'beginning';
      if (chapter <= 10) return 'quarter';
      if (chapter <= 15) return 'half';
      if (chapter <= 20) return 'two-thirds';
      return 'end';
    }
    
    const episodeMatch = timestamp.match(/S(\d+)E(\d+)/i);
    if (episodeMatch) {
      const episode = parseInt(episodeMatch[2]);
      if (episode <= 3) return 'beginning';
      if (episode <= 6) return 'quarter';
      if (episode <= 9) return 'half';
      if (episode <= 12) return 'two-thirds';
      return 'end';
    }
    
    return null;
  };

  const filteredQuotes = quotes.filter(q => {
    const movieNameOrTitle = q.movieName || q.title || '';
    const matchesSearch = movieNameOrTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (q.quote || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (q.author || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (q.series && q.series.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTitle = !filters.title || (q.movieName === filters.title || q.title === filters.title);
    const matchesType = !filters.type || q.type === filters.type;
    const matchesSeries = !filters.series || q.series === filters.series;
    const matchesAuthor = !filters.author || q.author === filters.author;
    const matchesYear = !filters.year || q.year === filters.year;
    const matchesGenre = !filters.genre || (q.genre && q.genre.toLowerCase().includes(filters.genre.toLowerCase()));
    
    let matchesLength = true;
    if (filters.lengthRange) {
      const minutes = getLengthInMinutes(q.length);
      if (minutes) {
        switch(filters.lengthRange) {
          case '0-60':
            matchesLength = minutes <= 60;
            break;
          case '60-120':
            matchesLength = minutes > 60 && minutes <= 120;
            break;
          case '120-180':
            matchesLength = minutes > 120 && minutes <= 180;
            break;
          case '180+':
            matchesLength = minutes > 180;
            break;
          default:
            matchesLength = true;
        }
      }
    }
    
    let matchesTimestamp = true;
    if (filters.timestampFraction) {
      const fraction = getTimestampFraction(q.timestamp, q.length);
      matchesTimestamp = fraction === filters.timestampFraction;
    }
    
    return matchesSearch && matchesTitle && matchesType && matchesSeries && matchesAuthor && matchesYear && matchesGenre && matchesLength && matchesTimestamp;
  });

  const resetFilters = () => {
    setFilters({ title: '', type: '', series: '', author: '', year: '', genre: '', lengthRange: '', timestampFraction: '' });
  };

  const hasActiveFilters = filters.title || filters.type || filters.series || filters.author || filters.year || filters.genre || filters.lengthRange || filters.timestampFraction;

  const refreshSpotlight = () => {
    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      const randomQuote = filteredQuotes[randomIndex];
      
      const quoteElement = document.getElementById(`quote-${randomQuote.id}`);
      if (quoteElement) {
        quoteElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        quoteElement.classList.add('highlight-flash');
        setTimeout(() => {
          quoteElement.classList.remove('highlight-flash');
        }, 2000);
      }
    }
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-8 animated-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-slow">
          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-wider fancy-title mb-4 gradient-gold-text-static">
            MemQuotes
          </h1>
          <p className="text-gray-400 text-lg font-light min-h-[28px]">
            {typedText}<span className={showCursor ? 'animate-pulse' : 'fade-out'}>|</span>
          </p>
        </div>

        {spotlightQuote && (
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <h2 className="text-xl font-semibold gradient-gold-text-static">Spotlight Pick</h2>
              </div>
              <button
                onClick={refreshSpotlight}
                className="text-sm px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-all"
              >
                Random
              </button>
            </div>
            <div className="spotlight-card relative overflow-hidden bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 group">
              {spotlightQuote.backgroundImage && (
                <div className="absolute inset-0">
                  <img 
                    src={spotlightQuote.backgroundImage} 
                    alt="" 
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
                </div>
              )}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-gold-text-hover mb-2">
                      {spotlightQuote.movieName || spotlightQuote.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-800/80 rounded text-xs">{spotlightQuote.type}</span>
                      {spotlightQuote.series && (
                        <span className="px-2 py-1 bg-gray-800/80 rounded text-xs">Series: {spotlightQuote.series}</span>
                      )}
                      {spotlightQuote.genre && spotlightQuote.genre.split('|').map((g, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800/80 rounded text-xs">
                          {g.trim()}
                        </span>
                      ))}
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {spotlightQuote.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {spotlightQuote.year}
                      </span>
                    </div>
                  </div>
                  {spotlightQuote.audioFile && (
                    <button
                      onClick={() => playAudio(spotlightQuote.audioFile)}
                      className="p-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-all"
                      title="Play Audio"
                    >
                      <Volume2 className="w-5 h-5 text-yellow-500" />
                    </button>
                  )}
                </div>
                <blockquote className="text-xl text-white italic border-l-4 border-gold pl-4 mt-4">
                  "{spotlightQuote.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 mb-8 animate-slide-in">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search quotes, titles, authors, or series..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold transition-all text-white placeholder-gray-500"
              />
            </div>
            {quotes.length > 0 && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg font-semibold hover:bg-gray-800/80 hover-border-gold hover-shadow-gold transition-all duration-300 flex items-center justify-center"
                title="Filters"
              >
                <Filter className="w-5 h-5" />
              </button>
            )}
            {showAddButton && (
              <button
                onClick={() => setIsAdding(!isAdding)}
                className="px-6 py-3 bg-gradient-gold-btn rounded-lg font-semibold hover-shadow-gold-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-black"
              >
                <Plus className="w-5 h-5" />
                {isAdding ? 'Cancel' : 'Add Quote'}
              </button>
            )}
          </div>

          {showFilters && quotes.length > 0 && (
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 animate-slide-down">
              <div className="grid md:grid-cols-3 gap-4">
                <select
                  value={filters.title}
                  onChange={(e) => setFilters({...filters, title: e.target.value})}
                  className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="">All Titles</option>
                  {getUniqueValues('title').map(title => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                </select>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                  className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="">All Types</option>
                  {getUniqueValues('type').map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <select
                  value={filters.series}
                  onChange={(e) => setFilters({...filters, series: e.target.value})}
                  className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="">All Series</option>
                  {getUniqueValues('series').map(series => (
                    <option key={series} value={series}>{series}</option>
                  ))}
                </select>
                <select
                  value={filters.author}
                  onChange={(e) => setFilters({...filters, author: e.target.value})}
                  className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="">All Authors</option>
                  {getUniqueValues('author').map(author => (
                    <option key={author} value={author}>{author}</option>
                  ))}
                </select>
                <select
                  value={filters.year}
                  onChange={(e) => setFilters({...filters, year: e.target.value})}
                  className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="">All Years</option>
                  {getUniqueValues('year').map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <select
                  value={filters.genre}
                  onChange={(e) => setFilters({...filters, genre: e.target.value})}
                  className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="">All Genres</option>
                  {getUniqueValues('genre').map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
                <select
                  value={filters.lengthRange}
                  onChange={(e) => setFilters({...filters, lengthRange: e.target.value})}
                  className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="">All Lengths</option>
                  <option value="0-60">0-60 min (Short)</option>
                  <option value="60-120">60-120 min (Standard)</option>
                  <option value="120-180">120-180 min (Long)</option>
                  <option value="180+">180+ min (Epic)</option>
                </select>
                <select
                  value={filters.timestampFraction}
                  onChange={(e) => setFilters({...filters, timestampFraction: e.target.value})}
                  className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="">All Timestamps</option>
                  <option value="beginning">Beginning (0-25%)</option>
                  <option value="quarter">Quarter Way (25-50%)</option>
                  <option value="half">Half Way (50-66%)</option>
                  <option value="two-thirds">Two-Thirds (66-75%)</option>
                  <option value="end">End (75-100%)</option>
                </select>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 rounded-lg transition-all text-white w-full md:w-auto"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          )}
        </div>

        {isAdding && (
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8 animate-slide-down">
            <h2 className="text-2xl font-bold mb-6 gradient-gold-text-hover">
              {editingId ? 'Edit Quote' : 'Add New Quote'}
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Movie/Book/Show Name"
                  value={formData.movieName}
                  onChange={(e) => setFormData({...formData, movieName: e.target.value, title: e.target.value})}
                  className="px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white placeholder-gray-500"
                />
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white"
                >
                  <option value="Movie">Movie</option>
                  <option value="Book">Book</option>
                  <option value="TV Show">TV Show</option>
                </select>
                <input
                  type="text"
                  placeholder="Series (optional, e.g., Harry Potter, MCU)"
                  value={formData.series}
                  onChange={(e) => setFormData({...formData, series: e.target.value})}
                  className="px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Author/Character"
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  className="px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Year (e.g., 1994)"
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: e.target.value})}
                  className="px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Genre (e.g., Drama | Fantasy | Action)"
                  value={formData.genre}
                  onChange={(e) => setFormData({...formData, genre: e.target.value})}
                  className="px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Length (e.g., 142 min, 309 pages, Season 5)"
                  value={formData.length}
                  onChange={(e) => setFormData({...formData, length: e.target.value})}
                  className="px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Timestamp (e.g., 1:23:45, Chapter 17, S5E14)"
                  value={formData.timestamp}
                  onChange={(e) => setFormData({...formData, timestamp: e.target.value})}
                  className="px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white placeholder-gray-500"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover-border-gold transition-all bg-black/40 backdrop-blur-sm">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {formData.backgroundImage ? (
                      <div className="relative">
                        <img src={formData.backgroundImage} alt="Preview" className="max-h-32 mx-auto rounded-lg" />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setFormData({...formData, backgroundImage: ''});
                          }}
                          className="absolute top-2 right-2 p-1 bg-black rounded-full hover:bg-gray-800"
                        >
                          <X className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="w-10 h-10 text-gray-500" />
                        <p className="text-gray-400 text-sm">Upload background image</p>
                        <p className="text-xs text-gray-600">Optional</p>
                      </div>
                    )}
                  </label>
                </div>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover-border-gold transition-all bg-black/40 backdrop-blur-sm">
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleAudioUpload}
                    className="hidden"
                    id="audio-upload"
                  />
                  <label htmlFor="audio-upload" className="cursor-pointer">
                    {formData.audioFile ? (
                      <div className="relative">
                        <Volume2 className="w-16 h-16 mx-auto text-yellow-500" />
                        <p className="text-sm text-gray-400 mt-2">Audio uploaded</p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setFormData({...formData, audioFile: ''});
                          }}
                          className="absolute top-2 right-2 p-1 bg-black rounded-full hover:bg-gray-800"
                        >
                          <X className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Volume2 className="w-10 h-10 text-gray-500" />
                        <p className="text-gray-400 text-sm">Upload audio clip</p>
                        <p className="text-xs text-gray-600">Optional</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <textarea
                placeholder="Enter the quote..."
                value={formData.quote}
                onChange={(e) => setFormData({...formData, quote: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus-ring-gold text-white placeholder-gray-500"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 bg-gradient-gold-btn rounded-lg font-semibold hover-shadow-gold-lg hover:scale-105 transition-all duration-300 text-black"
                >
                  {editingId ? 'Update Quote' : 'Save Quote'}
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-lg font-semibold hover:bg-gray-700/80 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6 pb-32">
          {filteredQuotes.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-lg text-gray-500">
                {searchTerm || hasActiveFilters ? 'No quotes found matching your criteria' : 'No quotes yet. Start adding your favorites!'}
              </p>
            </div>
          ) : (
            // Group quotes by movieId
            Object.entries(
              filteredQuotes.reduce((acc, quote) => {
                const key = quote.movieId || `single-${quote.id}`;
                if (!acc[key]) acc[key] = [];
                acc[key].push(quote);
                return acc;
              }, {})
            ).map(([movieId, movieQuotes], groupIndex) => {
              const firstQuote = movieQuotes[0];
              return (
                <div key={movieId} className="space-y-4" style={{ animationDelay: `${groupIndex * 0.15}s` }}>
                  {/* Movie header card */}
                  <div className="quote-card relative overflow-hidden bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-500 animate-fade-in group">
                    {firstQuote.backgroundImage && (
                      <div className="absolute inset-0">
                        <img 
                          src={firstQuote.backgroundImage} 
                          alt="" 
                          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
                      </div>
                    )}
                    <div className="relative z-10 p-6">
                      <h3 className="text-2xl font-bold gradient-gold-text-hover mb-2">
                        {firstQuote.movieName || firstQuote.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded text-xs">{firstQuote.type}</span>
                        {firstQuote.series && (
                          <span className="px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded text-xs">Series: {firstQuote.series}</span>
                        )}
                        {firstQuote.genre && firstQuote.genre.split('|').map((g, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded text-xs">
                            {g.trim()}
                          </span>
                        ))}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {firstQuote.year}
                        </span>
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded text-xs font-semibold">
                          {movieQuotes.length} {movieQuotes.length === 1 ? 'Quote' : 'Quotes'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Individual quotes */}
                  {movieQuotes.map((quote, index) => (
                    <div
                      key={quote.id}
                      id={`quote-${quote.id}`}
                      className="quote-card relative overflow-hidden bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-500 animate-fade-in group ml-6"
                    >
                      <div className="relative z-10 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            {!quote.collapsed && (
                              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                                <span className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {quote.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {quote.timestamp}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2">
                            {quote.audioFile && !quote.collapsed && (
                              <button
                                onClick={() => playAudio(quote.audioFile)}
                                className="p-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 hover:scale-110 rounded-lg transition-all duration-300"
                                title="Play Audio"
                              >
                                <Volume2 className="w-4 h-4 text-yellow-500" />
                              </button>
                            )}
                            <button
                              onClick={() => toggleCollapse(quote.id)}
                              className="p-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 hover:scale-110 rounded-lg transition-all duration-300"
                              title={quote.collapsed ? "Expand" : "Collapse"}
                            >
                              {quote.collapsed ? <ChevronDown className="w-4 h-4 text-white" /> : <ChevronUp className="w-4 h-4 text-white" />}
                            </button>
                            <button
                              onClick={() => handleEdit(quote)}
                              className="p-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 hover:scale-110 rounded-lg transition-all duration-300"
                            >
                              <Edit2 className="w-4 h-4 text-white" />
                            </button>
                            <button
                              onClick={() => handleDelete(quote.id)}
                              className="p-2 bg-gray-800/80 backdrop-blur-sm hover:bg-red-600 hover:scale-110 rounded-lg transition-all duration-300"
                            >
                              <Trash2 className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        </div>
                        {!quote.collapsed && (
                          <blockquote className="quote-text text-lg text-white italic border-l-4 border-gold pl-4">
                            "{quote.quote}"
                          </blockquote>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })
          )}
        </div>

        <div className="text-center pb-8">
          <p className="text-xs text-gray-400">
            All quotes and content are property of their respective copyright holders. This site is for personal cataloging purposes only.
          </p>
        </div>
      </div>

      <button
        onClick={() => setShowOptions(!showOptions)}
        className="fixed bottom-8 right-8 px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-gray-800/80 hover-border-gold hover-shadow-gold hover:scale-110 transition-all shadow-lg z-50 flex items-center gap-2"
      >
        <Settings className="w-5 h-5" />
      </button>

      {showOptions && (
        <div className="fixed bottom-24 right-8 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-xl z-50 animate-slide-up min-w-[250px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-6">
              <span className="text-white">Add Quote</span>
              <button
                onClick={() => setShowAddButton(!showAddButton)}
                className={`relative w-14 h-7 rounded-full transition-all flex-shrink-0 ${showAddButton ? 'bg-gradient-gold-btn' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${showAddButton ? 'translate-x-7' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}