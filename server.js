const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;

const featuredRaces = [
    {
        id: 'kentucky-derby',
        name: 'Kentucky Derby',
        location: 'Churchill Downs, USA',
        date: '2026-05-03T18:57:00-04:00',
        distance: '1.25 miles',
        horses: 20,
        seatsRemaining: 320,
        priceUSD: 125,
        imageUrl: 'https://www.sketchappsources.com/resources/source-image/kentucky-derby-poster.png',
        bookedSeats: ['A-1', 'A-2', 'B-5']
    },
    {
        id: 'royal-ascot',
        name: 'Royal Ascot (Opening Day)',
        location: 'Ascot Racecourse, UK',
        date: '2026-06-17T13:30:00+01:00',
        distance: '1 mile (feature races)',
        horses: 16,
        seatsRemaining: 240,
        priceUSD: 160,
        imageUrl: 'https://lirp.cdn-website.com/accf1391/dms3rep/multi/opt/Royal+Ascot+%282%29-640w.webp',
        bookedSeats: ['C-3', 'C-4']
    },
    {
        id: 'arima-kinen',
        name: 'Arima Kinen',
        location: 'Nakayama Racecourse, Japan',
        date: '2026-12-28T15:25:00+09:00',
        distance: '2,500 m',
        horses: 16,
        seatsRemaining: 180,
        priceUSD: 140,
        imageUrl: 'https://pbs.twimg.com/media/Gx6B6o3W8AAZdo7.jpg',
        bookedSeats: ['A-8', 'B-1']
    },
    {
        id: 'breeders-cup-classic',
        name: "Breeders' Cup Classic",
        location: 'Del Mar, USA',
        date: '2026-11-01T17:45:00-07:00',
        distance: '1.25 miles',
        horses: 14,
        seatsRemaining: 210,
        priceUSD: 190,
        imageUrl: 'https://thepressboxlts.com/wp-content/uploads/2026/02/2026-Breeders-Cup-Event-Logo.jpg',
        bookedSeats: []
    },
    {
        id: 'preakness-stakes',
        name: 'Preakness Stakes',
        location: 'Pimlico Race Course, USA',
        date: '2026-05-17T18:50:00-04:00',
        distance: '1 3/16 miles',
        horses: 14,
        seatsRemaining: 200,
        priceUSD: 135,
        imageUrl: 'https://cdn-images.bloodhorse.com/i/bloodhorse-images/2015/05/a8c1b77a181346b5aedc77ee814e48b9.jpg?preset=slr',
        bookedSeats: []
    },
    {
        id: 'japan-cup',
        name: 'Japan Cup',
        location: 'Tokyo Racecourse, Japan',
        date: '2026-11-30T15:40:00+09:00',
        distance: '2,400 m',
        horses: 18,
        seatsRemaining: 240,
        priceUSD: 150,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Japan_Cup.jpg/250px-Japan_Cup.jpg',
        bookedSeats: []
    },
    {
        id: 'epsom-derby',
        name: 'Epsom Derby',
        location: 'Epsom Downs, UK',
        date: '2026-06-07T15:30:00+01:00',
        distance: '1 mile 4 furlongs',
        horses: 16,
        seatsRemaining: 190,
        priceUSD: 155,
        imageUrl: 'https://reinitinracing.wordpress.com/wp-content/uploads/2019/05/epsom-downs-the-derby-logo160821292.png',
        bookedSeats: []
    },
    {
        id: 'belmont-stakes',
        name: 'Belmont Stakes',
        location: 'Belmont Park, USA',
        date: '2026-06-07T19:00:00-04:00',
        distance: '1.5 miles',
        horses: 12,
        seatsRemaining: 170,
        priceUSD: 130,
        imageUrl: 'https://t3.ftcdn.net/jpg/13/51/04/36/360_F_1351043676_Gpy8SilZiBmrCCTMD569kXYqr7bmnsci.jpg',
        bookedSeats: []
    },
    {
        id: 'tenno-sho-autumn',
        name: 'Tenno Sho (Autumn)',
        location: 'Tokyo Racecourse, Japan',
        date: '2026-11-02T15:40:00+09:00',
        distance: '2,000 m',
        horses: 17,
        seatsRemaining: 220,
        priceUSD: 135,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=208',
        bookedSeats: []
    },
    {
        id: 'cheltenham-gold-cup',
        name: 'Cheltenham Gold Cup',
        location: 'Cheltenham, UK',
        date: '2026-03-14T15:30:00+00:00',
        distance: '3 miles 2½ furlongs',
        horses: 14,
        seatsRemaining: 180,
        priceUSD: 145,
        imageUrl: 'https://www.bruern-holiday-cottages.co.uk/wp-content/uploads/2019/12/cheltenham-festival-logo.jpg',
        bookedSeats: []
    },
    {
        id: 'grand-national',
        name: 'Grand National',
        location: 'Aintree, UK',
        date: '2026-04-05T17:15:00+01:00',
        distance: '4 miles 2½ furlongs',
        horses: 40,
        seatsRemaining: 320,
        priceUSD: 165,
        imageUrl: 'https://www.thejockeyclub.co.uk/globalassets/images/1.-festival-hubs/grand-national/2026/rgn26-logo---colour-1.png',
        bookedSeats: []
    },
    {
        id: 'nhk-mile-cup',
        name: 'NHK Mile Cup',
        location: 'Tokyo Racecourse, Japan',
        date: '2026-05-11T15:40:00+09:00',
        distance: '1,600 m',
        horses: 18,
        seatsRemaining: 210,
        priceUSD: 120,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=159',
        bookedSeats: []
    },
    {
        id: 'tokyo-yushun',
        name: 'Tokyo Yushun (Japanese Derby)',
        location: 'Tokyo Racecourse, Japan',
        date: '2026-05-25T15:40:00+09:00',
        distance: '2,400 m',
        horses: 18,
        seatsRemaining: 260,
        priceUSD: 145,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=175',
        bookedSeats: []
    },
    {
        id: 'satsuki-sho',
        name: 'Satsuki Sho (Japanese 2000 Guineas)',
        location: 'Nakayama Racecourse, Japan',
        date: '2026-04-20T15:40:00+09:00',
        distance: '2,000 m',
        horses: 18,
        seatsRemaining: 230,
        priceUSD: 135,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Nakayama_Racecourse_2004.jpg',
        bookedSeats: []
    },
    {
        id: 'kikuka-sho',
        name: 'Kikuka Sho (Japanese St. Leger)',
        location: 'Kyoto Racecourse, Japan',
        date: '2026-10-19T15:40:00+09:00',
        distance: '3,000 m',
        horses: 18,
        seatsRemaining: 210,
        priceUSD: 130,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=150',
        bookedSeats: []
    },
    {
        id: 'tenno-sho-spring',
        name: 'Tenno Sho (Spring)',
        location: 'Kyoto Racecourse, Japan',
        date: '2026-05-04T15:40:00+09:00',
        distance: '3,200 m',
        horses: 18,
        seatsRemaining: 200,
        priceUSD: 135,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=307',
        bookedSeats: []
    },
    {
        id: 'takarazuka-kinen',
        name: 'Takarazuka Kinen',
        location: 'Hanshin Racecourse, Japan',
        date: '2026-06-22T15:40:00+09:00',
        distance: '2,200 m',
        horses: 16,
        seatsRemaining: 220,
        priceUSD: 130,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV99-_hkjnQYfcSkRyWddFtCQjN2i7LsFciQ&s',
        bookedSeats: []
    },
    {
        id: 'yasuda-kinen',
        name: 'Yasuda Kinen',
        location: 'Tokyo Racecourse, Japan',
        date: '2026-06-08T15:40:00+09:00',
        distance: '1,600 m',
        horses: 18,
        seatsRemaining: 240,
        priceUSD: 125,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=178',
        bookedSeats: []
    },
    {
        id: 'osaka-hai',
        name: 'Osaka Hai',
        location: 'Hanshin Racecourse, Japan',
        date: '2026-03-30T15:40:00+09:00',
        distance: '2,000 m',
        horses: 16,
        seatsRemaining: 210,
        priceUSD: 120,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=280',
        bookedSeats: []
    },
    {
        id: 'japan-cup-dirt',
        name: 'Champions Cup (Japan Cup Dirt)',
        location: 'Chukyo Racecourse, Japan',
        date: '2026-12-07T15:30:00+09:00',
        distance: '1,800 m',
        horses: 16,
        seatsRemaining: 190,
        priceUSD: 125,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=85',
        bookedSeats: []
    },
    {
        id: 'february-stakes',
        name: 'February Stakes',
        location: 'Tokyo Racecourse, Japan',
        date: '2026-02-23T15:40:00+09:00',
        distance: '1,600 m',
        horses: 16,
        seatsRemaining: 170,
        priceUSD: 115,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=128',
        bookedSeats: []
    },
    {
        id: 'victoria-mile',
        name: 'Victoria Mile',
        location: 'Tokyo Racecourse, Japan',
        date: '2026-05-18T15:40:00+09:00',
        distance: '1,600 m',
        horses: 16,
        seatsRemaining: 200,
        priceUSD: 120,
        imageUrl: 'https://en.netkeiba.com/library/image.php?id=162',
        bookedSeats: []
    },
    {
        id: 'queen-elizabeth-cup',
        name: 'Queen Elizabeth II Cup',
        location: 'Kyoto Racecourse, Japan',
        date: '2026-11-16T15:40:00+09:00',
        distance: '2,200 m',
        horses: 16,
        seatsRemaining: 210,
        priceUSD: 125,
        imageUrl: 'https://www.turfclub.com.sg/content/dam/stc/homestretch/QEII%20Highlight%20Banner_1920x480.png',
        bookedSeats: []
    },
    {
        id: 'queen-elizabeth-cup',
        name: 'Queen Elizabeth IIII Cup',
        location: 'Kyoto Racecourse, Japan',
        date: '2026-12-16T15:40:00+09:00',
        distance: '2,200 m',
        horses: 16,
        seatsRemaining: 110,
        priceUSD: 125,
        imageUrl: 'https://m.media-amazon.com/images/I/51qRdoPQMcL._AC_UF894,1000_QL80_.jpg',
        bookedSeats: []
    }
];

const ticketTiers = [
    {
        id: 'standard',
        label: 'Standard',
        color: '#7b5133',
        priceUSD: 95,
        seatsRemaining: 220
    },
    {
        id: 'gold',
        label: 'Gold',
        color: '#b07a2a',
        priceUSD: 150,
        seatsRemaining: 140
    },
    {
        id: 'premium',
        label: 'Premium',
        color: '#5b3a22',
        priceUSD: 220,
        seatsRemaining: 80
    }
];

const horses = [
    {
        name: 'Equinox',
        country: 'Japan',
        color: 'Bay',
        foaled: '2019-03-23',
        started: 2021,
        record: '10 starts • 8 wins',
        titles: 'Arima Kinen (2022), Tenno Sho (Autumn) (2022)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhswOBEuuXt6EH5w8YRgsvE4vnjhffizVjHA&s',
    },
    {
        name: 'Contrail',
        country: 'Japan',
        color: 'Bay',
        foaled: '2017-04-01',
        started: 2019,
        record: '11 starts • 8 wins',
        titles: 'Japanese Triple Crown (2020)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAB0PCW_lAQw4hXrdp4t6NYEYjb7lg6OtvLw&s',
    },
    {
        name: 'Almond Eye',
        country: 'Japan',
        color: 'Bay',
        foaled: '2015-03-10',
        started: 2017,
        record: '15 starts • 11 wins',
        titles: 'Japan Cup (2018, 2020)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Almond_Eye_Yushun_Himba_2018%28IMG1%29.jpg',
    },
    {
        name: 'Liberty Island',
        country: 'Japan',
        color: 'Bay',
        foaled: '2020-02-02',
        started: 2022,
        record: '9 starts • 7 wins',
        titles: 'Japanese Filly Triple Crown (2023)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8fx9e19fo59RVprHdcdbyUR9WdjTGYNzeA&s',
    },
    {
        name: 'Do Deuce',
        country: 'Japan',
        color: 'Bay',
        foaled: '2019-05-07',
        started: 2021,
        record: '14 starts • 6 wins',
        titles: 'Tokyo Yushun (2022)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7a55p5jJakbuP7S0WsBJZcreL_5nSeTvW9A&s',
    },
    {
        name: 'Sodashi',
        country: 'Japan',
        color: 'White',
        foaled: '2018-03-08',
        started: 2020,
        record: '16 starts • 8 wins',
        titles: 'Oka Sho (2021)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WRWqoa4-DS-jC9u9QD-NJU5k9MSWY35CCw&s',
    },
    {
        name: 'Titleholder',
        country: 'Japan',
        color: 'Bay',
        foaled: '2018-02-10',
        started: 2020,
        record: '18 starts • 7 wins',
        titles: 'Tenno Sho (Spring) (2022)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzbbPuMWMAkRXOcex8wXW636wG8KW2VErfQ&s',
    },
    {
        name: 'Shahryar',
        country: 'Japan',
        color: 'Bay',
        foaled: '2018-02-05',
        started: 2020,
        record: '15 starts • 5 wins',
        titles: 'Tokyo Yushun (2021)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkezB6VgkiT_zcKxEqIs9WXeIqQh_uBotCQ&s',
    },
    {
        name: 'Daring Tact',
        country: 'Japan',
        color: 'Chestnut',
        foaled: '2017-04-18',
        started: 2019,
        record: '12 starts • 5 wins',
        titles: 'Japanese Filly Triple Crown (2020)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZmorQbm1gSVgk4ITRR_ti26w3CfxsYefZw&s',
    },
    {
        name: 'Chrono Genesis',
        country: 'Japan',
        color: 'Bay',
        foaled: '2016-03-06',
        started: 2018,
        record: '17 starts • 8 wins',
        titles: 'Arima Kinen (2019, 2020)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chrono_Genesis%28JPN%29_IMG_4796-1_20191013.jpg',
    },
    {
        name: 'Loves Only You',
        country: 'Japan',
        color: 'Bay',
        foaled: '2016-03-26',
        started: 2018,
        record: '15 starts • 7 wins',
        titles: 'Breeders\' Cup Filly & Mare Turf (2021)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdxWPmRiMnXeFix1yBkDcUCvplrJ4GsdOgQ&s',
    },
    {
        name: 'Gran Alegria',
        country: 'Japan',
        color: 'Bay',
        foaled: '2016-01-24',
        started: 2018,
        record: '16 starts • 9 wins',
        titles: 'Yasuda Kinen (2020, 2021)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNd1HZArBnZee8jyDvtr_stRES-LSvqDSISg&s',
    },
    {
        name: 'Flightline',
        country: 'USA',
        color: 'Bay',
        foaled: '2018-03-14',
        started: 2020,
        record: '6 starts • 6 wins',
        titles: 'Breeders\' Cup Classic (2022), Pacific Classic (2022)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-pM6DCA_PnlRAsF3Pp6migWpn5cmrv1jrw&s',
    },
    {
        name: 'Frankel',
        country: 'UK',
        color: 'Bay',
        foaled: '2008-02-11',
        started: 2010,
        record: '14 starts • 14 wins',
        titles: 'Queen Elizabeth II Stakes (2011), Sussex Stakes (2011)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AoKUccGSrDsddfNMUC4jTnYVuDxgMVQ84g&s',
    },
    {
        name: 'City of Troy',
        country: 'UK',
        color: 'Bay',
        foaled: '2021-03-04',
        started: 2023,
        record: '6 starts • 5 wins',
        titles: 'Dewhurst Stakes (2023), Derby (2024)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYT5vsOQNcnvwm0p_OYXpDHH-pwenb255eUg&s',
    },
    {
        name: 'Luxembourg',
        country: 'Ireland',
        color: 'Bay',
        foaled: '2019-03-08',
        started: 2021,
        record: '16 starts • 8 wins',
        titles: 'Irish Champion Stakes (2023)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TVPP7ktpwixEgSoIYqo-0XlcCoF6poO09Q&s',
    },
    {
        name: 'Ka Ying Rising',
        country: 'Hong Kong',
        color: 'Bay',
        foaled: '2018-10-02',
        started: 2021,
        record: '16 starts • 12 wins',
        titles: 'Hong Kong Sprint (2024)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8EMOug-lHZShMlBZdv69wsq6obvDR9NOnw&s',
    },
    {
        name: 'Romantic Warrior',
        country: 'Hong Kong',
        color: 'Bay',
        foaled: '2018-09-15',
        started: 2021,
        record: '24 starts • 17 wins',
        titles: 'Hong Kong Cup (2022, 2023)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgywFZhYF2HFJOhIm6CqV9Ql5sLmF9xMhkQ&s',
    },
    {
        name: 'Forever Young',
        country: 'Japan',
        color: 'Chestnut',
        foaled: '2021-02-24',
        started: 2023,
        record: '6 starts • 6 wins',
        titles: 'UAE Derby (2024)',
        imageUrl: 'https://www.kentuckyderby.com/wp-content/uploads/sites/2/2024/04/ForeverYoung-2024UAEDerby-horsephotos1280.jpg',
    },
    {
        name: 'National Treasure',
        country: 'USA',
        color: 'Bay',
        foaled: '2020-02-17',
        started: 2022,
        record: '14 starts • 5 wins',
        titles: "Preakness Stakes (2023), Pegasus World Cup (2024)",
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/National_Treasure_%2852915343221%29.jpg',
    },
    {
        name: 'Omaha Beach',
        country: 'USA',
        color: 'Bay',
        foaled: '2016-02-24',
        started: 2018,
        record: '7 starts • 4 wins',
        titles: 'Arkansas Derby (2019), Malibu Stakes (2019)',
    imageUrl: 'https://cdn.bloodhorse.com/sroimages//large/0000170946_1.jpg',
    },
    {
        name: 'Enable',
        country: 'UK',
        color: 'Bay',
        foaled: '2014-03-11',
        started: 2016,
        record: '19 starts • 15 wins',
        titles: "Prix de l'Arc de Triomphe (2017, 2018)",
        imageUrl: 'https://resource11.racingandsports.com.au/Photos/photogallery/large/2020/Horse-enable-155331-750x500.jpg',
    },
    {
        name: 'Golden Sixty',
        country: 'Hong Kong',
        color: 'Bay',
        foaled: '2015-08-12',
        started: 2018,
        record: '31 starts • 26 wins',
        titles: 'Hong Kong Mile (2020, 2021, 2022)',
        imageUrl: 'https://breednet.blob.core.windows.net/breednet/images/SalesImages/2017MMGoldCoastYearlingSale/45.jpg',
    },
    {
        name: "Jackie's Warrior",
        country: 'USA',
        color: 'Chestnut',
        foaled: '2018-03-18',
        started: 2020,
        record: '22 starts • 12 wins',
        titles: "Breeders' Cup Sprint (2021)",
        imageUrl: 'https://cdn.bloodhorse.com/sroimages//large/0000172304_1.jpg',
    },
];

const hallOfFame = [
    {
        name: 'Secretariat',
        country: 'USA',
        color: 'Chestnut',
        foaled: '1970-03-30',
        started: 1972,
        record: '21 starts • 16 wins',
        titles: 'Triple Crown (1973), Belmont Stakes record',
        retired: '1974',
        memorial: '1989-10-04',
        imageUrl: 'https://cdn.britannica.com/07/260707-050-BB5D5744/Secretariat-racehorse-Ron-Turcotte-winners-circle-roses-Kentucky-Derby-1973.jpg',
    },
    {
        name: 'Deep Impact',
        country: 'Japan',
        color: 'Bay',
        foaled: '2002-03-25',
        started: 2004,
        record: '14 starts • 12 wins',
        titles: 'Japanese Triple Crown (2005), Arima Kinen (2006)',
        retired: '2006',
        memorial: '2019-07-30',
        imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.p70N02aoL0x_s1iqdkGMlgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
        name: 'Symboli Rudolf',
        country: 'Japan',
        color: 'Bay',
        foaled: '1981-03-13',
        started: 1983,
        record: '16 starts • 13 wins',
        titles: 'Japanese Triple Crown (1984)',
        retired: '1985',
        memorial: '—',
        imageUrl: 'https://en.netkeiba.com/db/show_photo.php?horse_id=1981107017&no=spdb&tn=&tmp=no&default_image=netkeiba',
    },
    {
        name: 'Tokai Teio',
        country: 'Japan',
        color: 'Chestnut',
        foaled: '1988-04-20',
        started: 1990,
        record: '12 starts • 9 wins',
        titles: 'Japan Cup (1992)',
        retired: '1993',
        memorial: '—',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Tokai_Teio_20000923F01.jpg',
    },
    {
        name: 'Mejiro McQueen',
        country: 'Japan',
        color: 'Grey',
        foaled: '1987-04-03',
        started: 1989,
        record: '21 starts • 12 wins',
        titles: 'Tenno Sho (Spring) (1991, 1992)',
        retired: '1992',
        memorial: '—',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Mejiro_McQueen_20020722.jpg',
    },
    {
        name: 'Narita Brian',
        country: 'Japan',
        color: 'Bay',
        foaled: '1991-05-03',
        started: 1993,
        record: '21 starts • 12 wins',
        titles: 'Japanese Triple Crown (1994)',
        retired: '1996',
        memorial: '1998-09-27',
        imageUrl: 'https://media.rimondo.com/6483234/conversions/ba6f9172-218b-48f6-92d9-2831f41d92c8-100.jpg?v=1688288179',
    },
    {
        name: 'Admire Don',
        country: 'Japan',
        color: 'Bay',
        foaled: '1999-03-29',
        started: 2001,
        record: '22 starts • 9 wins',
        titles: 'Feb Stakes (2004)',
        retired: '2005',
        memorial: '—',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi2sRNFC0Qozs114WXOI1-nz821wFNcGFWw&s',
    },
    {
        name: 'Vodka',
        country: 'Japan',
        color: 'Chestnut',
        foaled: '2004-04-04',
        started: 2006,
        record: '26 starts • 9 wins',
        titles: 'Japan Cup (2007), Yasuda Kinen (2009)',
        retired: '2009',
        memorial: '—',
        imageUrl: 'https://s3-eu-west-1.amazonaws.com/prod-media-racingpost/prod/images/169_1008/e2f92a6eeb72-59173.jpg',
    },
    {
        name: 'Gold Ship',
        country: 'Japan',
        color: 'Grey',
        foaled: '2009-03-06',
        started: 2013,
        record: '28 starts • 13 wins',
        titles: 'Takarazuka Kinen (2013, 2014)',
        retired: '2015',
        memorial: '—',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidSLIufX2WWAOEjXaDvjLp29MMA1OB3IDXQ&s',
    },
    {
        name: 'Zenyatta',
        country: 'USA',
        color: 'Bay',
        foaled: '2004-04-01',
        started: 2007,
        record: '20 starts • 19 wins',
        titles: "Breeders' Cup Classic (2009)",
        retired: '2010',
        memorial: '—',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZUflT6bCurLmyS2VhUmcNjxTYpnKYv3WAA&s', 
    },
    {
        name: 'Orfevre',
        country: 'Japan',
        color: 'Chestnut',
        foaled: '2008-05-14',
        started: 2010,
        record: '21 starts • 12 wins',
        titles: 'Japanese Triple Crown (2011)',
        retired: '2013',
        memorial: '—',
        imageUrl: 'https://cdn.netkeiba.com/img.en//db/show_photo.php?horse_id=2008102636&no=11442&tn=&tmp=no',
    },
    {
        name: 'Kitasan Black',
        country: 'Japan',
        color: 'Black',
        foaled: '2012-03-10',
        started: 2014,
        record: '20 starts • 12 wins',
        titles: 'Japan Cup (2016), Arima Kinen (2016)',
        retired: '2017',
        memorial: '—',
        imageUrl: 'https://www.thoroughbreddailynews.com/wp-content/uploads/2023/11/Kitasan-Black-%C2%A9Emma-Berry.jpg', 
    },
    {
        name: 'American Pharoah',
        country: 'USA',
        color: 'Bay',
        foaled: '2012-02-02',
        started: 2014,
        record: '11 starts • 9 wins',
        titles: 'Triple Crown (2015), Breeders\' Cup Classic (2015)',
        retired: '2015',
        memorial: '—',
        imageUrl: 'https://media.coolmore.com/uploads/2025/11/American-Pharoah.jpg',
    },
    {
        name: 'Justify',
        country: 'USA',
        color: 'Chestnut',
        foaled: '2015-03-28',
        started: 2018,
        record: '6 starts • 6 wins',
        titles: 'Triple Crown (2018)',
        retired: '2018',
        memorial: '—',
        imageUrl: 'https://media.coolmore.com/uploads/2025/10/Justify-conformation-shot.jpg',
    },
    {
        name: 'Black Caviar',
        country: 'Australia',
        color: 'Bay',
        foaled: '2006-08-18',
        started: 2008,
        record: '25 starts • 25 wins',
        titles: 'Diamond Jubilee Stakes (2012)',
        retired: '2013',
        memorial: '—',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyts0bxPDY6z3xD-CNTDqFxHtPIBiskcxiA&s',
    },
    {
        name: 'Wise Dan',
        country: 'USA',
        color: 'Bay',
        foaled: '2007-04-15',
        started: 2009,
        record: '23 starts • 14 wins',
        titles: 'Breeders\' Cup Mile (2012, 2013)',
        retired: '2015',
        memorial: '—',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvptGD57bTfyKQ2-deVsbYIyrTl587faYVg&s',
    },
];

const jockeys = [
    {
        name: 'Frankie Dettori',
        birth: '1970-12-15',
        gender: 'Male',
        status: 'Active',
        started: 1987,
        wins: 'Over 3,000 wins',
        awards: 'Prix de l\'Arc de Triomphe (multiple), Champion Jockey (UK)',
        imageUrl: 'https://pastthewire.com/wp-content/uploads/2023/01/IMG_3497-scaled.jpg'
    },
    {
        name: 'Yutaka Take',
        birth: '1969-03-15',
        gender: 'Male',
        status: 'Active',
        started: 1987,
        wins: 'Over 4,000 wins',
        awards: 'Japan Cup, Tokyo Yushun (Japanese Derby)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Yutaka_Take_at_Tokyo_racecourse_20220529_1617.jpg'
    },
    {
        name: 'Yuga Kawada',
        birth: '1985-10-15',
        gender: 'Male',
        status: 'Active',
        started: 2004,
        wins: 'Over 1,800 wins',
        awards: 'JRA Best Jockey (2016, 2020)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Yuga_Kawada_2023.jpg'
    },
    {
        name: 'Yuichi Fukunaga',
        birth: '1976-12-09',
        gender: 'Male',
        status: 'Active',
        started: 1996,
        wins: 'Over 2,600 wins',
        awards: 'Japanese Derby, Japan Cup',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPJfVMY5jpnQqA8WR6fQTzhm8M4NOO36D_Q&s'
    },
    {
        name: 'Takeshi Yokoyama',
        birth: '1998-02-10',
        gender: 'Male',
        status: 'Active',
        started: 2016,
        wins: 'Over 500 wins',
        awards: 'NHK Mile Cup (2022)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Takeshi_Yokoyama_All_Comers_2022.jpg'
    },
    {
        name: 'Hideaki Miyuki',
        birth: '1976-01-06',
        gender: 'Male',
        status: 'Active',
        started: 1994,
        wins: 'Over 900 wins',
        awards: 'Dubai Turf (2022)',
        imageUrl: 'https://www.shutterstock.com/editorial/image-editorial/M6TaMe3aM0zfI73eNjIxNTc=/hideaki-miyuki-won-miyako-stakes-hanshin-racecourse-1500w-13613192m.jpg'
    },
    {
        name: 'Mirco Demuro',
        birth: '1979-01-11',
        gender: 'Male',
        status: 'Active',
        started: 1998,
        wins: 'Over 1,200 wins',
        awards: 'Japanese Derby, Arima Kinen',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGSHSKkjQ9UqqpETze8ux6aya-LJTaJmcKw&s'
    },
    {
        name: 'Keita Tosaki',
        birth: '1980-07-20',
        gender: 'Male',
        status: 'Active',
        started: 1998,
        wins: 'Over 1,300 wins',
        awards: 'JRA Best Jockey (2014, 2016)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaORYKah66aLevyJyKgVfhJMcQYTWBlm4Kg&s'
    },
    {
        name: 'Kohei Matsuyama',
        birth: '1990-03-01',
        gender: 'Male',
        status: 'Active',
        started: 2009,
        wins: 'Over 1,100 wins',
        awards: 'Takamatsunomiya Kinen (2021)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Kohei_Matsuyama_2025.12.27.jpg'
    },
    {
        name: 'Akira Sugawara',
        birth: '2001-03-12',
        gender: 'Male',
        status: 'Active',
        started: 2019,
        wins: 'Over 400 wins',
        awards: 'JRA Best Young Jockey (2022)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1H2QuKu5dYkZWf1aPhsWAOHq1RKS5nCaR0g&s'
    },
    {
        name: 'Ryuusei Sakai',
        birth: '1997-03-12',
        gender: 'Male',
        status: 'Active',
        started: 2016,
        wins: 'Over 500 wins',
        awards: 'Dubai World Cup (2023)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDgoTJsTm535RA2se5Ffu_fsWuPNgHYa8HA&s'
    },
    {
        name: 'John Velazquez',
        birth: '1971-11-24',
        gender: 'Male',
        status: 'Active',
        started: 1990,
        wins: 'Over 5,000 wins',
        awards: 'Kentucky Derby, Belmont Stakes, Breeders\' Cup Classic',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/John_Velazquez_2016_Pimlico.jpg'
    },
    {
        name: 'Ryan Moore',
        birth: '1983-09-18',
        gender: 'Male',
        status: 'Active',
        started: 2000,
        wins: 'Over 2,500 wins',
        awards: 'Epsom Derby, Prix de l\'Arc de Triomphe',
        imageUrl: 'https://consvc.hkjc.com/-/media/Sites/Worldpool/News/2025/02/2025.02.14-photo.png?rev=440394f2ab54453dbb7baba432a6b709&sc_lang=en-US'
    },
    {
        name: 'William Buick',
        birth: '1988-10-22',
        gender: 'Male',
        status: 'Active',
        started: 2006,
        wins: 'Over 1,700 wins',
        awards: 'Epsom Derby, Dubai World Cup',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/HKIR_20231210_William_Buick.jpg'
    },
    {
        name: 'Christophe Lemaire',
        birth: '1979-05-20',
        gender: 'Male',
        status: 'Active',
        started: 1999,
        wins: 'Over 1,800 wins',
        awards: 'Japan Cup, Japanese Derby',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Christophe_Lemaire_2023_Takarazuka_Kinen.jpg'
    },
    {
        name: 'Joao Moreira',
        birth: '1983-09-26',
        gender: 'Male',
        status: 'Active',
        started: 2006,
        wins: 'Over 2,000 wins',
        awards: 'Hong Kong Champion Jockey',
        imageUrl: 'https://asianracingreport.com/wp-content/uploads/2022/11/joaomoreira-scaled-1.jpg'
    },
    {
        name: 'Zac Purton',
        birth: '1983-01-03',
        gender: 'Male',
        status: 'Active',
        started: 2000,
        wins: 'Over 2,000 wins',
        awards: 'Hong Kong Champion Jockey',
        imageUrl: 'https://dstiy6x3teqwd.cloudfront.net/wp-content/uploads/2025/10/21101901/KaYingRising-ZacPurton-20251018-9385-1024x768.jpg'
    },
    {
        name: 'James McDonald',
        birth: '1991-01-26',
        gender: 'Male',
        status: 'Active',
        started: 2007,
        wins: 'Over 1,800 wins',
        awards: 'Cox Plate, Hong Kong Cup',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbuIOj75GOCi4--QIEWpYfaw83PHsBCT6Kw&s'
    },
    {
        name: 'Irad Ortiz Jr.',
        birth: '1992-08-11',
        gender: 'Male',
        status: 'Active',
        started: 2012,
        wins: 'Over 3,000 wins',
        awards: 'Eclipse Award for Outstanding Jockey',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzXDLf40OultsU6ZmVIsF0546lTDPKAKBGw&s'
    },
    {
        name: 'Jose Ortiz',
        birth: '1993-10-02',
        gender: 'Male',
        status: 'Active',
        started: 2012,
        wins: 'Over 2,700 wins',
        awards: 'Eclipse Award for Outstanding Jockey',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGFPIp3GpslrzXltC0uEb3NP5palc4eDmHQ&s'
    },
    {
        name: 'Flavien Prat',
        birth: '1992-08-04',
        gender: 'Male',
        status: 'Active',
        started: 2009,
        wins: 'Over 2,000 wins',
        awards: 'Breeders\' Cup Turf, Eclipse Award',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IjPhHittpDFKUxiWpohlbyZlDGr1YKzUzA&s'
    },
    {
        name: 'Oisin Murphy',
        birth: '1995-09-06',
        gender: 'Male',
        status: 'Active',
        started: 2013,
        wins: 'Over 1,200 wins',
        awards: 'British Champion Jockey (2019-2021)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenh-Dm5H8oBHCfVPl0vwWZKJ1xTa5ly3OCw&s'
    },
    {
        name: 'Hollie Doyle',
        birth: '1996-10-11',
        gender: 'Female',
        status: 'Active',
        started: 2013,
        wins: 'Over 1,100 wins',
        awards: 'UK Champion Apprentice (2017)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZEUnYzCnyH_43-Qt2ubnECAwkx3URjHpvg&s'
    },
    {
        name: 'Rachel King',
        birth: '1990-07-31',
        gender: 'Female',
        status: 'Active',
        started: 2009,
        wins: 'Over 600 wins',
        awards: 'JRA Best New Jockey (2014)',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfo6vJnhZ5XIFcNddwFZlYKEl8f7LD9vF_Q&s'
    }
];


const imageFallbacks = {
    race: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Ascot_Racecourse_2006.jpg',
    horse: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Frankel_%28horse%29.jpg',
    jockey: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Frankie_Dettori_2014.jpg'
};

featuredRaces.forEach((race) => {
    if (!race.imageUrl) {
        race.imageUrl = imageFallbacks.race;
    }
});

horses.forEach((horse) => {
    if (!horse.imageUrl) {
        horse.imageUrl = imageFallbacks.horse;
    }
});

hallOfFame.forEach((horse) => {
    if (!horse.imageUrl) {
        horse.imageUrl = imageFallbacks.horse;
    }
});

jockeys.forEach((jockey) => {
    if (!jockey.imageUrl) {
        jockey.imageUrl = imageFallbacks.jockey;
    }
});


featuredRaces.forEach((race) => {
    // Tìm theo tên địa điểm hoặc tên giải đua để lấy hình ảnh trường đua
    race.imageTitle = race.imageTitle || `${race.location.split(',')[0].trim()} Racecourse|${race.name}`;
});

horses.forEach((horse) => {
    // Thêm hậu tố (horse) để Wikipedia trả về đúng hình ngựa đua
    horse.imageTitle = horse.imageTitle || `${horse.name} (horse)|${horse.name}`;
});

hallOfFame.forEach((horse) => {
    horse.imageTitle = horse.imageTitle || `${horse.name} (horse)|${horse.name}`;
});

jockeys.forEach((jockey) => {
    // Thêm hậu tố (jockey) để tìm đúng người cưỡi ngựa
    jockey.imageTitle = jockey.imageTitle || `${jockey.name} (jockey)|${jockey.name}`;
});

featuredRaces.forEach((race) => {
    race.season = '2026';
});

horses.forEach((horse) => {
    if (!horse.record.includes('2026')) {
        horse.record = `${horse.record} (as of 2026 season)`;
    }
    if (!horse.titles.includes('2026')) {
        horse.titles = `${horse.titles} • Updated for 2026 season`;
    }
});

hallOfFame.forEach((horse) => {
    if (!horse.record.includes('2026')) {
        horse.record = `${horse.record} (as of 2026 season)`;
    }
});

jockeys.forEach((jockey) => {
    if (!jockey.wins.includes('2026')) {
        jockey.wins = `${jockey.wins} (as of 2026 season)`;
    }
    if (!jockey.awards.includes('2026')) {
        jockey.awards = `${jockey.awards} • 2026 season profile`;
    }
});

const news = [
    {
        title: 'Royal Ascot confirms traditional five-day festival schedule',
        source: 'Ascot Racecourse',
        location: 'UK',
        date: '2026-01-18'
    },
    {
        title: 'Churchill Downs outlines Kentucky Derby week security upgrades',
        source: 'Churchill Downs',
        location: 'USA',
        date: '2026-02-02'
    },
    {
        title: 'Japan Racing Association previews year-end championship meets',
        source: 'JRA',
        location: 'Japan',
        date: '2026-02-14'
    }
];

const sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

const sendFile = (res, filePath, contentType) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found');
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;

    if (req.method === 'GET' && pathname === '/api/featured-races') {
        sendJson(res, 200, featuredRaces);
        return;
    }

    if (req.method === 'GET' && pathname === '/api/ticket-tiers') {
        sendJson(res, 200, ticketTiers);
        return;
    }

    if (req.method === 'GET' && pathname === '/api/horses') {
        sendJson(res, 200, horses);
        return;
    }

    if (req.method === 'GET' && pathname === '/api/hall-of-fame') {
        sendJson(res, 200, hallOfFame);
        return;
    }

    if (req.method === 'GET' && pathname === '/api/jockeys') {
        sendJson(res, 200, jockeys);
        return;
    }

    if (req.method === 'GET' && pathname === '/api/news') {
        sendJson(res, 200, news);
        return;
    }

    if (req.method === 'POST' && pathname === '/api/purchase') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const payload = body ? JSON.parse(body) : {};
            const { raceId, tierId, quantity, paymentMethod, seatId } = payload;
            const tier = ticketTiers.find((item) => item.id === tierId);
            const amount = Number(quantity);

            if (!tier || Number.isNaN(amount) || amount <= 0) {
                sendJson(res, 400, { message: 'Invalid purchase request.' });
                return;
            }

            if (paymentMethod && paymentMethod !== 'visa_master' && paymentMethod !== 'paypal' && paymentMethod !== 'bank') {
                sendJson(res, 400, { message: 'Invalid payment method.' });
                return;
            }

            if (tier.seatsRemaining < amount) {
                sendJson(res, 409, { message: 'Not enough seats remaining.' });
                return;
            }

            if (raceId && seatId) {
                const race = featuredRaces.find((r) => r.id === raceId);
                if (race) {
                    if (!race.bookedSeats) race.bookedSeats = [];
                    if (race.bookedSeats.includes(seatId)) {
                        sendJson(res, 409, { message: 'Seat already booked.' });
                        return;
                    }
                    race.bookedSeats.push(seatId);
                    race.seatsRemaining -= amount;
                } else {
                    // Fallback if race not found
                    tier.seatsRemaining -= amount;
                }
            } else {
                tier.seatsRemaining -= amount;
            }

            sendJson(res, 200, {
                message: 'Purchase confirmed.',
                tierId: tier.id,
                paymentMethod: paymentMethod,
                seatsRemaining: tier.seatsRemaining
            });
        });
        return;
    }

    const publicPath = path.join(__dirname, 'publics');
    const htmlRoutes = {
        '/': 'index.html',
        '/index.html': 'index.html',
        '/races.html': 'races.html',
        '/horses.html': 'horses.html',
        '/jockeys.html': 'jockeys.html',
        '/hall-of-fame.html': 'hall-of-fame.html',
        '/wiki.html': 'wiki.html'
    };

    if (req.method === 'GET' && htmlRoutes[pathname]) {
        sendFile(res, path.join(publicPath, htmlRoutes[pathname]), 'text/html');
        return;
    }

    if (req.method === 'GET' && pathname === '/styles.css') {
        sendFile(res, path.join(publicPath, 'styles.css'), 'text/css');
        return;
    }

    if (req.method === 'GET' && pathname === '/app.js') {
        sendFile(res, path.join(publicPath, 'app.js'), 'text/javascript');
        return;
    }

    res.writeHead(404);
    res.end('Not found');
});

server.listen(PORT, () => {
    const urlToOpen = `http://localhost:${PORT}`;
    console.log(`Royal Racing running on ${urlToOpen}`);
    const start =
        process.platform === 'darwin'
            ? 'open'
            : process.platform === 'win32'
                ? 'start'
                : 'xdg-open';
    exec(`${start} ${urlToOpen}`, (err) => {
        if (err) {
            console.log('Open your browser at:', urlToOpen);
        }
    });
});
