import ContactEntry from "../components/ContactEntry";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-black">Below are my methods of contact, feel free to use whichever is preferred</h1>
        <div>
        <ContactEntry
        contactType="Email"
        contact="philiposabrha1@gmail.com"
        />
        <ContactEntry
        contactType="LinkedIn Url"
        contact="www.linkedin.com/in/philipos-abrha"
        />
        <ContactEntry
        contactType="Phone"
        contact="519-580-4370"
        />    
        </div>
        </main>
    );
}