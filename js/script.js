/*
-   
-   Designed | Develped by MayankDevil
-   
-   JavaScript ./js/script.js
*/
try
{
    let main = document.getElementById('main')

    function prakat(element)
    {
        return (`
            <!-- bhag -->
            <section>
            
                <div class='shlok'> ${ element.shlok } </div>

                <div class='arth'> ${ element.arth } </div>

                <div class='parivartan'> ${ element.parivartan } </div>

            </section>
        `)
    }
    function header()
    {
        return (`
            <header>

                <div> अष्टकम: </div>
                
            </header>
        `)
    }
    function footer()
    {
        return (`
            <footer>

                <div>  rootkali { मयंक } ER012365203 </div>
                
            </footer>
        `)
    }
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
    ].forEach((element) => {

        main.insertAdjacentHTML("beforeend",prakat(element))
    })

    main.insertAdjacentHTML("beforebegin",header())
    main.insertAdjacentHTML("afterend",footer())

    console.log(kaalabhiravam)
}
catch (error)
{
    console.log(`${ error }`)    
}