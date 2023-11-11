import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-yellow-400 static bottom-0 text-black mt-14">
      <div className="flex flex-row justify-around items-center py-4">
        <div className="flex flex-col justify-center items-center">
        <Image src="/kbfc_logo.svg" alt="KBFC Logo" height={130} width={130} />
          <div className="text-sm">Kerala Blasters FC</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl font-bold">Contact</div>
          <div className="text-sm">Phone: 1234567890</div>
          <div className="text-sm">Email:</div>
        </div>
      </div>
    </div>
  );
}


export default Footer;
