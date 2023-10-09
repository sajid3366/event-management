
const Contact = () => {
    return (
        <div>
            <div>
                <h3 className="text-[#c5a47e]">CONTACT</h3>
                <h2 className="text-3xl font-bold mt-1" >Get in Touch</h2>
                <div className="bg-[#999] w-full v-[80vh] mt-8 text-white px-8 py-[100px] flex gap-5">
                    <div className="w-1/2">
                    <h2 className="text-2xl">NEW YORK OFFICE</h2>
                    <p>1616 Broadway NY, New York 10001
                        United States of America.</p>
                    <p>+1 203-123-0606</p>
                    <a className="underline" href="">info@netgo.com</a>
                    </div>
                    <div>
                    <h2 className="text-2xl">BANGLADESH OFFICE</h2>
                    <p>1616 Bonani, Dhaka-1207
                        Bangladesh</p>
                    <p>+8801725402060</p>
                    <a className="underline" href="">info@netgobd.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;