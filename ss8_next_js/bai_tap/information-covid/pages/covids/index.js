import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function CovidPage(props) {
    console.log(props.data);
    return (
        <>
            <h1>Vietnam's COVID-19 information</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Actice</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((covid, index) => {
                            return (
                                <tr key={index}>
                                    <td>{covid.date}</td>
                                    <td>{covid.confirmed}</td>
                                    <td>{covid.active}</td>
                                    <td>{covid.recovered}</td>
                                    <td>{covid.deaths}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export async function getStaticProps() {
    const res = await axios.get('http://localhost:8080/covids');
    console.log(res.data)
    return {
        props: {
            data: res.data
        }
    }
}