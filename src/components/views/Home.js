import React, { Component } from 'react'

export default class Home extends Component {
    // since we need to gain access to the state of our component, we need to go through the contructor
    constructor() {
        console.log("component constructed");
        super();

        this.state = {
            racers: []
        }
    }

    componentDidMount() {
        console.log("component mounted");
        fetch('https://ergast.com/api/f1/2018/5/driverStandings.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                })
            })
            .catch(error => console.error(error))
    }

    render() {

        console.log("component rendered");
        console.log(this.state.racers);

        return (
            <div className="table-responsive">
                <table className="table table-striped table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Position</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Nationality</th>
                            <th>Constructor</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.racers.map(racer => (
                                <tr key={racer.position}>
                                    <td>{racer.position}</td>
                                    <td>{racer.points}</td>
                                    <td>{racer.wins}</td>
                                    <td>
                                        <a target="_blank" rel="noreferrer" href={racer.Driver.url}>{racer.Driver.givenName} {racer.Driver.familyName}</a>
                                    </td>
                                    <td>{racer.Driver.dateOfBirth}</td>
                                    <td>{racer.Driver.nationality}</td>
                                    <td>
                                        <a target="_blank" rel="noreferrer" href={racer.Constructors[0].url}>{racer.Constructors[0].name}</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            </div>
        )
    }
}
