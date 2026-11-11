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
  {
    id: '7',
    slug: 'brother-gurpreet-healing',
    title: 'Instant Miracle Healing from Chronic Spinal Cord Degeneration',
    person: 'Brother Gurpreet Singh',
    hindiHeadline:
      '4 वर्षों से रीढ़ की हड्डी में भयंकर दर्द और चलने-फिरने में असमर्थ थे। प्रार्थना पर्वत पर सामर्थी प्रार्थना के बाद मिली पूर्ण चंगाई।',
    englishHeadline:
      'AFTER SUFFERING INTENSE LOWER BACK PAIN AND SPINAL IMMOBILITY FOR OVER 4 YEARS, HE WAS SUPERNATURALLY HEALED AT PRAYER MOUNTAIN AND CAN NOW WALK FREELY WITHOUT ANY PAIN.',
    shortDescription:
      'AFTER SUFFERING INTENSE LOWER BACK PAIN AND SPINAL IMMOBILITY FOR OVER 4 YEARS, HE WAS SUPERNATURALLY HEALED AT PRAYER MOUNTAIN AND CAN NOW WALK FREELY WITHOUT ANY PAIN.',
    fullStory:
      'Brother Gurpreet Singh suffered from chronic degenerative spinal disc disease for more than 4 years, experiencing agonizing pain, stiffness, and inability to perform basic daily activities. Medical specialists recommended high-risk surgery with no guarantee of full mobility. While seeking the presence of God at Prayer Mountain, Apostle Dr. Ankur Yoseph Narula released the prophetic healing word. Divine power surged through his spine, every trace of pain vanished immediately, and he was able to bend, run, and walk freely.',
    image: '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png',
    category: 'Spinal Healing',
    verse: 'Jeremiah 33:6 - "Behold, I will bring health and healing to it; I will heal them and reveal to them the abundance of peace and truth."',
  },
  {
    id: '8',
    slug: 'sister-manpreet-deliverance',
    title: 'Divine Restoration of Broken Marriage & Peaceful Family Revival',
    person: 'Sister Manpreet Kaur',
    hindiHeadline:
      'तलाक की कगार पर पहुंचे रिश्ते में परमेश्वर ने किया अद्भुत चमत्कार। प्रार्थना पर्वत पर प्रार्थना के बाद परिवार में लौटा प्रेम और शांति।',
    englishHeadline:
      'FACING IMMINENT DIVORCE AND CONTINUOUS TURMOIL, SHE SOUGHT GOD AT PRAYER MOUNTAIN. GOD HEARD HER CRIES, RECONCILED HER MARRIAGE, AND FILLED HER HOME WITH HIS BLESSING.',
    shortDescription:
      'FACING IMMINENT DIVORCE AND CONTINUOUS TURMOIL, SHE SOUGHT GOD AT PRAYER MOUNTAIN. GOD HEARD HER CRIES, RECONCILED HER MARRIAGE, AND FILLED HER HOME WITH HIS BLESSING.',
    fullStory:
      'Sister Manpreet Kaur faced severe marital breakdown and continuous domestic strife that pushed her family to the brink of legal divorce. Desperate for God’s intervention, she attended prayer and fasting meetings at Prayer Mountain. God answered her persistent prayers supernaturally. Hearts were softened, misunderstandings and hostility dissolved, and reconciliation took place. Today, their marriage is completely healed and stands as a testimony of God’s restoring grace.',
    image: '/figma-assets/6b7f869d048b1af39a42b08c4bacff57cb6ed577.png',
    category: 'Family Restoration',
    verse: 'Mark 10:9 - "Therefore what God has joined together, let not man separate."',
  },
  {
    id: '9',
    slug: 'brother-harjit-deliverance',
    title: 'Delivered from 12 Years of Severe Substance Addiction & Depression',
    person: 'Brother Harjit Singh',
    hindiHeadline:
      '12 वर्षों के नशे और अवसाद के गहरे जाल से प्रभु यीशु मसीह ने किया पूरी तरह आज़ाद। प्रार्थना पर्वत पर उपवास प्रार्थना के बाद नया जीवन मिला।',
    englishHeadline:
      'BOUND IN ALCOHOLISM AND SUICIDAL DEPRESSION, HIS LIFE WAS SHATTERED. AFTER COMMITTING TO FASTING AND PRAYER ON THE MOUNTAIN, HE WAS TOTALLY SET FREE AND TRANSFORMED.',
    shortDescription:
      'BOUND IN ALCOHOLISM AND SUICIDAL DEPRESSION, HIS LIFE WAS SHATTERED. AFTER COMMITTING TO FASTING AND PRAYER ON THE MOUNTAIN, HE WAS TOTALLY SET FREE AND TRANSFORMED.',
    fullStory:
      'Brother Harjit Singh was trapped in severe alcohol addiction and suicidal mental depression for over twelve agonizing years. Rehabilitation centers and medications failed to break the cycle. Upon hearing the testimony of thousands being delivered at The Church of Signs and Wonders, he climbed Prayer Mountain and cried out to God in fasting and prayer. The chains of addiction were broken permanently; he has had zero cravings ever since and now serves in the ministry.',
    image: '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png',
    category: 'Supernatural Deliverance',
    verse: 'John 8:36 - "Therefore if the Son makes you free, you shall be free indeed."',
  },
  {
    id: '10',
    slug: 'sister-jaswinder-healing',
    title: 'Miraculous Childbirth Testimony after 8 Years of Barrenness',
    person: 'Sister Jaswinder Kaur',
    hindiHeadline:
      '8 वर्षों के बांझपन के बाद डॉक्टरों ने जवाब दे दिया था। प्रार्थना पर्वत पर रो-रोकर की गई प्रार्थना को परमेश्वर ने सुना और बेटे की आशीष से नवाज़ा।',
    englishHeadline:
      'DOCTORS DECLARED IT MEDICALLY IMPOSSIBLE FOR HER TO CONCEIVE. SHE ANOINTED HERSELF AND WEPT BEFORE GOD AT PRAYER MOUNTAIN; WITHIN A YEAR, GOD BLESSED HER WITH A HEALTHY BABY BOY.',
    shortDescription:
      'DOCTORS DECLARED IT MEDICALLY IMPOSSIBLE FOR HER TO CONCEIVE. SHE ANOINTED HERSELF AND WEPT BEFORE GOD AT PRAYER MOUNTAIN; WITHIN A YEAR, GOD BLESSED HER WITH A HEALTHY BABY BOY.',
    fullStory:
      'Sister Jaswinder Kaur endured 8 painful years of barrenness accompanied by severe medical complications that doctors ruled untreatable. In grief and faith, she sought the altar of God at Prayer Mountain during continuous prayer meetings. Apostle Dr. Ankur Yoseph Narula released the prophetic blessing of the womb. Within a few months, she conceived naturally and gave birth to a healthy baby boy, bringing immense joy to her entire household.',
    image: '/figma-assets/6b7f869d048b1af39a42b08c4bacff57cb6ed577.png',
    category: 'Miracle Childbirth',
    verse: 'Psalm 113:9 - "He grants the barren woman a home, like a joyful mother of children. Praise the Lord!"',
  },
]

function normalizeSlug(str?: string | null): string {
  if (!str) return ''
  try {
    str = decodeURIComponent(str)
  } catch {
    // ignore
  }
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export function getTestimonyBySlug(slug: string): Testimony | undefined {
  if (!slug) return undefined
  const targetClean = normalizeSlug(slug)
  return testimonialsData.find((t) => {
    if (t.slug === slug || String(t.id) === slug) return true
    if (normalizeSlug(t.slug) === targetClean) return true
    return false
  })
}
