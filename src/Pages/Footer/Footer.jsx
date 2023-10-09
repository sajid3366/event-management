
const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            
            <div>
            <h2 className="text-xl mb-5">Follow us on</h2>
            <aside className="flex gap-5">
                
                <img className="w-[50px] h-[50px]" src="https://i.ibb.co/Nn9GsqY/fb.png" alt="" />
                <img className="w-[50px] h-[50px]" src="https://i.ibb.co/NpSvHkz/ig.png" alt="" />
                <img className="w-[50px] h-[50px]" src="https://i.ibb.co/pfpG7f2/tw.png" alt="" />
            </aside>
            </div>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Conferences</a>
                <a className="link link-hover">Expos</a>
                <a className="link link-hover">Workshops</a>
                <a className="link link-hover">Product Launches</a>
                <a className="link link-hover">Corporate Meetings</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
           
        </footer>
    );
};

export default Footer;