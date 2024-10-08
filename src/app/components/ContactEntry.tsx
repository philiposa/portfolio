interface ContactEntryProps {
    contactType: string;
    contact: string;
}

export default function ({contactType,contact}: ContactEntryProps) {
    return(
        <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black">{contactType}</h2>
        <h3 className="text-lg text-black">{contact}</h3>
      </div>
    );

}