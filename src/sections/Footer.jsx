import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="footer nike logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>

          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(icon => (
              <div
                className="bg-white flex justify-center items-center w-12 h-12 rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(section => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map(link => (
                  <li
                    key={link.name}
                    className="text-white-400 mt-3 font-montserrat text-base leading-normal "
                  >
                    <a href={link.link} className="hover:text-slate-gray">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-white-400 flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <p>Copyright</p>
          <img
            src={copyrightSign}
            alt="copyright sign"
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p>2024 - Aayush Dhungel</p>
        </div>

        <p className="font-montserrat cursor-pointer hover:text-slate-gray">
          Terms and Conditions
        </p>
      </div>
    </footer>
  )
}

export default Footer
