import { footerLogo } from "../assets/images"
import { socialMedia } from "../constants"
import { footerLinks } from "../constants"



const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href='/'>
            <img src={footerLogo} width={150} height={46}/>
          </a>
          <p className="mt-6 text-base leading-normal text-white font-montserrat sm:max-w-sm">Get shoes ready for the new term at your<br></br> nearest Nike store. Find Your perfect Size In<br></br> Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
                <img src={icon.src} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link) => (
            <div className="">
              <h1 className="text-white font-montserrat font-semibold text-xl">{link.title}</h1>
              <ul>
                {link.links.map((name) => (
                  <div className="text-white font-montserrat leading-normal gap-6 mt-2">                  
                    <p >{name.name}</p>
                    <a href={name.link} ></a>
                  </div>
                ))}
              </ul>
              </div>
          ))}

        </div>

      </div>
    </footer>
  )
}

export default Footer