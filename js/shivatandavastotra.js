/*
-   
-   Designed | Develped by MayankDevil
-   https://github.com/MayankDevil/sanskrti
-   JavaScript ./js/shivatandavastotra.js
*/
try
{
    /*
        API collection set { shlok | arth | parivartan }
    */ 
    var shivatandavastotra = [
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
    // इति श्रीरावणकृतं शिवताण्डवस्तोत्रं सम्पूर्णम्।
    sumiran("primary", shivatandavastotra)

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${ error }`)    
}