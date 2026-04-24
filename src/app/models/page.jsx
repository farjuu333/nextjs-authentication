

const MOdelsPage = async() => {
    const res = await fetch("http://localhost:8000/models");
    const models = await res.json();
    console.log(models);
    return (
        <div>
            <h1>Models Page</h1>
        <div className="grid grid-cols-3 gap-5">
            {models.map(model=><div className="border p-3 rounded-lg" key={model.id}>

                <h2 className="text-2xl font-bold">{model.title}</h2>
                <p>{model.description}</p>
                <p className="text-xl text-green-500">${model.price}</p>
            </div>)}
        </div>

        </div>

    );
};

export default MOdelsPage;