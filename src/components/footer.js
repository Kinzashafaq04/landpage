import Card from "./card";


function Footer(){
    return(
//         <footer>
//               <a><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><title id="title">help_center</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2C15.0377 2 17.4234 2.988 19.2177 4.78231C21.012 6.57662 22 8.96231 22 11.5C22 14.0377 21.012 16.4234 19.2177 18.2177C17.4234 20.012 15.0377 21 12.5 21C9.9635 21 7.57662 20.012 5.78231 18.2177C3.988 16.4234 3 14.0377 3 11.5C3 8.96231 3.988 6.57662 5.78231 4.78231C7.57662 2.988 9.9635 2 12.5 2ZM18.3781 17.3781C16.8083 18.948 14.7206 19.8125 12.5 19.8125C10.2794 19.8125 8.19175 18.948 6.62306 17.3781C5.052 15.8083 4.1875 13.7206 4.1875 11.5C4.1875 9.27938 5.052 7.19175 6.62306 5.62188C8.19294 4.052 10.2806 3.1875 12.5 3.1875C14.7206 3.1875 16.8083 4.052 18.3781 5.62188C19.948 7.19175 20.8125 9.27938 20.8125 11.5C20.8125 13.7206 19.948 15.8083 18.3781 17.3781ZM11.9062 6.76781V7.95531H13.0938V6.76781H11.9062ZM11.9062 9.13569V16.2334H13.0938V9.13569H11.9062Z" fill="#404553"></path><path d="M19.2177 4.78231L19.0409 4.95909L19.2177 4.78231ZM19.2177 18.2177L19.0409 18.0409L19.2177 18.2177ZM5.78231 18.2177L5.95909 18.0409L5.78231 18.2177ZM6.62306 17.3781L6.79991 17.2014L6.79977 17.2013L6.62306 17.3781ZM6.62306 5.62188L6.79977 5.79872L6.79984 5.79865L6.62306 5.62188ZM11.9062 7.95531H11.6562V8.20531H11.9062V7.95531ZM11.9062 6.76781V6.51781H11.6562V6.76781H11.9062ZM13.0938 7.95531V8.20531H13.3438V7.95531H13.0938ZM13.0938 6.76781H13.3438V6.51781H13.0938V6.76781ZM11.9062 16.2334H11.6562V16.4834H11.9062V16.2334ZM11.9062 9.13569V8.88569H11.6562V9.13569H11.9062ZM13.0938 16.2334V16.4834H13.3438V16.2334H13.0938ZM13.0938 9.13569H13.3438V8.88569H13.0938V9.13569ZM19.3945 4.60554C17.5533 2.76433 15.104 1.75 12.5 1.75V2.25C14.9714 2.25 17.2935 3.21167 19.0409 4.95909L19.3945 4.60554ZM22.25 11.5C22.25 8.89602 21.2357 6.44674 19.3945 4.60554L19.0409 4.95909C20.7883 6.70651 21.75 9.0286 21.75 11.5H22.25ZM19.3945 18.3945C21.2357 16.5533 22.25 14.104 22.25 11.5H21.75C21.75 13.9714 20.7883 16.2935 19.0409 18.0409L19.3945 18.3945ZM12.5 21.25C15.104 21.25 17.5533 20.2357 19.3945 18.3945L19.0409 18.0409C17.2935 19.7883 14.9714 20.75 12.5 20.75V21.25ZM5.60554 18.3945C7.44675 20.2357 9.89723 21.25 12.5 21.25V20.75C10.0298 20.75 7.7065 19.7883 5.95909 18.0409L5.60554 18.3945ZM2.75 11.5C2.75 14.104 3.76433 16.5533 5.60554 18.3945L5.95909 18.0409C4.21167 16.2935 3.25 13.9714 3.25 11.5H2.75ZM5.60554 4.60554C3.76433 6.44674 2.75 8.89602 2.75 11.5H3.25C3.25 9.0286 4.21167 6.70651 5.95909 4.95909L5.60554 4.60554ZM12.5 1.75C9.89723 1.75 7.44675 2.76432 5.60554 4.60554L5.95909 4.95909C7.7065 3.21168 10.0298 2.25 12.5 2.25V1.75ZM12.5 20.0625C14.7869 20.0625 16.9381 19.1717 18.5549 17.5549L18.2013 17.2013C16.6784 18.7243 14.6543 19.5625 12.5 19.5625V20.0625ZM6.44622 17.5548C8.06185 19.1717 10.2131 20.0625 12.5 20.0625V19.5625C10.3456 19.5625 8.32165 18.7243 6.79991 17.2014L6.44622 17.5548ZM3.9375 11.5C3.9375 13.7869 4.82833 15.9382 6.44635 17.555L6.79977 17.2013C5.27567 15.6783 4.4375 13.6543 4.4375 11.5H3.9375ZM6.44635 5.44503C4.82833 7.06183 3.9375 9.21309 3.9375 11.5H4.4375C4.4375 9.34566 5.27567 7.32167 6.79977 5.79872L6.44635 5.44503ZM12.5 2.9375C10.2143 2.9375 8.06305 3.82834 6.44629 5.4451L6.79984 5.79865C8.32283 4.27567 10.3469 3.4375 12.5 3.4375V2.9375ZM18.5549 5.4451C16.9381 3.82832 14.7869 2.9375 12.5 2.9375V3.4375C14.6543 3.4375 16.6784 4.27568 18.2013 5.79865L18.5549 5.4451ZM21.0625 11.5C21.0625 9.2131 20.1717 7.06188 18.5549 5.4451L18.2013 5.79865C19.7243 7.32162 20.5625 9.34565 20.5625 11.5H21.0625ZM18.5549 17.5549C20.1717 15.9381 21.0625 13.7869 21.0625 11.5H20.5625C20.5625 13.6543 19.7243 15.6784 18.2013 17.2013L18.5549 17.5549ZM12.1562 7.95531V6.76781H11.6562V7.95531H12.1562ZM13.0938 7.70531H11.9062V8.20531H13.0938V7.70531ZM12.8438 6.76781V7.95531H13.3438V6.76781H12.8438ZM11.9062 7.01781H13.0938V6.51781H11.9062V7.01781ZM12.1562 16.2334V9.       13569H11.6562V16.2334H12.1562ZM13.0938 15.9834H11.9062V16.4834H13.0938V15.9834ZM12.8438 9.13569V16.2334H13.3438V9.13569H12.8438ZM11.9062 9.38569H13.0938V8.88569H11.9062V9.38569Z" fill="#404554"></path></svg><b>HELP CENTER </b><h1>hgdsgfjsdfgjhgvk</h1></a>

//   <p>Author: Hege Refsnes</p>
//   <p><a href="mailto:hege@example.com">hege@example.com</a></p>
// </footer> 
        <div  className="foot">
            <div class="row ">
                    <div className="col">
                <div><h1>We're Always Here To Help</h1>
                <h4>Reach out to us through any of these support channels</h4></div>
            </div>
            <div className="col help">
                
            {/* <Card imageSrc="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" /> */}
          <a> <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><title id="title">help_center</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2C15.0377 2 17.4234 2.988 19.2177 4.78231C21.012 6.57662 22 8.96231 22 11.5C22 14.0377 21.012 16.4234 19.2177 18.2177C17.4234 20.012 15.0377 21 12.5 21C9.9635 21 7.57662 20.012 5.78231 18.2177C3.988 16.4234 3 14.0377 3 11.5C3 8.96231 3.988 6.57662 5.78231 4.78231C7.57662 2.988 9.9635 2 12.5 2ZM18.3781 17.3781C16.8083 18.948 14.7206 19.8125 12.5 19.8125C10.2794 19.8125 8.19175 18.948 6.62306 17.3781C5.052 15.8083 4.1875 13.7206 4.1875 11.5C4.1875 9.27938 5.052 7.19175 6.62306 5.62188C8.19294 4.052 10.2806 3.1875 12.5 3.1875C14.7206 3.1875 16.8083 4.052 18.3781 5.62188C19.948 7.19175 20.8125 9.27938 20.8125 11.5C20.8125 13.7206 19.948 15.8083 18.3781 17.3781ZM11.9062 6.76781V7.95531H13.0938V6.76781H11.9062ZM11.9062 9.13569V16.2334H13.0938V9.13569H11.9062Z" fill="#404553"></path><path d="M19.2177 4.78231L19.0409 4.95909L19.2177 4.78231ZM19.2177 18.2177L19.0409 18.0409L19.2177 18.2177ZM5.78231 18.2177L5.95909 18.0409L5.78231 18.2177ZM6.62306 17.3781L6.79991 17.2014L6.79977 17.2013L6.62306 17.3781ZM6.62306 5.62188L6.79977 5.79872L6.79984 5.79865L6.62306 5.62188ZM11.9062 7.95531H11.6562V8.20531H11.9062V7.95531ZM11.9062 6.76781V6.51781H11.6562V6.76781H11.9062ZM13.0938 7.95531V8.20531H13.3438V7.95531H13.0938ZM13.0938 6.76781H13.3438V6.51781H13.0938V6.76781ZM11.9062 16.2334H11.6562V16.4834H11.9062V16.2334ZM11.9062 9.13569V8.88569H11.6562V9.13569H11.9062ZM13.0938 16.2334V16.4834H13.3438V16.2334H13.0938ZM13.0938 9.13569H13.3438V8.88569H13.0938V9.13569ZM19.3945 4.60554C17.5533 2.76433 15.104 1.75 12.5 1.75V2.25C14.9714 2.25 17.2935 3.21167 19.0409 4.95909L19.3945 4.60554ZM22.25 11.5C22.25 8.89602 21.2357 6.44674 19.3945 4.60554L19.0409 4.95909C20.7883 6.70651 21.75 9.0286 21.75 11.5H22.25ZM19.3945 18.3945C21.2357 16.5533 22.25 14.104 22.25 11.5H21.75C21.75 13.9714 20.7883 16.2935 19.0409 18.0409L19.3945 18.3945ZM12.5 21.25C15.104 21.25 17.5533 20.2357 19.3945 18.3945L19.0409 18.0409C17.2935 19.7883 14.9714 20.75 12.5 20.75V21.25ZM5.60554 18.3945C7.44675 20.2357 9.89723 21.25 12.5 21.25V20.75C10.0298 20.75 7.7065 19.7883 5.95909 18.0409L5.60554 18.3945ZM2.75 11.5C2.75 14.104 3.76433 16.5533 5.60554 18.3945L5.95909 18.0409C4.21167 16.2935 3.25 13.9714 3.25 11.5H2.75ZM5.60554 4.60554C3.76433 6.44674 2.75 8.89602 2.75 11.5H3.25C3.25 9.0286 4.21167 6.70651 5.95909 4.95909L5.60554 4.60554ZM12.5 1.75C9.89723 1.75 7.44675 2.76432 5.60554 4.60554L5.95909 4.95909C7.7065 3.21168 10.0298 2.25 12.5 2.25V1.75ZM12.5 20.0625C14.7869 20.0625 16.9381 19.1717 18.5549 17.5549L18.2013 17.2013C16.6784 18.7243 14.6543 19.5625 12.5 19.5625V20.0625ZM6.44622 17.5548C8.06185 19.1717 10.2131 20.0625 12.5 20.0625V19.5625C10.3456 19.5625 8.32165 18.7243 6.79991 17.2014L6.44622 17.5548ZM3.9375 11.5C3.9375 13.7869 4.82833 15.9382 6.44635 17.555L6.79977 17.2013C5.27567 15.6783 4.4375 13.6543 4.4375 11.5H3.9375ZM6.44635 5.44503C4.82833 7.06183 3.9375 9.21309 3.9375 11.5H4.4375C4.4375 9.34566 5.27567 7.32167 6.79977 5.79872L6.44635 5.44503ZM12.5 2.9375C10.2143 2.9375 8.06305 3.82834 6.44629 5.4451L6.79984 5.79865C8.32283 4.27567 10.3469 3.4375 12.5 3.4375V2.9375ZM18.5549 5.4451C16.9381 3.82832 14.7869 2.9375 12.5 2.9375V3.4375C14.6543 3.4375 16.6784 4.27568 18.2013 5.79865L18.5549 5.4451ZM21.0625 11.5C21.0625 9.2131 20.1717 7.06188 18.5549 5.4451L18.2013 5.79865C19.7243 7.32162 20.5625 9.34565 20.5625 11.5H21.0625ZM18.5549 17.5549C20.1717 15.9381 21.0625 13.7869 21.0625 11.5H20.5625C20.5625 13.6543 19.7243 15.6784 18.2013 17.2013L18.5549 17.5549ZM12.1562 7.95531V6.76781H11.6562V7.95531H12.1562ZM13.0938 7.70531H11.9062V8.20531H13.0938V7.70531ZM12.8438 6.76781V7.95531H13.3438V6.76781H12.8438ZM11.9062 7.01781H13.0938V6.51781H11.9062V7.01781ZM12.1562 16.2334V9.       13569H11.6562V16.2334H12.1562ZM13.0938 15.9834H11.9062V16.4834H13.0938V15.9834ZM12.8438 9.13569V16.2334H13.3438V9.13569H12.8438ZM11.9062 9.38569H13.0938V8.88569H11.9062V9.38569Z" fill="#404554"></path></svg>
            <span>HELP CENTER </span><br/>
            <b>HELP.NOON.COM</b> </a>   
            </div>
            
            <div className="col help">
           <a> <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><title id="title">email_support</title><path d="M5.625 6H18.625C19.5188 6 20.25 6.73125 20.25 7.625V17.375C20.25 18.2688 19.5188 19 18.625 19H5.625C4.73125 19 4 18.2688 4 17.375V7.625C4 6.73125 4.73125 6 5.625 6Z" stroke="#404553" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.25 7.62501L12.125 13.3125L4 7.62501" stroke="#404553" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span>EMAIL SUPPORT</span><br/>
                <b>Career@noon.com</b> </a>
                
            </div>
            </div>
            

        </div>

    )
}
export default Footer;