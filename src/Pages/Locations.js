import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Locations = () => {

    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let {name, type, dimension} = info;
    let API_ENDPOINT = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async function(){
            let data = await fetch(API_ENDPOINT).then(res => res.json());
            setInfo(data);

            let chars = await Promise.all(
                data.residents.map((x) => {
                    return fetch(x).then(res => res.json());
                })
            );
            setResults(chars);
        })()
    }, [API_ENDPOINT]);

    return (
        <div className='container'>
            <div className="row mb-4">
                <h1 className='text-center mb-4'>Location:{" "}<span className="text-primary">{name===""? "Unknown" : name}</span></h1>
                <h5 className='text-center'>Dimension: {dimension===""? "Unknown" : dimension}</h5>
                <h6 className='text-center'>Type: {type===""? "Unknown" : type}</h6>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <h4 className="text-center mb-4">Select Location</h4>
                    <InputGroup setID={setID} total={126} name="Location"/>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page='/locations/' results={results}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations