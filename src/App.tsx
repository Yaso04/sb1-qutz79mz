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
  // --- Festivals from the Table ---
    // Afghanistan
    { name: "Herat International Women's Film Festival", country: "Afghanistan", submissionInfo: "Check Website", website: "(Check cultural organizations/news for status)" },
    // Albania
    { name: "Tirana International Film Festival (TIFF)", country: "Albania", submissionInfo: "Check Website", website: "https://tiranafilmfest.com/" },
    // Algeria
    { name: "Aẓa Film Festival", country: "Algeria", submissionInfo: "Check Website", website: "(Check local listings/social media)" },
    // Argentina
    { name: "Buenos Aires Festival Internacional de Cine Independiente (BAFICI)", country: "Argentina", submissionInfo: "Check Website", website: "https://vivamoscultura.buenosaires.gob.ar/bafici" },
    { name: "Festival Internacional de Cine de Mar del Plata", country: "Argentina", submissionInfo: "Check Website", website: "https://www.mardelplatafilmfest.com/" },
    { name: "Festival Internacional de Cine Documental de Buenos Aires (FIDBA)", country: "Argentina", submissionInfo: "Check Website", website: "https://fidba.com.ar/" },
    { name: "Mar del Plata International Film Festival", country: "Argentina", submissionInfo: "Check Website", website: "https://www.mardelplatafilmfest.com/" }, // Duplicate website, likely same fest as above
    { name: "Ventana Sur", country: "Argentina", submissionInfo: "Check Website", website: "https://ventana-sur.com/ (Market)" },
    // Armenia
    { name: "Golden Apricot Yerevan International Film Festival", country: "Armenia", submissionInfo: "Check Website", website: "https://www.gaiff.am/" },
    { name: "ReAnimania International Animation Film & Comics Art Festival", country: "Armenia", submissionInfo: "Check Website", website: "https://reanimania.com/" },
    { name: "Yerevan International Film Festival (Golden Apricot)", country: "Armenia", submissionInfo: "Check Website", website: "https://www.gaiff.am/" }, // Duplicate website
    // Australia
    { name: "Adelaide Film Festival", country: "Australia", submissionInfo: "Check Website", website: "https://adelaidefilmfestival.org/" },
    { name: "Arab Film Festival Australia", country: "Australia", submissionInfo: "Check Website", website: "https://arabfilmfestival.com.au/" },
    { name: "Australian International Documentary Conference (AIDC)", country: "Australia", submissionInfo: "Check Website", website: "https://aidc.com.au/ (Industry event, has marketplace)" },
    { name: "Bayside Film Festival", country: "Australia", submissionInfo: "Check Website", website: "(Check local council/FilmFreeway)" },
    { name: "Brisbane International Film Festival (BIFF)", country: "Australia", submissionInfo: "Check Website", website: "https://biff.com.au/" },
    { name: "Environmental Film Festival Australia (EFFA)", country: "Australia", submissionInfo: "Check Website", website: "https://www.effa.org.au/" },
    { name: "Flickerfest International Short Film Festival", country: "Australia", submissionInfo: "Check Website", website: "https://flickerfest.com.au/" },
    { name: "Melbourne International Animation Festival (MIAF)", country: "Australia", submissionInfo: "Check Website", website: "https://miaf.net/" },
    { name: "Melbourne International Film Festival (MIFF)", country: "Australia", submissionInfo: "Check Website", website: "https://miff.com.au/" },
    { name: "Melbourne Queer Film Festival", country: "Australia", submissionInfo: "Check Website", website: "https://mqff.com.au/" },
    { name: "Queer Screen - Mardi Gras Film Festival", country: "Australia", submissionInfo: "Check Website", website: "https://queerscreen.org.au/" },
    { name: "St Kilda Film Festival", country: "Australia", submissionInfo: "Check Website", website: "https://www.stkildafilmfestival.com.au/" },
    { name: "Sydney Film Festival", country: "Australia", submissionInfo: "Check Website", website: "https://www.sff.org.au/" },
    // Austria
    { name: "Filmfestival Kitzbühel", country: "Austria", submissionInfo: "Check Website", website: "https://ffkb.at/" },
    { name: "Innsbruck Nature Film Festival", country: "Austria", submissionInfo: "Check Website", website: "https://inff.eu/" },
    { name: "Linz International Short Film Festival", country: "Austria", submissionInfo: "Check Website", website: "https://www.linzisfilmfestival.com/" },
    { name: "This Human World - International Human Rights Film Festival", country: "Austria", submissionInfo: "Check Website", website: "https://thishumanworld.com/" },
    { name: "Tricky Women/Tricky Realities", country: "Austria", submissionInfo: "Check Website", website: "https://www.trickywomen.at/" },
    { name: "Vienna Independent Shorts (VIS)", country: "Austria", submissionInfo: "Check Website", website: "https://www.viennashorts.com/" },
    { name: "Vienna International Film Festival (Viennale)", country: "Austria", submissionInfo: "Check Website", website: "https://www.viennale.at/" },
    // Azerbaijan
    { name: "Animafilm Baku International Animation Festival", country: "Azerbaijan", submissionInfo: "Check Website", website: "https://animafilm.az/" },
    // Bahamas
    { name: "Bahamas International Film Festival (BIFF)", country: "Bahamas", submissionInfo: "Check Website", website: "https://www.bintlfilmfest.com/" },
    // Bahrain
    { name: "Bahrain Film Festival", country: "Bahrain", submissionInfo: "Check Website", website: "(Check Bahrain Cinema Club/cultural bodies)" },
    // Bangladesh
    { name: "Dhaka International Film Festival (DIFF)", country: "Bangladesh", submissionInfo: "Check Website", website: "https://www.dhakafilmfestival.org/" },
    // Belarus
    { name: "Minsk International Film Festival Listapad", country: "Belarus", submissionInfo: "Check Website", website: "https://listapad.com/" },
    // Belgium
    { name: "Afrika Filmfestival Leuven", country: "Belgium", submissionInfo: "Check Website", website: "https://www.afrikafilmfestival.be/" },
    { name: "Anima - Brussels Animation Film Festival", country: "Belgium", submissionInfo: "Check Website", website: "https://animafestival.be/" },
    { name: "Brussels Independent Film Festival", country: "Belgium", submissionInfo: "Check Website", website: "https://brusselsfilmfestival.be/" },
    { name: "Brussels Short Film Festival (BSFF)", country: "Belgium", submissionInfo: "Check Website", website: "https://bsff.be/" },
    { name: "International Short Film Festival Leuven", country: "Belgium", submissionInfo: "Check Website", website: "https://www.kortfilmfestival.be/" },
    { name: "Kortfilmfestival Leuven", country: "Belgium", submissionInfo: "Check Website", website: "https://www.kortfilmfestival.be/" }, // Duplicate website
    { name: "Liège International Health Film Festival (FIFES)", country: "Belgium", submissionInfo: "Check Website", website: "https://fifs.be/" },
    { name: "Namur International Festival of French-Speaking Film (FIFF)", country: "Belgium", submissionInfo: "Check Website", website: "https://www.fiff.be/" },
    // Bhutan
    { name: "Druk International Film Festival (DIFF)", country: "Bhutan", submissionInfo: "Check Website", website: "(Check FilmFreeway/social media)" },
    // Bosnia & Herzegovina
    { name: "Banja Luka International Animated Film Festival", country: "Bosnia & Herzegovina", submissionInfo: "Check Website", website: "https://www.animacijabl.org/" },
    { name: "NAFF - Neum Animated Film Festival", country: "Bosnia & Herzegovina", submissionInfo: "Check Website", website: "https://naff.ba/" },
    { name: "Sarajevo Film Festival", country: "Bosnia & Herzegovina", submissionInfo: "Check Website", website: "https://www.sff.ba/" },
    // Brazil
    { name: "A TUA CURTA - Festival Audiovisual", country: "Brazil", submissionInfo: "Check Website", website: "http://www.atuacurta.com.br" },
    { name: "Animage - International Animation Festival of Pernambuco", country: "Brazil", submissionInfo: "Check Website", website: "http://www.animagefestival.com/" },
    { name: "CineBH - Belo Horizonte International Film Festival", country: "Brazil", submissionInfo: "Check Website", website: "https://cinebh.com.br/" },
    { name: "FICA - Festival Internacional de Cinema e Vídeo Ambiental", country: "Brazil", submissionInfo: "Check Website", website: "https://fica.go.gov.br/" },
    { name: "FICKIN - Festival Internacional de Curtas-Metragens de Kinoforum", country: "Brazil", submissionInfo: "Check Website", website: "http://kinoforum.org.br/curtas" },
    { name: "GRAMADO Film Festival", country: "Brazil", submissionInfo: "Check Website", website: "https://www.festivaldegramado.net/" },
    { name: "It's All True - International Documentary Film Festival", country: "Brazil", submissionInfo: "Check Website", website: "https://www.itsalltrue.com.br/" },
    { name: "Kinoforum - São Paulo International Short Film Festival", country: "Brazil", submissionInfo: "Check Website", website: "http://kinoforum.org.br/curtas" }, // Duplicate website
    { name: "Mostra - São Paulo International Film Festival", country: "Brazil", submissionInfo: "Check Website", website: "https://mostra.org/" },
    { name: "Olhar de Cinema - Curitiba Int'l Film Festival", country: "Brazil", submissionInfo: "Check Website", website: "https://www.olhardecinema.com.br/" },
    { name: "Panorama Internacional Coisa de Cinema", country: "Brazil", submissionInfo: "Check Website", website: "https://www.coisadecinema.com.br/" },
    { name: "Rio de Janeiro International Film Festival (Festival do Rio)", country: "Brazil", submissionInfo: "Check Website", website: "https://www.festivaldorio.com.br/" },
    { name: "São Paulo International Film Festival (Mostra)", country: "Brazil", submissionInfo: "Check Website", website: "https://mostra.org/" }, // Duplicate website
    // Bulgaria
    { name: "Antistatic International Festival for Contemporary Dance & Performance", country: "Bulgaria", submissionInfo: "Check Website", website: "https://antistaticfestival.org/ (May include film)" },
    { name: "Golden Kuker Sofia International Animation Film Festival", country: "Bulgaria", submissionInfo: "Check Website", website: "https://animationfest-bg.eu/" },
    { name: "In The Palace International Short Film Festival", country: "Bulgaria", submissionInfo: "Check Website", website: "https://www.inthepalace.com/" },
    { name: "Sofia International Film Festival (SofiaIFF)", country: "Bulgaria", submissionInfo: "Check Website", website: "https://siff.bg/" },
    { name: "Sofia Meetings", country: "Bulgaria", submissionInfo: "Check Website", website: "https://sofiameetings.siff.bg/ (Co-production market)" },
    // Burkina Faso
    { name: "FESPACO (Panafrican Film and Television Festival of Ouagadougou)", country: "Burkina Faso", submissionInfo: "Check Website", website: "https://fespaco.org/" },
    // Canada (Excluding Toronto International Film Festival - already added)
    { name: "Atlantic International Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://www.atlanticfilmfestival.ca/" },
    { name: "Calgary International Film Festival (CIFF)", country: "Canada", submissionInfo: "Check Website", website: "https://www.ciffcalgary.ca/" },
    { name: "DOXA Documentary Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://www.doxafestival.ca/" },
    { name: "Edmonton International Film Festival (EIFF)", country: "Canada", submissionInfo: "Check Website", website: "https://www.edmontonfilmfest.com/" },
    { name: "Fantasia International Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://fantasiafestival.com/" },
    { name: "Festival du Nouveau Cinéma (FNC) Montréal", country: "Canada", submissionInfo: "Check Website", website: "https://nouveaucinema.ca/" },
    { name: "Film POP (Part of POP Montreal)", country: "Canada", submissionInfo: "Check Website", website: "https://popmontreal.com/" },
    { name: "FIN Atlantic International Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://www.atlanticfilmfestival.ca/" }, // Duplicate website
    { name: "Hot Docs Canadian International Documentary Festival", country: "Canada", submissionInfo: "Check Website", website: "https://hotdocs.ca/" },
    { name: "Images Festival", country: "Canada", submissionInfo: "Check Website", website: "https://www.imagesfestival.com/" },
    { name: "Italian Contemporary Film Festival (ICFF)", country: "Canada", submissionInfo: "Check Website", website: "https://icff.ca/" },
    { name: "Montreal Festival du Nouveau Cinéma (FNC)", country: "Canada", submissionInfo: "Check Website", website: "https://nouveaucinema.ca/" }, // Duplicate website
    { name: "Montreal International Documentary Festival (RIDM)", country: "Canada", submissionInfo: "Check Website", website: "https://ridm.ca/" },
    { name: "Okotoks Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://www.okotoksfilmfestival.ca/" },
    { name: "Ottawa International Animation Festival (OIAF)", country: "Canada", submissionInfo: "Check Website", website: "https://www.animationfestival.ca/" },
    { name: "REGARD - Saguenay International Short Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://festivalregard.com/" },
    { name: "Reel Asian International Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://www.reelasian.com/" },
    { name: "Saguenay International Short Film Festival (REGARD)", country: "Canada", submissionInfo: "Check Website", website: "https://festivalregard.com/" }, // Duplicate website
    { name: "Silver Wave Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://swfilmfest.com/" },
    { name: "TIFF Kids International Film Festival", country: "Canada", submissionInfo: "Check Website", website: "(Integrated into TIFF main site)" },
    { name: "Toronto After Dark Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://torontoafterdark.com/" },
    { name: "Toronto Jewish Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://tjff.com/" },
    { name: "Toronto Reel Asian International Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://www.reelasian.com/" }, // Duplicate website
    { name: "Vancouver Asian Film Festival (VAFF)", country: "Canada", submissionInfo: "Check Website", website: "https://vaff.org/" },
    { name: "Vancouver International Film Festival (VIFF)", country: "Canada", submissionInfo: "Check Website", website: "https://viff.org/" },
    { name: "Vancouver International Women in Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://www.wiwff.ca/" },
    { name: "Vancouver Latin American Film Festival (VLAFF)", country: "Canada", submissionInfo: "Check Website", website: "https://vlaff.org/" },
    { name: "Vues d’Afrique International Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://vuesdafrique.org/" },
    { name: "Whistler Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://whistlerfilmfestival.com/" },
    { name: "Windsor International Film Festival (WIFF)", country: "Canada", submissionInfo: "Check Website", website: "https://windsorfilmfestival.com/" },
    { name: "Yorkton Film Festival", country: "Canada", submissionInfo: "Check Website", website: "https://yorktonfilm.com/" },
    // Chile
    { name: "Chiledoc", country: "Chile", submissionInfo: "Check Website", website: "https://chiledoc.cl/ (Industry/Docs)" },
    { name: "Festival Internacional de Cine de Valdivia (FICValdivia)", country: "Chile", submissionInfo: "Check Website", website: "https://ficvaldivia.cl/" },
    { name: "Santiago International Film Festival (SANFIC)", country: "Chile", submissionInfo: "Check Website", website: "https://sanfic.com/" },
    { name: "Valdivia International Film Festival (FICValdivia)", country: "Chile", submissionInfo: "Check Website", website: "https://ficvaldivia.cl/" }, // Duplicate website
    // China
    { name: "Guangzhou International Documentary Film Festival (GZDOC)", country: "China", submissionInfo: "Check Website", website: "http://www.gzdoc.cn/" },
    { name: "Hainan Island International Film Festival", country: "China", submissionInfo: "Check Website", website: "https://www.hiiff.com.cn/" },
    { name: "Pingyao Crouching Tiger Hidden Dragon International Film Festival (PYIFF)", country: "China", submissionInfo: "Check Website", website: "(Check news/social media for current status)" },
    { name: "Shanghai International Film Festival (SIFF)", country: "China", submissionInfo: "Check Website", website: "https://www.siff.com/" },
    { name: "Silk Road International Film Festival (Fuzhou/Xi'an)", country: "China", submissionInfo: "Check Website", website: "(Check specific host city for year)" },
    { name: "West Lake International Documentary Festival", country: "China", submissionInfo: "Check Website", website: "http://www.idfwestlake.com/" },
    // Colombia
    { name: "Bogota International Film Festival (BIFF)", country: "Colombia", submissionInfo: "Check Website", website: "https://www.biff.co/" },
    { name: "Bogota Short Film Festival (BOGOSHORTS)", country: "Colombia", submissionInfo: "Check Website", website: "https://bogoshorts.com/" },
    { name: "Cartagena International Film Festival (FICCI)", country: "Colombia", submissionInfo: "Check Website", website: "https://ficcifestival.com/" },
    { name: "Cineautopsia - Bogotá Experimental Film Festival", country: "Colombia", submissionInfo: "Check Website", website: "https://cineautopsia.com/" },
    { name: "Festival Internacional de Cine de Cartagena (FICCI)", country: "Colombia", submissionInfo: "Check Website", website: "https://ficcifestival.com/" }, // Duplicate website
    // Croatia
    { name: "Animafest Zagreb", country: "Croatia", submissionInfo: "Check Website", website: "https://www.animafest.hr/" },
    { name: "Avvantura Festival Film Forum Zadar", country: "Croatia", submissionInfo: "Check Website", website: "(Check Cineuropa or local listings)" },
    { name: "Croatian Film Days", country: "Croatia", submissionInfo: "Check Website", website: "(Check Croatian Audiovisual Centre - HAVC)" },
    { name: "Liburnia Film Festival", country: "Croatia", submissionInfo: "Check Website", website: "https://liburniafilmfestival.com/" },
    { name: "Mediterranean Film Festival Split", country: "Croatia", submissionInfo: "Check Website", website: "https://fmfs.hr/" },
    { name: "Motovun Film Festival", country: "Croatia", submissionInfo: "Check Website", website: "https://motovunfilmfestival.com/" },
    { name: "Pula Film Festival", country: "Croatia", submissionInfo: "Check Website", website: "https://pulafilmfestival.hr/" },
    { name: "Split Film Festival / International Festival of New Film", country: "Croatia", submissionInfo: "Check Website", website: "https://splitfilmfestival.hr/" },
    { name: "World Festival of Animated Film - Animafest Zagreb", country: "Croatia", submissionInfo: "Check Website", website: "https://www.animafest.hr/" }, // Duplicate website
    { name: "Zagreb Film Festival", country: "Croatia", submissionInfo: "Check Website", website: "https://zff.hr/" },
    { name: "ZagrebDox International Documentary Film Festival", country: "Croatia", submissionInfo: "Check Website", website: "https://zagrebdox.net/" },
    // Cuba
    { name: "Festival Internacional del Nuevo Cine Latinoamericano (Havana)", country: "Cuba", submissionInfo: "Check Website", website: "http://habanafilmfestival.com/" },
    // Cyprus
    { name: "Animafest Cyprus", country: "Cyprus", submissionInfo: "Check Website", website: "https://www.animafest.com.cy/" },
    { name: "Cyprus Film Days International Festival", country: "Cyprus", submissionInfo: "Check Website", website: "https://cyprusfilmdays.com/" },
    { name: "Limassol International Documentary Festival", country: "Cyprus", submissionInfo: "Check Website", website: "https://filmfestival.com.cy/" },
    // Czech Republic
    { name: "Anifilm International Festival of Animated Films", country: "Czech Republic", submissionInfo: "Check Website", website: "https://www.anifilm.cz/" },
    { name: "East Silver Market", country: "Czech Republic", submissionInfo: "Check Website", website: "https://www.eastsilver.net/ (Documentary Market)" },
    { name: "Febiofest Prague", country: "Czech Republic", submissionInfo: "Check Website", website: "https://www.febiofest.cz/" },
    { name: "Ji.hlava International Documentary Film Festival", country: "Czech Republic", submissionInfo: "Check Website", website: "https://www.ji-hlava.com/" },
    { name: "Karlovy Vary International Film Festival (KVIFF)", country: "Czech Republic", submissionInfo: "Check Website", website: "https://www.kviff.com/" },
    { name: "One World International Human Rights Documentary Film Festival", country: "Czech Republic", submissionInfo: "Check Website", website: "https://www.oneworld.cz/" },
    { name: "Ostrava Kamera Oko", country: "Czech Republic", submissionInfo: "Check Website", website: "https://kameraoko.com/" },
    { name: "Pisek International Film Festival (Student - FamuFest)", country: "Czech Republic", submissionInfo: "Check Website", website: "(Check FAMU school/local listings)" },
    { name: "Prague Film Awards", country: "Czech Republic", submissionInfo: "Check Website", website: "https://praguefilmawards.com/" },
    { name: "Prague Independent Film Festival (PIFF)", country: "Czech Republic", submissionInfo: "Check Website", website: "https://prague-film-festival.com/" },
    { name: "Prague Short Film Festival", country: "Czech Republic", submissionInfo: "Check Website", website: "https://pragueshorts.com/" },
    { name: "Zlín Film Festival - International Film Festival for Children and Youth", country: "Czech Republic", submissionInfo: "Check Website", website: "https://www.zlinfest.cz/" },
    // Denmark
    { name: "Aalborg Film Festival", country: "Denmark", submissionInfo: "Check Website", website: "https://aalborgfilmfestival.dk/" },
    { name: "Aarhus Filmfestival", country: "Denmark", submissionInfo: "Check Website", website: "https://aarhusfilmfestival.dk/" },
    { name: "CPH:DOX Copenhagen International Documentary Film Festival", country: "Denmark", submissionInfo: "Check Website", website: "https://cphdox.dk/" },
    { name: "Mix Copenhagen LGBTQ+ Film Festival", country: "Denmark", submissionInfo: "Check Website", website: "https://www.mixcopenhagen.dk/" },
    { name: "Odense International Film Festival (OFF)", country: "Denmark", submissionInfo: "Check Website", website: "https://filmfestival.dk/" },
    { name: "OFF - Odense International Film Festival", country: "Denmark", submissionInfo: "Check Website", website: "https://filmfestival.dk/" }, // Duplicate website
    { name: "VOID International Animation Film Festival", country: "Denmark", submissionInfo: "Check Website", website: "https://voidfilmfestival.com/" },
    // Dominican Republic
    { name: "Festival de Cine Global (FCG Santo Domingo)", country: "Dominican Republic", submissionInfo: "Check Website", website: "https://festivaldecineglobal.org/" },
    { name: "Santo Domingo OutFest - Festival Int'l de Cine GLBT", country: "Dominican Republic", submissionInfo: "Check Website", website: "https://www.sdqoutfest.org/" },
    // Egypt
    { name: "Cairo International Film Festival (CIFF)", country: "Egypt", submissionInfo: "Check Website", website: "https://www.ciff.org.eg/" },
    { name: "Cairo International Women's Film Festival", country: "Egypt", submissionInfo: "Check Website", website: "(Check local listings/previous editions)" },
    { name: "El Gouna Film Festival", country: "Egypt", submissionInfo: "Check Website", website: "https://elgounafilmfestival.com/" },
    { name: "Ismailia International Film Festival for Documentaries & Shorts", country: "Egypt", submissionInfo: "Check Website", website: "(Check Egyptian Ministry of Culture)" },
    { name: "Luxor African Film Festival", country: "Egypt", submissionInfo: "Check Website", website: "https://www.luxorafricanfilmfestival.com/" },
    { name: "Panorama of the European Film", country: "Egypt", submissionInfo: "Check Website", website: "(Check Zawya Cinema/Misr International Films)" },
    // Estonia
    { name: "Black Nights Film Festival (PÖFF)", country: "Estonia", submissionInfo: "Check Website", website: "https://poff.ee/" },
    { name: "PÖFF (Black Nights Film Festival)", country: "Estonia", submissionInfo: "Check Website", website: "https://poff.ee/" }, // Duplicate website
    { name: "POFF Shorts", country: "Estonia", submissionInfo: "Check Website", website: "https://shorts.poff.ee/" },
    { name: "Pärnu Film Festival", country: "Estonia", submissionInfo: "Check Website", website: "https://www.parnufilmfestival.ee/" },
    { name: "Tallinn Black Nights Film Festival (PÖFF)", country: "Estonia", submissionInfo: "Check Website", website: "https://poff.ee/" }, // Duplicate website
    { name: "Tartu Love Film Festival (tARTuFF)", country: "Estonia", submissionInfo: "Check Website", website: "https://tartuff.ee/" },
    // Finland
    { name: "Cinemaissí - Latin American Film Festival", country: "Finland", submissionInfo: "Check Website", website: "https://cinemaissi.org/" },
    { name: "Helsinki International Film Festival (Love & Anarchy)", country: "Finland", submissionInfo: "Check Website", website: "https://hiff.fi/" },
    { name: "Helsinki Short Film Festival (Helsingin lyhytelokuvafestivaali)", country: "Finland", submissionInfo: "Check Website", website: "https://helsinkishortfilmfestival.com/" },
    { name: "Tampere Film Festival", country: "Finland", submissionInfo: "Check Website", website: "https://tamperefilmfestival.fi/" },
    { name: "Turku Animated Film Festival (TAFF)", country: "Finland", submissionInfo: "Check Website", website: "https://taff.fi/" },
    // France (Excluding Cannes - already added)
    { name: "AFLAM International Festival of Arab Cinema", country: "France", submissionInfo: "Check Website", website: "https://www.aflam.fr/" },
    { name: "Amiens International Film Festival (FIFAM)", country: "France", submissionInfo: "Check Website", website: "https://www.fifam.fr/" },
    { name: "Angers Film Festival (Premiers Plans)", country: "France", submissionInfo: "Check Website", website: "https://www.premiersplans.org/" },
    { name: "Annecy International Animation Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.annecyfestival.com/" },
    { name: "Aubagne International Film Festival (Music & Cinema)", country: "France", submissionInfo: "Check Website", website: "https://fifa.aubagne.fr/" },
    { name: "Brest European Short Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.filmcourt.fr/" },
    { name: "Cannes Lions International Festival of Creativity", country: "France", submissionInfo: "Check Website", website: "https://www.canneslions.com/ (Mainly advertising)" },
    { name: "Canneseries", country: "France", submissionInfo: "Check Website", website: "https://canneseries.com/en/ (Series focused)" },
    { name: "Champs-Élysées Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.champselyseesfilmfestival.com/" },
    { name: "Cinémed - Montpellier Mediterranean Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.cinemed.tm.fr/" },
    { name: "Cinéma du Réel", country: "France", submissionInfo: "Check Website", website: "https://www.cinemadureel.org/" },
    { name: "Cineffable - Paris International Lesbian & Feminist Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.cineffable.fr/" },
    { name: "Clermont-Ferrand International Short Film Festival", country: "France", submissionInfo: "Check Website", website: "https://clermont-filmfest.org/" },
    { name: "Court Métrange Rennes", country: "France", submissionInfo: "Check Website", website: "https://courtmetrange.eu/" },
    { name: "Deauville American Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.festival-deauville.com/" },
    { name: "DIFFERENT! L'autre cinéma espagnol", country: "France", submissionInfo: "Check Website", website: "http://www.differentlatitudine.com/" },
    { name: "Dinard Festival du Film Britannique", country: "France", submissionInfo: "Check Website", website: "https://www.dinardfilmfestival.fr/" },
    { name: "ÉCU - The European Independent Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.ecufilmfestival.com/" },
    { name: "États généraux du film documentaire Lussas", country: "France", submissionInfo: "Check Website", website: "https://www.lussasdoc.org/" },
    { name: "European Short Film Festival of Bordeaux", country: "France", submissionInfo: "Check Website", website: "(Check local listings/FilmFreeway)" },
    { name: "Festival Ciné Alter'Natif", country: "France", submissionInfo: "Check Website", website: "https://www.cinealterlatif.org/" },
    { name: "Festival Ciné Junior", country: "France", submissionInfo: "Check Website", website: "https://www.cinejunior.fr/" },
    { name: "Festival des 3 Continents Nantes", country: "France", submissionInfo: "Check Website", website: "https://www.3continents.com/" },
    { name: "Festival International de Programmes Audiovisuels (FIPA)", country: "France", submissionInfo: "Check Website", website: "(Now part of FIPADOC)" },
    { name: "Fête du Court Métrage", country: "France", submissionInfo: "Check Website", website: "https://www.lafeteducourt.com/" },
    { name: "FID Marseille", country: "France", submissionInfo: "Check Website", website: "https://fidmarseille.org/" },
    { name: "FIPADOC Biarritz", country: "France", submissionInfo: "Check Website", website: "https://fipadoc.com/" },
    { name: "Francofilm Festival Rome", country: "France", submissionInfo: "Check Website", website: "(Check Institut Français Italia)" }, // Note: In Italy but French themed
    { name: "La Roche-sur-Yon International Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.fif-lrsy.com/" },
    { name: "La Rochelle Cinéma Festival (FEMA)", country: "France", submissionInfo: "Check Website", website: "https://festival-larochelle.org/" },
    { name: "Les Arcs Film Festival", country: "France", submissionInfo: "Check Website", website: "https://lesarcs-filmfest.com/" },
    { name: "Les Nuits en Or", country: "France/Global", submissionInfo: "Check Website", website: "https://www.academie-cinema.org/les-nuits-en-or/" },
    { name: "Les Utopiales", country: "France", submissionInfo: "Check Website", website: "https://www.utopiales.org/ (Sci-Fi, includes film)" },
    { name: "Lille International Short Film Festival", country: "France", submissionInfo: "Check Website", website: "https://lillefilmfest.com/" },
    { name: "Lumière Film Festival Lyon", country: "France", submissionInfo: "Check Website", website: "https://www.festival-lumiere.org/" },
    { name: "Lyon BD Festival", country: "France", submissionInfo: "Check Website", website: "https://www.lyonbd.com/ (Comics, may have related events)" },
    { name: "Mobile Film Festival", country: "Online/France", submissionInfo: "Check Website", website: "https://www.mobilefilmfestival.com/" },
    { name: "Nantes British Film Festival (Festival du Cinéma Britannique)", country: "France", submissionInfo: "Check Website", website: "https://www.festivalbritannique.fr/" },
    { name: "Nantes Festival des 3 Continents", country: "France", submissionInfo: "Check Website", website: "https://www.3continents.com/" }, // Duplicate website
    { name: "Off-Courts Trouville", country: "France", submissionInfo: "Check Website", website: "https://off-courts.com/" },
    { name: "Paris International Fantastic Film Festival (PIFFF)", country: "France", submissionInfo: "Check Website", website: "https://www.pifff.fr/" },
    { name: "Paris International Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.parisintlfest.com/" },
    { name: "Premiers Plans - Angers Film Festival", country: "France", submissionInfo: "Check Website", website: "https://www.premiersplans.org/" }, // Duplicate website
    { name: "Quinzaine des Cinéastes (Directors' Fortnight)", country: "France", submissionInfo: "Check Website", website: "https://www.quinzaine-cineastes.fr/ (Part of Cannes)" },
    { name: "Rennes International Film Festival Travellings", country: "France", submissionInfo: "Check Website", website: "https://www.clairobscur.info/Travellings-391-0-0-0.html" },
    { name: "Semaine de la Critique (Cannes Critics' Week)", country: "France", submissionInfo: "Check Website", website: "https://www.semainedelacritique.com/ (Part of Cannes)" },
    { name: "SERIES MANIA", country: "France", submissionInfo: "Check Website", website: "https://seriesmania.com/" },
    { name: "SIGNES DE NUIT International Film Festival", country: "France/Germany", submissionInfo: "Check Website", website: "https://www.signesdenuit.com/" },
    { name: "Sunny Side of the Doc", country: "France", submissionInfo: "Check Website", website: "https://www.sunnysideofthedoc.com/ (Marketplace)" },
    { name: "Toulouse Latin America Film Festival (Cinélatino)", country: "France", submissionInfo: "Check Website", website: "https://www.cinelatino.fr/" },
    { name: "US in Progress", country: "Poland/France", submissionInfo: "Check Website", website: "https://www.americanfilm.pl/us-in-progress/ (Industry Event)" },
    { name: "Vesoul International Film Festival of Asian Cinema", country: "France", submissionInfo: "Check Website", website: "https://www.cinemas-asie.com/" },
    { name: "Voix d'Etoiles - Festival International des Voix du Cinéma d'Animation", country: "France", submissionInfo: "Check Website", website: "https://voixdetoiles.com/" },
    // French Polynesia
    { name: "FIFO - Festival International du Film Documentaire Océanien", country: "French Polynesia", submissionInfo: "Check Website", website: "https://www.fifo-tahiti.com/" },
    // Georgia
    { name: "Batumi International Art-House Film Festival (BIAFF)", country: "Georgia", submissionInfo: "Check Website", website: "https://biaff.org/" },
    { name: "CineDoc Tbilisi", country: "Georgia", submissionInfo: "Check Website", website: "https://cinedoc-tbilisi.com/" },
    // Germany (Excluding Berlinale - already added)
    { name: "Africa Alive Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.africa-alive-festival.de/" },
    { name: "Afrika Filmfestival Köln (Screenshots)", country: "Germany", submissionInfo: "Check Website", website: "http://www.films-initiative.de/" },
    { name: "Ake Dikhea? Festival of Romani Film", country: "Germany", submissionInfo: "Check Website", website: "https://akedikhea.com/" },
    { name: "Berlin Revolution Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://berlinrevolutionfilmfestival.com/" },
    { name: "Berlinale Talents", country: "Germany", submissionInfo: "Check Website", website: "https://www.berlinale-talents.de/ (Training program)" },
    { name: "Braunschweig International Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfest-braunschweig.de/" },
    { name: "British Shorts Film Festival Berlin", country: "Germany", submissionInfo: "Check Website", website: "https://www.britishshorts.de/" },
    { name: "Cellu l'art Short Film Festival Jena", country: "Germany", submissionInfo: "Check Website", website: "https://cellulart.de/" },
    { name: "Chemnitz Film Festival SCHLiNGEL", country: "Germany", submissionInfo: "Check Website", website: "https://ff-schlingel.de/" },
    { name: "CineLatino Tübingen", country: "Germany", submissionInfo: "Check Website", website: "https://cinelatino.de/" },
    { name: "Cottbus Film Festival (Festival des osteuropäischen Films)", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfestivalcottbus.de/" },
    { name: "Dokufilm - German Documentary Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.dokfilmwoche.de/" },
    { name: "Dok Leipzig", country: "Germany", submissionInfo: "Check Website", website: "https://www.dok-leipzig.de/" },
    { name: "Duisburger Filmwoche", country: "Germany", submissionInfo: "Check Website", website: "https://www.duisburger-filmwoche.de/" },
    { name: "Erfurt SCHLINGEL", country: "Germany", submissionInfo: "Check Website", website: "https://ff-schlingel.de/" }, // Duplicate website
    { name: "Exground Filmfest Wiesbaden", country: "Germany", submissionInfo: "Check Website", website: "https://exground.com/" },
    { name: "Film Polska Berlin", country: "Germany", submissionInfo: "Check Website", website: "https://filmpolska.de/" },
    { name: "Filmfest Dresden", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfest-dresden.de/" },
    { name: "Filmfest Hamburg", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfesthamburg.de/" },
    { name: "Filmfest München", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfest-muenchen.de/" },
    { name: "Filmfest Osnabrück", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfest-osnabrueck.de/" },
    { name: "FilmFestival Cottbus", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfestivalcottbus.de/" }, // Duplicate website
    { name: "Fokus Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.fokus-filmfestival.de/" },
    { name: "Freiburger Filmforum", country: "Germany", submissionInfo: "Check Website", website: "https://www.freiburger-filmforum.de/" },
    { name: "GoEast - Festival of Central and Eastern European Film", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfestival-goeast.de/" },
    { name: "Hamburg International Short Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.shortfilm.com/ (Same as Kurzfilm Hamburg)" },
    { name: "Hannover International Film Festival (up-and-coming)", country: "Germany", submissionInfo: "Check Website", website: "https://www.up-and-coming.de/" },
    { name: "Hof International Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.hofer-filmtage.com/" },
    { name: "Human Rights Film Festival Berlin", country: "Germany", submissionInfo: "Check Website", website: "https://www.humanrightsfilmfestivalberlin.de/" },
    { name: "Interfilm Berlin - International Short Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.interfilm.de/" },
    { name: "International Kurzfilmtage Oberhausen", country: "Germany", submissionInfo: "Check Website", website: "https://www.kurzfilmtage.de/" },
    { name: "International Short Film Festival Detmold (ISFF)", country: "Germany", submissionInfo: "Check Website", website: "https://www.festderfilme.de/" },
    { name: "International Women's Film Festival Dortmund | Köln", country: "Germany", submissionInfo: "Check Website", website: "https://frauenfilmfest.com/" },
    { name: "Justice Forum @ Berlinale", country: "Germany", submissionInfo: "Check Website", website: "(Part of Berlinale, check main site)" },
    { name: "Kasseler Dokfest", country: "Germany", submissionInfo: "Check Website", website: "https://www.kasselerdokfest.de/" },
    { name: "Kurzfilm Festival Hamburg", country: "Germany", submissionInfo: "Check Website", website: "https://www.shortfilm.com/" }, // Duplicate website
    { name: "Kurzfilmtage Oberhausen", country: "Germany", submissionInfo: "Check Website", website: "https://www.kurzfilmtage.de/" }, // Duplicate website
    { name: "Lakino - Latin American Film Festival Berlin", country: "Germany", submissionInfo: "Check Website", website: "https://www.lakino.com/" },
    { name: "Landshut Short Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://landshuter-kurzfilmfestival.de/" },
    { name: "Leipzig Festival for Documentary and Animated Film (DOK Leipzig)", country: "Germany", submissionInfo: "Check Website", website: "https://www.dok-leipzig.de/" }, // Duplicate website
    { name: "Lichtspielklub Short Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://lichtspielklub.de/" },
    { name: "Mannheim-Heidelberg International Filmfestival", country: "Germany", submissionInfo: "Check Website", website: "https://www.iffmh.de/" },
    { name: "Munich International Documentary Film Festival (DOK.fest München)", country: "Germany", submissionInfo: "Check Website", website: "https://www.dokfest-muenchen.de/" },
    { name: "Nippon Connection Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://nipponconnection.com/" },
    { name: "Nordic Film Days Lübeck", country: "Germany", submissionInfo: "Check Website", website: "https://www.nordische-filmtage.de/" },
    { name: "Oberhausen International Short Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.kurzfilmtage.de/" }, // Duplicate website
    { name: "Oldenburg International Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.filmfest-oldenburg.de/" },
    { name: "OpenEyes Filmfest Marburg", country: "Germany", submissionInfo: "Check Website", website: "https://openeyes-filmfest.de/" },
    { name: "Regensburg Short Film Week", country: "Germany", submissionInfo: "Check Website", website: "https://www.kurzfilmwoche.de/" },
    { name: "SCHLINGEL International Film Festival for Children and Young Audience", country: "Germany", submissionInfo: "Check Website", website: "https://ff-schlingel.de/" }, // Duplicate website
    { name: "Stuttgart International Festival of Animated Film (ITFS)", country: "Germany", submissionInfo: "Check Website", website: "https://www.itfs.de/" },
    { name: "Tübingen | Stuttgart International French-language Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://franzoesische.filmtage-tuebingen.de/" },
    { name: "Wiesbaden Exground Filmfest", country: "Germany", submissionInfo: "Check Website", website: "https://exground.com/" }, // Duplicate website
    { name: "Zebra Poetry Film Festival", country: "Germany", submissionInfo: "Check Website", website: "https://www.haus-fuer-poesie.org/de/zebra-poetry-film-festival/" },
    // Greece
    { name: "Animasyros International Animation Festival", country: "Greece", submissionInfo: "Check Website", website: "https://animasyros.gr/" },
    { name: "Athens International Film Festival (AIFF)", country: "Greece", submissionInfo: "Check Website", website: "http://en.aiff.gr/" },
    { name: "Drama International Short Film Festival", country: "Greece", submissionInfo: "Check Website", website: "https://www.dramafilmfestival.gr/" },
    { name: "Kalamata Street Festival", country: "Greece", submissionInfo: "Check Website", website: "(Check local listings/social media)" },
    { name: "Mykonos Biennale", country: "Greece", submissionInfo: "Check Website", website: "http://www.mykonosbiennale.com/ (Multi-arts)" },
    { name: "Olympia International Film Festival for Children and Young People", country: "Greece", submissionInfo: "Check Website", website: "https://olympiafestival.gr/" },
    { name: "Positively Different Short Film Festival", country: "Greece", submissionInfo: "Check Website", website: "https://positively-different.net/" },
    { name: "Syros International Film Festival (SIFF)", country: "Greece", submissionInfo: "Check Website", website: "https://syrosfilmfestival.org/" },
    { name: "Thessaloniki Documentary Festival", country: "Greece", submissionInfo: "Check Website", website: "https://www.filmfestival.gr/en/documentary-festival" },
    { name: "Thessaloniki International Film Festival", country: "Greece", submissionInfo: "Check Website", website: "https://www.filmfestival.gr/en/" },
    // Hong Kong
    { name: "Hong Kong Arts Centre (ifva)", country: "Hong Kong", submissionInfo: "Check Website", website: "https://www.ifva.com/" },
    { name: "Hong Kong Asian Film Festival (HKAFF)", country: "Hong Kong", submissionInfo: "Check Website", website: "https://www.hkaff.asia/" },
    { name: "Hong Kong International Film Festival (HKIFF)", country: "Hong Kong", submissionInfo: "Check Website", website: "https://www.hkiff.org.hk/" },
    { name: "InDPanda International Film Festival", country: "Hong Kong", submissionInfo: "Check Website", website: "https://www.indpanda.com/" },
    // Hungary
    { name: "Budapest Independent Film Festival", country: "Hungary", submissionInfo: "Check Website", website: "https://budapestfilmfestival.com/" },
    { name: "Budapest International Documentary Festival (BIDF)", country: "Hungary", submissionInfo: "Check Website", website: "https://bidf.hu/" },
    { name: "Jameson CineFest Miskolc International Film Festival", country: "Hungary", submissionInfo: "Check Website", website: "https://cinefest.hu/" },
    { name: "Kecskemét Animation Film Festival (KAFF)", country: "Hungary", submissionInfo: "Check Website", website: "https://kaff.hu/" },
    { name: "MEDIAWAVE International Film and Music Gathering", country: "Hungary", submissionInfo: "Check Website", website: "https://mediawavefestival.hu/" },
    { name: "Miskolc International Film Festival (CineFest)", country: "Hungary", submissionInfo: "Check Website", website: "https://cinefest.hu/" }, // Duplicate website
    { name: "Verzió International Human Rights Documentary Film Festival", country: "Hungary", submissionInfo: "Check Website", website: "https://www.verzio.org/" },
    // Iceland
    { name: "Iceland Documentary Film Festival (IceDocs)", country: "Iceland", submissionInfo: "Check Website", website: "https://icedocs.is/" },
    { name: "Reykjavik International Film Festival (RIFF)", country: "Iceland", submissionInfo: "Check Website", website: "https://riff.is/" },
    // India
    { name: "BYOFF (Bring Your Own Film Festival)", country: "India", submissionInfo: "Check Website", website: "(Informal, check social media/news)" },
    { name: "Global India International Film Festival", country: "India", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    { name: "International Film Festival of India (IFFI)", country: "India", submissionInfo: "Check Website", website: "https://www.iffigoa.org/" },
    { name: "International Film Festival of Kerala (IFFK)", country: "India", submissionInfo: "Check Website", website: "https://iffk.in/" },
    { name: "Jaipur International Film Festival (JIFF)", country: "India", submissionInfo: "Check Website", website: "https://jiffindia.org/" },
    { name: "KASHISH Mumbai International Queer Film Festival", country: "India", submissionInfo: "Check Website", website: "https://mumbaiqueerfest.com/" },
    { name: "Kolkata International Film Festival (KIFF)", country: "India", submissionInfo: "Check Website", website: "https://kiff.in/" },
    { name: "Lifft India Filmotsav", country: "India", submissionInfo: "Check Website", website: "http://lifftindia.com/" },
    { name: "Mumbai Film Festival (MAMI)", country: "India", submissionInfo: "Check Website", website: "https://www.mumbaifilmfestival.com/" },
    { name: "Nagaon International Short & Documentary Film Festival", country: "India", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    { name: "Pune International Film Festival (PIFF)", country: "India", submissionInfo: "Check Website", website: "https://www.piffindia.com/" },
    // Indonesia
    { name: "Arkipel Jakarta International Documentary & Experimental Film Festival", country: "Indonesia", submissionInfo: "Check Website", website: "https://arkipel.org/" },
    { name: "Jakarta Film Week", country: "Indonesia", submissionInfo: "Check Website", website: "https://jakartafilmweek.com/" },
    { name: "Jogja-NETPAC Asian Film Festival (JAFF)", country: "Indonesia", submissionInfo: "Check Website", website: "https://jaff-filmfest.org/" },
    // Iran
    { name: "Fajr International Film Festival", country: "Iran", submissionInfo: "Check Website", website: "https://www.fajriff.com/" },
    // Iraq
    { name: "Baghdad International Film Festival", country: "Iraq", submissionInfo: "Check Website", website: "(Check cultural ministries/news sources)" },
    // Ireland
    { name: "Carlow Arts Festival", country: "Ireland", submissionInfo: "Check Website", website: "https://carlowartsfestival.com/ (Multi-arts, may include film)" },
    { name: "Catalyst International Film Festival", country: "Ireland", submissionInfo: "Check Website", website: "https://catalystfilmfest.com/" },
    { name: "Cinemagic Film Festival", country: "UK / Ireland", submissionInfo: "Check Website", website: "https://cinemagic.org.uk/" },
    { name: "Cork International Film Festival", country: "Ireland", submissionInfo: "Check Website", website: "https://corkfilmfest.org/" },
    { name: "Dingle International Film Festival", country: "Ireland", submissionInfo: "Check Website", website: "(Check local listings/past sites)" },
    { name: "Dublin International Film Festival (DIFF)", country: "Ireland", submissionInfo: "Check Website", website: "https://www.diff.ie/" },
    { name: "FASTNET Short Film Festival", country: "Ireland", submissionInfo: "Check Website", website: "https://www.fastnetfilmfestival.com/" },
    { name: "Galway Film Fleadh", country: "Ireland", submissionInfo: "Check Website", website: "https://www.galwayfilmfleadh.com/" },
    { name: "IndieCork Film Festival", country: "Ireland", submissionInfo: "Check Website", website: "https://indiecork.com/" },
    { name: "Kerry Film Festival", country: "Ireland", submissionInfo: "Check Website", website: "https://www.kerryfilmfestival.com/" },
    { name: "Waterford Film Festival", country: "Ireland", submissionInfo: "Check Website", website: "https://www.waterfordfilmfestival.net/" },
    // Israel
    { name: "Haifa International Film Festival", country: "Israel", submissionInfo: "Check Website", website: "https://www.haifaff.co.il/" },
    { name: "Jerusalem Film Festival", country: "Israel", submissionInfo: "Check Website", website: "https://jff.org.il/" },
    // Italy (Excluding Venice - already added)
    { name: "Al Ard Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.alardfilmfestival.com/" },
    { name: "Amantea Comics", country: "Italy", submissionInfo: "Check Website", website: "https://www.amanteacomics.it/" },
    { name: "Arcipelago - International Festival of Short Films & New Images", country: "Italy", submissionInfo: "Check Website", website: "https://www.arcipelagofilmfestival.org/" },
    { name: "Asian Film Festival Rome", country: "Italy", submissionInfo: "Check Website", website: "https://www.asianfilmfestival.info/" },
    { name: "Bif&st - Bari International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.bifest.it/" },
    { name: "Bolzano Film Festival Bozen", country: "Italy", submissionInfo: "Check Website", website: "https://filmfestival.bz.it/" },
    { name: "Capri Hollywood International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.caprihollywood.com/" },
    { name: "Cartoons on the Bay", country: "Italy", submissionInfo: "Check Website", website: "https://www.cartoonsonthebay.it/ (Animation/TV)" },
    { name: "CONOFEST International (Short) Film Festival", country: "Spain/Italy/Portugal", submissionInfo: "Check Website", website: "https://conofest.com/" },
    { name: "Efebo d'Oro International Film and Book Award", country: "Italy", submissionInfo: "Check Website", website: "https://www.efebodoro.it/" },
    { name: "Far East Film Festival (FEFF) Udine", country: "Italy", submissionInfo: "Check Website", website: "https://www.fareastfilm.com/" },
    { name: "Festival dei Popoli", country: "Italy", submissionInfo: "Check Website", website: "https://www.festivaldeipopoli.org/" },
    { name: "Festival del Cinema Europeo Lecce", country: "Italy", submissionInfo: "Check Website", website: "https://www.festivaldelcinemaeuropeo.com/" },
    { name: "Figari Film Fest", country: "Italy", submissionInfo: "Check Website", website: "https://figarifilmfest.it/" },
    { name: "Florence Korea Film Fest", country: "Italy", submissionInfo: "Check Website", website: "https://koreafilmfest.com/" },
    { name: "Genova Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://genovafilmfestival.org/" },
    { name: "Giffoni Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.giffonifilmfestival.it/" },
    { name: "Irish Film Festa Rome", country: "Italy", submissionInfo: "Check Website", website: "https://www.irishfilmfesta.org/" },
    { name: "Ischia Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.ischiafilmfestival.it/" },
    { name: "L'Isola del Cinema", country: "Italy", submissionInfo: "Check Website", website: "https://www.isoladelcinema.com/" },
    { name: "La Guarimba International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.laguarimba.com/" },
    { name: "Laceno d'oro International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.lacenodoro.it/" },
    { name: "Lago Film Fest", country: "Italy", submissionInfo: "Check Website", website: "https://lagofest.org/" },
    { name: "Lessinia Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.ffdl.it/" },
    { name: "Lo Schermo dell'Arte Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.schermodellarte.org/" },
    { name: "Lucca Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.luccafilmfestival.it/" },
    { name: "MalatestaShort Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.malatestashort.com/" },
    { name: "Middle East Now Festival", country: "Italy", submissionInfo: "Check Website", website: "https://middleastnow.it/" },
    { name: "Milano Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.milanofilmfestival.it/" },
    { name: "Mix Milano Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.mixfestival.eu/" },
    { name: "Montecatini International Short Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.misf.eu/" },
    { name: "Nostalgia Film Festival", country: "Italy", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    { name: "Not Film Fest", country: "Italy", submissionInfo: "Check Website", website: "https://www.notfilmfest.com/" },
    { name: "Pesaro Film Festival (Mostra Internazionale del Nuovo Cinema)", country: "Italy", submissionInfo: "Check Website", website: "https://www.pesarofilmfest.it/" },
    { name: "Popoli e Religioni - Terni Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.ternifilmfestival.com/" },
    { name: "Pordenone Silent Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.giornatedelcinemamuto.it/" },
    { name: "Ribalta Experimental Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://ribaltafilmfestival.com/" },
    { name: "Rome Film Fest (Festa del Cinema di Roma)", country: "Italy", submissionInfo: "Check Website", website: "https://www.romacinemafest.it/" },
    { name: "Rome Independent Film Festival (RIFF)", country: "Italy", submissionInfo: "Check Website", website: "https://www.riff.it/" },
    { name: "Salento International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.salentofilmfestival.com/" },
    { name: "Salerno International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.festivaldelcinema.it/" },
    { name: "Sardinia Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://sardiniafilmfestival.it/" },
    { name: "Seeyousound International Music Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.seeyousound.org/" },
    { name: "ShorTS International Film Festival Trieste", country: "Italy", submissionInfo: "Check Website", website: "https://www.maremetraggio.com/" },
    { name: "Siena International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.terradisienafilmfestival.com/" },
    { name: "Sole Luna Doc Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://solelunadoc.org/" },
    { name: "Stazione Tōkyō", country: "Italy", submissionInfo: "Check Website", website: "(Check local listings/social media)" },
    { name: "Taormina Film Fest", country: "Italy", submissionInfo: "Check Website", website: "https://www.taorminafilmfest.it/" },
    { name: "Terni Film Festival (Popoli e Religioni)", country: "Italy", submissionInfo: "Check Website", website: "https://www.ternifilmfestival.com/" }, // Duplicate website
    { name: "Torino Film Festival (TFF)", country: "Italy", submissionInfo: "Check Website", website: "https://www.torinofilmfest.org/" },
    { name: "Torino Gay & Lesbian Film Festival (Lovers Film Festival)", country: "Italy", submissionInfo: "Check Website", website: "https://www.loversff.com/" },
    { name: "Torino Short Film Market", country: "Italy", submissionInfo: "Check Website", website: "https://www.tsfm.it/" },
    { name: "Trevignano FilmFest", country: "Italy", submissionInfo: "Check Website", website: "https://trevignanofilmfest.it/" },
    { name: "Trieste Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.triestefilmfestival.it/" },
    { name: "Trieste Science+Fiction Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.sciencefictionfestival.org/" },
    { name: "Venice Days (Giornate degli Autori)", country: "Italy", submissionInfo: "Check Website", website: "https://www.giornatedegliautori.com/ (Part of Venice)" },
    { name: "View Conference", country: "Italy", submissionInfo: "Check Website", website: "https://www.viewconference.it/ (CG/Animation focus)" },
    { name: "VIEW Fest", country: "Italy", submissionInfo: "Check Website", website: "https://www.viewfest.it/" },
    { name: "Visionaria International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://visionaria.eu/" },
    { name: "Youngabout International Film Festival", country: "Italy", submissionInfo: "Check Website", website: "https://www.youngabout.com/" },
    // Japan
    { name: "HIROSHIMA International Animation Festival", country: "Japan", submissionInfo: "Check Website", website: "(Check successor event/ASIFA Japan)" },
    { name: "Nagano Film Festival", country: "Japan", submissionInfo: "Check Website", website: "(Check local listings/FilmFreeway)" },
    { name: "Nagoya International Film Festival", country: "Japan", submissionInfo: "Check Website", website: "(Check local listings/FilmFreeway)" },
    { name: "Nara International Film Festival", country: "Japan", submissionInfo: "Check Website", website: "https://nara-iff.jp/" },
    { name: "Osaka Asian Film Festival (OAFF)", country: "Japan", submissionInfo: "Check Website", website: "https://www.oaff.jp/" },
    { name: "Pia Film Festival (PFF)", country: "Japan", submissionInfo: "Check Website", website: "https://pff.jp/" },
    { name: "Sapporo International Short Film Festival", country: "Japan", submissionInfo: "Check Website", website: "https://sapporoshortfest.jp/" },
    { name: "Short Shorts Film Festival & Asia (SSFF & ASIA)", country: "Japan", submissionInfo: "Check Website", website: "https://www.shortshorts.org/" },
    { name: "Tokyo FILMeX", country: "Japan", submissionInfo: "Check Website", website: "https://filmex.jp/" },
    { name: "Tokyo International Film Festival (TIFF)", country: "Japan", submissionInfo: "Check Website", website: "https://tiff-jp.net/" },
    { name: "Tokyo Photographic Art Museum (Top Museum)", country: "Japan", submissionInfo: "Check Website", website: "https://topmuseum.jp/ (Exhibitions, occasional screenings)" },
    { name: "Yamagata International Documentary Film Festival (YIDFF)", country: "Japan", submissionInfo: "Check Website", website: "https://www.yidff.jp/" },
    { name: "Yubari International Fantastic Film Festival", country: "Japan", submissionInfo: "Check Website", website: "https://yubarifanta.com/" },
    // Jordan
    { name: "Amman International Film Festival - Awal Film (AIFF)", country: "Jordan", submissionInfo: "Check Website", website: "https://www.aiff.jo/" },
    { name: "Karama Human Rights Film Festival", country: "Jordan", submissionInfo: "Check Website", website: "https://www.karamafestival.org/" },
    // Kenya
    { name: "Nairobi Film Festival", country: "Kenya", submissionInfo: "Check Website", website: "https://nairofilm.com/" },
    // Kosovo
    { name: "DokuFest International Documentary & Short Film Festival", country: "Kosovo", submissionInfo: "Check Website", website: "https://dokufest.com/" },
    { name: "PriFest Prishtina International Film Festival", country: "Kosovo", submissionInfo: "Check Website", website: "https://prifilmfest.org/" },
    // Kuwait
    { name: "Kuwait Film Festival", country: "Kuwait", submissionInfo: "Check Website", website: "(Check National Council for Culture, Arts & Letters)" },
    // Latvia
    { name: "Artdocfest", country: "Latvia / Russia", submissionInfo: "Check Website", website: "https://artdocfest.com/" },
    { name: "Cēsis Art Festival", country: "Latvia", submissionInfo: "Check Website", website: "https://www.cesufestivals.lv/ (Multi-arts)" },
    { name: "Riga International Film Festival (Riga IFF)", country: "Latvia", submissionInfo: "Check Website", website: "https://rigaiff.lv/" },
    { name: "Riga International Short Film Festival 2ANNAS", country: "Latvia", submissionInfo: "Check Website", website: "https://2annas.lv/" },
    // Lebanon
    { name: "Beirut International Film Festival (BIFF)", country: "Lebanon", submissionInfo: "Check Website", website: "(Status may vary, check news/social media)" },
    { name: "Beirut Shorts International Film Festival", country: "Lebanon", submissionInfo: "Check Website", website: "https://beirutshorts.com/" },
    // Lithuania
    { name: "Aistė Short Film Festival", country: "Lithuania", submissionInfo: "Check Website", website: "http://www.aistefestival.com/" },
    { name: "Film O'Clock International Festival", country: "Romania/Lithuania", submissionInfo: "Check Website", website: "https://filmoclock.ro/" },
    { name: "Vilnius International Film Festival (Kino Pavasaris)", country: "Lithuania", submissionInfo: "Check Website", website: "https://kinopavasaris.lt/" },
    // Macao
    { name: "Macao International Film Festival & Awards (IFFAM)", country: "Macao", submissionInfo: "Check Website", website: "https://www.iffamacao.com/" },
    // Malta
    { name: "Gozo Film Festival", country: "Malta", submissionInfo: "Check Website", website: "https://www.gozofilmfestival.com/" },
    { name: "Valletta Film Festival", country: "Malta", submissionInfo: "Check Website", website: "https://www.vallettafilmfestival.com/" },
    // Mauritius
    { name: "Ile Courts - Mauritius Short Film Festival", country: "Mauritius", submissionInfo: "Check Website", website: "https://www.porteursdimages.org/ilecourts/" },
    // Mexico
    { name: "Ambulante Documentary Film Festival", country: "Mexico", submissionInfo: "Check Website", website: "https://www.ambulante.org/" },
    { name: "Black Canvas Festival de Cine Contemporáneo", country: "Mexico", submissionInfo: "Check Website", website: "https://blackcanvasfcc.com/" },
    { name: "Cineteca Nacional Mexico", country: "Mexico", submissionInfo: "Check Website", website: "https://www.cinetecanacional.net/ (Venue, hosts events)" },
    { name: "Experimental Film Guanajuato", country: "Mexico", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    { name: "Festival Internacional de Cine de Guadalajara (FICG)", country: "Mexico", submissionInfo: "Check Website", website: "https://www.ficg.mx/" },
    { name: "Festival Internacional de Cine de Morelia (FICM)", country: "Mexico", submissionInfo: "Check Website", website: "https://moreliafilmfest.com/" },
    { name: "Festival Internacional de Cine UNAM (FICUNAM)", country: "Mexico", submissionInfo: "Check Website", website: "https://ficunam.unam.mx/" },
    { name: "Guanajuato International Film Festival (GIFF)", country: "Mexico", submissionInfo: "Check Website", website: "https://www.giff.mx/" },
    { name: "Guadalajara International Film Festival (FICG)", country: "Mexico", submissionInfo: "Check Website", website: "https://www.ficg.mx/" }, // Duplicate website
    { name: "Monterrey International Film Festival", country: "Mexico", submissionInfo: "Check Website", website: "https://monterreyfilmfestival.com/" },
    { name: "Morelia International Film Festival (FICM)", country: "Mexico", submissionInfo: "Check Website", website: "https://moreliafilmfest.com/" }, // Duplicate website
    // Moldova
    { name: "WellDone! Film Festival", country: "Moldova", submissionInfo: "Check Website", website: "(Check local sources/FilmFreeway)" },
    // Mongolia
    { name: "Golden Ger International Film Festival", country: "Mongolia", submissionInfo: "Check Website", website: "https://www.goldengerfestival.com/" },
    // Morocco
    { name: "Agadir International Documentary Film Festival (FIDADOC)", country: "Morocco", submissionInfo: "Check Website", website: "https://www.fidadoc.org/" },
    { name: "AYA Film Festival", country: "Morocco", submissionInfo: "Check Website", website: "(Check local listings/social media)" },
    { name: "Cap Spartel Film Festival", country: "Morocco", submissionInfo: "Check Website", website: "(Check local listings/social media)" },
    { name: "Marrakech International Film Festival", country: "Morocco", submissionInfo: "Check Website", website: "https://www.festivalmarrakech.info/" },
    { name: "Rabat International Author Film Festival (FICAR)", country: "Morocco", submissionInfo: "Check Website", website: "https://www.festivalrabat.ma/" },
    { name: "Salé International Women's Film Festival", country: "Morocco", submissionInfo: "Check Website", website: "https://www.fiffs.ma/" },
    { name: "Taghazout Surf Expo Film Festival", country: "Morocco", submissionInfo: "Check Website", website: "(Check local surf/cultural sources)" },
    { name: "Tangier International Film Festival", country: "Morocco", submissionInfo: "Check Website", website: "(Check Moroccan Cinematographic Center - CCM)" },
    // Netherlands
    { name: "Amsterdam International Documentary Film Festival (IDFA)", country: "Netherlands", submissionInfo: "Check Website", website: "https://www.idfa.nl/" },
    { name: "CineDans Fest", country: "Netherlands", submissionInfo: "Check Website", website: "https://cinedans.nl/" },
    { name: "Cinekid Festival", country: "Netherlands", submissionInfo: "Check Website", website: "https://cinekid.nl/" },
    { name: "Dutch Film Festival (Nederlands Film Festival)", country: "Netherlands", submissionInfo: "Check Website", website: "https://www.filmfestival.nl/" },
    { name: "Go Short - International Short Film Festival Nijmegen", country: "Netherlands", submissionInfo: "Check Website", website: "https://www.goshort.nl/" },
    { name: "IDFA (International Documentary Film Festival Amsterdam)", country: "Netherlands", submissionInfo: "Check Website", website: "https://www.idfa.nl/" }, // Duplicate website
    { name: "IFFR (International Film Festival Rotterdam)", country: "Netherlands", submissionInfo: "Check Website", website: "https://iffr.com/" },
    { name: "Imagine Film Festival", country: "Netherlands", submissionInfo: "Check Website", website: "https://imaginefilmfestival.nl/" },
    { name: "International Broadcaster Conference (IBC)", country: "Netherlands", submissionInfo: "Check Website", website: "https://show.ibc.org/ (Trade show, not festival)" },
    { name: "International Film Festival Rotterdam (IFFR)", country: "Netherlands", submissionInfo: "Check Website", website: "https://iffr.com/" }, // Duplicate website
    { name: "Kaboom Animation Festival", country: "Netherlands", submissionInfo: "Check Website", website: "https://kaboomfestival.nl/" },
    { name: "Leiden International Film Festival (LIFF)", country: "Netherlands", submissionInfo: "Check Website", website: "https://www.liff.nl/" },
    { name: "Nederlands Film Festival", country: "Netherlands", submissionInfo: "Check Website", website: "https://www.filmfestival.nl/" }, // Duplicate website
    { name: "Noordelijk Film Festival", country: "Netherlands", submissionInfo: "Check Website", website: "https://noordelijkfilmfestival.nl/" },
    { name: "Rotterdam International Film Festival (IFFR)", country: "Netherlands", submissionInfo: "Check Website", website: "https://iffr.com/" }, // Duplicate website
    { name: "Utrecht - Nederlands Film Festival", country: "Netherlands", submissionInfo: "Check Website", website: "https://www.filmfestival.nl/" }, // Duplicate website
    { name: "World Cinema Amsterdam", country: "Netherlands", submissionInfo: "Check Website", website: "https://worldcinemaamsterdam.nl/" },
    // New Zealand
    { name: "New Zealand International Film Festival (NZIFF)", country: "New Zealand", submissionInfo: "Check Website", website: "https://www.nziff.co.nz/" },
    { name: "NZIFF - New Zealand International Film Festival", country: "New Zealand", submissionInfo: "Check Website", website: "https://www.nziff.co.nz/" }, // Duplicate website
    { name: "Show Me Shorts Film Festival", country: "New Zealand", submissionInfo: "Check Website", website: "https://www.showmeshorts.co.nz/" },
    { name: "Wellington Film Festival (Part of NZIFF)", country: "New Zealand", submissionInfo: "Check Website", website: "https://www.nziff.co.nz/" }, // Duplicate website
    // Nigeria
    { name: "Abuja International Film Festival", country: "Nigeria", submissionInfo: "Check Website", website: "http://www.abujafilmfestivalng.org/" },
    { name: "Africa International Film Festival (AFRIFF)", country: "Nigeria", submissionInfo: "Check Website", website: "https://www.afriff.com/" },
    { name: "Inshort Film Festival", country: "Nigeria", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    // North Macedonia
    { name: "Kinenova International Film Festival", country: "North Macedonia", submissionInfo: "Check Website", website: "https://kinenova.com/" },
    { name: "MakeDox Creative Documentary Film Festival", country: "North Macedonia", submissionInfo: "Check Website", website: "https://makedox.mk/" },
    // Norway
    { name: "Arctic Moving Image & Film Festival (AMIFF)", country: "Norway", submissionInfo: "Check Website", website: "https://www.amiff.no/" },
    { name: "Bergen International Film Festival (BIFF)", country: "Norway", submissionInfo: "Check Website", website: "https://www.biff.no/" },
    { name: "Film fra Sør (Films from the South) Oslo", country: "Norway", submissionInfo: "Check Website", website: "https://www.filmfrasor.no/" },
    { name: "Haugesund - The Norwegian International Film Festival", country: "Norway", submissionInfo: "Check Website", website: "https://filmfestivalen.no/" },
    { name: "Kosmorama Trondheim International Film Festival", country: "Norway", submissionInfo: "Check Website", website: "https://kosmorama.no/" },
    { name: "Norwegian International Film Festival Haugesund", country: "Norway", submissionInfo: "Check Website", website: "https://filmfestivalen.no/" }, // Duplicate website
    { name: "Norwegian Short Film Festival Grimstad", country: "Norway", submissionInfo: "Check Website", website: "https://kortfilmfestivalen.no/" },
    { name: "Oslo/Fusion International Film Festival", country: "Norway", submissionInfo: "Check Website", website: "https://www.oslofusion.no/" },
    { name: "Oslo Pix Film Festival", country: "Norway", submissionInfo: "Check Website", website: "https://www.oslopix.no/" },
    { name: "Tromsø International Film Festival (TIFF)", country: "Norway", submissionInfo: "Check Website", website: "https://tiff.no/" },
    { name: "Trondheim International Film Festival (Kosmorama)", country: "Norway", submissionInfo: "Check Website", website: "https://kosmorama.no/" }, // Duplicate website
    // Oman
    { name: "Muscat International Film Festival (MIFF)", country: "Oman", submissionInfo: "Check Website", website: "(Check Oman Film Society/local news)" },
    // Pakistan
    { name: "Peshawar International Film Festival", country: "Pakistan", submissionInfo: "Check Website", website: "(Check local cultural bodies/news)" },
    // Palestine
    { name: "Palestine Cinema Days", country: "Palestine", submissionInfo: "Check Website", website: "https://www.filmlebnen.org/Cinema-Days/" },
    // Peru
    { name: "Al Este Film Festival", country: "Peru / Others", submissionInfo: "Check Website", website: "https://www.alestfestival.com/" },
    { name: "Festival de Cine de Lima PUCP", country: "Peru", submissionInfo: "Check Website", website: "https://www.festivaldelima.com/" },
    { name: "Lima Alterna Festival Internacional de Cine", country: "Peru", submissionInfo: "Check Website", website: "https://limaalternafestival.org/" },
    // Philippines
    { name: "Cinemalaya Philippine Independent Film Festival", country: "Philippines", submissionInfo: "Check Website", website: "https://www.cinemalaya.org/" },
    { name: "Intramuros Festival", country: "Philippines", submissionInfo: "Check Website", website: "(Check local listings/FilmFreeway)" },
    { name: "Manila International Film Festival", country: "Philippines", submissionInfo: "Check Website", website: "(Check local sources for current status)" },
    { name: "Philippines International Film Festival (PIFF)", country: "Philippines", submissionInfo: "Check Website", website: "(Check Film Development Council of the Philippines)" },
    { name: "QCinema International Film Festival", country: "Philippines", submissionInfo: "Check Website", website: "https://qcinema.ph/" },
    // Poland
    { name: "CAMERIMAGE International Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://camerimage.pl/" },
    { name: "CINEMAFORUM - International Short Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://cinemaforum.pl/" },
    { name: "EnergaCAMERIMAGE", country: "Poland", submissionInfo: "Check Website", website: "https://camerimage.pl/" }, // Duplicate website
    { name: "Etiuda&Anima International Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://etiudaandanima.pl/" },
    { name: "Gdynia Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://festiwalgdynia.pl/" },
    { name: "Kinoteka Polish Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://kinoteka.org.uk/ (Showcases Polish film in UK)" }, // In UK but Polish focus
    { name: "Krakow Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://www.krakowfilmfestival.pl/" },
    { name: "LGBT+ Film Festival Poland", country: "Poland", submissionInfo: "Check Website", website: "https://lgbtfestival.pl/" },
    { name: "Millennium Docs Against Gravity Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://mdag.pl/" },
    { name: "Netia Off Camera International Festival of Independent Cinema", country: "Poland", submissionInfo: "Check Website", website: "https://offcamera.pl/" },
    { name: "New Horizons International Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://www.nowehoryzonty.pl/" },
    { name: "Off Camera Krakow", country: "Poland", submissionInfo: "Check Website", website: "https://offcamera.pl/" }, // Duplicate website
    { name: "Polish Film Festival Gdynia", country: "Poland", submissionInfo: "Check Website", website: "https://festiwalgdynia.pl/" }, // Duplicate website
    { name: "Short Waves Festival", country: "Poland", submissionInfo: "Check Website", website: "https://shortwaves.pl/" },
    { name: "Sopot Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://sopotfilmfestival.pl/" },
    { name: "Stoptrik International Film Festival", country: "Slovenia/Poland", submissionInfo: "Check Website", website: "https://www.stoptrik.com/" },
    { name: "Tofifest International Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://www.tofifest.pl/" },
    { name: "Two Riversides Film and Art Festival", country: "Poland", submissionInfo: "Check Website", website: "https://www.dwabrzegi.pl/" },
    // US in Progress is already listed under France
    { name: "WATCH DOCS International Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://watchdocs.pl/" },
    { name: "Wrocław New Horizons International Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://www.nowehoryzonty.pl/" }, // Duplicate website
    { name: "Zoom - Zblizenia International Film Festival", country: "Poland", submissionInfo: "Check Website", website: "https://zoomzblizenia.pl/" },
    // Portugal
    { name: "Avanca Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://www.avanca.com/" },
    { name: "Azores Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "(Check local listings/FilmFreeway)" },
    { name: "BEAST International Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://www.beastfilm.pt/" },
    { name: "Caminhos do Cinema Português", country: "Portugal", submissionInfo: "Check Website", website: "https://www.caminhos.info/" },
    // CONOFEST is already listed under Italy
    { name: "Curtas Vila do Conde International Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://curtas.pt/" },
    { name: "CineEco Seia", country: "Portugal", submissionInfo: "Check Website", website: "https://cineeco.pt/" },
    { name: "Fantasporto - Porto International Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://fantasporto.com/" },
    { name: "FEST New Directors | New Films Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://fest.pt/" },
    { name: "Fike - Évora International Short Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "http://www.fikeonline.net/" },
    { name: "IndieLisboa International Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://indielisboa.com/" },
    { name: "Lisbon & Estoril Film Festival (LEFFEST)", country: "Portugal", submissionInfo: "Check Website", website: "https://www.leffest.com/" },
    { name: "Lisbon International Independent Film Festival (IndieLisboa)", country: "Portugal", submissionInfo: "Check Website", website: "https://indielisboa.com/" }, // Duplicate website
    { name: "Monstra Lisbon Animation Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://monstrafestival.com/" },
    { name: "Porto Femme International Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://portofemme.com/" },
    { name: "Porto/Post/Doc", country: "Portugal", submissionInfo: "Check Website", website: "https://portopostdoc.com/" },
    { name: "QueerLisboa - Lisbon Gay and Lesbian Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://queerlisboa.pt/" },
    { name: "UFrame Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://uframe.ulusofona.pt/" },
    { name: "Vila do Conde International Short Film Festival", country: "Portugal", submissionInfo: "Check Website", website: "https://curtas.pt/" }, // Duplicate website
    // Puerto Rico
    { name: "Lusca Fantastic Film Fest", country: "Puerto Rico", submissionInfo: "Check Website", website: "https://www.luscafilmfest.com/" },
    // Qatar
    { name: "Ajyal Film Festival", country: "Qatar", submissionInfo: "Check Website", website: "https://www.dohafilminstitute.com/ajyalfilmfestival" },
    { name: "Al Jazeera International Documentary Film Festival", country: "Qatar", submissionInfo: "Check Website", website: "(Check Al Jazeera Network/Doha Film Institute)" },
    // Regional (Arab)
    { name: "AFAC (Arab Fund for Arts and Culture) Grants", country: "Regional (Arab)", submissionInfo: "Check Website", website: "https://www.arabculturefund.org/" },
    // Romania
    { name: "ALTER-NATIVE International Short Film Festival", country: "Romania", submissionInfo: "Check Website", website: "http://www.madisz.ro/alter-native/" },
    { name: "Anemic Festival International de Cinema Poetic", country: "Romania", submissionInfo: "Check Website", website: "(Check local listings/Facebook)" },
    { name: "Astra Film Festival", country: "Romania", submissionInfo: "Check Website", website: "https://www.astrafilm.ro/" },
    // Film O'Clock is already listed under Lithuania
    { name: "Timishort Film Festival", country: "Romania", submissionInfo: "Check Website", website: "https://timishort.ro/" },
    { name: "Transilvania International Film Festival (TIFF)", country: "Romania", submissionInfo: "Check Website", website: "https://tiff.ro/" },
    // Russia
    // Artdocfest is already listed under Latvia
    { name: "Barents Ecology Film Festival", country: "Russia", submissionInfo: "Check Website", website: "(Check regional sources/FilmFreeway)" },
    { name: "Genesis International Film Festival", country: "Russia", submissionInfo: "Check Website", website: "(Check local listings/FilmFreeway)" },
    { name: "Message to Man International Film Festival", country: "Russia", submissionInfo: "Check Website", website: "https://message2man.com/" },
    { name: "Moscow International Film Festival (MIFF)", country: "Russia", submissionInfo: "Check Website", website: "https://www.moscowfilmfestival.ru/" },
    { name: "Pacific Meridian International Film Festival", country: "Russia", submissionInfo: "Check Website", website: "https://pacificmeridianfest.ru/" },
    { name: "Saint Petersburg International Film Festival (Message To Man)", country: "Russia", submissionInfo: "Check Website", website: "https://message2man.com/" }, // Duplicate website
    { name: "Zerkalo International Film Festival named after Andrei Tarkovsky", country: "Russia", submissionInfo: "Check Website", website: "https://tarkovskyfest.ru/" },
    // Rwanda
    { name: "Mashariki African Film Festival", country: "Rwanda", submissionInfo: "Check Website", website: "https://masharikifestival.org/" },
    // Saudi Arabia
    { name: "Saudi Film Festival", country: "Saudi Arabia", submissionInfo: "Check Website", website: "https://www.saudifilmfestival.org/" },
    // Serbia
    { name: "Alternative Film/Video Belgrade", country: "Serbia", submissionInfo: "Check Website", website: "http://www.alternativefilmvideo.org/" },
    { name: "Animalis Fabula Film Festival", country: "Serbia", submissionInfo: "Check Website", website: "https://animalisfabula.com/" },
    { name: "BALKANIMA European Animated Film Festival", country: "Serbia", submissionInfo: "Check Website", website: "http://www.balkanima.org/" },
    { name: "BELDOCS International Documentary Film Festival", country: "Serbia", submissionInfo: "Check Website", website: "https://www.beldocs.rs/" },
    { name: "Belgrade Documentary and Short Film Festival", country: "Serbia", submissionInfo: "Check Website", website: "https://martovski.rs/" },
    { name: "Free Zone Film Festival Belgrade", country: "Serbia", submissionInfo: "Check Website", website: "https://freezonebelgrade.org/" },
    { name: "Martovski Festival - Belgrade Documentary and Short Film Festival", country: "Serbia", submissionInfo: "Check Website", website: "https://martovski.rs/" }, // Duplicate website
    // Singapore
    { name: "Singapore International Film Festival (SGIFF)", country: "Singapore", submissionInfo: "Check Website", website: "https://sgiff.com/" },
    { name: "Singapore South Asian International Film Festival (SgSAIFF)", country: "Singapore", submissionInfo: "Check Website", website: "https://sgsaiff.com/" },
    // Slovakia
    { name: "Art Film Fest Košice", country: "Slovakia", submissionInfo: "Check Website", website: "https://artfilmfest.sk/" },
    { name: "Febiofest Bratislava", country: "Slovakia", submissionInfo: "Check Website", website: "https://www.febiofest.sk/" },
    { name: "Fest Anča International Animation Festival", country: "Slovakia", submissionInfo: "Check Website", website: "https://festanca.sk/" },
    // Slovenia
    { name: "Animateka International Animated Film Festival", country: "Slovenia", submissionInfo: "Check Website", website: "https://www.animateka.si/" },
    { name: "Ljubljana International Film Festival (LIFFE)", country: "Slovenia", submissionInfo: "Check Website", website: "https://www.liffe.si/" },
    // Stoptrik is already listed under Poland
    // South Africa
    { name: "Cape Town International Animation Festival", country: "South Africa", submissionInfo: "Check Website", website: "https://www.ctiaf.com/" },
    { name: "Durban International Film Festival (DIFF)", country: "South Africa", submissionInfo: "Check Website", website: "https://ccadiff.ukzn.ac.za/" },
    { name: "South African Film & Television Awards (SAFTAs)", country: "South Africa", submissionInfo: "Check Website", website: "(Check National Film & Video Foundation - NFVF)" },
    // South Korea
    { name: "Asiana International Short Film Festival (AISFF)", country: "South Korea", submissionInfo: "Check Website", website: "https://aisff.org/" },
    { name: "Bucheon International Animation Festival (BIAF)", country: "South Korea", submissionInfo: "Check Website", website: "https://www.biaf.or.kr/" },
    { name: "Bucheon International Fantastic Film Festival (BIFAN)", country: "South Korea", submissionInfo: "Check Website", website: "https://www.bifan.kr/" },
    { name: "Busan International Film Festival (BIFF)", country: "South Korea", submissionInfo: "Check Website", website: "https://www.biff.kr/" },
    { name: "Busan International Short Film Festival (BISFF)", country: "South Korea", submissionInfo: "Check Website", website: "https://www.bisff.org/" },
    { name: "JEONJU International Film Festival", country: "South Korea", submissionInfo: "Check Website", website: "https://eng.jeonjufest.kr/" },
    { name: "Seoul Independent Documentary Film & Video Festival (SIDOF)", country: "South Korea", submissionInfo: "Check Website", website: "https://sidof.org/" },
    { name: "Seoul International Cartoon & Animation Festival (SICAF)", country: "South Korea", submissionInfo: "Check Website", website: "https://sicaf.org/" },
    { name: "Seoul International Women's Film Festival (SIWFF)", country: "South Korea", submissionInfo: "Check Website", website: "https://www.siwff.or.kr/" },
    // Spain
    { name: "Aguilar Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://aguilarfilmfestival.es/" },
    { name: "Almería International Film Festival (FICAL)", country: "Spain", submissionInfo: "Check Website", website: "https://www.festivaldealmeria.com/" },
    { name: "Animac International Animation Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://www.animac.cat/" },
    { name: "Animakom FEST", country: "Spain", submissionInfo: "Check Website", website: "https://www.animakom.com/" },
    { name: "Asian Film Festival Barcelona (AFFBCN)", country: "Spain", submissionInfo: "Check Website", website: "https://asianfilmfestival.barcelona/" },
    { name: "Bilbao International Documentary and Short Film Festival (ZINEBI)", country: "Spain", submissionInfo: "Check Website", website: "https://zinebi.eus/" },
    { name: "Calella Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://www.calellafilmfestival.com/" },
    { name: "Certamen Internacional de Cortos Ciudad de Soria", country: "Spain", submissionInfo: "Check Website", website: "https://www.certamendecortos.org/" },
    // CONOFEST is already listed under Italy
    { name: "Curtocircuíto - Santiago de Compostela International Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://curtocircuito.org/" },
    { name: "Ed Salkin Valencia Independent Film Festival", country: "Spain", submissionInfo: "Check Website", website: "(Check FilmFreeway)" },
    { name: "El Ojo Cojo International Film Festival", country: "Spain", submissionInfo: "Check Website", website: "http://www.elojocojo.org/" },
    { name: "Elena Zilia Experimental Film Festival", country: "Spain", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    { name: "Festival de Cine Africano - FCAT", country: "Spain", submissionInfo: "Check Website", website: "https://www.fcat.es/" },
    { name: "Festival Internacional de Cine de Gijón (FICX)", country: "Spain", submissionInfo: "Check Website", website: "https://www.gijonfilmfestival.com/" },
    { name: "Festival Internacional de Cine de Huesca", country: "Spain", submissionInfo: "Check Website", website: "https://www.huesca-filmfestival.com/" },
    { name: "Festival Internacional de Cine de Las Palmas", country: "Spain", submissionInfo: "Check Website", website: "https://lpafilmfestival.com/" },
    { name: "Festival Internacional de Cine de San Sebastián", country: "Spain", submissionInfo: "Check Website", website: "https://www.sansebastianfestival.com/" },
    { name: "FILMETS Badalona Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://www.festivalfilmets.cat/" },
    { name: "Filmets Badalona Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://www.festivalfilmets.cat/" }, // Duplicate website
    { name: "Granada Film Fest - Cines del Sur", country: "Spain", submissionInfo: "Check Website", website: "https://www.cinesdelsur.com/" },
    { name: "Huesca International Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://www.huesca-filmfestival.com/" }, // Duplicate website
    { name: "Ibiza Cine Fest", country: "Spain", submissionInfo: "Check Website", website: "https://ibizacinefest.com/" },
    { name: "Imagineindia International Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://www.imagineindia.net/" },
    { name: "Lanzarote International Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://festivaldecinedelanzarote.com/" },
    { name: "Las Palmas de Gran Canaria International Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://lpafilmfestival.com/" }, // Duplicate website
    { name: "Madrid International Film Festival (MADRIFF)", country: "Spain", submissionInfo: "Check Website", website: "https://madriff.org/" },
    { name: "Mecal Pro, Barcelona International Short and Animation Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://mecalbcn.org/" },
    { name: "MiradasDoc International Documentary Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://miradasdoc.com/" },
    { name: "Molins Horror Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://www.molinsfilmfestival.com/" },
    { name: "Mostra de València - Cinema del Mediterrani", country: "Spain", submissionInfo: "Check Website", website: "https://lamostradevalencia.com/" },
    { name: "Ourense Film Festival (OUFF)", country: "Spain", submissionInfo: "Check Website", website: "https://ouff.org/" },
    { name: "San Sebastian International Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://www.sansebastianfestival.com/" }, // Duplicate website
    { name: "Semana de Cine de Medina del Campo", country: "Spain", submissionInfo: "Check Website", website: "https://medinafilmfestival.com/" },
    { name: "Semana Internacional de Cine de Valladolid (SEMINCI)", country: "Spain", submissionInfo: "Check Website", website: "https://www.seminci.es/" },
    { name: "Seville European Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://festivalcinesevilla.eu/" },
    { name: "Sitges International Fantastic Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://sitgesfilmfestival.com/" },
    { name: "Valencia International Film Festival Cinema Jove", country: "Spain", submissionInfo: "Check Website", website: "https://www.cinemajove.com/" },
    { name: "Valladolid International Film Week (SEMINCI)", country: "Spain", submissionInfo: "Check Website", website: "https://www.seminci.es/" }, // Duplicate website
    { name: "Xcèntric - CCCB Barcelona", country: "Spain", submissionInfo: "Check Website", website: "https://www.cccb.org/en/themes/tag/xcentric (Experimental film program)" },
    { name: "ZINEBI - Bilbao International Documentary and Short Film Festival", country: "Spain", submissionInfo: "Check Website", website: "https://zinebi.eus/" }, // Duplicate website
    // Sri Lanka
    { name: "Kameleon International Film Festival", country: "Sri Lanka", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    // Sweden
    { name: "CinemAfrica Film Festival", country: "Sweden", submissionInfo: "Check Website", website: "https://cinemafrica.se/" },
    { name: "Göteborg Film Festival", country: "Sweden", submissionInfo: "Check Website", website: "https://goteborgfilmfestival.se/" },
    { name: "Lund Fantastic Film Festival", country: "Sweden", submissionInfo: "Check Website", website: "https://www.fff.se/" },
    { name: "Malmö Arab Film Festival (MAFF)", country: "Sweden", submissionInfo: "Check Website", website: "https://maffswe.com/" },
    { name: "Stockholm International Film Festival", country: "Sweden", submissionInfo: "Check Website", website: "https://www.stockholmfilmfestival.se/" },
    { name: "Stockholm International Film Festival Junior", country: "Sweden", submissionInfo: "Check Website", website: "https://www.stockholmfilmfestival.se/junior" },
    { name: "Tempo Documentary Festival", country: "Sweden", submissionInfo: "Check Website", website: "https://tempofestival.se/" },
    { name: "Uppsala Short Film Festival", country: "Sweden", submissionInfo: "Check Website", website: "https://shortfilmfestival.com/" },
    // Switzerland
    { name: "Fribourg International Film Festival (FIFF)", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.fiff.ch/" },
    { name: "Geneva International Film Festival (GIFF)", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.giff.ch/" },
    { name: "Kurzfilmtage Winterthur", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.kurzfilmtage.ch/" },
    { name: "Locarno Film Festival", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.locarnofestival.ch/" },
    { name: "Neuchâtel International Fantastic Film Festival (NIFFF)", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.nifff.ch/" },
    { name: "Nyon Visions du Réel", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.visionsdureel.ch/" },
    { name: "Open Doors Locarno", country: "Switzerland", submissionInfo: "Check Website", website: "(Part of Locarno Festival)" },
    { name: "Ouchy Film Awards", country: "Switzerland", submissionInfo: "Check Website", website: "https://ouchyfilmawards.com/" },
    { name: "Solothurn Film Festival", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.solothurnerfilmtage.ch/" },
    { name: "Visions du Réel", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.visionsdureel.ch/" }, // Duplicate website
    { name: "Winterthur International Short Film Festival", country: "Switzerland", submissionInfo: "Check Website", website: "https://www.kurzfilmtage.ch/" }, // Duplicate website
    { name: "ZFF - Zurich Film Festival", country: "Switzerland", submissionInfo: "Check Website", website: "https://zff.com/" },
    { name: "Zurich Film Festival (ZFF)", country: "Switzerland", submissionInfo: "Check Website", website: "https://zff.com/" }, // Duplicate website
    // Taiwan
    { name: "Golden Horse Film Festival", country: "Taiwan", submissionInfo: "Check Website", website: "https://www.goldenhorse.org.tw/" },
    { name: "South Taiwan Film Festival", country: "Taiwan", submissionInfo: "Check Website", website: "https://southfilmtw.wixsite.com/southfilmtw" },
    { name: "Taiwan International Documentary Festival (TIDF)", country: "Taiwan", submissionInfo: "Check Website", website: "https://www.tidf.org.tw/" },
    { name: "Taiwan International Queer Film Festival (TIQFF)", country: "Taiwan", submissionInfo: "Check Website", website: "https://www.tiqff.org.tw/" },
    { name: "Urban Nomad Film Fest", country: "Taiwan", submissionInfo: "Check Website", website: "https://urbannomad.tw/" },
    { name: "Women Make Waves International Film Festival", country: "Taiwan", submissionInfo: "Check Website", website: "https://www.wmw.org.tw/" },
    // Tanzania
    { name: "Zanzibar International Film Festival (ZIFF)", country: "Tanzania", submissionInfo: "Check Website", website: "https://ziff.or.tz/" },
    // Tunisia
    { name: "Carthage Film Festival (Journées Cinématographiques de Carthage - JCC)", country: "Tunisia", submissionInfo: "Check Website", website: "https://www.jcctunisie.org/" },
    { name: "Gabes Cinema Fen", country: "Tunisia", submissionInfo: "Check Website", website: "https://www.gabescinemafen.com/" },
    { name: "Journées Cinématographiques de Carthage (JCC)", country: "Tunisia", submissionInfo: "Check Website", website: "https://www.jcctunisie.org/" }, // Duplicate website
    { name: "Tunis International Film Festival", country: "Tunisia", submissionInfo: "Check Website", website: "(Check local sources/Ministry of Culture)" },
    // Turkey
    { name: "Antalya Golden Orange Film Festival", country: "Turkey", submissionInfo: "Check Website", website: "https://www.antalyaff.com/" },
    { name: "Bosphorus Film Festival", country: "Turkey", submissionInfo: "Check Website", website: "https://bogazicifilmfestivali.com/" },
    { name: "Flying Broom International Women's Film Festival", country: "Turkey", submissionInfo: "Check Website", website: "https://www.ucansupurge.org/" },
    { name: "Golden Boll Film Festival (Adana)", country: "Turkey", submissionInfo: "Check Website", website: "https://altinkozaff.org.tr/" },
    { name: "Istanbul Film Festival", country: "Turkey", submissionInfo: "Check Website", website: "https://film.iksv.org/" },
    { name: "Istanbul International Architecture and Urban Film Festival", country: "Turkey", submissionInfo: "Check Website", website: "https://www.archfilmfest.org/" },
    { name: "Istanbul International Experimental Film Festival", country: "Turkey", submissionInfo: "Check Website", website: "https://istanbultexperimental.com/" },
    { name: "Istanbul International Short Film Festival", country: "Turkey", submissionInfo: "Check Website", website: "https://www.istanbulkisafilm.org/" },
    { name: "Randevu İstanbul Film Festivali", country: "Turkey", submissionInfo: "Check Website", website: "(Check TÜRSAK Foundation)" },
    // UAE (United Arab Emirates)
    { name: "Dubai International Film Festival (DIFF)", country: "UAE", submissionInfo: "Check Website", website: "(Currently on hiatus, check for updates)" },
    { name: "Middle East Film & Comic Con", country: "UAE", submissionInfo: "Check Website", website: "https://www.mefcc.com/ (Con, not primarily festival)" },
    { name: "Sharjah Film Platform", country: "UAE", submissionInfo: "Check Website", website: "https://sharjahart.org/sharjah-film-platform" },
    // UK (United Kingdom)
    { name: "Abertoir Horror Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.abertoir.co.uk/" },
    { name: "Belfast Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://belfastfilmfestival.org/" },
    { name: "BFI Flare: London LGBTQIA+ Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.bfi.org.uk/flare" },
    { name: "BFI London Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.bfi.org.uk/london-film-festival" },
    { name: "Birmingham Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.birminghamfilmfestival.co.uk/" },
    { name: "Bolton International Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.boltonfilmfestival.com/" },
    { name: "Bristol Independent Film Festival", country: "UK", submissionInfo: "Check Website", website: "(Check FilmFreeway)" },
    { name: "British Urban Film Festival (BUFF)", country: "UK", submissionInfo: "Check Website", website: "https://britishurbanfilmfestival.co.uk/" },
    { name: "Carmarthen Bay Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.carmarthenbayfilmfestival.co.uk/" },
    // Cinemagic is already listed under Ireland
    { name: "Cornwall Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://cornwallfilmfestival.com/" },
    { name: "Durham Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://durhamfilmfest.org.uk/" },
    { name: "East End Film Festival", country: "UK", submissionInfo: "Check Website", website: "(Check for current status/updates)" },
    { name: "Edinburgh International Film Festival (EIFF)", country: "UK", submissionInfo: "Check Website", website: "https://www.eif.co.uk/edinburgh-international-film-festival (Check for latest status)" },
    { name: "Encounters Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.encounters.film/" },
    { name: "FilmPride - Brighton & Hove Pride's Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.filmpride.org/" },
    { name: "Flatpack Festival", country: "UK", submissionInfo: "Check Website", website: "https://flatpackfestival.org.uk/" },
    { name: "Glasgow Short Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://glasgowshort.org/" },
    { name: "Kinofilm Manchester International Short Film & Animation Festival", country: "UK", submissionInfo: "Check Website", website: "http://kinofilm.org.uk/" },
    // Kinoteka is already listed under Poland (as UK location)
    { name: "Leeds International Film Festival (LIFF)", country: "UK", submissionInfo: "Check Website", website: "https://www.leedsfilm.com/" },
    { name: "Liverpool Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://liverpoolfilmfestival.com/" },
    { name: "London East Asia Film Festival (LEAFF)", country: "UK", submissionInfo: "Check Website", website: "https://www.leaff.org.uk/" },
    { name: "London Film Festival (BFI)", country: "UK", submissionInfo: "Check Website", website: "https://www.bfi.org.uk/london-film-festival" }, // Duplicate website
    { name: "London Independent Film Festival (LIFF)", country: "UK", submissionInfo: "Check Website", website: "https://www.liff.org/" },
    { name: "London International Animation Festival (LIAF)", country: "UK", submissionInfo: "Check Website", website: "https://liaf.org.uk/" },
    { name: "London Migration Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.migrationcollective.com/london-migration-film-festival" },
    { name: "London Short Film Festival (LSFF)", country: "UK", submissionInfo: "Check Website", website: "https://shortfilms.org.uk/" },
    { name: "London Sundance Film Festival", country: "UK", submissionInfo: "Check Website", website: "(Check Sundance Institute/Picturehouse for updates)" },
    { name: "Manchester Animation Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.manchesteranimationfestival.co.uk/" },
    { name: "Open City Documentary Festival", country: "UK", submissionInfo: "Check Website", website: "https://opencitylondon.com/" },
    { name: "Raindance Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://raindance.org/festival/" },
    { name: "Ramsgate International Film & TV Festival", country: "UK", submissionInfo: "Check Website", website: "https://ramsgateiftvfest.org/" },
    { name: "Sandgrounder International Short Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.sandgroundershorff.co.uk/" },
    { name: "Scotland Loves Anime", country: "UK", submissionInfo: "Check Website", website: "https://www.lovesanimation.com/" },
    { name: "Scottish Queer International Film Festival (SQIFF)", country: "UK", submissionInfo: "Check Website", website: "https://www.sqiff.org/" },
    { name: "Screentest: The National Student Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.screentestfest.org.uk/" },
    { name: "Sheffield DocFest", country: "UK", submissionInfo: "Check Website", website: "https://sheffdocfest.com/" },
    { name: "StAnza: Scotland's International Poetry Festival", country: "UK", submissionInfo: "Check Website", website: "https://stanzapoetry.org/ (May include film poetry)" },
    { name: "UK Asian Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://www.ukaff.com/" },
    { name: "UK Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://ukfilmfestival.com/" },
    { name: "Whoops Film Festival", country: "UK", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    { name: "Winchester Film Festival", country: "UK", submissionInfo: "Check Website", website: "https://winchesterfilmfestival.com/" },
    // Ukraine
    { name: "Kyiv Critics' Week", country: "Ukraine", submissionInfo: "Check Website", website: "https://kcw.com.ua/" },
    { name: "Kyiv International Film Festival Molodist", country: "Ukraine", submissionInfo: "Check Website", website: "https://molodist.com/" },
    { name: "Lviv International Short Film Festival Wiz-Art", country: "Ukraine", submissionInfo: "Check Website", website: "https://wiz-art.ua/" },
    { name: "Molodist Kyiv International Film Festival", country: "Ukraine", submissionInfo: "Check Website", website: "https://molodist.com/" }, // Duplicate website
    { name: "Odesa International Film Festival (OIFF)", country: "Ukraine", submissionInfo: "Check Website", website: "https://oiff.com.ua/ (Check status/location)" },
    { name: "Ukraine International Drone Film Festival", country: "Ukraine", submissionInfo: "Check Website", website: "(Check FilmFreeway/local sources)" },
    { name: "Wiz-Art Lviv International Short Film Festival", country: "Ukraine", submissionInfo: "Check Website", website: "https://wiz-art.ua/" }, // Duplicate website
    { name: "YouFilmFest", country: "Ukraine", submissionInfo: "Check Website", website: "(Check local sources/FilmFreeway)" },
    // USA (Excluding Sundance - already added)
    { name: "Academy Awards (Oscars)", country: "USA", submissionInfo: "Check Website", website: "https://www.oscars.org/" },
    { name: "AFI DOCS", country: "USA", submissionInfo: "Check Website", website: "https://docs.afi.com/" },
    { name: "AFI FEST", country: "USA", submissionInfo: "Check Website", website: "https://fest.afi.com/" },
    { name: "African Film Festival New York", country: "USA", submissionInfo: "Check Website", website: "https://africanfilmny.org/" },
    { name: "American Black Film Festival (ABFF)", country: "USA", submissionInfo: "Check Website", website: "https://www.abff.com/" },
    { name: "American Documentary and Animation Film Festival (AmDocs)", country: "USA", submissionInfo: "Check Website", website: "https://www.amdocfilmfest.com/" },
    { name: "Ann Arbor Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.aafilmfest.org/" },
    { name: "Animation Block Party", country: "USA", submissionInfo: "Check Website", website: "https://www.animationblock.com/" },
    { name: "Arab Film Festival (AFF - San Francisco)", country: "USA", submissionInfo: "Check Website", website: "https://arabfilmfestival.org/" },
    { name: "Art All Night - Trenton", country: "USA", submissionInfo: "Check Website", website: "https://www.artallnighttrenton.org/ (May include film)" },
    { name: "Art of Brooklyn Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.aobff.org/" },
    { name: "Aspen Shortsfest", country: "USA", submissionInfo: "Check Website", website: "https://aspenfilm.org/aspen-shortsfest/" },
    { name: "Athens International Film and Video Festival", country: "USA", submissionInfo: "Check Website", website: "https://athensfilmfest.org/" },
    { name: "Atlanta Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.atlantafilmfestival.com/" },
    { name: "Austin Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://austinfilmfestival.com/" },
    { name: "Baltimore International Film Festival (MdFF)", country: "USA", submissionInfo: "Check Website", website: "https://mdfilmfest.com/" },
    { name: "BendFilm Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.bendfilm.org/" },
    { name: "Big Apple Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.bigapplefilmfestival.com/" },
    { name: "Big Muddy Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://bigmuddyfilm.com/" },
    { name: "Big Sky Documentary Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.bigskyfilmfest.org/" },
    { name: "BlackStar Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.blackstarfest.org/" },
    { name: "Boston SciFi Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://bostonscifi.com/" },
    { name: "Boston Underground Film Festival (BUFF)", country: "USA", submissionInfo: "Check Website", website: "https://bostonunderground.org/" },
    { name: "Brooklyn Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.brooklynfilmfestival.org/" },
    { name: "Brooklyn Horror Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://brooklynhorrorfest.com/" },
    { name: "Buffalo International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.buffalofilm.org/" },
    { name: "Bushwick Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://bushwickfilmfestival.com/" },
    { name: "Chattanooga Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.chattfilmfest.org/" },
    { name: "Chicago Critics Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://chicagocriticsfilmfestival.com/" },
    { name: "Chicago International Children's Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://facets.org/cicff/" },
    { name: "Chicago International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.chicagofilmfestival.com/" },
    { name: "Chicago Underground Film Festival (CUFF)", country: "USA", submissionInfo: "Check Website", website: "https://cuff.org/" },
    { name: "Cine Las Americas International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://cinelasamericas.org/" },
    { name: "CineFestival (San Antonio)", country: "USA", submissionInfo: "Check Website", website: "https://guadalupeculturalarts.org/cinefestival/" },
    { name: "Cinequest Film & Creativity Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.cinequest.org/" },
    { name: "Cleveland International Film Festival (CIFF)", country: "USA", submissionInfo: "Check Website", website: "https://www.clevelandfilm.org/" },
    { name: "Crested Butte Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://cbfilmfest.org/" },
    { name: "DaVinci International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://dviff.org/" },
    { name: "DC Shorts Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://dcshorts.com/" },
    { name: "DeadCENTER Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.deadcenterfilm.org/" },
    { name: "Deep Focus Film Festival", country: "USA", submissionInfo: "Check Website", website: "(Check FilmFreeway/Local listings)" },
    { name: "Denver Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.denverfilm.org/" },
    { name: "Environmental Film Festival in the Nation's Capital (DCEFF)", country: "USA", submissionInfo: "Check Website", website: "https://dceff.org/" },
    { name: "Fantastic Fest", country: "USA", submissionInfo: "Check Website", website: "https://fantasticfest.com/" },
    { name: "Film Independent Spirit Awards", country: "USA", submissionInfo: "Check Website", website: "https://www.filmindependent.org/spirit-awards/" },
    { name: "Film Maudit 2.0", country: "USA", submissionInfo: "Check Website", website: "https://filmmaudit.org/" },
    { name: "Film Society of Lincoln Center (New York Film Festival)", country: "USA", submissionInfo: "Check Website", website: "https://www.filmlinc.org/nyff/" },
    { name: "Flickers' Rhode Island International Film Festival (RIIFF)", country: "USA", submissionInfo: "Check Website", website: "https://rifilmfest.org/" },
    { name: "Florida Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://floridafilmfestival.com/" },
    { name: "Frameline: San Francisco International LGBTQ+ Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.frameline.org/" },
    { name: "Full Frame Documentary Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.fullframefest.org/" },
    { name: "Hamptons International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://hamptonsfilmfest.org/" },
    { name: "Harlem International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://harlemfilmfestival.org/" },
    { name: "Havana Film Festival New York", country: "USA", submissionInfo: "Check Website", website: "https://hffny.com/" },
    { name: "Hawaii International Film Festival (HIFF)", country: "USA", submissionInfo: "Check Website", website: "https://hiff.org/" },
    { name: "Heartland International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://heartlandfilm.org/" },
    { name: "Hollywood Shorts Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.hollywoodshorts.com/" },
    { name: "Hot Springs Documentary Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.hsdfi.org/" },
    { name: "Houston Cinema Arts Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.cinemahtx.org/" },
    { name: "Hungarian Film Festival of Los Angeles", country: "USA", submissionInfo: "Check Website", website: "https://hufestival.com/" },
    { name: "IFFBoston (Independent Film Festival Boston)", country: "USA", submissionInfo: "Check Website", website: "https://iffboston.org/" },
    { name: "Indie Grits Film Festival", country: "USA", submissionInfo: "Check Website", website: "(Check Nickelodeon Theatre, SC)" },
    { name: "Indie Memphis Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.indiememphis.org/" },
    { name: "Jackson Wild", country: "USA", submissionInfo: "Check Website", website: "https://www.jacksonwild.org/ (Nature/Conservation)" },
    { name: "Japan Cuts: Festival of New Japanese Film", country: "USA", submissionInfo: "Check Website", website: "https://www.japansociety.org/page/programs/film/japan-cuts" },
    { name: "LA Shorts International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.lashortsfest.com/" },
    { name: "Latino & Iberian Film Festival at Yale (LIFFY)", country: "USA", submissionInfo: "Check Website", website: "https://liffy.yale.edu/" },
    { name: "Loft Film Fest", country: "USA", submissionInfo: "Check Website", website: "https://loftfilmfest.org/" },
    { name: "Los Angeles Asian Pacific Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://festival.vcmedia.org/" },
    { name: "Los Angeles Film Festival (LAFF)", country: "USA", submissionInfo: "Check Website", website: "(Currently on hiatus, check Film Independent)" },
    { name: "Los Angeles Latino International Film Festival (LALIFF)", country: "USA", submissionInfo: "Check Website", website: "https://laliff.org/" },
    { name: "Louisiana International Film Festival (LIFF)", country: "USA", submissionInfo: "Check Website", website: "https://www.lifilmfest.org/" },
    { name: "Mammoth Lakes Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.mammothlakesfilmfestival.com/" },
    { name: "Manhattan Short Film Festival", country: "USA/Global", submissionInfo: "Check Website", website: "https://manhattanshort.com/" },
    { name: "Maryland Film Festival (MdFF)", country: "USA", submissionInfo: "Check Website", website: "https://mdfilmfest.com/" }, // Duplicate website
    { name: "Maui Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.mauifilmfestival.com/" },
    { name: "Method Fest Independent Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://methodfest.com/" },
    { name: "Miami Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://miamifilmfestival.com/" },
    { name: "Mill Valley Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.mvff.com/" },
    { name: "Minneapolis St. Paul International Film Festival (MSPIFF)", country: "USA", submissionInfo: "Check Website", website: "https://mspfilm.org/festivals/mspiff/" },
    { name: "Montclair Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://montclairfilm.org/" },
    { name: "Mountainfilm Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.mountainfilm.org/" },
    { name: "Nantucket Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://nantucketfilmfestival.org/" },
    { name: "Naples Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://naplesfilmfest.com/" },
    { name: "Nashville Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://nashvillefilmfestival.org/" },
    { name: "National Film Festival for Talented Youth (NFFTY)", country: "USA", submissionInfo: "Check Website", website: "https://www.nffty.org/" },
    { name: "New Directors/New Films (MoMA & Film at Lincoln Center)", country: "USA", submissionInfo: "Check Website", website: "https://www.newdirectors.org/" },
    { name: "New Hampshire Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://nhfilmfestival.com/" },
    { name: "New Orleans Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://neworleansfilmsociety.org/festival/" },
    { name: "Newport Beach Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://newportbeachfilmfest.com/" },
    { name: "New York African Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://africanfilmny.org/" }, // Duplicate website
    { name: "New York Asian Film Festival (NYAFF)", country: "USA", submissionInfo: "Check Website", website: "https://www.nyaff.org/" },
    { name: "New York Children's Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://nyicff.org/" },
    { name: "New York Film Festival (NYFF)", country: "USA", submissionInfo: "Check Website", website: "https://www.filmlinc.org/nyff/" }, // Duplicate website
    { name: "New York Independent Film Festival", country: "USA", submissionInfo: "Check Website", website: "(Multiple festivals use similar names, verify)" },
    { name: "New York Jewish Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.thejewishmuseum.org/nyjf" },
    { name: "New York Latino Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://nylatinofilmfestival.com/" },
    { name: "Nordic Lights Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.nordicmuseum.org/nlff" },
    { name: "Nouvelle Vague International Film Festival", country: "USA", submissionInfo: "Check Website", website: "(Check FilmFreeway)" },
    { name: "Oak Cliff Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://oakclifffilmfestival.com/" },
    { name: "Oakland International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://oiff.org/" },
    { name: "Omaha Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://omahafilmfestival.org/" },
    { name: "Outfest Los Angeles LGBTQ+ Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.outfest.org/" },
    { name: "Overlook Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.overlookfilmfest.com/" },
    { name: "Palm Springs International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.psfilmfest.org/" },
    { name: "Palm Springs International ShortFest", country: "USA", submissionInfo: "Check Website", website: "https://www.psfilmfest.org/shortfest" },
    { name: "Pan African Film Festival (PAFF)", country: "USA", submissionInfo: "Check Website", website: "https://www.paff.org/" },
    { name: "Philadelphia Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://filmadelphia.org/festival/" },
    { name: "Polari - Austin LGBTQ+ Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.polarifest.com/" },
    { name: "Port Townsend Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://ptfilmfest.com/" },
    { name: "Portland Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://portlandfilm.org/" },
    { name: "Provincetown International Film Festival (PIFF)", country: "USA", submissionInfo: "Check Website", website: "https://www.provincetownfilm.org/festival/" },
    { name: "QFest St. Louis", country: "USA", submissionInfo: "Check Website", website: "https://cinemastlouis.org/qfest" },
    { name: "Reel Affirmations: Washington DC's International LGBTQ Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://reelaffirmations.org/" },
    { name: "Reel Short Film Festival", country: "USA", submissionInfo: "Check Website", website: "(Check local listings/FilmFreeway)" },
    { name: "Rhode Island International Film Festival (RIIFF)", country: "USA", submissionInfo: "Check Website", website: "https://rifilmfest.org/" }, // Duplicate website
    { name: "Richmond International Film Festival (RIFF)", country: "USA", submissionInfo: "Check Website", website: "https://rvafilmfestival.com/" },
    { name: "RiverRun International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://riverrunfilm.com/" },
    { name: "Roxie Mixtape", country: "USA", submissionInfo: "Check Website", website: "(Check Roxie Theater, San Francisco)" },
    { name: "San Diego International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://sdfilmfest.com/" },
    { name: "San Diego Latino Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://sdlatinofilm.com/" },
    { name: "San Francisco Documentary Festival (SF DocFest)", country: "USA", submissionInfo: "Check Website", website: "https://sfdocfest.com/" },
    { name: "San Francisco Greek Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://sfgff.org/" },
    { name: "San Francisco Green Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://greenfilmfest.org/" },
    { name: "San Francisco Independent Film Festival (SF IndieFest)", country: "USA", submissionInfo: "Check Website", website: "https://sfindie.com/" },
    { name: "San Francisco International Film Festival (SFFILM)", country: "USA", submissionInfo: "Check Website", website: "https://sffilm.org/festival" },
    { name: "San Francisco Jewish Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://jfi.org/sfjff" },
    { name: "Santa Barbara International Film Festival (SBIFF)", country: "USA", submissionInfo: "Check Website", website: "https://sbiff.org/" },
    { name: "Santa Fe Independent Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://santafeindependent.com/" },
    { name: "Sarasota Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.sarasotafilmfestival.com/" },
    { name: "Savannah Film Festival (SCAD)", country: "USA", submissionInfo: "Check Website", website: "https://filmfest.scad.edu/" },
    { name: "SDFF - Sebastopol Documentary Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://sebastopolfilm.org/" },
    { name: "Seattle International Film Festival (SIFF)", country: "USA", submissionInfo: "Check Website", website: "https://www.siff.net/" },
    { name: "Sidewalk Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.sidewalkfest.com/" },
    { name: "Slamdance Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://slamdance.com/" },
    { name: "South by Southwest (SXSW)", country: "USA", submissionInfo: "Check Website", website: "https://www.sxsw.com/" },
    { name: "St. Louis International Film Festival (SLIFF)", country: "USA", submissionInfo: "Check Website", website: "https://cinemastlouis.org/sliff" },
    { name: "Surrealist Film Festival", country: "USA", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    { name: "Tacoma Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.tacomafilmfestival.com/" },
    { name: "Telluride Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.telluridefilmfestival.org/" },
    { name: "Traverse City Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.traversecityfilmfest.org/" },
    { name: "Trenton Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://trentonfilmfestival.org/" },
    { name: "True/False Film Fest", country: "USA", submissionInfo: "Check Website", website: "https://truefalse.org/" },
    { name: "Truckee Meadows Community College Film Festival", country: "USA", submissionInfo: "Check Website", website: "(Check TMCC website/FilmFreeway)" },
    { name: "Twin Cities Film Fest", country: "USA", submissionInfo: "Check Website", website: "https://twincitiesfilmfest.org/" },
    { name: "Urbanworld Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://www.urbanworld.org/" },
    { name: "Utah Film Festival", country: "USA", submissionInfo: "Check Website", website: "(Check FilmFreeway/local listings)" },
    { name: "Utopia Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://utopiafilmfestival.org/" },
    { name: "Wichita Film Festival (Tallgrass Film Festival)", country: "USA", submissionInfo: "Check Website", website: "https://tallgrassfilm.org/" },
    { name: "Woodstock Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://woodstockfilmfestival.org/" },
    { name: "WorldFest-Houston International Film Festival", country: "USA", submissionInfo: "Check Website", website: "https://worldfest.org/" },
    // Uzbekistan
    { name: "Tashkent International Film Festival", country: "Uzbekistan", submissionInfo: "Check Website", website: "(Check official government/cultural sources)" },
    // Multiple Locations
    { name: "Human Rights Watch Film Festival", country: "Multiple Locations", submissionInfo: "Check Website", website: "https://ff.hrw.org/" },
    { name: "ReelAbilities Film Festival", country: "Multiple Locations", submissionInfo: "Check Website", website: "https://reelabilities.org/" },
    { name: "Women Deliver Film Festival", country: "Global/Various", submissionInfo: "Check Website", website: "(Linked to Women Deliver Conferences)" },
    // Online
    { name: "Labocine", country: "Online", submissionInfo: "Check Website", website: "https://www.labocine.com/ (Science film platform)" },
    { name: "Nowness", country: "Online", submissionInfo: "Check Website", website: "https://www.nowness.com/ (Platform, curated content)" },
    // Add any missing unique entries here if necessary
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