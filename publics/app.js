const translations = {
  en: {
    nav: { home: 'Home', races: 'All Races', horses: 'Horses', jockeys: 'Jockeys', hall: 'Hall of Fame', wiki: 'Wiki' },
    header: { tickets: 'My Tickets', login: 'Login', signup: 'Sign up' },
    hero: {
      title: 'EXPERIENCE THE THRILL OF CHAMPIONSHIP RACING',
      subtitle: 'Book premium race tickets, manage your cart, and complete checkout with reserved seating.'
    },
    home: {
      benefit1Title: 'Premium Experience',
      benefit2Title: 'Secure Booking',
      benefit3Title: 'Expert Insights'
    },
    races: {
      eyebrow: 'Upcoming Tickets',
      title: 'Races currently selling tickets',
      subtitle: 'Verified 2026 race schedules in the USA, Japan, and the UK with active ticket inventory.',
      featuredTitle: 'Featured Races',
      featuredSubtitle: 'Upcoming marquee events with live countdowns and direct booking.'
    },
    horses: {
      eyebrow: 'Active Racing Horses',
      title: 'Champions competing in prestigious racing events',
      subtitle: 'Verified records, lineage, and major titles for each horse.'
    },
    jockeys: {
      eyebrow: 'Professional Jockeys',
      title: 'World-class riders competing at the highest level',
      subtitle: 'Detailed career statistics and awards from verified sources.'
    },
    hall: {
      eyebrow: 'Hall of Fame',
      title: 'Legendary horses who made racing history',
      subtitle: 'Retirement and memorial dates are included when available.'
    },
    wiki: {
      eyebrow: 'Royal Racing Wiki',
      title: 'Verified knowledge base for horses, jockeys, and legends',
      subtitle: 'Browse dedicated sections for real-world racing data.',
      horsesTitle: 'Horses',
      horsesBody: 'Active and recent champions with lineage and performance statistics.',
      jockeysTitle: 'Jockeys',
      jockeysBody: 'Professional rider profiles with career milestones and awards.',
      hallTitle: 'Hall of Fame',
      hallBody: 'Legendary horses celebrated for historic victories.'
    },
    footer: { copy: '\u00a9 2026 Royal Racing. Built for verified racing fans worldwide.' },
    tickets: {
      title: 'My Tickets',
      cartTitle: 'Cart',
      historyTitle: 'Purchase History',
      empty: 'No tickets in cart.',
      historyEmpty: 'No purchase history yet.',
      remove: 'Remove',
      pay: 'Select Seat & Pay',
      invoice: 'Export Invoice PDF',
      code: 'Ticket ID',
      seat: 'Seat',
      cluster: 'Cluster',
      tier: 'Tier',
      status: 'Status',
      statusPending: 'Pending Payment',
      statusPaid: 'Paid',
      race: 'Race'
    },
    auth: {
      loginTitle: 'Login',
      signupTitle: 'Sign up',
      profileTitle: 'Profile',
      userLabel: 'Email or display name',
      displayName: 'Display Name',
      emailLabel: 'Email',
      dobLabel: 'Date of Birth',
      passwordLabel: 'Password',
      loginButton: 'Login',
      signupButton: 'Create account',
      saveProfile: 'Save profile',
      changeAvatar: 'Change avatar',
      loginSuccess: 'Logged in successfully.',
      signupSuccess: 'Account created successfully.',
      profileSuccess: 'Profile updated.',
      avatarSuccess: 'Avatar updated.',
      welcome: 'Welcome',
      logout: 'Logout'
    },
    payment: {
      title: 'Payment',
      detailsTitle: 'Customer Details',
      seatMapTitle: 'Seat Map',
      name: 'Name',
      address: 'Address',
      email: 'Email',
      methodLabel: 'Payment Method',
      methodVisaMaster: 'Visa / Mastercard',
      methodPaypal: 'PayPal',
      cardholderName: 'Cardholder Name',
      cardNumber: 'Card Number',
      cvv: 'CVV',
      expiryDate: 'Expiry Date',
      month: 'MM',
      year: 'YY',
      race: 'Race',
      seat: 'Seat',
      cluster: 'Cluster',
      tier: 'Ticket Tier',
      total: 'Total',
      payNow: 'Confirm Payment',
      seatHint: 'Rows A-C: Premium, D-F: Gold, G-I: Standard.'
    },
    labels: {
      countdown: 'Countdown',
      seatsLeft: 'Seats left',
      horsesCount: 'horses',
      addToCart: 'Add to Cart',
      buyNow: 'Buy Now',
      location: 'Location',
      schedule: 'Schedule',
      startsOn: 'Starts on',
      days: 'Days',
      hours: 'Hours',
      mins: 'Mins',
      secs: 'Secs',
      liveNow: 'Live now',
      record: 'Record',
      titles: 'Major titles',
      started: 'Started',
      wins: 'Wins',
      awards: 'Awards',
      memorial: 'Memorial'
    },
    toast: {
      cartAdded: 'Ticket added to cart.',
      purchaseOk: 'Payment completed successfully.',
      purchaseError: 'Unable to complete payment.',
      chooseSeat: 'Please choose a seat before paying.',
      loginRequired: 'Please log in to continue.',
      invoiceReady: 'Invoice PDF has been generated.',
      loadError: 'Some sections could not be loaded.'
    },
    invoice: {
      title: 'Ticket Invoice',
      thanks: 'Thank you for using our service.',
      customer: 'Customer',
      ticketId: 'Ticket ID',
      amount: 'Amount',
      ticketType: 'Ticket Type',
      seatNumber: 'Seat Number',
      cluster: 'Cluster',
      timestamp: 'Time'
    }
  },
  vi: {
    nav: { home: '\u0054rang ch\u1ee7', races: 'T\u1ea5t c\u1ea3 ch\u1eb7ng \u0111ua', horses: 'Ng\u1ef1a', jockeys: 'N\u00e0i ng\u1ef1a', hall: 'Hall of Fame', wiki: 'Wiki' },
    header: { tickets: 'V\u00e9 c\u1ee7a t\u00f4i', login: '\u0110\u0103ng nh\u1eadp', signup: '\u0110\u0103ng k\u00fd' },
    hero: {
      title: 'TR\u1ea2I NGHI\u1ec6M S\u1ee8C H\u00daT C\u1ee6A NH\u1eeeNG GI\u1ea2I \u0110UA V\u00d4 \u0110\u1ecaCH',
      subtitle: '\u0110\u1eb7t v\u00e9 \u0111ua ng\u1ef1a cao c\u1ea5p, qu\u1ea3n l\u00fd gi\u1ecf h\u00e0ng v\u00e0 thanh to\u00e1n v\u1edbi s\u01a1 \u0111\u1ed3 gh\u1ebf \u0111\u1eb7t tr\u01b0\u1edbc.'
    },
    home: {
      benefit1Title: 'Tr\u1ea3i nghi\u1ec7m cao c\u1ea5p',
      benefit2Title: '\u0110\u1eb7t v\u00e9 an to\u00e0n',
      benefit3Title: 'Ph\u00e2n t\u00edch chuy\u00ean s\u00e2u'
    },
    races: {
      eyebrow: 'V\u00e9 \u0111ang m\u1edf b\u00e1n',
      title: 'C\u00e1c ch\u1eb7ng \u0111ua \u0111ang b\u00e1n v\u00e9',
      subtitle: 'L\u1ecbch \u0111ua ch\u00ednh th\u1ee9c m\u00f9a 2026 t\u1ea1i M\u1ef9, Nh\u1eadt v\u00e0 Anh v\u1edbi s\u1ed1 gh\u1ebf c\u1eadp nh\u1eadt theo th\u1eddi gian th\u1ef1c.',
      featuredTitle: 'Ch\u1eb7ng \u0111ua n\u1ed5i b\u1eadt',
      featuredSubtitle: 'S\u1ef1 ki\u1ec7n s\u1eafp t\u1edbi v\u1edbi \u0111\u1ebfm ng\u01b0\u1ee3c tr\u1ef1c ti\u1ebfp v\u00e0 \u0111\u1eb7t v\u00e9 ngay.'
    },
    horses: {
      eyebrow: 'Ng\u1ef1a \u0111ua \u0111ang thi \u0111\u1ea5u',
      title: 'Nh\u1eefng nh\u00e0 v\u00f4 \u0111\u1ecbch t\u1ea1i c\u00e1c gi\u1ea3i \u0111ua danh gi\u00e1',
      subtitle: 'H\u1ed3 s\u01a1, ph\u1ea3 h\u1ec7 v\u00e0 th\u00e0nh t\u00edch n\u1ed5i b\u1eadt c\u1ee7a t\u1eebng ng\u1ef1a.'
    },
    jockeys: {
      eyebrow: 'N\u00e0i ng\u1ef1a chuy\u00ean nghi\u1ec7p',
      title: 'Nh\u1eefng tay \u0111ua \u0111\u1eb3ng c\u1ea5p th\u1ebf gi\u1edbi',
      subtitle: 'Th\u1ed1ng k\u00ea s\u1ef1 nghi\u1ec7p chi ti\u1ebft v\u00e0 c\u00e1c gi\u1ea3i th\u01b0\u1edfng ti\u00eau bi\u1ec3u.'
    },
    hall: {
      eyebrow: 'Hall of Fame',
      title: 'Nh\u1eefng huy\u1ec1n tho\u1ea1i t\u1ea1o n\u00ean l\u1ecbch s\u1eed \u0111ua ng\u1ef1a',
      subtitle: 'Bao g\u1ed3m th\u00f4ng tin ngh\u1ec9 h\u01b0u ho\u1eb7c ng\u00e0y t\u01b0\u1edfng ni\u1ec7m khi c\u00f3.'
    },
    wiki: {
      eyebrow: 'Wiki Royal Racing',
      title: 'Kho d\u1eef li\u1ec7u ng\u1ef1a, n\u00e0i ng\u1ef1a v\u00e0 huy\u1ec1n tho\u1ea1i',
      subtitle: 'Truy c\u1eadp c\u00e1c m\u1ee5c d\u1eef li\u1ec7u th\u1ef1c t\u1ebf \u0111\u00e3 x\u00e1c minh.',
      horsesTitle: 'Ng\u1ef1a',
      horsesBody: 'Th\u00f4ng tin ng\u1ef1a \u0111ang thi \u0111\u1ea5u v\u00e0 c\u00e1c nh\u00e0 v\u00f4 \u0111\u1ecbch g\u1ea7n \u0111\u00e2y.',
      jockeysTitle: 'N\u00e0i ng\u1ef1a',
      jockeysBody: 'H\u1ed3 s\u01a1 n\u00e0i ng\u1ef1a v\u1edbi th\u00e0nh t\u00edch n\u1ed5i b\u1eadt.',
      hallTitle: 'Hall of Fame',
      hallBody: 'Nh\u1eefng huy\u1ec1n tho\u1ea1i v\u1edbi chi\u1ebfn th\u1eafng l\u1ecbch s\u1eed.'
    },
    footer: { copy: '\u00a9 2026 Royal Racing. D\u00e0nh cho ng\u01b0\u1eddi h\u00e2m m\u1ed9 \u0111ua ng\u1ef1a to\u00e0n c\u1ea7u.' },
    tickets: {
      title: 'V\u00e9 c\u1ee7a t\u00f4i',
      cartTitle: 'Gi\u1ecf h\u00e0ng',
      historyTitle: 'L\u1ecbch s\u1eed mua v\u00e9',
      empty: 'Ch\u01b0a c\u00f3 v\u00e9 n\u00e0o trong gi\u1ecf.',
      historyEmpty: 'Ch\u01b0a c\u00f3 l\u1ecbch s\u1eed mua v\u00e9.',
      remove: 'X\u00f3a',
      pay: 'Ch\u1ecdn gh\u1ebf v\u00e0 thanh to\u00e1n',
      invoice: 'Xu\u1ea5t h\u00f3a \u0111\u01a1n PDF',
      code: 'M\u00e3 v\u00e9',
      seat: 'S\u1ed1 gh\u1ebf',
      cluster: 'C\u1ee5m',
      tier: 'H\u1ea1ng v\u00e9',
      status: 'Tr\u1ea1ng th\u00e1i',
      statusPending: 'Ch\u1edd thanh to\u00e1n',
      statusPaid: '\u0110\u00e3 thanh to\u00e1n',
      race: 'Ch\u1eb7ng \u0111ua'
    },
    auth: {
      loginTitle: '\u0110\u0103ng nh\u1eadp',
      signupTitle: '\u0110\u0103ng k\u00fd',
      profileTitle: 'H\u1ed3 s\u01a1',
      userLabel: 'Email ho\u1eb7c t\u00ean hi\u1ec3n th\u1ecb',
      displayName: 'T\u00ean hi\u1ec3n th\u1ecb',
      emailLabel: 'Email',
      dobLabel: 'Ng\u00e0y th\u00e1ng n\u0103m sinh',
      passwordLabel: 'M\u1eadt kh\u1ea9u',
      loginButton: '\u0110\u0103ng nh\u1eadp',
      signupButton: 'T\u1ea1o t\u00e0i kho\u1ea3n',
      saveProfile: 'L\u01b0u h\u1ed3 s\u01a1',
      changeAvatar: '\u0110\u1ed5i \u1ea3nh \u0111\u1ea1i di\u1ec7n',
      loginSuccess: '\u0110\u0103ng nh\u1eadp th\u00e0nh c\u00f4ng.',
      signupSuccess: 'T\u1ea1o t\u00e0i kho\u1ea3n th\u00e0nh c\u00f4ng.',
      profileSuccess: 'C\u1eadp nh\u1eadt h\u1ed3 s\u01a1 th\u00e0nh c\u00f4ng.',
      avatarSuccess: 'C\u1eadp nh\u1eadt \u1ea3nh \u0111\u1ea1i di\u1ec7n th\u00e0nh c\u00f4ng.',
      welcome: 'Xin ch\u00e0o',
      logout: '\u0110\u0103ng xu\u1ea5t'
    },
    payment: {
      title: 'Thanh to\u00e1n',
      detailsTitle: 'Th\u00f4ng tin kh\u00e1ch h\u00e0ng',
      seatMapTitle: 'S\u01a1 \u0111\u1ed3 gh\u1ebf',
      name: 'T\u00ean',
      address: '\u0110\u1ecba ch\u1ec9',
      email: 'Email',
      methodLabel: 'Ph\u01b0\u01a1ng th\u1ee9c thanh to\u00e1n',
      methodVisaMaster: 'Visa / Mastercard',
      methodPaypal: 'PayPal',
      cardholderName: 'T\u00ean ch\u1ee7 th\u1ebb',
      cardNumber: 'S\u1ed1 th\u1ebb',
      cvv: 'CVV',
      expiryDate: 'Ng\u00e0y h\u1ebft h\u1ea1n',
      month: 'MM',
      year: 'YY',
      race: 'Ch\u1eb7ng \u0111ua',
      seat: 'Gh\u1ebf',
      cluster: 'C\u1ee5m',
      tier: 'H\u1ea1ng v\u00e9',
      total: 'T\u1ed5ng ti\u1ec1n',
      payNow: 'X\u00e1c nh\u1eadn thanh to\u00e1n',
      seatHint: 'D\u00e3y A-C: Premium, D-F: Gold, G-I: Standard.'
    },
    labels: {
      countdown: '\u0110\u1ebfm ng\u01b0\u1ee3c',
      seatsLeft: 'Ch\u1ed7 c\u00f2n l\u1ea1i',
      horsesCount: 'ng\u1ef1a',
      addToCart: 'Th\u00eam v\u00e0o gi\u1ecf h\u00e0ng',
      buyNow: 'Mua ngay',
      location: '\u0110\u1ecba \u0111i\u1ec3m',
      schedule: 'L\u1ecbch thi \u0111\u1ea5u',
      startsOn: 'Ng\u00e0y kh\u1edfi tranh',
      days: 'Ng\u00e0y',
      hours: 'Gi\u1edd',
      mins: 'Ph\u00fat',
      secs: 'Gi\u00e2y',
      liveNow: '\u0110ang di\u1ec5n ra',
      record: 'Th\u00e0nh t\u00edch',
      titles: 'Danh hi\u1ec7u l\u1edbn',
      started: 'N\u0103m b\u1eaft \u0111\u1ea7u',
      wins: 'S\u1ed1 tr\u1eadn th\u1eafng',
      awards: 'Gi\u1ea3i th\u01b0\u1edfng',
      memorial: 'T\u01b0\u1edfng ni\u1ec7m'
    },
    toast: {
      cartAdded: '\u0110\u00e3 th\u00eam v\u00e9 v\u00e0o gi\u1ecf h\u00e0ng.',
      purchaseOk: 'Thanh to\u00e1n th\u00e0nh c\u00f4ng.',
      purchaseError: 'Kh\u00f4ng th\u1ec3 ho\u00e0n t\u1ea5t thanh to\u00e1n.',
      chooseSeat: 'Vui l\u00f2ng ch\u1ecdn gh\u1ebf tr\u01b0\u1edbc khi thanh to\u00e1n.',
      loginRequired: 'Vui l\u00f2ng \u0111\u0103ng nh\u1eadp \u0111\u1ec3 ti\u1ebfp t\u1ee5c.',
      invoiceReady: '\u0110\u00e3 t\u1ea1o h\u00f3a \u0111\u01a1n PDF.',
      loadError: 'M\u1ed9t s\u1ed1 m\u1ee5c kh\u00f4ng th\u1ec3 t\u1ea3i.'
    },
    invoice: {
      title: 'H\u00f3a \u0111\u01a1n v\u00e9',
      thanks: 'C\u1ea3m \u01a1n kh\u00e1ch h\u00e0ng \u0111\u00e3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5.',
      customer: 'Kh\u00e1ch h\u00e0ng',
      ticketId: 'M\u00e3 v\u00e9',
      amount: 'S\u1ed1 ti\u1ec1n',
      ticketType: 'Lo\u1ea1i v\u00e9',
      seatNumber: 'S\u1ed1 gh\u1ebf',
      cluster: 'C\u1ee5m',
      timestamp: 'Th\u1eddi gian'
    }
  }
};

const DEFAULT_AVATAR =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' rx='60' fill='#e8dbc6'/><circle cx='60' cy='44' r='20' fill='#8a6240'/><path d='M28 102c4-20 20-30 32-30s28 10 32 30' fill='#8a6240'/></svg>"
  );

const PAYMENT_TIERS = [
  { id: 'premium', rows: ['A', 'B', 'C'], price: 220, color: '#4f311c' },
  { id: 'gold', rows: ['D', 'E', 'F'], price: 150, color: '#b88428' },
  { id: 'standard', rows: ['G', 'H', 'I'], price: 95, color: '#856042' }
];

const paymentState = {
  mode: 'buy-now',
  race: null,
  ticketId: null,
  tierId: 'premium',
  seatId: '',
  seatLabel: '',
  clusterLabel: '',
  paymentMethod: 'visa_master'
};

const appData = {
  featuredRaces: null,
  horses: null,
  jockeys: null,
  hallOfFame: null
};

const getLanguage = () => localStorage.getItem('rr-lang') || 'vi';
const t = (key) => key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), translations[getLanguage()] || translations.vi);

const normalizeStaticDom = () => {
  const trophySvg = `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d="M20 10h24v9c0 8.2-5.3 15.2-12 17.7C25.3 34.2 20 27.2 20 19z" fill="#c9973d"/><path d="M25 40h14v6H25z" fill="#4b2f1d"/><path d="M21 46h22v8H21z" fill="#4b2f1d"/><path d="M16 14H8c0 8 4.9 13 11.5 13" fill="none" stroke="#4b2f1d" stroke-width="4" stroke-linecap="round"/><path d="M48 14h8c0 8-4.9 13-11.5 13" fill="none" stroke="#4b2f1d" stroke-width="4" stroke-linecap="round"/></svg>`;
  const globeSvg = `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle cx="32" cy="32" r="24" fill="none" stroke="#4b2f1d" stroke-width="3"/><ellipse cx="32" cy="32" rx="12" ry="24" fill="none" stroke="#4b2f1d" stroke-width="3"/><path d="M8 32h48M12 20h40M12 44h40" fill="none" stroke="#4b2f1d" stroke-width="3" stroke-linecap="round"/></svg>`;

  document.querySelectorAll('.logo-icon').forEach((node) => {
    node.innerHTML = trophySvg;
  });

  document.querySelectorAll('.globe').forEach((node) => {
    node.innerHTML = globeSvg;
  });

  document.querySelectorAll('.benefit-icon').forEach((node, index) => {
    const labels = ['VIP', 'SEC', 'INS'];
    node.textContent = labels[index] || 'RR';
  });

  document.querySelectorAll('[data-close]').forEach((node) => {
    node.textContent = '\u00d7';
  });

  document.querySelectorAll('.js-language').forEach((select) => {
    Array.from(select.options).forEach((option) => {
      if (option.value === 'en') option.textContent = 'EN';
      if (option.value === 'vi') option.textContent = 'Ti\u1ebfng Vi\u1ec7t';
    });
  });
};

const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem('rr-user') || 'null');
  } catch (error) {
    return null;
  }
};

const getTicketStorageKey = () => {
  const user = getCurrentUser();
  return user ? `rr-ticket-store:${user.id}` : 'rr-ticket-store:guest';
};

const getTicketStore = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(getTicketStorageKey()) || '{}');
    return {
      cart: Array.isArray(parsed.cart) ? parsed.cart : [],
      history: Array.isArray(parsed.history) ? parsed.history : []
    };
  } catch (error) {
    return { cart: [], history: [] };
  }
};

const saveTicketStore = (store) => localStorage.setItem(getTicketStorageKey(), JSON.stringify(store));
const generateTicketId = () => `RR-${new Date().toISOString().replace(/\D/g, '').slice(0, 14)}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

const localeMap = { en: 'en-US', vi: 'vi-VN' };

const formatRaceDate = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat(localeMap[getLanguage()] || 'vi-VN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const formatInvoiceTimestamp = (value = new Date()) => {
  const date = value instanceof Date ? value : new Date(value);
  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
};

const withFallback = (url) => url || DEFAULT_AVATAR;
const getSeatClusterLabel = (seatValue) => {
  const match = String(seatValue || '').match(/^([A-I])[- ]?(\d{1,2})$/i);
  if (!match) return '';
  const row = match[1].toUpperCase();
  const seatNumber = Number(match[2]);
  if (!seatNumber) return '';
  return `${row}${Math.ceil(seatNumber / 5)}`;
};

const syncSeatScrollbar = () => {
  const seatGrid = document.getElementById('seat-grid');
  const scrollbar = document.getElementById('seat-scrollbar');
  const track = document.getElementById('seat-scrollbar-track');
  if (!seatGrid || !scrollbar || !track) return;

  const contentWidth = seatGrid.scrollWidth;
  const viewportWidth = seatGrid.clientWidth;
  const hasOverflow = contentWidth > viewportWidth + 8;

  scrollbar.hidden = !hasOverflow;
  track.style.width = `${contentWidth}px`;

  if (scrollbar.dataset.bound === 'true') return;
  scrollbar.dataset.bound = 'true';

  let syncingFromGrid = false;
  let syncingFromBar = false;

  seatGrid.addEventListener('scroll', () => {
    if (syncingFromBar) return;
    syncingFromGrid = true;
    scrollbar.scrollLeft = seatGrid.scrollLeft;
    syncingFromGrid = false;
  });

  scrollbar.addEventListener('scroll', () => {
    if (syncingFromGrid) return;
    syncingFromBar = true;
    seatGrid.scrollLeft = scrollbar.scrollLeft;
    syncingFromBar = false;
  });
};

const formatHorseRecord = (record) => {
  const match = String(record || '').match(/(\d[\d,]*)\s*starts?.*?(\d[\d,]*)\s*wins?/i);
  if (!match) return record;
  const [, starts, wins] = match;
  if (getLanguage() === 'vi') {
    return `${starts} l\u1ea7n ra s\u00e2n | ${wins} chi\u1ebfn th\u1eafng`;
  }
  return `${starts} starts | ${wins} wins`;
};

const formatJockeyWins = (wins) => {
  const match = String(wins || '').match(/over\s+([\d,]+)\s+wins?/i);
  if (!match) return wins;
  const [, totalWins] = match;
  if (getLanguage() === 'vi') {
    return `H\u01a1n ${totalWins} chi\u1ebfn th\u1eafng`;
  }
  return `Over ${totalWins} wins`;
};

const seatTierByRow = (row) => (['A', 'B', 'C'].includes(row) ? 'premium' : ['D', 'E', 'F'].includes(row) ? 'gold' : 'standard');
const getTierConfig = (tierId = paymentState.tierId) => PAYMENT_TIERS.find((item) => item.id === tierId) || PAYMENT_TIERS[0];
const getLocalizedTierLabel = (tierId) => (tierId === 'premium' ? 'Premium' : tierId === 'gold' ? 'Gold' : 'Standard');

const getModal = (id) => document.getElementById(id);
const openModal = (id) => {
  const modal = getModal(id);
  if (!modal) return;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = (id) => {
  const modal = getModal(id);
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
};

const showToast = (message) => {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
};

const createSkeletonCards = (count, variant = 'card') =>
  Array.from({ length: count }, () => `
    <article class="${variant === 'profile' ? 'profile-card' : 'card'} skeleton-card" aria-hidden="true">
      <div class="skeleton-media"></div>
      <div class="skeleton-line skeleton-line-title"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line skeleton-line-short"></div>
    </article>
  `).join('');

const renderLoadingState = () => {
  const featured = document.getElementById('featured-races');
  if (featured) featured.innerHTML = createSkeletonCards(6, 'card');

  const horsesGrid = document.getElementById('horses-grid');
  if (horsesGrid) horsesGrid.innerHTML = createSkeletonCards(6, 'profile');

  const jockeysGrid = document.getElementById('jockeys-grid');
  if (jockeysGrid) jockeysGrid.innerHTML = createSkeletonCards(6, 'profile');

  const hallGrid = document.getElementById('hall-grid');
  if (hallGrid) hallGrid.innerHTML = createSkeletonCards(6, 'profile');
};

const dataUrlFromCanvas = (canvas, mimeType, quality) =>
  new Promise((resolve) => resolve(canvas.toDataURL(mimeType, quality)));

const prepareAvatarPayload = async (file) => {
  if (file.type === 'image/gif') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  if (!file.type.startsWith('image/')) {
    throw new Error('Unsupported avatar format.');
  }

  const originalDataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = originalDataUrl;
  });

  const maxEdge = 720;
  const scale = Math.min(1, maxEdge / Math.max(image.width, image.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
  return dataUrlFromCanvas(canvas, mimeType, 0.86);
};

const ensureSharedModals = () => {
  const modalDefinitions = [
    {
      id: 'tickets-modal',
      html: `
        <div class="modal-card tickets-modal-card">
          <div class="modal-header">
            <h3 data-i18n="tickets.title">My Tickets</h3>
            <button class="icon-button" type="button" data-close="tickets-modal">&times;</button>
          </div>
          <div class="modal-body tickets-modal-body" id="tickets-list"></div>
        </div>
      `
    },
    {
      id: 'login-modal',
      html: `
        <div class="modal-card auth-modal-card">
          <div class="modal-header">
            <h3 data-i18n="auth.loginTitle">Login</h3>
            <button class="icon-button" type="button" data-close="login-modal">&times;</button>
          </div>
          <form class="modal-body form-grid" id="login-form">
            <label>
              <span data-i18n="auth.userLabel">Email or display name</span>
              <input type="text" name="identifier" required />
            </label>
            <label>
              <span data-i18n="auth.passwordLabel">Password</span>
              <input type="password" name="password" required />
            </label>
            <button class="primary-button" type="submit" data-i18n="auth.loginButton">Login</button>
          </form>
        </div>
      `
    },
    {
      id: 'signup-modal',
      html: `
        <div class="modal-card auth-modal-card">
          <div class="modal-header">
            <h3 data-i18n="auth.signupTitle">Sign up</h3>
            <button class="icon-button" type="button" data-close="signup-modal">&times;</button>
          </div>
          <form class="modal-body form-grid" id="signup-form">
            <label>
              <span data-i18n="auth.displayName">Display Name</span>
              <input type="text" name="name" required />
            </label>
            <label>
              <span data-i18n="auth.emailLabel">Email</span>
              <input type="email" name="email" required />
            </label>
            <label>
              <span data-i18n="auth.dobLabel">Date of Birth</span>
              <input type="date" name="dob" required />
            </label>
            <label>
              <span data-i18n="auth.passwordLabel">Password</span>
              <input type="password" name="password" required />
            </label>
            <button class="primary-button" type="submit" data-i18n="auth.signupButton">Create account</button>
          </form>
        </div>
      `
    },
    {
      id: 'profile-modal',
      html: `
        <div class="modal-card auth-modal-card">
          <div class="modal-header">
            <h3 data-i18n="auth.profileTitle">Profile</h3>
            <button class="icon-button" type="button" data-close="profile-modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="profile-settings">
              <div class="profile-avatar-block">
                <img id="profile-avatar-preview" class="profile-avatar-large" src="${DEFAULT_AVATAR}" alt="avatar" />
                <input type="file" id="avatar-upload" accept="image/png,image/jpeg,image/webp,image/gif" hidden />
                <button class="ghost-button" type="button" id="avatar-trigger" data-i18n="auth.changeAvatar">Change avatar</button>
              </div>
              <form id="profile-form" class="form-grid">
                <label>
                  <span data-i18n="auth.displayName">Display Name</span>
                  <input type="text" id="profile-name" name="name" required />
                </label>
                <label>
                  <span data-i18n="auth.dobLabel">Date of Birth</span>
                  <input type="date" id="profile-dob" name="dob" required />
                </label>
                <button class="primary-button" type="submit" data-i18n="auth.saveProfile">Save profile</button>
              </form>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'payment-modal',
      html: `
        <div class="modal-card payment-modal-card">
          <div class="modal-header">
            <h3 data-i18n="payment.title">Payment</h3>
            <button class="icon-button" type="button" data-close="payment-modal">&times;</button>
          </div>
          <form class="modal-body payment-modal-body" id="payment-form">
            <section class="payment-left-column">
              <div class="payment-panel">
                <h4 class="payment-section-title" data-i18n="payment.detailsTitle">Customer Details</h4>
                <label>
                  <span data-i18n="payment.name">Name</span>
                  <input type="text" id="payment-customer" required />
                </label>
                <label>
                  <span data-i18n="payment.address">Address</span>
                  <input type="text" id="payment-address" required />
                </label>
                <label>
                  <span data-i18n="payment.email">Email</span>
                  <input type="email" id="payment-email" required />
                </label>
              </div>

              <div class="payment-panel">
                <h4 class="payment-section-title" data-i18n="payment.methodLabel">Payment Method</h4>
                <div class="method-options">
                  <label class="method-option">
                    <input type="radio" name="paymentMethod" value="visa_master" checked />
                    <span class="method-option-content">
                      <span class="method-icon method-card-icon">VISA</span>
                      <span data-i18n="payment.methodVisaMaster">Visa / Mastercard</span>
                    </span>
                  </label>
                  <label class="method-option">
                    <input type="radio" name="paymentMethod" value="paypal" />
                    <span class="method-option-content">
                      <span class="method-icon method-paypal-icon">P</span>
                      <span data-i18n="payment.methodPaypal">PayPal</span>
                    </span>
                  </label>
                </div>
              </div>

              <div class="payment-panel" id="card-fields">
                <label>
                  <span data-i18n="payment.cardholderName">Cardholder Name</span>
                  <input type="text" id="payment-cardholder" />
                </label>
                <label>
                  <span data-i18n="payment.cardNumber">Card Number</span>
                  <input type="text" id="payment-cardnumber" inputmode="numeric" maxlength="19" placeholder="0000 0000 0000 0000" />
                </label>
                <div class="card-inline-grid">
                  <label>
                    <span data-i18n="payment.cvv">CVV</span>
                    <input type="text" id="payment-cvv" inputmode="numeric" maxlength="3" placeholder="123" />
                  </label>
                  <label>
                    <span data-i18n="payment.expiryDate">Expiry Date</span>
                    <div class="expiry-group">
                      <input type="text" id="payment-expiry-month" inputmode="numeric" maxlength="2" data-i18n-placeholder="payment.month" placeholder="MM" />
                      <span class="expiry-dash">-</span>
                      <input type="text" id="payment-expiry-year" inputmode="numeric" maxlength="2" data-i18n-placeholder="payment.year" placeholder="YY" />
                    </div>
                  </label>
                </div>
              </div>

              <div class="payment-panel">
                <div class="payment-tier-choice" id="payment-tier-choice"></div>
              </div>

              <div class="payment-summary" id="payment-summary"></div>
              <button class="primary-button payment-submit" type="submit" data-i18n="payment.payNow">Confirm Payment</button>
            </section>

            <section class="payment-right-column">
              <div class="payment-seat-header">
                <h4 class="payment-section-title" data-i18n="payment.seatMapTitle">Seat Map</h4>
                <p class="seat-hint" data-i18n="payment.seatHint">Rows A-C: Premium, D-F: Gold, G-I: Standard.</p>
              </div>
              <div class="track-rail"><span>ROYAL TRACK</span></div>
              <div class="seat-legend">
                <span><i class="legend-box available"></i>Available</span>
                <span><i class="legend-box selected"></i>Selected</span>
                <span><i class="legend-box booked"></i>Booked</span>
              </div>
              <div class="seat-scrollbar" id="seat-scrollbar" aria-hidden="true">
                <div class="seat-scrollbar-track" id="seat-scrollbar-track"></div>
              </div>
              <div class="seat-map-wrapper" id="seat-grid"></div>
            </section>
          </form>
        </div>
      `
    }
  ];

  modalDefinitions.forEach(({ id, html }) => {
    let modal = document.getElementById(id);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = id;
      document.body.appendChild(modal);
    }
    modal.className = 'modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = html;
  });
};

const setLanguage = (lang) => {
  const dictionary = translations[lang] || translations.vi;
  localStorage.setItem('rr-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = node.getAttribute('data-i18n').split('.').reduce((acc, part) => (acc ? acc[part] : undefined), dictionary);
    if (typeof value === 'string') node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const value = node.getAttribute('data-i18n-placeholder').split('.').reduce((acc, part) => (acc ? acc[part] : undefined), dictionary);
    if (typeof value === 'string') node.setAttribute('placeholder', value);
  });

  document.querySelectorAll('.js-language').forEach((select) => {
    select.value = lang;
  });

  updateTicketsCount();
  renderTicketsList();
  renderTierChoices();
  renderPaymentSummary();
};

const updateTicketsCount = () => {
  const button = document.querySelector('[data-action="tickets"]');
  if (!button) return;
  button.textContent = `${t('header.tickets')} (${getTicketStore().cart.length})`;
};

const updateHeaderAuth = () => {
  const user = getCurrentUser();
  const headerTools = document.querySelector('.header-tools');
  if (!headerTools) return;

  const loginButton = headerTools.querySelector('[data-action="login"]');
  const signupButton = headerTools.querySelector('[data-action="signup"]');
  let userDisplay = headerTools.querySelector('.user-display');

  if (!user) {
    if (loginButton) loginButton.style.display = '';
    if (signupButton) signupButton.style.display = '';
    if (userDisplay) userDisplay.remove();
    updateTicketsCount();
    renderTicketsList();
    return;
  }

  if (loginButton) loginButton.style.display = 'none';
  if (signupButton) signupButton.style.display = 'none';

  if (!userDisplay) {
    userDisplay = document.createElement('div');
    userDisplay.className = 'user-display';
    headerTools.appendChild(userDisplay);
  }

  userDisplay.innerHTML = `
    <button class="user-chip" type="button" id="profile-open">
      <img src="${withFallback(user.avatar)}" alt="${user.name}" class="header-avatar" />
      <span>${t('auth.welcome')}, ${user.name}</span>
    </button>
    <button class="ghost-button" type="button" id="logout-button">${t('auth.logout')}</button>
  `;

  userDisplay.querySelector('#profile-open')?.addEventListener('click', () => {
    const preview = document.getElementById('profile-avatar-preview');
    const nameField = document.getElementById('profile-name');
    const dobField = document.getElementById('profile-dob');
    if (preview) preview.src = withFallback(user.avatar);
    if (nameField) nameField.value = user.name || '';
    if (dobField) dobField.value = user.dob || '';
    openModal('profile-modal');
  });

  userDisplay.querySelector('#logout-button')?.addEventListener('click', () => {
    localStorage.removeItem('rr-user');
    updateHeaderAuth();
  });

  updateTicketsCount();
  renderTicketsList();
};

const buildSeatMap = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  return rows.map((row, index) => {
    const distance = Math.abs(index - 4);
    return {
      row,
      inset: 18 + distance * 26,
      lift: distance * -5,
      seats: Array.from({ length: 30 }, (_, seatIndex) => ({
        id: `${row}-${seatIndex + 1}`,
        label: `${row}${seatIndex + 1}`,
        number: seatIndex + 1,
        tierId: seatTierByRow(row)
      }))
    };
  });
};

const seatMap = buildSeatMap();

const renderTierChoices = () => {
  const container = document.getElementById('payment-tier-choice');
  if (!container) return;
  container.innerHTML = PAYMENT_TIERS.map((tier) => `
    <label class="tier-minimal ${tier.id === paymentState.tierId ? 'active' : ''}">
      <input type="radio" name="ticketTier" value="${tier.id}" ${tier.id === paymentState.tierId ? 'checked' : ''} />
      <span class="tier-minimal-head">
        <i class="tier-swatch" style="background:${tier.color}"></i>
        <strong>${getLocalizedTierLabel(tier.id)}</strong>
      </span>
      <small>$${tier.price}</small>
    </label>
  `).join('');

  container.querySelectorAll('input[name="ticketTier"]').forEach((input) => {
    input.addEventListener('change', () => {
      paymentState.tierId = input.value;
      paymentState.seatId = '';
      paymentState.seatLabel = '';
      paymentState.clusterLabel = '';
      renderTierChoices();
      renderSeatGrid();
      renderPaymentSummary();
    });
  });
};

const renderSeatGrid = () => {
  const grid = document.getElementById('seat-grid');
  if (!grid || !paymentState.race) return;
  const booked = new Set(paymentState.race.bookedSeats || []);
  const currentTier = getTierConfig();
  grid.className = `seat-map-wrapper current-tier-${currentTier.id}`;
  grid.innerHTML = `
    ${seatMap.map((row, rowIndex) => `
    <div class="seat-row" style="--arc-inset:${row.inset}px; --row-lift:${row.lift}px;">
      <div class="seat-row-label">${row.row}</div>
      <div class="seat-row-content tier-${seatTierByRow(row.row)}">
        <div class="seat-row-seats">
          ${Array.from({ length: 6 }, (_, clusterIndex) => {
            const groupSeats = row.seats.slice(clusterIndex * 5, clusterIndex * 5 + 5);
            const groupClass =
              clusterIndex === 2 ? ' is-center-left' : clusterIndex === 3 ? ' is-center-right' : '';
            const startSeat = clusterIndex * 5 + 1;
            const endSeat = startSeat + 4;
            const seatsHtml = groupSeats.map((seat) => {
              const disabled = seat.tierId !== currentTier.id || booked.has(seat.id);
              const selected = paymentState.seatId === seat.id;
              const classes = ['seat-btn', `tier-${seat.tierId}`];
              if (selected) classes.push('selected');
              if (booked.has(seat.id)) classes.push('booked');
              return `<button type="button" class="${classes.join(' ')}" data-seat-id="${seat.id}" title="${seat.label}" ${disabled ? 'disabled' : ''}>${seat.number}</button>`;
            }).join('');
            const aisle =
              clusterIndex === 5
                ? ''
                : clusterIndex === 2
                  ? '<span class="seat-aisle seat-aisle-wide" aria-hidden="true"></span>'
                  : '<span class="seat-aisle" aria-hidden="true"></span>';
            return `
              <div class="seat-cluster-stack${groupClass}">
                <span class="seat-cluster-label">
                  <strong>${row.row}${clusterIndex + 1}</strong>
                  <small>${startSeat}-${endSeat}</small>
                </span>
                <div class="seat-cluster-group">${seatsHtml}</div>
              </div>
              ${aisle}
            `;
          }).join('')}
        </div>
      </div>
      ${[2, 5].includes(rowIndex) ? '<div class="seat-horizontal-aisle" aria-hidden="true"></div>' : ''}
    </div>
  `).join('')}
  `;

  grid.querySelectorAll('[data-seat-id]:not([disabled])').forEach((button) => {
    button.addEventListener('click', () => {
      paymentState.seatId = button.getAttribute('data-seat-id');
      paymentState.seatLabel = button.getAttribute('title') || '';
      paymentState.clusterLabel = getSeatClusterLabel(paymentState.seatId);
      renderSeatGrid();
      renderPaymentSummary();
    });
  });

  syncSeatScrollbar();
};

const renderPaymentSummary = () => {
  const summary = document.getElementById('payment-summary');
  if (!summary || !paymentState.race) return;
  const tier = getTierConfig();
  summary.innerHTML = `
    <p><strong>${t('payment.race')}:</strong> ${paymentState.race.name}</p>
    <p><strong>${t('tickets.code')}:</strong> ${paymentState.ticketId || '-'}</p>
    <p><strong>${t('payment.tier')}:</strong> ${getLocalizedTierLabel(tier.id)}</p>
    <p><strong>${t('payment.seat')}:</strong> ${paymentState.seatLabel || '-'}</p>
    <p><strong>${t('payment.cluster')}:</strong> ${paymentState.clusterLabel || '-'}</p>
    <p><strong>${t('payment.total')}:</strong> $${tier.price}</p>
  `;
};

const renderTicketsList = () => {
  const list = document.getElementById('tickets-list');
  if (!list) return;

  const store = getTicketStore();
  const renderTicketCard = (ticket, inHistory = false) => `
    <article class="ticket-item">
      <div class="ticket-info">
        <strong>${ticket.raceName}</strong>
        <p><strong>${t('tickets.code')}:</strong> ${ticket.ticketId}</p>
        <p><strong>${t('tickets.tier')}:</strong> ${ticket.tierLabel || '-'}</p>
        <p><strong>${t('tickets.seat')}:</strong> ${ticket.seatNumber || '-'}</p>
        <p><strong>${t('tickets.cluster')}:</strong> ${ticket.clusterLabel || getSeatClusterLabel(ticket.seatNumber) || '-'}</p>
        <p><strong>${t('tickets.status')}:</strong> <span class="status-badge ${inHistory ? 'paid' : 'pending'}">${inHistory ? t('tickets.statusPaid') : t('tickets.statusPending')}</span></p>
        <p class="ticket-price">${ticket.priceLabel || `$${ticket.price}`}</p>
      </div>
      <div class="ticket-actions">
        ${inHistory ? `<button type="button" class="ghost-button" data-ticket-pdf="${ticket.ticketId}">${t('tickets.invoice')}</button>` : `<button type="button" class="primary-button" data-ticket-pay="${ticket.ticketId}">${t('tickets.pay')}</button>`}
        <button type="button" class="ghost-button danger" data-ticket-remove="${ticket.ticketId}" data-ticket-bucket="${inHistory ? 'history' : 'cart'}">${t('tickets.remove')}</button>
      </div>
    </article>
  `;

  list.innerHTML = `
    <section class="tickets-section">
      <h4>${t('tickets.cartTitle')}</h4>
      <div class="tickets-scroll">
        ${store.cart.length ? store.cart.map((ticket) => renderTicketCard(ticket)).join('') : `<p class="empty-msg">${t('tickets.empty')}</p>`}
      </div>
    </section>
    <section class="tickets-section history">
      <h4>${t('tickets.historyTitle')}</h4>
      <div class="tickets-scroll">
        ${store.history.length ? store.history.map((ticket) => renderTicketCard(ticket, true)).join('') : `<p class="empty-msg">${t('tickets.historyEmpty')}</p>`}
      </div>
    </section>
  `;

  list.querySelectorAll('[data-ticket-remove]').forEach((button) => {
    button.addEventListener('click', () => {
      const bucket = button.getAttribute('data-ticket-bucket');
      const id = button.getAttribute('data-ticket-remove');
      const nextStore = getTicketStore();
      nextStore[bucket] = nextStore[bucket].filter((ticket) => ticket.ticketId !== id);
      saveTicketStore(nextStore);
      updateTicketsCount();
      renderTicketsList();
    });
  });

  list.querySelectorAll('[data-ticket-pay]').forEach((button) => {
    button.addEventListener('click', async () => {
      const ticketId = button.getAttribute('data-ticket-pay');
      const ticket = getTicketStore().cart.find((item) => item.ticketId === ticketId);
      if (!ticket) return;
      const races = await fetchJson('/api/featured-races');
      const race = races.find((item) => item.id === ticket.raceId);
      if (!race) return;
      closeModal('tickets-modal');
      openPaymentModal(race, { mode: 'cart', ticketId: ticket.ticketId, tierId: ticket.tierId || 'premium' });
    });
  });

  list.querySelectorAll('[data-ticket-pdf]').forEach((button) => {
    button.addEventListener('click', () => {
      const ticket = getTicketStore().history.find((item) => item.ticketId === button.getAttribute('data-ticket-pdf'));
      if (ticket) generateInvoice(ticket);
    });
  });
};

const resetPaymentForm = () => {
  const form = document.getElementById('payment-form');
  if (form) form.reset();
  paymentState.paymentMethod = 'visa_master';
  paymentState.clusterLabel = '';
  toggleCardFields();
};

const openPaymentModal = (race, options = {}) => {
  const user = getCurrentUser();
  paymentState.race = race;
  paymentState.mode = options.mode || 'buy-now';
  paymentState.ticketId = options.ticketId || generateTicketId();
  paymentState.tierId = options.tierId || 'premium';
  paymentState.seatId = '';
  paymentState.seatLabel = '';
  resetPaymentForm();

  const nameInput = document.getElementById('payment-customer');
  const emailInput = document.getElementById('payment-email');
  if (nameInput) nameInput.value = user?.name || '';
  if (emailInput) emailInput.value = user?.email || '';

  renderTierChoices();
  renderSeatGrid();
  renderPaymentSummary();
  openModal('payment-modal');
};

const toggleCardFields = () => {
  const cardFields = document.getElementById('card-fields');
  const method = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'visa_master';
  paymentState.paymentMethod = method;
  if (!cardFields) return;
  cardFields.classList.toggle('is-hidden', method === 'paypal');
  cardFields.querySelectorAll('input').forEach((input) => {
    input.required = method !== 'paypal';
  });
};

const normalizeCardNumber = (value) => value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ').trim();

const addTicketToCart = (race) => {
  const store = getTicketStore();
  store.cart.push({
    ticketId: generateTicketId(),
    raceId: race.id,
    raceName: race.name,
    tierId: 'premium',
    tierLabel: 'Pending selection',
    seatNumber: '',
    status: 'pending',
    priceLabel: '$95 - $220',
    createdAt: new Date().toISOString()
  });
  saveTicketStore(store);
  updateTicketsCount();
  renderTicketsList();
  showToast(t('toast.cartAdded'));
};

const buildHistoryTicket = (ticketBase, customerName) => {
  const tier = getTierConfig();
  return {
    ...ticketBase,
    ticketId: ticketBase.ticketId || generateTicketId(),
    tierId: tier.id,
    tierLabel: getLocalizedTierLabel(tier.id),
    seatNumber: paymentState.seatLabel,
    clusterLabel: paymentState.clusterLabel || getSeatClusterLabel(paymentState.seatId),
    price: tier.price,
    priceLabel: `$${tier.price}`,
    customerName,
    purchasedAt: formatInvoiceTimestamp()
  };
};

const submitPayment = async (event) => {
  event.preventDefault();
  if (!paymentState.race || !paymentState.seatId) {
    showToast(t('toast.chooseSeat'));
    return;
  }

  const customerName = document.getElementById('payment-customer')?.value.trim();
  const address = document.getElementById('payment-address')?.value.trim();
  const email = document.getElementById('payment-email')?.value.trim();
  const cardholder = document.getElementById('payment-cardholder')?.value.trim();
  const cardNumber = document.getElementById('payment-cardnumber')?.value.trim();
  const cvv = document.getElementById('payment-cvv')?.value.trim();
  const expiryMonth = document.getElementById('payment-expiry-month')?.value.trim();
  const expiryYear = document.getElementById('payment-expiry-year')?.value.trim();

  if (!customerName || !address || !email) {
    showToast(t('toast.purchaseError'));
    return;
  }

  if (paymentState.paymentMethod === 'visa_master') {
    const rawCard = cardNumber.replace(/\s/g, '');
    if (!cardholder || rawCard.length !== 16 || cvv.length !== 3 || expiryMonth.length !== 2 || expiryYear.length !== 2) {
      showToast(t('toast.purchaseError'));
      return;
    }
  }

  const response = await fetch('/api/purchase', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      raceId: paymentState.race.id,
      tierId: paymentState.tierId,
      quantity: 1,
      paymentMethod: paymentState.paymentMethod,
      seatId: paymentState.seatId,
      paymentDetails: {
        customerName,
        address,
        email,
        cardholder,
        cardNumber,
        cvv,
        expiryDate: `${expiryMonth}-${expiryYear}`
      }
    })
  });
  const data = await response.json();
  if (!response.ok) {
    showToast(data.message || t('toast.purchaseError'));
    return;
  }

  const store = getTicketStore();
  if (paymentState.mode === 'cart') {
    const ticket = store.cart.find((item) => item.ticketId === paymentState.ticketId);
    if (!ticket) return;
    store.cart = store.cart.filter((item) => item.ticketId !== paymentState.ticketId);
    store.history.unshift(buildHistoryTicket(ticket, customerName));
  } else {
    store.history.unshift(buildHistoryTicket({
      ticketId: paymentState.ticketId,
      raceId: paymentState.race.id,
      raceName: paymentState.race.name
    }, customerName));
  }

  saveTicketStore(store);
  updateTicketsCount();
  renderTicketsList();
  closeModal('payment-modal');
  showToast(t('toast.purchaseOk'));
  await fetchFeaturedRaces(true);
};

const generateInvoice = async (ticket) => {
  const JsPdf = window.jspdf?.jsPDF;
  if (!JsPdf) {
    showToast('jsPDF not loaded.');
    return;
  }

  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch (error) {
      // Ignore font readiness failures and continue with available fonts.
    }
  }

  const width = 1240;
  const height = 1754;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f5ecdf';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#4b2f1d';
  ctx.fillRect(80, 80, width - 160, height - 160);
  ctx.fillStyle = '#f5ecdf';
  ctx.fillRect(96, 96, width - 192, height - 192);

  ctx.fillStyle = '#d3a14b';
  ctx.fillRect(120, 126, 110, 110);
  ctx.fillStyle = '#4b2f1d';
  ctx.font = "700 54px 'Be Vietnam Pro', 'Times New Roman', serif";
  ctx.fillText('RR', 147, 196);
  ctx.font = "700 42px 'Be Vietnam Pro', 'Times New Roman', serif";
  ctx.fillText('ROYAL RACING', 270, 180);
  ctx.font = "18px 'Be Vietnam Pro', 'Times New Roman', serif";
  ctx.fillStyle = '#7a5a40';
  ctx.fillText(t('invoice.title'), 272, 210);

  ctx.strokeStyle = '#d3a14b';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(120, 270);
  ctx.lineTo(width - 120, 270);
  ctx.stroke();

  const lines = [
    [t('invoice.customer'), ticket.customerName || 'N/A'],
    [t('invoice.ticketId'), ticket.ticketId || 'N/A'],
    [t('invoice.amount'), ticket.priceLabel || ('$' + (ticket.price || 0))],
    [t('invoice.ticketType'), ticket.tierLabel || 'N/A'],
    [t('invoice.seatNumber'), ticket.seatNumber || 'N/A'],
    [t('invoice.cluster'), ticket.clusterLabel || getSeatClusterLabel(ticket.seatNumber) || 'N/A'],
    [t('invoice.timestamp'), ticket.purchasedAt || formatInvoiceTimestamp()]
  ];

  let y = 360;
  lines.forEach(([label, value]) => {
    ctx.fillStyle = '#4b2f1d';
    ctx.font = "700 24px 'Be Vietnam Pro', 'Times New Roman', serif";
    ctx.fillText(`${label}:`, 150, y);
    ctx.font = "20px 'Be Vietnam Pro', 'Times New Roman', serif";
    ctx.fillText(String(value), 350, y);
    ctx.strokeStyle = 'rgba(75, 47, 29, 0.16)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(150, y + 20);
    ctx.lineTo(width - 150, y + 20);
    ctx.stroke();
    y += 110;
  });

  ctx.fillStyle = '#7a5a40';
  ctx.font = "italic 20px 'Be Vietnam Pro', 'Times New Roman', serif";
  ctx.fillText(t('invoice.thanks'), 150, height - 220);

  const doc = new JsPdf({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pageWidth, pageHeight);
  doc.save(`invoice-${ticket.ticketId}.pdf`);
  showToast(t('toast.invoiceReady'));
};

const updateCountdowns = () => {
  document.querySelectorAll('[data-date]').forEach((node) => {
    const target = new Date(node.getAttribute('data-date'));
    const diff = target - new Date();
    if (diff <= 0) {
      node.textContent = `${t('labels.countdown')}: ${t('labels.liveNow')}`;
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    node.textContent = `${t('labels.countdown')}: ${days}${t('labels.days')} ${hours}${t('labels.hours')} ${mins}${t('labels.mins')} ${secs}${t('labels.secs')}`;
  });
};

const renderNextRacePanel = (race) => {
  const panel = document.getElementById('next-race-panel');
  if (!panel || !race) return;
  const hero = document.querySelector('.hero-luxury');
  if (hero && race.imageUrl) {
    hero.style.backgroundImage = `linear-gradient(rgba(53, 33, 19, 0.45), rgba(53, 33, 19, 0.7)), url('${race.imageUrl}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
  }
  panel.innerHTML = `
    <div class="next-race-card">
      <div class="next-race-media">
        <img src="${withFallback(race.imageUrl)}" alt="${race.name}" loading="lazy" />
      </div>
      <p class="eyebrow">${t('labels.schedule')}</p>
      <h2>${race.name}</h2>
      <p>${race.location}</p>
      <p data-date="${race.date}">${t('labels.countdown')}</p>
      <button class="primary-button" type="button" data-buy-race="${race.id}">${t('labels.buyNow')}</button>
    </div>
  `;
  panel.querySelector('[data-buy-race]')?.addEventListener('click', () => openPaymentModal(race, { mode: 'buy-now' }));
};

const renderFeaturedRaces = (races) => {
  const container = document.getElementById('featured-races');
  if (!container) return;

  container.innerHTML = races.map((race) => `
    <article class="card race-card">
      <div class="media-frame media-frame-race" data-race-image="${withFallback(race.imageUrl)}"><img src="${withFallback(race.imageUrl)}" alt="${race.name}" loading="lazy" /></div>
      <div class="race-card-body">
        <span class="schedule-tag">${t('labels.schedule')}</span>
        <h3>${race.name}</h3>
        <p>${race.location}</p>
        <p>${formatRaceDate(race.date)}</p>
        <p data-date="${race.date}">${t('labels.countdown')}</p>
        <p>${t('labels.seatsLeft')}: <strong>${race.seatsRemaining}</strong></p>
        <p class="price">$${race.priceUSD}</p>
      </div>
      <div class="card-actions">
        <button class="ghost-button" type="button" data-cart-race="${race.id}">${t('labels.addToCart')}</button>
        <button class="primary-button" type="button" data-buy-race="${race.id}">${t('labels.buyNow')}</button>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('[data-cart-race]').forEach((button) => {
    button.addEventListener('click', () => {
      const race = races.find((item) => item.id === button.getAttribute('data-cart-race'));
      if (race) addTicketToCart(race);
    });
  });

  container.querySelectorAll('.media-frame-race').forEach((frame) => {
    const imageUrl = frame.getAttribute('data-race-image');
    if (imageUrl) frame.style.setProperty('--race-bg-image', `url("${imageUrl}")`);
  });

  container.querySelectorAll('[data-buy-race]').forEach((button) => {
    button.addEventListener('click', () => {
      const race = races.find((item) => item.id === button.getAttribute('data-buy-race'));
      if (race) openPaymentModal(race, { mode: 'buy-now' });
    });
  });
};

const renderHorseCards = (items) => {
  const container = document.getElementById('horses-grid');
  if (!container) return;
  container.innerHTML = items.map((horse) => `
    <article class="profile-card">
      <div class="media-frame media-frame-horse"><img src="${withFallback(horse.imageUrl)}" alt="${horse.name}" loading="lazy" /></div>
      <div class="profile-header"><div><h3>${horse.name}</h3><p>${horse.country} | ${horse.color}</p></div></div>
      <div class="profile-body">
        <p><strong>${t('labels.record')}:</strong> ${formatHorseRecord(horse.record)}</p>
        <p><strong>${t('labels.titles')}:</strong> ${horse.titles}</p>
      </div>
    </article>
  `).join('');
};

const renderJockeyCards = (items) => {
  const container = document.getElementById('jockeys-grid');
  if (!container) return;
  container.innerHTML = items.map((jockey) => `
    <article class="profile-card">
      <div class="media-frame media-frame-jockey"><img src="${withFallback(jockey.imageUrl)}" alt="${jockey.name}" loading="lazy" /></div>
      <div class="profile-header"><div><h3>${jockey.name}</h3><p>${jockey.birth || ''}</p></div></div>
      <div class="profile-body">
        <p><strong>${t('labels.started')}:</strong> ${jockey.started}</p>
        <p><strong>${t('labels.wins')}:</strong> ${formatJockeyWins(jockey.wins)}</p>
        <p><strong>${t('labels.awards')}:</strong> ${jockey.awards}</p>
      </div>
    </article>
  `).join('');
};

const renderHallCards = (items) => {
  const container = document.getElementById('hall-grid');
  if (!container) return;
  container.innerHTML = items.map((horse) => `
    <article class="profile-card">
      <div class="media-frame media-frame-hall"><img src="${withFallback(horse.imageUrl)}" alt="${horse.name}" loading="lazy" /></div>
      <div class="profile-header"><div><h3>${horse.name}</h3><p>${horse.country} | ${horse.color}</p></div></div>
      <div class="profile-body">
        <p><strong>${t('labels.record')}:</strong> ${formatHorseRecord(horse.record)}</p>
        <p><strong>${t('labels.titles')}:</strong> ${horse.titles}</p>
        <p><strong>${t('labels.memorial')}:</strong> ${horse.memorial}</p>
      </div>
    </article>
  `).join('');
};

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
};

const fetchFeaturedRaces = async (force = false) => {
  const races = !force && appData.featuredRaces ? appData.featuredRaces : await fetchJson('/api/featured-races');
  appData.featuredRaces = races;
  renderFeaturedRaces(races);
  const sorted = [...races].sort((a, b) => new Date(a.date) - new Date(b.date));
  const now = new Date();
  const upcoming = sorted.find((race) => new Date(race.date) >= now) || sorted[0];
  renderNextRacePanel(upcoming);
  updateCountdowns();
  return races;
};

const fetchHorses = async (force = false) => {
  const horses = !force && appData.horses ? appData.horses : await fetchJson('/api/horses');
  appData.horses = horses;
  renderHorseCards(horses);
};

const fetchJockeys = async (force = false) => {
  const jockeys = !force && appData.jockeys ? appData.jockeys : await fetchJson('/api/jockeys');
  appData.jockeys = jockeys;
  renderJockeyCards(jockeys);
};

const fetchHallOfFame = async (force = false) => {
  const horses = !force && appData.hallOfFame ? appData.hallOfFame : await fetchJson('/api/hall-of-fame');
  appData.hallOfFame = horses;
  renderHallCards(horses);
};

const rerenderLocalizedData = () => {
  if (appData.featuredRaces) {
    renderFeaturedRaces(appData.featuredRaces);
    const sorted = [...appData.featuredRaces].sort((a, b) => new Date(a.date) - new Date(b.date));
    const upcoming = sorted.find((race) => new Date(race.date) >= new Date()) || sorted[0];
    renderNextRacePanel(upcoming);
  }
  if (appData.horses) renderHorseCards(appData.horses);
  if (appData.jockeys) renderJockeyCards(appData.jockeys);
  if (appData.hallOfFame) renderHallCards(appData.hallOfFame);
  updateCountdowns();
};

const bindAuthForms = () => {
  document.querySelectorAll('[data-action="tickets"]').forEach((button) => {
    button.addEventListener('click', () => {
      renderTicketsList();
      openModal('tickets-modal');
    });
  });

  document.querySelectorAll('[data-action="login"]').forEach((button) => {
    button.addEventListener('click', () => openModal('login-modal'));
  });

  document.querySelectorAll('[data-action="signup"]').forEach((button) => {
    button.addEventListener('click', () => openModal('signup-modal'));
  });

  document.querySelectorAll('[data-close]').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-close');
      if (targetId) closeModal(targetId);
    });
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.modal.show').forEach((modal) => closeModal(modal.id));
  });

  document.getElementById('login-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: form.identifier.value.trim(),
        password: form.password.value
      })
    });
    const data = await response.json();
    if (!response.ok) {
      showToast(data.message || t('toast.purchaseError'));
      return;
    }
    localStorage.setItem('rr-user', JSON.stringify(data.user));
    form.reset();
    closeModal('login-modal');
    updateHeaderAuth();
    showToast(t('auth.loginSuccess'));
  });

  document.getElementById('signup-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        dob: form.dob.value,
        password: form.password.value
      })
    });
    const data = await response.json();
    if (!response.ok) {
      showToast(data.message || t('toast.purchaseError'));
      return;
    }
    localStorage.setItem('rr-user', JSON.stringify(data.user));
    form.reset();
    closeModal('signup-modal');
    updateHeaderAuth();
    showToast(t('auth.signupSuccess'));
  });

  document.getElementById('avatar-trigger')?.addEventListener('click', () => {
    document.getElementById('avatar-upload')?.click();
  });

  document.getElementById('profile-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = getCurrentUser();
    if (!user) {
      showToast(t('toast.loginRequired'));
      return;
    }
    const response = await fetch('/api/profile/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: user.id,
        name: document.getElementById('profile-name')?.value.trim(),
        dob: document.getElementById('profile-dob')?.value
      })
    });
    const data = await response.json();
    if (!response.ok) {
      showToast(data.message || t('toast.purchaseError'));
      return;
    }
    localStorage.setItem('rr-user', JSON.stringify(data.user));
    closeModal('profile-modal');
    updateHeaderAuth();
    showToast(t('auth.profileSuccess'));
  });

  document.getElementById('avatar-upload')?.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    const user = getCurrentUser();
    if (!file || !user) return;
    try {
      const payload = await prepareAvatarPayload(file);
      const response = await fetch('/api/upload-avatar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, base64: payload })
      });
      const data = await response.json();
      if (!response.ok) {
        showToast(data.message || t('toast.purchaseError'));
        return;
      }
      localStorage.setItem('rr-user', JSON.stringify({ ...data.user, avatar: `${data.avatar}?v=${Date.now()}` }));
      const preview = document.getElementById('profile-avatar-preview');
      if (preview) preview.src = `${data.avatar}?v=${Date.now()}`;
      updateHeaderAuth();
      showToast(t('auth.avatarSuccess'));
    } catch (error) {
      showToast(error.message || t('toast.purchaseError'));
    } finally {
      event.target.value = '';
    }
  });

  document.getElementById('payment-form')?.addEventListener('submit', submitPayment);
  document.querySelectorAll('input[name="paymentMethod"]').forEach((input) => input.addEventListener('change', toggleCardFields));

  document.getElementById('payment-cardnumber')?.addEventListener('input', (event) => {
    event.target.value = normalizeCardNumber(event.target.value);
  });
  document.getElementById('payment-cvv')?.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 3);
  });

  const expiryMonth = document.getElementById('payment-expiry-month');
  const expiryYear = document.getElementById('payment-expiry-year');
  expiryMonth?.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 2);
    if (event.target.value.length === 2) expiryYear?.focus();
  });
  expiryYear?.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 2);
  });
  expiryYear?.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && !event.target.value) expiryMonth?.focus();
  });
};

const initLanguage = () => {
  setLanguage(getLanguage());
  document.querySelectorAll('.js-language').forEach((select) => {
    select.addEventListener('change', () => {
      setLanguage(select.value);
      rerenderLocalizedData();
      updateHeaderAuth();
    });
  });
};

const init = async () => {
  ensureSharedModals();
  normalizeStaticDom();
  initLanguage();
  bindAuthForms();
  window.addEventListener('resize', syncSeatScrollbar);
  updateHeaderAuth();
  renderTicketsList();
  renderTierChoices();
  toggleCardFields();
  renderLoadingState();

  const startupResults = await Promise.allSettled([fetchFeaturedRaces(), fetchHorses(), fetchJockeys(), fetchHallOfFame()]);
  if (startupResults.some((result) => result.status === 'rejected')) {
    showToast(t('toast.loadError'));
  }
  updateCountdowns();
  setInterval(updateCountdowns, 1000);
};

init();
