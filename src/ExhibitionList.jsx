import exhibitions from "../data/exhibitions.json";

export default function ExhibitionList() {
    return (
        <div className="grid">
            {exhibitions.map((exhibit)=>(
                <ExhibitCard key={exhibit.id} exhibit={exhibit}/>
            ))}
        </div>
    );
}