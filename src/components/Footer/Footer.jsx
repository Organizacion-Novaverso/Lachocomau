//rfce
import Redes from "./Redes";
function Footer() {
  return (
    <section className="bg-[#372418] pt-16 pb-5">
      <p className="flex justify-center text-white">©Chocomau 2024</p>
      <Redes />
      <p className="flex justify-center text-white">
        Designed and developed by team&nbsp;
        <a href="http://www.novaverso.cl">©Novaverso</a>
      </p>
      <p className="flex justify-center text-white">All rights reserved</p>
    </section>
  );
}

export default Footer;
