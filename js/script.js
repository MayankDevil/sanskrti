/*
-   sanskrit "भारीतय सभ्यत "
-   Designed | Develped by MayankDevil
-   https://github.com/MayankDevil/sanskrti 
-   JavaScript ./js/script.js
*/
try
{
    /*
        -------------------------------------------------
        } parkat function : return prastuti set bhag
        -------------------------------------------------
    */ 

    function prakat(prastuti)
    {
        return (`
            <!-- ( bhag ) -->

            <section class='bhag'>
            
                <div class='shlok'> ${ prastuti.shlok } </div>

                <div class='arth'> ${ prastuti.arth } </div>

                <div class='parivartan'> ${ prastuti.parivartan } </div>

            </section>
        `)
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
            khand.insertAdjacentHTML("afterbegin",prakat(prastuti))
        })
    }

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${ error }`)    
}