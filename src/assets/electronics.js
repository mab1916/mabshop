import { FetchElectronics } from "./fetchElectronics.js";

function Electronics() {
    const [electronics, loading] = FetchElectronics();

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
        {electronics.map((electronic, index) => {
            return (
                <div>
                    <img style={{width: 50}} src={electronic.image} alt={electronic.category} />
                    <p>No. {index + 1}</p>
                    <p>Category: {electronic.category}</p>
                    <p>Description: {electronic.description}</p>
                    <p>ID: {electronic.id}</p>
                    <p>Price: {electronic.price}</p>
                    <p>Title: {electronic.title}</p>
                    <hr />
                </div>
            )
        })}
    </div>
    );
}
export default Electronics;