export interface Testimony {
  id: string | number
  slug: string
  title: string
  person: string
  hindiHeadline: string
  englishHeadline: string
  shortDescription: string
  fullStory: string
  image?: any
  imageFallback?: string | null
  category: string
  verse?: string | null
  isFeatured?: boolean | null
  order?: number | null
}

export const testimonialsData: Testimony[] = [
  {
    id: '1',
    slug: 'sister-randeep-healing',
    title: 'Complete Healing from Tuberculosis, Lung Complications & Paralysis',
    person: 'Sister Randeep',
    hindiHeadline:
      'TB का रोग, RIGHT LUNG में पानी था, इन्हें सांस लेने में बहुत दिक्कत रहती थी, ज्यादातर यह BED पर रहती थी। परमेश्वर की दासी द्वारा अभिषिक्त प्रार्थना ग्रहण करने से मिली बड़ी चंगाई।',
    englishHeadline:
      'DUE TO TB AND FLUID IN THE RIGHT LUNG, SHE HAD DIFFICULTY IN BREATHING AND REMAINED BEDRIDDEN. AFTER RECEIVING ANOINTED PRAYER BY WOMAN OF GOD, SHE GOT REMARKABLE HEALING.',
    shortDescription:
      'TB का रोग, RIGHT LUNG में पानी था, इन्हें सांस लेने में बहुत दिक्कत रहती थी, ज्यादातर यह BED पर रहती थी। परमेश्वर की दासी द्वारा अभिषिक्त प्रार्थना ग्रहण करने से मिली बड़ी चंगाई।',
    fullStory:
      'Sister Randeep suffered from severe Tuberculosis that led to heavy fluid accumulation in her right lung. She experienced extreme breathlessness, fatigue, and was bedridden for months with paralysis complications. After receiving Lay Hand prayer during the Easter Meeting by the anointed grace of God through the ministry of Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Narula, medical reports confirmed complete clearing of lung fluid and total supernatural healing.',
    image: '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png',
    category: 'Supernatural Healing',
    verse: 'Jeremiah 30:17 - "For I will restore health to you and heal you of your wounds," says the Lord.',
  },
  {
    id: '2',
    slug: 'sister-sukhdeep-kaur-deliverance',
    title: 'Supernatural Deliverance from Severe Mental Attacks & Oppression',
    person: 'Sister Sukhdeep Kaur',
    hindiHeadline:
      'MENTALLY ATTACK होने के कारण यह घर का सामान तोड़ देते थे, लड़ाई-झगड़ा करते थे। परमेश्वर के दास द्वारा सामर्थी प्रार्थना ग्रहण करने से मिली पूरी आज़ादी।',
    englishHeadline:
      'DUE TO VIOLENT DEMONIC MENTAL ATTACKS, SHE SUFFERED SEVERE OUTBURSTS AND AGONY. AFTER RECEIVING ANOINTED PRAYER, SHE WAS MIRACULOUSLY DELIVERED AND RESTORED TO SOUND MIND.',
    shortDescription:
      'MENTALLY ATTACK होने के कारण यह घर का सामान तोड़ देते थे, लड़ाई-झगड़ा करते थे। परमेश्वर के दास द्वारा सामर्थी प्रार्थना ग्रहण करने से मिली पूरी आज़ादी।',
    fullStory:
      'Sister Sukhdeep Kaur was bound by tormenting demonic mental attacks for years. During violent episodes, she lost complete self-control, broke household belongings, and caused profound anguish to her family. When brought to The Church of Signs and Wonders and ministered to under the apostolic power of God, every dark oppression broke instantly. She is now completely sound in mind, peaceful, and glorifying Jesus Christ.',
    image: '/figma-assets/6b7f869d048b1af39a42b08c4bacff57cb6ed577.png',
    category: 'Deliverance',
    verse: '2 Timothy 1:7 - "For God has not given us a spirit of fear, but of power and of love and of a sound mind."',
  },
  {
    id: '3',
    slug: 'sister-shinder-dengue-recovery',
    title: 'Miraculous Recovery from Critical Dengue, Fluid Build-up & Heart Risk in ICU',
    person: 'Sister Shinder',
    hindiHeadline:
      'डेंगू का रोग होने के कारण इनके पेट में पानी भर गया था, यह ICU में थे और इन्हें DIAPER लगाकर रखते थे। परमेश्वर के दास द्वारा प्रार्थना ग्रहण करने से मिली बड़ी चंगाई।',
    englishHeadline:
      'ADMITTED TO ICU WITH ABDOMINAL FLUID ACCUMULATION AND HIGH HEART ATTACK RISK. ANOINTED PRAYER DRIED UP THE FLUID AND RESTORED HER TO COMPLETE HEALTH.',
    shortDescription:
      'डेंगू का रोग होने के कारण इनके पेट में पानी भर गया था, यह ICU में थे और इन्हें DIAPER लगाकर रखते थे। परमेश्वर के दास द्वारा प्रार्थना ग्रहण करने से मिली बड़ी चंगाई।',
    fullStory:
      'Sister Shinder was admitted to the Intensive Care Unit in critical condition due to severe complicated Dengue fever. Her abdomen became severely distended with ascites (fluid accumulation), and doctors warned of high risk of cardiac arrest. While in utter hopelessness, anointed prayer was offered. God performed an instant miracle—the fluid dried up supernaturally, her platelet and vital counts normalized, and she walked out of the ICU completely healed.',
    image: '/figma-assets/ea471bfad2bfef480a29d7e89b4a1abc99619073.png',
    category: 'Supernatural Healing',
    verse: 'Psalm 107:20 - "He sent His word and healed them, and delivered them from their destructions."',
  },
  {
    id: '4',
    slug: 'brother-satnam-singh-family-deliverance',
    title: 'Total Deliverance of Family from Decades of Witchcraft & Evil Afflictions',
    person: 'Brother Satnam Singh & Family',
    hindiHeadline:
      'जादू-टोने के कारण इस भाई और इनकी बेटी पर DEMONIC ATTACK होते थे। इलाज के लिए कर्ज़ उठाया और सोना भी बेच दिया। सामर्थी प्रार्थना ग्रहण करने से पूरा परिवार हुआ आज़ाद।',
    englishHeadline:
      'BECAUSE OF BLACK MAGIC, HE AND HIS DAUGHTER SUFFERED SEVERE DEMONIC ATTACKS. ANOINTED PRAYER BROKE THE GENERATIONAL CURSE AND DELIVERED THE ENTIRE FAMILY.',
    shortDescription:
      'जादू-टोने के कारण इस भाई और इनकी बेटी पर DEMONIC ATTACK होते थे। इलाज के लिए कर्ज़ उठाया और सोना भी बेच दिया। सामर्थी प्रार्थना ग्रहण करने से पूरा परिवार हुआ आज़ाद।',
    fullStory:
      'Brother Satnam Singh and his beloved daughter were severely afflicted by occult attacks and witchcraft for generations. In search of freedom, they depleted all family savings, took high-interest loans, and sold family gold without any remedy. Upon arriving at the ministry and receiving deliverance prayer in the mighty name of Jesus Christ, every demonic bondage was dismantled. Today, their home is filled with divine health, joy, and prosperity.',
    image: '/figma-assets/c8eb0d478ae3815378a25f9eb398d8649eb46e5d.png',
    category: 'Family Deliverance',
    verse: 'Luke 10:19 - "Behold, I give you the authority to trample on serpents and scorpions, and over all the power of the enemy."',
  },
  {
    id: '5',
    slug: 'bedridden-leg-fracture-healing',
    title: 'Broken Leg & Bedridden State Healed after Supernatural Miracle Prayer',
    person: 'Brother / Miracle Report',
    hindiHeadline:
      'जादू-टोने के कारण दो मौतें हो चुकी थीं, भारी हमले में फ्रैक्चर हुआ था और पूरी तरह BEDRIDDEN थे। सामर्थी प्रार्थना के बाद बिस्तर से खड़े हुए और बड़ी चंगाई पाई।',
    englishHeadline:
      'HEAVY ATTACKS CAUSED BEDRIDDEN IMMOBILITY AND SEVERE FRACTURES. THE SUPERNATURAL POWER OF GOD RESTORED BONE STRUCTURE AND HE WALKED OUT COMPLETELY HEALED.',
    shortDescription:
      'जादू-टोने के कारण दो मौतें हो चुकी थीं, भारी हमले में फ्रैक्चर हुआ था और पूरी तरह BEDRIDDEN थे। सामर्थी प्रार्थना के बाद बिस्तर से खड़े हुए और बड़ी चंगाई पाई।',
    fullStory:
      'Heavy dark attacks resulted in tragic losses in this brother’s household and left him severely injured with multiple fractures in his left leg, rendering him completely immobile and bedridden. Doctors held very low hopes for complete unassisted mobility. When the power of God moved during the church service, he felt a warm divine sensation in his bones. He stood up unassisted, started walking, and medical x-rays confirmed miraculous bone restoration.',
    image: '/figma-assets/cb08309c4d7b9a6d1f8b27168f919c7a3b62074c.png',
    category: 'Bone & Body Healing',
    verse: 'Acts 3:6 - "In the name of Jesus Christ of Nazareth, rise up and walk."',
  },
  {
    id: '6',
    slug: 'sister-depression-freedom-deliverance',
    title: 'Supernatural Freedom from Chronic Depression & Heavy Spiritual Heaviness',
    person: 'Sister / Anointed Deliverance',
    hindiHeadline:
      'सामर्थी प्रार्थना ग्रहण करते ही पहली बार HEAVENLY EXPERIENCE हुआ और यह DEPRESSION से पूरी तरह आज़ाद हो गईं। प्रभु यीशु मसीह ने जीवन में नई शांति और आनंद भर दिया।',
    englishHeadline:
      'AS SHE RECEIVED THE POWERFUL PRAYER, SHE EXPERIENCED THE HEAVENLY PRESENCE OF GOD AND WAS SET FREE FROM CRIPPLING DEPRESSION FOREVER.',
    shortDescription:
      'सामर्थी प्रार्थना ग्रहण करते ही पहली बार HEAVENLY EXPERIENCE हुआ और यह DEPRESSION से पूरी तरह आज़ाद हो गईं। प्रभु यीशु मसीह ने जीवन में नई शांति और आनंद भर दिया।',
    fullStory:
      'This sister suffered from long-standing severe clinical depression, persistent panic attacks, and dark emotional heaviness that medications failed to resolve. During the anointed worship and prayer service, the Holy Spirit touched her heart deeply. She experienced the supernatural presence of God, felt an immediate release of peace, and was permanently set free from all symptoms of depression.',
    image: '/figma-assets/f3cf64793395daaddbe693a452d8ed494c902fce.png',
    category: 'Peace & Freedom',
    verse: 'Isaiah 61:3 - "To give them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness."',
  },
]

export function getTestimonyBySlug(slug: string): Testimony | undefined {
  return testimonialsData.find((t) => t.slug === slug || t.id === slug)
}
