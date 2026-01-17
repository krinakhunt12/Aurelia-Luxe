
import type { Product, Collection, Testimonial } from './types';

export const COLORS = {
  primary: '#0F0F0F',
  secondary: '#2B2B2B',
  accent: '#B5B5B5',
  background: '#FFFFFF',
};

export const COLLECTIONS: Collection[] = [
  { id: 'col_001', title: 'Rings', image: 'https://i.pinimg.com/736x/2c/14/83/2c1483fd0d3769beaa3c0ca2bccb1e74.jpg', path: '/collections/rings' },
  { id: 'col_002', title: 'Necklaces', image: 'https://i.pinimg.com/736x/7c/44/80/7c44803dd23fa0d9e5c693d2c5138c2f.jpg', path: '/collections/necklaces' },
  { id: 'col_003', title: 'Earrings', image: 'https://i.pinimg.com/736x/27/b3/0c/27b30ccdf6485fb9b22abee1d1fb7947.jpg', path: '/collections/earrings' },
  { id: 'col_004', title: 'Bracelets', image: 'https://i.pinimg.com/736x/08/e8/ac/08e8ace37443d86d56b9eb6aee37ac8a.jpg', path: '/collections/bracelets' },
];

export const SIGNATURE_PIECES: Product[] = [
  {
    id: 'prod_001',
    name: 'Solitaire Diamond Ring',
    price: '$2,450',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/9b/bf/1a/9bbf1a2d5fb870da545ce1475e4ea856.jpg',
    description: 'An elegant solitaire diamond ring featuring a 1.5 carat certified diamond set in 18K white gold. A timeless piece that epitomizes minimalist luxury and sophistication.'
  },
  {
    id: 'prod_002',
    name: 'Pearl Pendant Necklace',
    price: '$1,850',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/0d/83/fc/0d83fcfce54bc6585d609d7dfe6344a3.jpg',
    description: 'Sophisticated pearl pendant on a delicate gold chain. Handpicked Akoya pearls with impeccable luster and lustrous shine.'
  },
  {
    id: 'prod_003',
    name: 'Classic Diamond Studs',
    price: '$1,200',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/87/f1/6c/87f16c907e84233cb69ccbba6e637286.jpg',
    description: 'Timeless diamond stud earrings in 14K white gold. Each stone is carefully selected for brilliance and clarity.'
  },
  {
    id: 'prod_004',
    name: 'Diamond Link Bracelet',
    price: '$3,950',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/ea/2d/31/ea2d31afcd94db90a5546f8df14beeba.jpg',
    description: 'Exquisite diamond link bracelet featuring a series of brilliant cut diamonds set in 18K white gold.'
  },
  {
    id: 'prod_005',
    name: 'Emerald Cut Diamond Ring',
    price: '$2,850',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/b9/91/29/b991299c552427f9be2d2d21335b1927.jpg',
    description: 'Sophisticated emerald cut diamond set in platinum. A modern take on classic elegance with exceptional clarity.'
  },
  {
    id: 'prod_006',
    name: 'Gold Tennis Necklace',
    price: '$2,200',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/20/92/01/209201805c3f791de2649db2202349c4.jpg',
    description: 'Stunning tennis necklace with round brilliant diamonds set in 18K yellow gold. Perfect for any occasion.'
  },
  {
    id: 'prod_007',
    name: 'Drop Pearl Earrings',
    price: '$1,450',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/2a/4f/be/2a4fbe481074d1959166c10a7c25989e.jpg',
    description: 'Elegant drop earrings featuring lustrous South Sea pearls suspended in 14K white gold.'
  },
  {
    id: 'prod_008',
    name: 'Vintage Gold Bangle',
    price: '$4,500',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/d2/15/5b/d2155be664b19f39d16204faf9c48474.jpg',
    description: 'Vintage-inspired gold bangle with intricate filigree detailing and exceptional craftsmanship.'
  },
  {
    id: 'prod_009',
    name: 'Sapphire Halo Ring',
    price: '$3,200',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/8a/0c/17/8a0c17a610cb4f4c07ab9313b83547c3.jpg',
    description: 'Stunning sapphire center stone surrounded by a halo of brilliant diamonds in 18K white gold.'
  },
  {
    id: 'prod_010',
    name: 'Diamond Tennis Bracelet',
    price: '$2,950',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/a4/1a/ec/a41aec51f4c1c8b393665463cef07fce.jpg',
    description: 'Elegant tennis bracelet with perfectly matched round brilliant diamonds set in platinum.'
  },
  {
    id: 'prod_011',
    name: 'Moonstone Pendant',
    price: '$1,650',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/736x/76/61/90/7661905bba952a40ba3a4f5531dfb96d.jpg',
    description: 'Ethereal moonstone pendant with a soft glow, set in rose gold. A mystical and elegant piece.'
  },
  {
    id: 'prod_012',
    name: 'Ruby & Diamond Earrings',
    price: '$1,800',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/f0/b3/2b/f0b32bb8c0d90f4ebcbbaf51149dc482.jpg',
    description: 'Vibrant ruby gemstones accented with brilliant diamonds in 14K white gold.'
  },
  {
    id: 'prod_013',
    name: 'Cushion Cut Diamond Ring',
    price: '$2,750',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/c5/93/ee/c593ee0808d2cff0986b550e7ae8cff4.jpg',
    description: 'Sophisticated cushion cut diamond with a thick halo of white diamonds in platinum setting.'
  },
  {
    id: 'prod_014',
    name: 'Gold Layered Necklace',
    price: '$1,250',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/736x/2f/2d/58/2f2d58489a34dc478ebf8d203eb86f10.jpg',
    description: 'Delicate layered necklace in 18K yellow gold with adjustable lengths for a modern look.'
  },
  {
    id: 'prod_015',
    name: 'Diamond Chandelier Earrings',
    price: '$2,100',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/ad/63/cb/ad63cbea3ad8847a8e0deedfa80005fd.jpg',
    description: 'Dramatic chandelier-style earrings with cascading diamonds for a luxurious evening look.'
  },
  {
    id: 'prod_016',
    name: 'Tri-Diamond Cuff',
    price: '$3,850',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/c4/d9/6b/c4d96ba2f6d857213623543da4574cb8.jpg',
    description: 'Modern tri-diamond cuff bracelet in 18K rose gold, perfect for layering or as a standalone statement.'
  },
  {
    id: 'prod_017',
    name: 'Opal Statement Ring',
    price: '$2,300',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/b3/09/9e/b3099e49c5c0807b3aaf400ef4009ef6.jpg',
    description: 'Iridescent opal gemstone set in oxidized silver with diamond accents. A unique statement piece.'
  },
  {
    id: 'prod_018',
    name: 'Gold & Pearl Necklace',
    price: '$1,500',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/07/51/ca/0751ca626abedca4e0058c57cccf6270.jpg',
    description: 'Timeless combination of lustrous South Sea pearls with 18K yellow gold settings.'
  },
  {
    id: 'prod_019',
    name: 'Black Diamond Studs',
    price: '$1,950',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/cb/db/f8/cbdbf8a7a6e933dea30a21b0ed2863c4.jpg',
    description: 'Bold black diamond studs set in white gold. Perfect for adding edge and sophistication.'
  },
  {
    id: 'prod_020',
    name: 'Elegant Princess Bracelet',
    price: '$4,200',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/c7/29/3a/c7293a72c59bc25d71ab3ab2549828ec.jpg',
    description: 'Stunning princess-cut diamond bracelet that offers a modern take on timeless elegance.'
  },
  {
    id: 'prod_021',
    name: 'Rose Gold Eternity Band',
    price: '$1,350',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/ed/3a/f7/ed3af73e8215059b03a72d0645c88c54.jpg',
    description: 'Sophisticated eternity band crafted in 18K rose gold, handset with brilliant cut diamonds.'
  },
  {
    id: 'prod_022',
    name: 'Aquamarine Drop Necklace',
    price: '$2,100',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/b7/66/20/b766203317fdc1f0ebd0ddd573cbc649.jpg',
    description: 'A serene aquamarine pendant suspended from a white gold chain, accented with micro-diamonds.'
  },
  {
    id: 'prod_023',
    name: 'Golden Hoop Earrings',
    price: '$850',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/1c/2a/cd/1c2acde4a108bf1eba4b1a65d7c6513a.jpg',
    description: 'Classic handcrafted 14K gold hoop earrings with a textured finish for modern appeal.'
  },
  {
    id: 'prod_024',
    name: 'Art Deco Tennis Bracelet',
    price: '$5,400',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/10/23/09/102309da4c22e625fa7f7f575d8358e1.jpg',
    description: 'Geometric Art Deco inspired tennis bracelet featuring rare sapphires and brilliant diamonds.'
  },
  {
    id: 'prod_025',
    name: 'Amethyst Statement Ring',
    price: '$1,950',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/8c/5e/14/8c5e14e72f4455fc11f8c5f2dfcb9791.jpg',
    description: 'Deep violet amethyst gemstone set in a sculptural yellow gold mounting.'
  },
  {
    id: 'prod_026',
    name: 'Diamond Lariat Necklace',
    price: '$2,800',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/83/e9/1a/83e91a6e06b0196a769abdf56cada808.jpg',
    description: 'A graceful lariat necklace featuring diamond-encrusted ends in 18K white gold.'
  },
  {
    id: 'prod_027',
    name: 'Emerald Stud Earrings',
    price: '$2,350',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/90/3e/f0/903ef0318bb43f3bbd5cbbd73f297cb1.jpg',
    description: 'Vivid green Colombian emeralds set in a minimalist four-prong yellow gold setting.'
  },
  {
    id: 'prod_028',
    name: 'Modernist Cuff Bracelet',
    price: '$1,600',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/16/39/f9/1639f9fbbb696308a575adc3f90dd99e.jpg',
    description: 'Sleek architectural cuff in brushed sterling silver with a single flush-set diamond.'
  },
  {
    id: 'prod_029',
    name: 'Morganite Halo Ring',
    price: '$2,650',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/c5/53/8e/c5538e2537e9708c424358308d5bbdc6.jpg',
    description: 'Romance captured in a blush pink morganite stone surrounded by a delicate diamond halo.'
  },
  {
    id: 'prod_030',
    name: 'Starry Night Pendant',
    price: '$1,450',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/81/a4/eb/81a4eb98c56f3cf10254e33c43bca734.jpg',
    description: 'A circular pendant featuring multi-colored gemstones representing a stellar constellation.'
  },
  {
    id: 'prod_031',
    name: 'Emerald Eternity Ring',
    price: '$3,150',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/32/41/79/3241796a4d7ddf3d0c523450bd2d1f37.jpg',
    description: 'A continuous band of vivid green emeralds set in 18K yellow gold, symbolizing eternal love.'
  },
  {
    id: 'prod_032',
    name: 'Rose Gold Silk Choker',
    price: '$1,250',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/736x/da/00/3a/da003a79fb77ea520977a5adda80a379.jpg',
    description: 'A delicate and flexible rose gold choker that feels like silk against the skin.'
  },
  {
    id: 'prod_033',
    name: 'Diamond Teardrop Earrings',
    price: '$2,800',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/b5/ec/17/b5ec17c446b1940f0a90d25f4e2dd418.jpg',
    description: 'Stunning teardrop diamonds suspended from white gold studs, designed to capture every light.'
  },
  {
    id: 'prod_034',
    name: 'Bamboo Gold Bangle',
    price: '$1,950',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/0b/52/66/0b526698b8a7befb91f12e1dcc24d531.jpg',
    description: 'Artistically crafted gold bangle inspired by the organic forms of bamboo.'
  },
  {
    id: 'prod_035',
    name: 'Blue Topaz Statement Ring',
    price: '$2,100',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/ef/53/84/ef53840c232707e9065c04321cdbf6a3.jpg',
    description: 'A large, brilliant blue topaz set in a sculptural sterling silver mounting with diamond accents.'
  },
  {
    id: 'prod_036',
    name: 'Minimalist Pearl Choker',
    price: '$950',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/736x/86/d0/9b/86d09bcd36f978ccfbfcbd5cca19e78a.jpg',
    description: 'A single, perfectly round Akoya pearl on a near-invisible platinum chain.'
  },
  {
    id: 'prod_037',
    name: 'Crystal Star Earrings',
    price: '$750',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/4c/ba/c7/4cbac7e1cffe395e790001fe9814cf95.jpg',
    description: 'Dainty star-shaped earrings set with sparkling crystals, perfect for everyday elegance.'
  },
  {
    id: 'prod_038',
    name: 'Triple-Row Diamond Cuff',
    price: '$5,900',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/b9/6b/fe/b96bfe410d15b6e597d5fdee0c2d2083.jpg',
    description: 'A statement cuff featuring three rows of pavé-set diamonds in 18K white gold.'
  },
  {
    id: 'prod_039',
    name: 'Ruby Solitaire Ring',
    price: '$3,450',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/55/79/0c/55790cfa98532ac1b1d1f293f703aad8.jpg',
    description: 'A fiery red ruby in a classic four-prong yellow gold setting, radiating warmth and luxury.'
  },
  {
    id: 'prod_040',
    name: 'Golden Orbit Pendant',
    price: '$1,650',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/6c/4e/1f/6c4e1f26e9652a692bfb0935d26e7820.jpg',
    description: 'Interlocking gold rings that orbit a central diamond, a modern masterpiece of design.'
  },
  {
    id: 'prod_041',
    name: 'Sapphire Drop Earrings',
    price: '$1,850',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/66/d0/fb/66d0fbf1e099352af8ffa90885de67ec.jpg',
    description: 'Stunning deep blue sapphires suspended in a minimalist white gold setting.'
  },
  {
    id: 'prod_042',
    name: 'Rose Gold Pearl Ring',
    price: '$1,200',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/87/c7/34/87c734b2b6df8d49d488f2489df4ecdb.jpg',
    description: 'A delicate rose gold band featuring a single, lustrous freshwater pearl.'
  },
  {
    id: 'prod_043',
    name: 'Obsidian Link Bracelet',
    price: '$1,550',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/aa/08/b8/aa08b877399333975250fa5e07a8268b.jpg',
    description: 'Bold black obsidian links interwoven with 14K yellow gold chains.'
  },
  {
    id: 'prod_044',
    name: 'Citrine Sun Pendant',
    price: '$1,400',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/736x/71/5e/15/715e15d9b69f9c8274ebcc918b96c6a5.jpg',
    description: 'Vibrant yellow citrine gemstone encased in a sunburst gold mounting.'
  },
  {
    id: 'prod_045',
    name: 'Diamond Crawler Earrings',
    price: '$2,300',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/20/38/5c/20385cb6a1f39992971fc2cc7a43b856.jpg',
    description: 'Elegant diamond crawlers that gracefully follow the curve of the ear.'
  },
  {
    id: 'prod_046',
    name: 'Platinum Band Ring',
    price: '$3,500',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/8a/9c/27/8a9c270f63b0530000544a8b8718a066.jpg',
    description: 'A heavy, polished platinum band representing strength and enduring commitment.'
  },
  {
    id: 'prod_047',
    name: 'Emerald Cut Bracelet',
    price: '$4,200',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/a7/88/41/a788415ac1ae8ce8deec7e03bc18b464.jpg',
    description: 'Brilliant emerald-cut diamonds set in a continuous line of white gold.'
  },
  {
    id: 'prod_048',
    name: 'Amethyst Teardrop Necklace',
    price: '$1,750',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/e4/f8/c7/e4f8c73c5c83b7efb9826bfdf4e09ecf.jpg',
    description: 'A deep purple amethyst teardrop hanging from a delicate rose gold chain.'
  },
  {
    id: 'prod_049',
    name: 'Opal Stud Earrings',
    price: '$900',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/76/f6/a3/76f6a395053d52fdaa973d5dd66bdbe9.jpg',
    description: 'Dainty opal studs with an iridescent glow, set in minimalist yellow gold.'
  },
  {
    id: 'prod_050',
    name: 'Ruby Cross Ring',
    price: '$2,600',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/5d/c2/4f/5dc24f89352aaf79d99edd2b134cd14a.jpg',
    description: 'Unique cross-over band featuring rubies and diamonds in white gold.'
  },
  {
    id: 'prod_051',
    name: 'Topaz Charm Bracelet',
    price: '$1,100',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/fe/12/0a/fe120a18f2140a38bb819184df8e2d6d.jpg',
    description: 'A whimsical gold chain with hanging blue topaz and diamond charms.'
  },
  {
    id: 'prod_052',
    name: 'Garnet Infinity Necklace',
    price: '$1,350',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/5e/29/ca/5e29caf590e5fe394d41b92b3a5bda2c.jpg',
    description: 'Intertwining infinity symbol set with small red garnets in yellow gold.'
  },
  {
    id: 'prod_053',
    name: 'Black Diamond Hoops',
    price: '$2,100',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/b4/27/fc/b427fcc0abdeba26393b34306942304c.jpg',
    description: 'Sophisticated hoops lined with brilliant black diamonds in white gold.'
  },
  {
    id: 'prod_054',
    name: 'Minimalist Gold Ring',
    price: '$650',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/60/24/86/60248641866ca378f1078ff18bfcbd99.jpg',
    description: 'A sleek and modern minimalist thin band in 18K yellow gold.'
  },
  {
    id: 'prod_055',
    name: 'Sculptural Cuff Bracelet',
    price: '$1,900',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/3a/29/c4/3a29c41affe145369c1af2a29e9921f0.jpg',
    description: 'An artistic, hand-sculpted gold cuff with a hammered texture finish.'
  },
  {
    id: 'prod_056',
    name: 'Lapis Lazuli Pendant',
    price: '$1,150',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/14/bd/ae/14bdae921322758b9563fc8f9a172f85.jpg',
    description: 'A smooth lapis lazuli stone set in an open-back silver frame.'
  },
  {
    id: 'prod_057',
    name: 'Diamond Bar Earrings',
    price: '$1,400',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/a8/50/34/a850346132134ea7c2099eaf7ec516b1.jpg',
    description: 'Vertical bar earrings lined with pavé diamonds in 14K rose gold.'
  },
  {
    id: 'prod_058',
    name: 'Marquise Diamond Ring',
    price: '$3,800',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/78/24/da/7824da5c5a2e6f6f1d039aa18a309d5a.jpg',
    description: 'An elegant marquise-cut diamond on a diamond-encrusted platinum band.'
  },
  {
    id: 'prod_059',
    name: 'Celestial Star Bracelet',
    price: '$1,250',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/97/1f/ad/971fada8a9de30c666ad1651b070c608.jpg',
    description: 'A fine white gold chain decorated with sparkling diamond-set stars.'
  },
  {
    id: 'prod_060',
    name: 'Gold Rope Necklace',
    price: '$2,400',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/0b/2b/4a/0b2b4a65d58b86a31abec0c562128c3b.jpg',
    description: 'A timeless hand-woven 18K yellow gold rope necklace, 18 inches.'
  },
  {
    id: 'prod_061',
    name: 'Pink Tourmaline Earings',
    price: '$1,650',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/ac/10/04/ac1004c9c030b66bfc795b397a1212fe.jpg',
    description: 'Soft pink tourmaline stones in a vintage-inspired scalloped gold setting.'
  },
  {
    id: 'prod_062',
    name: 'Hexagon Diamond Ring',
    price: '$2,950',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/72/51/f9/7251f91a2b8e47d0f7d0ce252ef68149.jpg',
    description: 'A modern hexagon-shaped diamond set in brushed 14K white gold.'
  },
  {
    id: 'prod_063',
    name: 'Beaded Gold Bracelet',
    price: '$750',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/53/fe/e7/53fee70686d3c9c9aa7d94b005185d77.jpg',
    description: 'Uniform 18K gold beads on a high-tension elastic cord for effortless luxury.'
  },
  {
    id: 'prod_064',
    name: 'Aquamarine Halo Pendant',
    price: '$2,100',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/3f/27/41/3f2741e5bdc54d53246743bcd0ff1c2a.jpg',
    description: 'A sea-blue aquamarine surrounded by a halo of micro-diamonds in platinum.'
  },
  {
    id: 'prod_065',
    name: 'Leaf Motif Earrings',
    price: '$1,100',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/4b/9b/b4/4b9bb4b730b681a79069f239ce4fc426.jpg',
    description: 'Graceful leaf-shaped earrings in yellow gold with delicate etched details.'
  },
  {
    id: 'prod_066',
    name: 'Signet Gemstone Ring',
    price: '$1,850',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/c1/e4/a7/c1e4a7e44fa285e7d649e78752405e6f.jpg',
    description: 'A classic signet ring featuring a flat-top emerald in 18K yellow gold.'
  },
  {
    id: 'prod_067',
    name: 'Diamond Toggle Bracelet',
    price: '$3,200',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/98/be/41/98be41e1cf4bb634d822dd8a3b601c7a.jpg',
    description: 'A heavy link bracelet with a diamond-encrusted toggle clasp closure.'
  },
  {
    id: 'prod_068',
    name: 'Minimalist Silk Chain',
    price: '$500',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/a1/38/f3/a138f38218b69bb82f0edf68fabf5b73.jpg',
    description: 'An incredibly fine and smooth white gold chain that drapes like silk.'
  },
  {
    id: 'prod_069',
    name: 'Turquoise Studs',
    price: '$450',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/a4/5c/20/a45c203d2fa977f68baeee5691f9d2a5.jpg',
    description: 'Bright turquoise cabochons set in simple silver bezels for a pop of color.'
  },
  {
    id: 'prod_070',
    name: 'Wrap Diamond Ring',
    price: '$2,400',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/6f/4f/16/6f4f1649bb6bfb4d9efb9bc6b44c46a8.jpg',
    description: 'A playful wrap-around band ending in two brilliant pear-cut diamonds.'
  },
  {
    id: 'prod_071',
    name: 'Evil Eye Bracelet',
    price: '$850',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/ff/69/a9/ff69a992d8a7c78686bec1ea7e3833c5.jpg',
    description: 'A protective evil eye charm with blue sapphire and diamonds on gold chain.'
  },
  {
    id: 'prod_072',
    name: 'Medallion Necklace',
    price: '$1,950',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/736x/f2/61/dc/f261dc1f8c73c4c450c4fa9090d29232.jpg',
    description: 'A chunky gold medallion with an embossed mythical figure in 18K gold.'
  },
  {
    id: 'prod_073',
    name: 'Climber Pearl Earrings',
    price: '$1,300',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/de/e9/a3/dee9a31f2dd514ec8e7e1bbf852afa30.jpg',
    description: 'A series of decreasing size pearls that climb the earlobe in rose gold.'
  },
  {
    id: 'prod_074',
    name: 'Open Frame Ring',
    price: '$1,150',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/ae/0e/38/ae0e38ede0741f33c57ca583fd494b9b.jpg',
    description: 'An architectural open-frame band with floating diamonds in gold.'
  },
  {
    id: 'prod_075',
    name: 'Serpent Gold Bracelet',
    price: '$2,800',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/ee/2e/21/ee2e21571e9b04730354a5aae70ad28a.jpg',
    description: 'A flexible serpent-inspired bracelet with emerald eyes and gold scales.'
  },
  {
    id: 'prod_076',
    name: 'Sunburst Diamond Necklace',
    price: '$3,500',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/a2/c7/53/a2c753fe511e0805238304f3b49e700a.jpg',
    description: 'A radiant sunburst pendant encrusted with brilliant cut diamonds.'
  },
  {
    id: 'prod_077',
    name: 'Articulated Drop Earrings',
    price: '$2,200',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/13/64/73/1364735394cd8290db832ec69de820c5.jpg',
    description: 'Three-stage articulated earrings that move with every turn of the head.'
  },
  {
    id: 'prod_078',
    name: 'Duo-Tone Band',
    price: '$1,700',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/09/26/2f/09262ff56e82dad098b7eba87068549a.jpg',
    description: 'A seamless blend of 18K white and rose gold in a polished band.'
  },
  {
    id: 'prod_079',
    name: 'Braided Silver Bracelet',
    price: '$600',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/cb/24/89/cb2489299d93000c970392b4f7c33f9a.jpg',
    description: 'Hand-braided high-grade sterling silver, finished with a heavy clasp.'
  },
  {
    id: 'prod_080',
    name: 'Lariat Pearl Necklace',
    price: '$1,450',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/736x/d5/6e/ab/d56eabe75e107357d2d950153a1565e2.jpg',
    description: 'A long lariat style chain with twin pearls at the ends in gold.'
  },
  {
    id: 'prod_081',
    name: 'Twist Diamond Hoops',
    price: '$1,900',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/4e/8d/06/4e8d06ac56d68efaa54687febbf22d02.jpg',
    description: 'Large hoops with a twisted gold design and inset pavé diamonds.'
  },
  {
    id: 'prod_082',
    name: 'Baggette Sapphire Ring',
    price: '$2,750',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/ca/9e/ca/ca9eca155cc9825e66d46f3a52a685d9.jpg',
    description: 'Alternating baguette cut blue sapphires and diamonds in platinum.'
  },
  {
    id: 'prod_083',
    name: 'Charm Link Bracelet',
    price: '$2,100',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/be/ef/8a/beef8aa442392febe487196d7a0903c9.jpg',
    description: 'Heavy gold links with space for up to ten custom engraving charms.'
  },
  {
    id: 'prod_084',
    name: 'Bar Pendant Necklace',
    price: '$950',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/27/9a/e7/279ae78117c94a5a55e109b66ae2fcb9.jpg',
    description: 'A sleek horizontal gold bar pendant with a single hidden diamond.'
  },
  {
    id: 'prod_085',
    name: 'Pyramid Stud Earrings',
    price: '$800',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/dd/c2/59/ddc259c5508e73b674fbb34ee22e376d.jpg',
    description: 'Edgy 14K yellow gold pyramid studs with a satin finish.'
  },
  {
    id: 'prod_086',
    name: 'Wave Motif Ring',
    price: '$1,350',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/0f/5c/7a/0f5c7a747b868bf8bf57fb4d038c3f89.jpg',
    description: 'A fluid wave-inspired gold band set with shimmering blue topazes.'
  },
  {
    id: 'prod_087',
    name: 'Crystal Ball Bracelet',
    price: '$1,100',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/c0/f3/48/c0f3489bd5b73a7c2b4b4d1fea289497.jpg',
    description: 'Round crystal beads with gold spacers on a delicate box chain.'
  },
  {
    id: 'prod_088',
    name: 'Y-Necklace with Drop',
    price: '$2,300',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/6f/2c/c9/6f2cc91a6aea796335015543daa191de.jpg',
    description: 'A dramatic Y-shaped white gold necklace ending in a large pear diamond.'
  },
  {
    id: 'prod_089',
    name: 'Feather Line Earrings',
    price: '$1,550',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/44/1c/05/441c05b87e5266cf7e20f2a424443bc9.jpg',
    description: 'Intricately detailed feather earrings that sway gently with motion.'
  },
  {
    id: 'prod_090',
    name: 'Matte Finish Band',
    price: '$900',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/ca/34/27/ca3427ddea23c18e7af51238c2325d43.jpg',
    description: 'A contemporary matte-finished 18K rose gold ring with comfort fit.'
  },
  {
    id: 'prod_091',
    name: 'Infinity Knot Bracelet',
    price: '$1,200',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/68/10/fe/6810feecf9fbf4aba88d314d6383876b.jpg',
    description: 'A continuous gold wire knotted into an infinity symbol in the center.'
  },
  {
    id: 'prod_092',
    name: 'Initial Disk Necklace',
    price: '$750',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/71/a5/77/71a577f737f2fdcddcdb55795bdac75e.jpg',
    description: 'Customizable gold disk pendant on a fine link chain, 16 inches.'
  },
  {
    id: 'prod_093',
    name: 'Double Spike Earrings',
    price: '$1,150',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/79/51/2d/79512d66319776b70d3331f7d67e71e7.jpg',
    description: 'Modern gold spikes with small inset rubies at the tips.'
  },
  {
    id: 'prod_094',
    name: 'Ornate Scroll Ring',
    price: '$2,500',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/0d/13/18/0d13182c8245932934602c4c81516c41.jpg',
    description: 'Vintage scrollwork detailing in a heavy gold mounting with a center opal.'
  },
  {
    id: 'prod_095',
    name: 'Magnetic Harmony Cuff',
    price: '$3,100',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/9e/4e/65/9e4e65435230670cb208730295079657.jpg',
    description: 'Two separate gold bands that click together with invisible magnets.'
  },
  {
    id: 'prod_096',
    name: 'Compass Star Pendant',
    price: '$1,350',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/736x/43/51/d1/4351d1fb31897263cfc431c4621fe02a.jpg',
    description: 'A functional-inspired gold compass star with a central diamond.'
  },
  {
    id: 'prod_097',
    name: 'Threader Pearl Earrings',
    price: '$850',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/a4/f1/45/a4f145b5881cde1670e5f2a8a80c7d55.jpg',
    description: 'Extremely long gold threaders ending in twin Akoya pearls.'
  },
  {
    id: 'prod_098',
    name: 'Geometric Stack Ring',
    price: '$950',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/ee/8d/e0/ee8de046e7e6d913d37ed50dd20188a1.jpg',
    description: 'A set of three geometric gold bands designed to be worn together.'
  },
  {
    id: 'prod_099',
    name: 'Silk Thread Bracelet',
    price: '$400',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/25/8f/2b/258f2b19ec405dcd3441a77c817853bc.jpg',
    description: 'Woven silk threads with gold tube accents and a sliding closure.'
  },
  {
    id: 'prod_100',
    name: 'Heart Silhouette Necklace',
    price: '$1,100',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/e0/ae/fd/e0aefd2820ca6ba78fc6e4e10eae900d.jpg',
    description: 'A simple wire-frame heart silhouette in 18K rose gold.'
  },
  {
    id: 'prod_101',
    name: 'Orb Stud Earrings',
    price: '$600',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/91/11/d9/9111d95d2ce24b46f53506b8ef4f876e.jpg',
    description: 'Perfectly spherical gold orbs with a high-mirror polish finish.'
  },
  {
    id: 'prod_102',
    name: 'Twisted Vine Ring',
    price: '$1,450',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/2c/18/1e/2c181e807d97138ac657c50da763c20f.jpg',
    description: 'Organic vine motif in yellow gold with small ruby "buds" throughout.'
  },
  {
    id: 'prod_103',
    name: 'Lattice Bangle',
    price: '$2,300',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/45/f5/95/45f595465d9ce96566b5ba0c5ff5f1fa.jpg',
    description: 'A wide lattice-work gold bangle with a secure spring hinge.'
  },
  {
    id: 'prod_104',
    name: 'Long Link Necklace',
    price: '$2,900',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/55/da/88/55da88eef406747a1255c5bcbec7a6d8.jpg',
    description: 'A versatile 36-inch necklace with oversized decorative gold links.'
  },
  {
    id: 'prod_105',
    name: 'Fan Shape Earrings',
    price: '$1,800',
    category: 'Earrings',
    image: 'https://i.pinimg.com/1200x/93/ae/a1/93aea12d108e5598c5628f4c67b0b74a.jpg',
    description: 'Art Deco fan-shaped earrings encrusted with pavé set diamonds.'
  },
  {
    id: 'prod_106',
    name: 'Concave Gold Ring',
    price: '$1,200',
    category: 'Rings',
    image: 'https://i.pinimg.com/1200x/35/fc/8d/35fc8db4df94bb768cf0c3b311fec8d7.jpg',
    description: 'A broad concave band that catches and reflects light in unique ways.'
  },
  {
    id: 'prod_107',
    name: 'Multi-Stone Bracelet',
    price: '$3,800',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/1200x/ca/85/a7/ca85a75ae3f57b652d49788523423f4d.jpg',
    description: 'Features emeralds, rubies, and sapphires in a alternating gold pattern.'
  },
  {
    id: 'prod_108',
    name: 'Delicate Choker with Drop',
    price: '$1,550',
    category: 'Necklaces',
    image: 'https://i.pinimg.com/1200x/0a/9a/85/0a9a856fe92d7c1fb90674e645efd8e2.jpg',
    description: 'A velvet-feel gold choker with a single diamond drop element.'
  },
  {
    id: 'prod_109',
    name: 'Spiral Stud Earrings',
    price: '$700',
    category: 'Earrings',
    image: 'https://i.pinimg.com/736x/bf/6e/85/bf6e85652d657f5ac4281e6a02a24f5f.jpg',
    description: 'Hypnotic gold spiral earrings with a centered diamond accent.'
  },
  {
    id: 'prod_111',
    name: 'Split Shank Diamond Ring',
    price: '$4,500',
    category: 'Rings',
    image: 'https://i.pinimg.com/736x/44/fd/a4/44fda4c6e3baf6d962697f6107b148b9.jpg',
    description: 'A stunning split-shank band leading to a large radiant-cut diamond.'
  },
  {
    id: 'prod_112',
    name: 'Tassel Chain Bracelet',
    price: '$1,350',
    category: 'Bracelets',
    image: 'https://i.pinimg.com/736x/97/7d/a3/977da306c94401a2cbc7dffcc2889ede.jpg',
    description: 'A grouping of fine gold chains ending in decorative tassel caps.'
  },
  // {
  //   id: 'prod_113',
  //   name: 'Moon & Star Necklace',
  //   price: '$1,100',
  //   category: 'Necklaces',
  //   image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600',
  //   description: 'A crescent moon and a single star charm on a fine rose gold chain.'
  // },
  // {
  //   id: 'prod_114',
  //   name: 'Asymmetric Pearl Earrings',
  //   price: '$1,250',
  //   category: 'Earrings',
  //   image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=600',
  //   description: 'One long drop and one stud, both featuring unmatched baroque pearls.'
  // },
  // {
  //   id: 'prod_115',
  //   name: 'Crowned Solitaire Ring',
  //   price: '$3,200',
  //   category: 'Rings',
  //   image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600',
  //   description: 'A solitaire diamond held in a crown-style six-prong platinum setting.'
  // },
  // {
  //   id: 'prod_116',
  //   name: 'Braided Gold Bangle',
  //   price: '$1,900',
  //   category: 'Bracelets',
  //   image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=600',
  //   description: 'Two strands of gold wire braided into a solid, wearable bangle.'
  // },
  // {
  //   id: 'prod_117',
  //   name: 'Waterfall Diamond Necklace',
  //   price: '$6,500',
  //   category: 'Necklaces',
  //   image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600',
  //   description: 'A multi-tiered necklace that waterfalls into a spectacular diamond arrangement.'
  // },
  // {
  //   id: 'prod_118',
  //   name: 'Dangle Star Earrings',
  //   price: '$950',
  //   category: 'Earrings',
  //   image: 'https://images.unsplash.com/photo-1634666511012-4f57a4f39f92?q=80&w=600',
  //   description: 'Small gold stars that dangle from fine chains attached to studs.'
  // },
  // {
  //   id: 'prod_119',
  //   name: 'Hammered Finish Ring',
  //   price: '$750',
  //   category: 'Rings',
  //   image: 'https://images.unsplash.com/photo-1601121141461-9d6647b9170b?q=80&w=600',
  //   description: 'A wide 14K yellow gold band with a distinct hand-hammered texture.'
  // },
  // {
  //   id: 'prod_120',
  //   name: 'Sleek Bar Bracelet',
  //   price: '$1,100',
  //   category: 'Bracelets',
  //   image: 'https://images.unsplash.com/photo-1588444650785-9c6e6bbe65bf?q=80&w=600',
  //   description: 'A curved gold bar that fits the wrist perfectly, on a fine chain.'
  // },
  // {
  //   id: 'prod_121',
  //   name: 'Infinity Pendant Necklace',
  //   price: '$1,300',
  //   category: 'Necklaces',
  //   image: 'https://images.unsplash.com/photo-1629810950886-0ef5568b6317?q=80&w=600',
  //   description: 'A classic infinity symbol pendant in 18K white gold with diamond accents.'
  // },
  // {
  //   id: 'prod_122',
  //   name: 'Petal Cuff Earrings',
  //   price: '$1,400',
  //   category: 'Earrings',
  //   image: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=600',
  //   description: 'Ear cuffs shaped like delicate flower petals, set with tiny pink sapphires.'
  // },
  // {
  //   id: 'prod_123',
  //   name: 'Chevron Diamond Ring',
  //   price: '$1,650',
  //   category: 'Rings',
  //   image: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=600',
  //   description: 'A V-shaped chevron band pavé-set with brilliant cut diamonds.'
  // },
  // {
  //   id: 'prod_124',
  //   name: 'Heavy Link Bracelet',
  //   price: '$3,500',
  //   category: 'Bracelets',
  //   image: 'https://images.unsplash.com/photo-1559664783-70fe6f6a9080?q=80&w=600',
  //   description: 'Bold, oversized 18K yellow gold links with an industrial-luxury feel.'
  // },
  // {
  //   id: 'prod_125',
  //   name: 'Orbital Diamond Necklace',
  //   price: '$2,800',
  //   category: 'Necklaces',
  //   image: 'https://images.unsplash.com/photo-1609251297580-9f3d6e4cd2b6?q=80&w=600',
  //   description: 'Floating diamonds caught within a series of concentric gold rings.'
  // },
  // {
  //   id: 'prod_126',
  //   name: 'Floral Motif Earrings',
  //   price: '$1,200',
  //   category: 'Earrings',
  //   image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600',
  //   description: 'Small gold flowers with diamond centers, incredibly detailed and lifelike.'
  // },
  // {
  //   id: 'prod_127',
  //   name: 'Dome Statement Ring',
  //   price: '$2,100',
  //   category: 'Rings',
  //   image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=600',
  //   description: 'A massive gold dome ring with an intricate "honeycomb" interior structure.'
  // },
  // {
  //   id: 'prod_128',
  //   name: 'Snake Chain Bracelet',
  //   price: '$900',
  //   category: 'Bracelets',
  //   image: 'https://images.unsplash.com/photo-1515377905703-c28bbc4b7e38?q=80&w=600',
  //   description: 'A smooth and supple gold snake chain with a decorative ball clasp.'
  // },
  // {
  //   id: 'prod_129',
  //   name: 'Key to My Heart Necklace',
  //   price: '$1,150',
  //   category: 'Necklaces',
  //   image: 'https://images.unsplash.com/photo-1616038144002-39bd927cd728?q=80&w=600',
  //   description: 'A vintage-style gold key pendant featuring hidden romantic engravings.'
  // },
  // {
  //   id: 'prod_130',
  //   name: 'Twinned Hoop Earrings',
  //   price: '$1,300',
  //   category: 'Earrings',
  //   image: 'https://images.unsplash.com/photo-1515905035918-90b6b6e1e6b9?q=80&w=600',
  //   description: 'Two interlocking hoops of different sizes in white and yellow gold.'
  // },
  // {
  //   id: 'prod_131',
  //   name: 'Solitaire Ruby Ring',
  //   price: '$3,100',
  //   category: 'Rings',
  //   image: 'https://images.unsplash.com/photo-1573408339379-b941275ca8f1?q=80&w=600',
  //   description: 'A deep pigeon-blood ruby in a minimalist four-prong white gold setting.'
  // },
  // {
  //   id: 'prod_132',
  //   name: 'Velvet Ribbon Bracelet',
  //   price: '$850',
  //   category: 'Bracelets',
  //   image: 'https://images.unsplash.com/photo-1626495531063-e991572c6742?q=80&w=600',
  //   description: 'Flexible gold links that feel as soft and supple as a velvet ribbon.'
  // },
  // {
  //   id: 'prod_133',
  //   name: 'Geometric Disk Necklace',
  //   price: '$1,400',
  //   category: 'Necklaces',
  //   image: 'https://images.unsplash.com/photo-1563205738-96f731c50493?q=80&w=600',
  //   description: 'A series of brushed gold disks of varying sizes on a heavy chain.'
  // },
  // {
  //   id: 'prod_134',
  //   name: 'Shield Motif Earrings',
  //   price: '$1,550',
  //   category: 'Earrings',
  //   image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=600',
  //   description: 'Powerful shield-shaped earrings in polished gold with diamond borders.'
  // },
  // {
  //   id: 'prod_135',
  //   name: 'Triple-Band Ring',
  //   price: '$1,800',
  //   category: 'Rings',
  //   image: 'https://images.unsplash.com/photo-1633467828614-38a7ca295ba1?q=80&w=600',
  //   description: 'Three distinct bands of white gold joined at a single point in the back.'
  // },
  // {
  //   id: 'prod_136',
  //   name: 'Bangle with Charms',
  //   price: '$1,700',
  //   category: 'Bracelets',
  //   image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600',
  //   description: 'A solid gold bangle with pre-attached luxury charms including a horseshoe.'
  // },
  // {
  //   id: 'prod_137',
  //   name: 'Stiletto Drop Necklace',
  //   price: '$2,500',
  //   category: 'Necklaces',
  //   image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600',
  //   description: 'A sharp, linear stiletto pendant in platinum with a diamond tip.'
  // },
  // {
  //   id: 'prod_138',
  //   name: 'Arc Stud Earrings',
  //   price: '$900',
  //   category: 'Earrings',
  //   image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600',
  //   description: 'Minimalist gold arcs that follow the inner curve of the earlobe.'
  // },
  // {
  //   id: 'prod_139',
  //   name: 'Sculpted Wave Ring',
  //   price: '$1,450',
  //   category: 'Rings',
  //   image: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f2e?q=80&w=600',
  //   description: 'A hand-sculpted wave band in yellow gold, flowing elegantly around the finger.'
  // },
  // {
  //   id: 'prod_140',
  //   name: 'Infinity Link Bracelet',
  //   price: '$2,900',
  //   category: 'Bracelets',
  //   image: 'https://images.unsplash.com/photo-1515562141207-6811bcdd56f9?q=80&w=600',
  //   description: 'Interlocking infinity links in 18K white gold, a truly timeless luxury piece.'
  // }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, text: "The attention to detail in every piece is unparalleled. It truly is a work of art.", author: "Eleanor Vance", location: "London" },
  { id: 2, text: "AURELIA LUXE understands that luxury is found in simplicity. My bridal set is timeless.", author: "Sophia Moretti", location: "Milan" },
  { id: 3, text: "Exceptional service and exquisite craftsmanship. The custom consultation was a breeze.", author: "James Sterling", location: "New York" },
  { id: 4, text: "The bespoke process was incredible. I finally have a piece that tells my own story.", author: "Isabella Rossi", location: "Florence" },
  { id: 5, text: "Stunning designs and the quality of stones is top-notch. Highly recommended for special occasions.", author: "Marcus Aurelius", location: "Rome" },
];
