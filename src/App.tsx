import React, { useState, useMemo } from 'react';
import { Search, Filter, Globe2, Calendar, Tag, MapPin, ExternalLink, Info } from 'lucide-react';

interface Festival {
  name: string;
  country: string;
  website: string;
  month: string;
  genre?: string;
  description?: string;
  submissionInfo?: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const festivals: Festival[] = [
    {
      name: "Cannes Film Festival",
      country: "France",
      website: "https://www.festival-cannes.com/",
      month: "May",
      genre: "International",
      description: "One of the world's most prestigious film festivals, featuring premieres of new films from around the world.",
      submissionInfo: "Check Website for current submission details and deadlines."
    },
    {
      name: "Berlin International Film Festival",
      country: "Germany",
      website: "https://www.berlinale.de/",
      month: "February",
      genre: "International",
      description: "Also known as Berlinale, one of the world's leading film festivals and a showcase for European cinema.",
      submissionInfo: "Check Website for current submission details and deadlines."
    },
    {
      name: "Venice Film Festival",
      country: "Italy",
      website: "https://www.labiennale.org/en/cinema/",
      month: "August",
      genre: "International",
      description: "The oldest film festival in the world and one of the most prestigious.",
      submissionInfo: "Check Website for current submission details and deadlines."
    },
    {
      name: "Toronto International Film Festival",
      country: "Canada",
      website: "https://tiff.net/",
      month: "September",
      genre: "International",
      description: "One of North America's most influential film festivals, known for premiering Oscar contenders.",
      submissionInfo: "Check Website for current submission details and deadlines."
    },
    {
      name: "Sundance Film Festival",
      country: "USA",
      website: "https://www.sundance.org/festivals/sundance-film-festival/",
      month: "January",
      genre: "Independent",
      description: "The largest independent film festival in the United States.",
      submissionInfo: "Check Website for current submission details and deadlines."
    },
     // New festivals from the list
  {
    name: "Tirana International Film Festival (TIFF)",
    country: "Albania",
    website: "https://tiranafilmfest.com/",
    month: "November",
    genre: "International",
    description: "The most important cinematic event in Albania, showcasing international and regional cinema.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Buenos Aires Festival Internacional de Cine Independiente (BAFICI)",
    country: "Argentina",
    website: "https://vivamoscultura.buenosaires.gob.ar/bafici",
    month: "April",
    genre: "Independent",
    description: "One of the most important film festivals in Latin America, focusing on independent cinema.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Golden Apricot Yerevan International Film Festival",
    country: "Armenia",
    website: "https://www.gaiff.am/",
    month: "July",
    genre: "International",
    description: "Annual film festival held in Yerevan that screens films from around the world.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Sydney Film Festival",
    country: "Australia",
    website: "https://www.sff.org.au/",
    month: "June",
    genre: "International",
    description: "One of the world's longest-running film festivals, showcasing new films from Australia and around the world.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Vienna International Film Festival (Viennale)",
    country: "Austria",
    website: "https://www.viennale.at/",
    month: "October",
    genre: "International",
    description: "Austria's most important international film festival held annually in Vienna.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Dhaka International Film Festival (DIFF)",
    country: "Bangladesh",
    website: "https://www.dhakafilmfestival.org/",
    month: "January",
    genre: "International",
    description: "Annual film festival showcasing world cinema with a focus on Asian films.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Sarajevo Film Festival",
    country: "Bosnia & Herzegovina",
    website: "https://www.sff.ba/",
    month: "August",
    genre: "International",
    description: "The premier film festival in Southeast Europe, showcasing regional and international films.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "São Paulo International Film Festival (Mostra)",
    country: "Brazil",
    website: "https://mostra.org/",
    month: "October",
    genre: "International",
    description: "One of the most important film festivals in Latin America, showcasing international cinema.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "FESPACO (Panafrican Film and Television Festival of Ouagadougou)",
    country: "Burkina Faso",
    website: "https://fespaco.org/",
    month: "February",
    genre: "African Cinema",
    description: "The largest African film festival, held biennially in Ouagadougou, Burkina Faso.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Hot Docs Canadian International Documentary Festival",
    country: "Canada",
    website: "https://hotdocs.ca/",
    month: "April",
    genre: "Documentary",
    description: "North America's largest documentary festival, conference and market.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Shanghai International Film Festival (SIFF)",
    country: "China",
    website: "https://www.siff.com/",
    month: "June",
    genre: "International",
    description: "One of the most prestigious film festivals in Asia, accredited by FIAPF.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Cartagena International Film Festival (FICCI)",
    country: "Colombia",
    website: "https://ficcifestival.com/",
    month: "March",
    genre: "International",
    description: "The oldest film festival in Latin America, showcasing Ibero-American cinema.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Pula Film Festival",
    country: "Croatia",
    website: "https://pulafilmfestival.hr/",
    month: "July",
    genre: "International",
    description: "The oldest Croatian film festival held in the ancient Roman amphitheater in Pula.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Karlovy Vary International Film Festival (KVIFF)",
    country: "Czech Republic",
    website: "https://www.kviff.com/",
    month: "July",
    genre: "International",
    description: "The most prestigious film festival in Central and Eastern Europe.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "CPH:DOX Copenhagen International Documentary Film Festival",
    country: "Denmark",
    website: "https://cphdox.dk/",
    month: "March",
    genre: "Documentary",
    description: "One of the largest documentary film festivals in the world.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Cairo International Film Festival (CIFF)",
    country: "Egypt",
    website: "https://www.ciff.org.eg/",
    month: "November",
    genre: "International",
    description: "The oldest and only internationally accredited film festival in Africa and the Middle East.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Tallinn Black Nights Film Festival (PÖFF)",
    country: "Estonia",
    website: "https://poff.ee/",
    month: "November",
    genre: "International",
    description: "One of the largest film festivals in Northern Europe and the only FIAPF-accredited competitive feature film festival in Northern Europe.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Helsinki International Film Festival (Love & Anarchy)",
    country: "Finland",
    website: "https://hiff.fi/",
    month: "September",
    genre: "International",
    description: "Finland's largest film festival showcasing international films with a special focus on Asian cinema.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  {
    name: "Annecy International Animation Film Festival",
    country: "France",
    website: "https://www.annecyfestival.com/",
    month: "June",
    genre: "Animation",
    description: "The world's leading animation film festival held annually in Annecy, France.",
    submissionInfo: "Check Website for current submission details and deadlines."
  },
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const genres = useMemo(() => {
    const uniqueGenres = new Set(festivals.map(festival => festival.genre).filter(Boolean));
    return Array.from(uniqueGenres).sort();
  }, [festivals]);

  const countries = useMemo(() => {
    const uniqueCountries = new Set(festivals.map(festival => festival.country));
    return Array.from(uniqueCountries).sort();
  }, [festivals]);

  const filteredFestivals = useMemo(() => {
    return festivals.filter(festival => {
      const matchesSearch = festival.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = !selectedCountry || festival.country === selectedCountry;
      const matchesMonth = !selectedMonth || festival.month === selectedMonth;
      const matchesGenre = !selectedGenre || festival.genre === selectedGenre;
      return matchesSearch && matchesCountry && matchesMonth && matchesGenre;
    });
  }, [festivals, searchTerm, selectedCountry, selectedMonth, selectedGenre]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Globe2 className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Film Festival Directory</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search and Filters Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search festivals..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">All Countries</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">All Months</option>
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredFestivals.length} {filteredFestivals.length === 1 ? 'festival' : 'festivals'}
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFestivals.map((festival, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{festival.name}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {festival.month}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {festival.country}
                </div>
                {festival.genre && (
                  <div className="flex items-center text-gray-600">
                    <Tag className="h-4 w-4 mr-2" />
                    {festival.genre}
                  </div>
                )}
              </div>

              {festival.description && (
                <p className="text-gray-600 text-sm mb-4">
                  {festival.description}
                </p>
              )}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <a
                  href={festival.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
                
                <button
                  className="inline-flex items-center text-gray-500 hover:text-gray-700"
                  title="Submission Information"
                >
                  <Info className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;