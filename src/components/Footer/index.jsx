import { Instagram, Youtube, Facebook, Twitter, Linkedin } from 'lucide-react';
const Footer = () => {
    return (
    <>
    <footer>
      <div className="bottom-0 flex justify-around w-full px-2 py-4 text-white bg-gray-800 inset-x-0-0 ">
       <div className="flex justify-center font-serif ">
        <p>&copy; 2024 Electrify X EVM. All rights reserved.</p> 
       </div>
       <div className="justify-center gap-4 px-4 font-serif sm:grid sm:grid-cols-1 md:flex">
        <p>Legal</p>
        <p>Insurance</p>
        <p>Contact</p>
        <p>Charging Station</p>
       </div>
       <div className="justify-center gap-4 pl-2 sm:grid sm:grid-cols-1 md:flex">
        <Instagram />
        <Youtube />
        <Facebook />
        <Twitter />
        <Linkedin />
       </div>
      </div>
    </footer>
    </>
    )
}
export default Footer