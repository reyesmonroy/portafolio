import { ReactComponent as LogoYoutube } from "../images/youtube.svg";
import { ReactComponent as LogoLinkedIn } from "../images/linkedin.svg";


export const Footer = () => {
    return (
        <footer>
      <a
        href="https://www.youtube.com/user/meinl12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoYoutube />
      </a>
      <a
        href="https://www.linkedin.com/in/fernando-reyes-monroy-mart%C3%ADnez-13b79b176/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoLinkedIn />
      </a>
      <a href="mailto:fernando10monroy@yahoo.com" target="_blank" rel="noopener noreferrer">Email: fernando10monroy@yahoo.com</a>
    </footer>
    )
}
