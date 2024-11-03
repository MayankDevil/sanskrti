/*
-   sanskrit "भारीतय सभ्यत "
-   Designed | Develped by MayankDevil
-   https://github.com/MayankDevil/sanskrti 
-   JavaScript ./js/data.js
*/
try
{
    /*
        API collection set { shlok | arth | parivartan }
    */ 
    var kaalabhiravam = [
        {
            shlok : ` देवराजसेव्यमानपावनांघ्रिपङ्कजं व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् । नारदादियोगिवृन्दवन्दितं दिगंबरं काशिकापुराधिनाथकालभैरवं भजे ॥१॥ `,
            arth : ` देवराज के पवित्र चरण कमलों की सेवा की सर्प के यज्ञ का धागा चंद्रमा का शिखर है, और वह दयालु है। नारद जैसे योगियों द्वारा दिगंबर की पूजा की जाती है मैं काशीपुराधिनाथ कालभैरव की पूजा करता हूं। `,
            parivartan : ` Served the sacred lotus feet of Devraj The serpent's sacrificial thread is the peak of the moon, and it is merciful. Digambaras are worshiped by yogis like Narada I worship Kashipuradhinath Kalbhairav. `
        },
        {
            shlok : ` भानुकोटिभास्वरं भवाब्धितारकं परं नीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् । कालकालमंबुजाक्षमक्षशूलमक्षरं काशिकापुराधिनाथकालभैरवं भजे ॥२॥ `,
            arth : ` करोड़ों सूर्यों का तेज भवसागर का तारा है उसकी नीली गर्दन और तीन आंखें हैं और वह मनोवांछित फल देता है। समय, काल, कमल-नयन, फरसा-भाला, पत्र मैं काशीपुराधिनाथ कालभैरव की पूजा करता हूं। `,
            parivartan : ` The brilliance of millions of suns is the star of the ocean of existence. He has a blue neck and three eyes and grants desired results. time, period, lotus-eyes, axe-spear, letter I worship Kashipuradhinath Kalbhairav. `
        },
        {
            shlok : ` शूलटङ्कपाशदण्डपाणिमादिकारणं श्यामकायमादिदेवमक्षरं निरामयम् । भीमविक्रमं प्रभुं विचित्रताण्डवप्रियं काशिकापुराधिनाथकालभैरवं भजे ॥३॥ `,
            arth : ` भाले, टैंक, रस्सियाँ, छड़ें, हाथ आदि का कारण अँधेरे शरीर वाला मूल देवता शब्दांश और उपचार करने वाला है। भयानक पराक्रम के स्वामी और विचित्र नृत्यों के शौकीन मैं काशीपुराधिनाथ कालभैरव की पूजा करता हूं। `,
            parivartan : ` Due to spears, tanks, ropes, sticks, hands etc. The original deity with a dark body is one of syllables and healing. A master of terrible prowess and fond of strange dances. I worship Kashipuradhinath Kalbhairav. `
        },
        {
            shlok : ` भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं भक्तवत्सलं स्थितं समस्तलोकविग्रहम् । विनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं काशिकापुराधिनाथकालभैरवं भजे ॥४॥ `,
            arth : ` भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहम् वह अपने भक्तों के प्रति स्नेही हैं और सभी लोकों के अवतार हैं। उसने एक आकर्षक सुनहरे मोतियों वाला कमरबंद पहना था जो बज रहा था मैं काशीपुराधिनाथ कालभैरव की पूजा करता हूं। `,
            parivartan : ` Bhuktimuktidayakam Prashatcharuvigraham He is affectionate towards his devotees and is the incarnation of all the worlds. She wore a charming golden pearl girdle that was ringing I worship Kashipuradhinath Kalbhairav. `
        },
        {
            shlok : ` धर्मसेतुपालकं त्वधर्ममार्गनाशकं कर्मपाशमोचकं सुशर्मदायकं विभुम् । स्वर्णवर्णशेषपाशशोभिताङ्गमण्डलं काशिकापुराधिनाथकालभैरवं भजे ॥५॥ `,
            arth : ` यह धर्म के पुल की रक्षा करता है और अधर्म के मार्ग को नष्ट करता है वह सर्वशक्तिमान है, जो हमें कर्म की रस्सियों से मुक्त करता है और हमें अच्छी शांति देता है। सुनहरी शेष रस्सियों से सुशोभित अंगों का एक चक्र मैं काशीपुराधिनाथ कालभैरव की पूजा करता हूं। `,
            parivartan : ` It protects the bridge of righteousness and destroys the path of unrighteousness He is the Almighty, who frees us from the ropes of karma and gives us good peace. A circle of limbs adorned with golden Shesha ropes I worship Kashipuradhinath Kalbhairav. `
        },
        {
            shlok : ` रत्नपादुकाप्रभाभिरामपादयुग्मकं नित्यमद्वितीयमिष्टदैवतं निरंजनम् । मृत्युदर्पनाशनं करालदंष्ट्रमोक्षणं काशिकापुराधिनाथकालभैरवं भजे ॥६॥ `,
            arth : ` रत्नजड़ित पादुकाओं की चमक के साथ राम के पैरों की एक जोड़ी वह शाश्वत, अद्वितीय, प्रिय और सभी इच्छाओं से रहित है। मृत्यु के अभिमान को नष्ट कर, भयानक दन्तों को मुक्त कर रहा है मैं काशीपुराधिनाथ कालभैरव की पूजा करता हूं। `,
            parivartan : ` A pair of Rama's feet shining with jeweled padukas He is eternal, unique, beloved and devoid of all desires. Destroying the pride of death, freeing the terrible teeth I worship Kashipuradhinath Kalbhairav. `
        },
        {
            shlok : ` अट्टहासभिन्नपद्मजाण्डकोशसंततिं दृष्टिपातनष्टपापजालमुग्रशासनम् । अष्टसिद्धिदायकं कपालमालिकाधरं काशिकापुराधिनाथकालभैरवं भजे ॥७॥ `,
            arth : ` अत्तहसभिन्नपद्मजन्दकोशसंततिम् दर्शन और कठोर नियम से पाप का जाल नष्ट हो जाता है। अष्टसिद्धिदायकं कपालमालिकाधरम् मैं काशीपुराधिनाथ कालभैरव की पूजा करता हूं। `,
            parivartan : ` Attahasabhinnapadmajandakoshasantatim
            The web of sin is destroyed by philosophy and strict rules. Ashtasiddhidayakam Kapalamalikadharam I worship Kashipuradhinath Kalbhairav. `
        },
        {
            shlok : ` भूतसंघनायकं विशालकीर्तिदायकं काशिवासलोकपुण्यपापशोधकं विभुम् । नीतिमार्गकोविदं पुरातनं जगत्पतिं काशिकापुराधिनाथकालभैरवं भजे ॥८॥ `,
            arth : ` भूतों की सेना का नेता और महान यश देने वाला वह सर्वशक्तिमान है जो काशी में पवित्र और पाप कर्मों की दुनिया को शुद्ध करता है। विश्व के प्राचीन स्वामी, जो नीति मार्ग को जानते थे मैं काशीपुराधिनाथ कालभैरव की पूजा करता हूं। `,
            parivartan : ` leader of the ghost army and giver of great fame He is the Almighty who purifies the world of pious and sinful deeds in Kashi. The ancient masters of the world, who knew the path of morality I worship Kashipuradhinath Kalbhairav. `
        },
        {
            shlok : ` कालभैरवाष्टकं पठंति ये मनोहरं ज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम् । शोकमोहदैन्यलोभकोपतापनाशनं प्रयान्ति कालभैरवांघ्रिसन्निधिं नरा ध्रुवम् ॥९॥ `,
            arth : ` जो लोग कालभैरव के अष्टक का पाठ करते हैं, उन्हें ज्ञान और मुक्ति प्राप्त होती है और उनके अद्भुत गुणों में वृद्धि होती है। काल से भयभीत करने वाले, दुःख, मोह, दुःख, लोभ, क्रोध और संताप को नष्ट करने वाले के चरणों की शरण में मनुष्य अवश्य जाते हैं। `,
            parivartan : ` Those who recite the Ashtak of Kalabhairava attain enlightenment and liberation and their wonderful qualities increase. People definitely seek refuge at the feet of the one who stops fear from death and destroys sorrow, attachment, sorrow, greed, anger and anguish. `
        }
    ]
    
    var krishnakichetavani = [
        {
            shlok : ``,
            arth : `वर्षों तक वन में घूम-घूम, बाधा-विघ्नों को चूम-चूम, सह धूप-घाम, पानी-पत्थर, पांडव आये कुछ और निखर। सौभाग्य न सब दिन सोता है, देखें, आगे क्या होता है।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `मैत्री की राह बताने को, सबको सुमार्ग पर लाने को, दुर्योधन को समझाने को, भीषण विध्वंस बचाने को, भगवान् हस्तिनापुर आये, पांडव का संदेशा लाये।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `दो न्याय अगर तो आधा दो, पर, इसमें भी यदि बाधा हो, तो दे दो केवल पाँच ग्राम, रक्खो अपनी धरती तमाम। हम वहीं खुशी से खायेंगे, परिजन पर असि न उठायेंगे!            `,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `दुर्योधन वह भी दे ना सका, आशीष समाज की ले न सका, उलटे, हरि को बाँधने चला, जो था असाध्य, साधने चला। जब नाश मनुज पर छाता है, पहले विवेक मर जाता है।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `हरि ने भीषण हुंकार किया, अपना स्वरूप-विस्तार किया, डगमग-डगमग दिग्गज डोले, भगवान् कुपित होकर बोले-‘जंजीर बढ़ा कर साध मुझे, हाँ, हाँ दुर्योधन! बाँध मुझे।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `यह देख, गगन मुझमें लय है, यह देख, पवन मुझमें लय है, मुझमें विलीन झंकार सकल, मुझमें लय है संसार सकल। अमरत्व फूलता है मुझमें, संहार झूलता है मुझमें।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `उदयाचल मेरा दीप्त भाल, भूमंडल वक्षस्थल विशाल,भुज परिधि-बन्ध को घेरे हैं, मैनाक-मेरु पग मेरे हैं।दिपते जो ग्रह नक्षत्र निकर, सब हैं मेरे मुख के अन्दर।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `दृग हों तो दृश्य अकाण्ड देख, मुझमें सारा ब्रह्माण्ड देख, चर-अचर जीव, जग, क्षर-अक्षर, नश्वर मनुष्य सुरजाति अमर। शत कोटि सूर्य, शत कोटि चन्द्र, शत कोटि सरित, सर, सिन्धु मन्द्र।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `शत कोटि विष्णु, ब्रह्मा, महेश, शत कोटि विष्णु जलपति, धनेश, शत कोटि रुद्र, शत कोटि काल, शत कोटि दण्डधर लोकपाल। जञ्जीर बढ़ाकर साध इन्हें, हाँ-हाँ दुर्योधन! बाँध इन्हें।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `‘भूलोक, अतल, पाताल देख, गत और अनागत काल देख, यह देख जगत का आदि-सृजन, यह देख, महाभारत का रण, मृतकों से पटी हुई भू है, पहचान, इसमें कहाँ तू है।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `अम्बर में कुन्तल-जाल देख, पद के नीचे पाताल देख, मुट्ठी में तीनों काल देख, मेरा स्वरूप विकराल देख। सब जन्म मुझी से पाते हैं, फिर लौट मुझी में आते हैं।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `जिह्वा से कढ़ती ज्वाल सघन, साँसों में पाता जन्म पवन, पड़ जाती मेरी दृष्टि जिधर, हँसने लगती है सृष्टि उधर! मैं जभी मूँदता हूँ लोचन, छा जाता चारों ओर मरण।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `बाँधने मुझे तो आया है, जंजीर बड़ी क्या लाया है? यदि मुझे बाँधना चाहे मन, पहले तो बाँध अनन्त गगन। सूने को साध न सकता है, वह मुझे बाँध कब सकता है?`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `हित-वचन नहीं तूने माना, मैत्री का मूल्य न पहचाना, तो ले, मैं भी अब जाता हूँ, अन्तिम संकल्प सुनाता हूँ।याचना नहीं, अब रण होगा, जीवन-जय या कि मरण होगा।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `टकरायेंगे नक्षत्र-निकर, बरसेगी भू पर वह्नि प्रखर, फण शेषनाग का डोलेगा, विकराल काल मुँह खोलेगा। दुर्योधन! रण ऐसा होगा। फिर कभी नहीं जैसा होगा।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `भाई पर भाई टूटेंगे, विष-बाण बूँद-से छूटेंगे, वायस-श्रृगाल सुख लूटेंगे, सौभाग्य मनुज के फूटेंगे। आखिर तू भूशायी होगा, हिंसा का पर, दायी होगा।`,
            parivartan : ``
        },
        {
            shlok : ``,
            arth : `थी सभा सन्न, सब लोग डरे, चुप थे या थे बेहोश पड़े।केवल दो नर ना अघाते थे, धृतराष्ट्र-विदुर सुख पाते थे। कर जोड़ खड़े प्रमुदित, निर्भय, दोनों पुकारते थे ‘जय-जय’!`,
            parivartan : ``
        }
    ]

    var shivatandavastotram = [
        {
            shlok : `जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्। डमड्डमड्डमड्डमन्निनादवड्डमर्वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥१॥`,
            arth : `उसके गले में सर्प शिखरों की एक माला लटकी हुई थी, जो उसके उलझे हुए बालों से लज्जाजनक जल के प्रवाह से शुद्ध हुआ था। भगवान शिव हमें दमाद्दमद्दमद्दमन्निनदावद्दमरवयं के उग्र नृत्य की मंगल ध्वनि प्रदान करें।`,
            parivartan : `A garland of snake heads hung around his neck, which had been purified by the flow of shameful water from his matted hair. May Lord Shiva grant us the auspicious sound of the fiery dance of Damaddamaddamadmanninadavaddamaravayam.`
        },
        {
            shlok : `    जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी- विलोलवीचिवल्लरीविराजमानमूर्धनि। धगद्धगद्धगज्ज्वलल्ललाटपट्टपावके किशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम॥२॥`,
            arth : `जातकथासंब्रमभ्रमन्निलिंपनिर्झरि-विलोलविचिवलरिविराजमनमूर्धनी। मेरा जुनून हर पल माथे की पट्टी की आग के लिए है, जो युवा चंद्रमा की लौ से जल रही है।`,
            parivartan : `Jatakathasambrambhramannilimpanirjhari-vilolavichivalravirajmanmurdhani. My passion is every moment for the fire of the forehead bandage, burning with the flame of the young moon.`
        },
        {
            shlok : `    धराधरेन्द्रनन्दिनीविलासबन्धुबन्धुर- स्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे। कृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि क्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि॥३॥`,
            arth : `धरधारेन्द्रनंदिनीविलासबन्धुबन्धुरा- स्फुरद्दिगन्तसन्ततिप्रमोदमनसे। कठिन समय में दयालु दृष्टि के द्वार बंद करके मन को दिव्य वस्त्र में कहीं वस्तु में आनंदित होने दें।`,
            parivartan : `Dharadharendranandinivilasabandhubandhura- sphuraddigantasantatipramodamanase. Close the doors of compassionate vision in difficult times and allow the mind to rejoice in the object somewhere in the divine garment.`
        },
        {
            shlok : `    जटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा- कदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे। मदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे मनो विनोदमद्‍भुतं बिभर्तु भूतभर्तरि॥४॥`,
            arth : `दुल्हन के चेहरे पर कदम्ब और केसर का द्रव्य लगा हुआ था, उसके बाल उलझे हुए थे और गुलाबी चमकदार फन और रत्न लगे हुए थे। हे प्राणियों के स्वामी, आपके ऊपरी वस्त्र में चमकता हुआ नशे का अंधा सागर, मन के अद्भुत आनंद को बनाए रखे।`,
            parivartan : `The bride's face was covered with kadamba and saffron, her hair was tangled and studded with pink bright frills and gems. May the blind ocean of intoxication, shining in your upper garment, O Lord of creatures, sustain the wonderful bliss of the mind.`
        },
        {
            shlok : `    सहस्रलोचनप्रभृत्यशेषलेखशेखर- प्रसूनधूलिधोरणीविधूसराङ्घ्रिपीठभूः। भुजङ्गराजमालया निबद्धजाटजूटकः श्रियै चिराय जायतां चकोरबन्धुशेखरः॥५॥`,
            arth : `सहस्रलोचनप्रभृत्यशेषलेखशेखर- प्रसूनधुलिधोराणिविधुसरान्घृपीठभूः। इंद्रधनुष के मित्र का शिखर समृद्धि के लिए शाही नागों की माला और उलझे बालों की एक जोड़ी के साथ पैदा हो सकता है।`,
            parivartan : `Sahasralochanprabhrtyasheshalekhashekhar- prasunadhulidhoranividhusaraanghripeethabhuh. The peak of the friend of the rainbow can be born with a wreath of royal serpents and a pair of tangled hair for prosperity.`
        },
        {
            shlok : `    ललाटचत्वरज्वलद्धनञ्जयस्फुलिङ्गभा- निपीतपञ्चसायकं नमन्निलिम्पनायकम्। सुधामयूखलेखया विराजमानशेखरं महाकपालि सम्पदे शिरो जटालमस्तु नः॥६॥`,
            arth : `माथा चौकोर जलता हुआ सुनहरा चमचमाता चमकीला पीला पाँच बाण झुका हुआ और धँसा हुआ नेता। हे महाप्रभु, हमारा मस्तक, जिसका शिखर अमृत की किरण की रेखा से चमकता है, हमारे लिए धन का जटाधारी हो।`,
            parivartan : `Head square burning golden sparkling bright yellow five arrows bent and sunken leader. O Lord, may our head, whose peak shines with the line of the ray of nectar, be for us the matted hair of wealth.`
        },
        {
            shlok : `    करालभालपट्टिकाधगद्‍धगद्‍धगज्ज्वलद्- धनञ्जयाहुतीकृतप्रचण्डपञ्चसायके। धराधरेन्द्रनन्दिनीकुचाग्रचित्रपत्रक- प्रकल्पनैकशिल्पिनि त्रिलोचने रतिर्मम॥७॥`,
            arth : `धनंजय के पांच बाणों वाले प्रचंड यज्ञ में भयंकर दाढ़ और ज्वाला से जलते हुए। हे पृथ्वी के स्वामी की प्रसन्नता, हे छाती-युक्त चित्र-पत्ती, हे एक डिजाइन के शिल्पकार, हे तीन आंखों वाले, मेरा जुनून तुम्हारे लिए है।`,
            parivartan : `Dhananjaya's five-arrowed tremendous sacrifice burning with terrible beard and flame. O delight of the lord of the earth, O chest-bearing picture-leaf, O architect of a design, O three-eyed one, my passion is for you.`
        },
        {
            shlok : `    नवीनमेघमण्डलीनिरुद्‍धदुर्धरस्फुर- त्कुहूनिशीथिनीतमः प्रबन्धबद्धकन्धरः। निलिम्पनिर्झरीधरस्तनोतु कृत्तिसिन्धुरः कलानिधानबन्धुरः श्रियं जगद्धुरन्धरः॥८॥`,
            arth : `रात की फुसफुसाहट का अँधेरा नये बादलों से ढक गया था सृजन का महासागर, कला के खजाने का मित्र, विश्व की समृद्धि का धारक, निलिम्पा के जल को धारण करे।`,
            parivartan : `The darkness of the whispers of the night was covered by the new clouds May the ocean of creation, the friend of the treasure-house of art, the holder of the world's prosperity, bear the waters of Nilimpa.`
        },
        {
            shlok : `    प्रफुल्लनीलपङ्कजप्रपञ्चकालिमप्रभा- वलम्बिकण्ठकन्दलीरुचिप्रबद्धकन्धरम्। स्मरच्छिदं पुरच्छिदं भवच्छिदं मखच्छिदं गजच्छिदान्धकच्छिदं तमन्तकच्छिदं भजे॥९॥`,
            arth : `प्रफुल्लनीलपंकजप्रपंचकालिमाप्रभा- वलंबिकन्थाकंदलिरुचिप्रबधकंधरम्। मैं काम को नष्ट करने वाले, नगर को नष्ट करने वाले, यज्ञ को नष्ट करने वाले, हाथी को नष्ट करने वाले, अंधकार को नष्ट करने वाले, मृत्यु को नष्ट करने वाले की पूजा करता हूं।`,
            parivartan : `Prafullanilapankajaprapanchakalimaprabha- valambikanthakandaliruchiprabaddhakandharam. I worship that destroyer of lust, destroyer of the city, destroyer of the sacrifice, destroyer of the elephant, destroyer of the darkness, that destroyer of death.`
        },
        {
            shlok : `    अखर्वसर्वमङ्गलाकलाकदम्बमञ्जरी- रसप्रवाहमाधुरीविजृम्भणामधुव्रतम्। स्मरान्तकं पुरान्तकं भवान्तकं मखान्तकं गजान्तकान्धकान्तकं तमन्तकान्तकं भजे॥१०॥`,
            arth : `अखर्वसर्वमंगलकलाकलादंबमंजरी- रसप्रवाहमाधुरीविज्रम्भानमधुव्रतम्। मैं काम का नाश करने वाले, पूर्वजों का नाश करने वाले, मृत्यु का नाश करने वाला, यज्ञों का नाश करने वाला, हाथियों का नाश करने वाला, अंधकार का नाश करने वाले की पूजा करता हूं।`,
            parivartan : `Akharvasarvamangalakalakaladambamanjari- rasapravahamadhurivijrambhanamadhuvratam. I worship that destroyer of lust, the destroyer of the ancients, the destroyer of death, the destroyer of sacrifices, the destroyer of elephants, the destroyer of darkness.`
        },
        {
            shlok : `    जयत्वदभ्रविभ्रमभ्रमद्‍भुजङ्गमश्वस- द्विनिर्गमत्क्रमस्फुरत्करालभालहव्यवाट्। धिमिद्धिमिद्धिमिध्वनन्मृदङ्गतुङ्गमङ्गल- ध्वनिक्रमप्रवर्तितप्रचण्डताण्डवः शिवः॥११॥`,
            arth : `बादलों की जय, घूमता हुआ सांप, घोड़ा-जुड़वा, आदेश, चमचमाता, भयानक, दाढ़ी वाला, यज्ञ अग्नि। शिव नगाड़ों की ध्वनि और नगाड़ों की चोटियों के क्रम में जबरदस्त नृत्य करने वाले मंगलकारी भगवान हैं।`,
            parivartan : `Victory to the clouds, the whirling serpent, the horse- twin, the order, the sparkling, the terrible, the bearded, the sacrificial fire. Shiva is the auspicious Lord with the tremendous dance in the order of the sounds of the drums and the peaks of the drums.`
        },
        {
            shlok : `    दृषद्विचित्रतल्पयोर्भुजङ्गमौक्तिकस्रजो- र्गरिष्ठरत्नलोष्ठयोः सुहृद्विपक्षपक्षयोः। तृणारविन्दचक्षुषोः प्रजामहीमहेन्द्रयोः समप्रवृत्तिकः कदा सदाशिवं भजाम्यहम्॥१२॥`,
            arth : `उन्होंने साँपों और मोतियों के हार से युक्त विचित्र शय्याओं, उत्तम रत्नों से युक्त होठों, मित्रों और शत्रुओं के पंखों को देखा। जिनकी आंखें घास के कमल के समान हैं, जिनकी संतान, पृथ्वी और महान इंद्र समान रूप से इच्छुक हैं, मैं भगवान सदाशिव की कब पूजा करूंगा?`,
            parivartan : `They looked at the strange beds with snakes and pearl necklaces, the lips with the finest gems, the wings of friends and enemies. When shall I worship Lord Sadashiva, whose eyes are like the lotus of grass, whose progeny, earth and great Indra are equally disposed?`
        },
        {
            shlok : `    कदा निलिम्पनिर्झरीनिकुञ्जकोटरे वसन् विमुक्तदुर्मतिः सदा शिरःस्थमञ्जलिं वहन्। विलोललोललोचनो ललामभाललग्नकः शिवेति मन्त्रमुच्चरन्कदा सुखी भवाम्यहम्॥१३॥`,
            arth : `जब, निलिंपनिझारी के बगीचे की गुफा में निवास करते हुए, मुक्त दुष्ट-चित्त, हमेशा अपने सिर पर हथेलियाँ रखते थे। मैं अपनी आँखें घुमाते हुए, अपनी लाल दाढ़ी लगाए हुए और 'हे शिव' मंत्र का जाप करते हुए कब प्रसन्न होऊँगा?`,
            parivartan : `When, dwelling in the cave of the garden of the Nilimpanijhari, the liberated evil-minded, always carrying the palms on his head. When shall I be happy with my eyes rolling and with my red beard attached and chanting the mantra 'O Siva'?`
        },
        {
            shlok : `इमं हि नित्यमेवमुक्तमुत्तमोत्तमं स्तवं पठन्स्मरन्ब्रुवन्नरो विशुद्धिमेति सन्ततम्। हरे गुरौ सुभक्तिमाशु याति नान्यथा गतिं विमोहनं हि देहिनां सुशङ्करस्य चिन्तनम्॥१४॥`,
            arth : `क्योंकि जो मनुष्य इस प्रकार बोले जाने वाले उत्तम एवं उत्कृष्ट स्तोत्र का पाठ, स्मरण तथा पाठ करता है, उसे निरंतर पवित्रता प्राप्त होती है। आध्यात्मिक गुरु, हरि के प्रति अच्छी भक्ति तुरंत किसी अन्य मार्ग को प्राप्त नहीं करती है; क्योंकि सुशंकर का चिंतन देहधारियों को भ्रमित करता है।`,
            parivartan : `For a man who recites, remembers and recites this excellent and excellent hymn thus ever spoken attains constant purity. Good devotion to Hari, the spiritual master, attains at once no other course; for the contemplation of Sushankara deludes the embodied.`
        },
        {
            shlok : `पूजावसानसमये दशवक्त्रगीतं यः शम्भुपूजनपरं पठति प्रदोषे। तस्य स्थिरां रथगजेन्द्रतुरङ्गयुक्तां लक्ष्मीं सदैव सुमुखीं प्रददाति शम्भुः॥१५॥`,
            arth : `पूजा के अंत में जो व्यक्ति प्रातःकाल में भगवान शिव की पूजा के बाद दशमुखी स्तोत्र का पाठ करता है। भगवान संभु ने उन्हें रथों, हाथियों और घोड़ों से युक्त, सदैव सुंदर चेहरे वाली स्थिर भाग्य की देवी प्रदान की।`,
            parivartan : `At the end of the worship, he who recites the ten-faced hymn after the worship of Lord Shiva at dawn. Lord Sambhu bestows upon him the steady goddess of fortune endowed with chariots, elephants and horses, always with a beautiful face.`
        },
    ]

    var shriharistotram = [
        {
            shlok : `जगज्जालपालं चलत्कण्ठमालं शरच्चन्द्रभालं महादैत्यकालं नभोनीलकायं दुरावारमायं सुपद्मासहायम् भजेऽहं भजेऽहं ॥१॥`,
            arth : `मैं चलती हुई गर्दनों की माला वाले ब्रह्मांड के जाल के रक्षक की पूजा करता हूं, जो शरद ऋतु के चंद्रमा को धारण करता है, जो महान राक्षसों का समय है, जिसका शरीर आकाश में नीला है, जिस तक पहुंचना मुश्किल है, जिसे सुंदर कमल द्वारा मदद मिलती है, मैं उसकी पूजा करता हूं उसे।`,
            parivartan : `I worship the protector of the web of the universe with the garland of moving necks, who holds the autumn moon, the time of the great demons, whose body is blue in the sky, difficult to reach, who is adorned with beautiful lotuses. Helped by him, I worship him.`
        },
        {
            shlok : `सदाम्भोधिवासं गलत्पुष्पहासं जगत्सन्निवासं शतादित्यभासं गदाचक्रशस्त्रं लसत्पीतवस्त्रं हसच्चारुवक्त्रं भजेऽहं भजेऽहं ॥२॥ `,
            arth : `मैं उनकी पूजा करता हूं जो अनंत सागर में रहते हैं, जिनकी मुस्कान फूल की तरह है, जो ब्रह्मांड का निवास स्थान है, जो सैकड़ों सूर्यों की तरह चमकते हैं, जो गदाओं और चक्रों से लैस हैं, जो चमकदार पीले वस्त्र पहने हुए हैं और जिनका सुंदर चेहरा मुस्कुरा रहा है, मैं उनकी पूजा करता हूं उसे।`,
            parivartan : `I worship Him who lives in the infinite ocean, whose smile is like a flower, who is the abode of the universe, who shines like hundreds of suns, who is armed with maces and discs, who is wearing bright yellow robes and I worship those whose beautiful face is smiling.`
        },
        {
            shlok : `रमाकण्ठहारं श्रुतिव्रातसारं जलान्तर्विहारं धराभारहारं चिदानन्दरूपं मनोज्ञस्वरूपं ध्रुतानेकरूपं भजेऽहं भजेऽहं ॥३॥ `,
            arth : `मैं भाग्य की देवी के उस हार की पूजा करता हूं, सुनने के भँवर का सार, पानी के बीच में खेलता हुआ वह हार, पृथ्वी के बोझ का वह हार, चैतन्य आनंद का वह स्वरूप, जो शीघ्र ही कई रूप धारण कर लेता है, मैं उसकी पूजा करता हूं।`,
            parivartan : `I worship that necklace of the goddess of fortune, the essence of the whirlpool of hearing, that necklace playing in the midst of water, that necklace of the burden of the earth, that form of conscious bliss that quickly takes many forms, i worship him`
        },
        {
            shlok : `जराजन्महीनं परानन्दपीनं समाधानलीनं सदैवानवीनं जगज्जन्महेतुं सुरानीककेतुं त्रिलोकैकसेतुं भजेऽहं भजेऽहं ॥४॥`,
            arth : `मैं बुढ़ापे और जन्म से रहित परम आनंद से परिपूर्ण, संतुष्टि में लीन, ब्रह्मांड के जन्म का नया कारण, देवताओं की सेना का सितारा और तीनों लोकों के लिए एकमात्र पुल की पूजा करता हूं जिसकी मैं पूजा करता हूं।`,
            parivartan : `I worship Him, full of supreme bliss, devoid of old age and birth, absorbed in satisfaction, the new cause of the birth of the universe, the star of the army of gods and the only bridge to the three worlds.`
        },
        {
            shlok : `कृताम्नायगानं खगाधीशयानं विमुक्तेर्निदानं हरारातिमानं स्वभक्तानुकूलं जगद्व्रुक्षमूलं निरस्तार्तशूलं भजेऽहं भजेऽहं ॥५॥ `,
            arth : `जो वेदों की ऋचाएँ गाते हैं, जो पक्षियों के सिंहासन पर विराजमान हैं, जो मुक्ति के निदान हैं, जो सबसे महान हैं और जो अपने भक्तों के अनुकूल हैं, मैं उनकी पूजा करता हूँ।`,
            parivartan : `I worship Him who sings the hymns of the Vedas, who sits on the throne of birds, who is the source of liberation, who is the greatest of all and who is friendly to His devotees.`
        },
        {
            shlok : `समस्तामरेशं द्विरेफाभकेशं जगद्विम्बलेशं ह्रुदाकाशदेशं सदा दिव्यदेहं विमुक्ताखिलेहं सुवैकुण्ठगेहं भजेऽहं भजेऽहं ॥६॥ `,
            arth : `मैं उन सभी देवताओं के स्वामी की पूजा करता हूं जिनके बाल दो पंखों के समान हैं, जो ब्रह्मांड के स्वामी हैं, जिनका हृदय आकाश में है, जिनका शरीर हमेशा मुक्त है, जिनका पूरा शरीर मुक्त है और जिनका निवास सुंदर वैकुंठ है।`,
            parivartan : `I worship the Lord of all the gods whose hair is like two feathers, who is the lord of the universe, whose heart is in the sky, whose body is always free, whose entire body is free and whose abode is the beautiful Vaikuntha.`
        },
        {
            shlok : `सुरालिबलिष्ठं त्रिलोकीवरिष्ठं गुरूणां गरिष्ठं स्वरूपैकनिष्ठं सदा युद्धधीरं महावीरवीरं महाम्भोधितीरं भजेऽहं भजेऽहं ॥७॥ `,
            arth : `मैं उनकी पूजा करता हूं जो शराब से भी अधिक शक्तिशाली हैं और जो तीनों लोकों में सर्वश्रेष्ठ हैं, जो आध्यात्मिक गुरुओं में सर्वश्रेष्ठ हैं, जो युद्ध में हमेशा साहसी हैं, जो महान वीरों के नायक हैं, जो महान महासागर के तट पर हैं, मैं उनकी पूजा करता हूं .`,
            parivartan : `I worship him who is more powerful than wine and who is the best in the three worlds, who is the best among spiritual masters, who is always courageous in battle, who is the hero of great heroes, who is on the shores of the great ocean, I I worship him.`
        },
        {
            shlok : `रमावामभागं तलानग्रनागं कृताधीनयागं गतारागरागं मुनीन्द्रैः सुगीतं सुरैः संपरीतं गुणौधैरतीतं भजेऽहं भजेऽहं ॥८॥ `,
            arth : `मैं राम के वामांग के उस निचले सिरे वाले नाग की पूजा करता हूं, जिसने अपने वश में होकर यज्ञ किया है, जिसने सभी वासनाओं को खो दिया है और जो महान ऋषियों द्वारा अच्छी तरह से गाया जाता है और जो देवताओं से घिरा हुआ है, जो गुणों के सागर में पारंगत है। पूजा करना।`,
            parivartan : `I worship the serpent at the lower end of the Vamanga of Rama, who has performed the yagya under his control, who has lost all desires and who is well-sung by the great sages and who is surrounded by the gods, Who is well versed in the ocean of virtues. worship.`
        }
    ]

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${ error }`)    
}
