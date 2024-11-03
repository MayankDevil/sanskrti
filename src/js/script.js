/*
-   sanskrit " प्राचीन भारीतय सभ्यत "
-   Designed | Develped by MayankDevil
-   https://github.com/MayankDevil/sanskrti 
-   JavaScript ./js/script.js
*/
try
{
    // target

    let land_container = document.getElementById('land_container')
   
    /*
        -------------------------------------------------
        } parkat function : return prastuti set bhag
        -------------------------------------------------
    */ 

    function prakat(prastuti)
    {
        if (false)
        {
            return (`
                <!-- ( bhag ) -->

                <section class='bhag'>

                    <h3> ${ prastuti.arth } </h3>

                    <div class='arth'>  </div>

                    <div class='parivartan'> ${ prastuti.parivartan } </div>

                </section>
            `).toString()
        }
        else
        {

            return (`
                <!-- ( bhag ) -->
                
                <section class='bhag'>
                
                    <div class='shlok'> ${ prastuti.shlok } </div>
                    
                    <!-- <div class='arth'> ${ prastuti.arth } </div> -->
                    
                    <!-- <div class='parivartan'> ${ prastuti.parivartan } </div> -->
                
                </section>
            `).toString()
        }
    }

    /*
        ----------------------------------------------------------------------------
        } sumiran function : arguments kendrit & gyan return prakat set prastuti
        ----------------------------------------------------------------------------
    */ 

    function sumiran(kendrit, gyan)
    {
        khand = document.getElementById(kendrit)

        gyan.forEach((prastuti) => {
            khand.insertAdjacentHTML("beforeend",prakat(prastuti))
        })
    }

    // sumiran("kendr", shivatandavastotram)
    // sumiran("kendr", shriharistotram)
    // sumiran("kendr", kaalabhiravam)
    // sumiran("kendr", krishnakichetavani)


    let ank = ["&#2407;","&#2407;","&#2407;","&#2407;","&#2407;","&#2407;","&#2407;","&#2407;","&#2407;"]

    console.log(ank[0])

    document.title = `MayankDevil`
}
catch (error)
{
    console.error(error.message)    
}
