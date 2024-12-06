import { useState } from "react";
import { authors } from "../../data/authors"

const Authers = () => {
    const [search , setSearch] = useState("")

    // Sorting authors by name
    return (
        <div className="authers">
            <div className="authers-search">
                <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search for authors..." />
            </div>
            {authors
            .filter(a => a.name.toLowerCase().includes(search))
            .map(auther => 
            <div className="auther-data" key={auther.id}>

                    <img src={auther.image} alt={auther.name} />
                    <h3>{auther.name}</h3>
                    <p>{auther.description}</p>
            </div>
                )}
        </div>
 );
}
 
export default Authers;