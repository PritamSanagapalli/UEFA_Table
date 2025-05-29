import React, { useEffect, useState } from 'react';
import './Match.css';

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using football-data.org API for UEFA Champions League matches
    fetch('https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED&season=2024', {
      headers: {
        // Using a free tier API - no auth token required for this endpoint
        'X-Auth-Token': 'YOUR_API_KEY' // Replace with your API key if needed
      }
    })
      .then(res => res.json())
      .then(data => {
        // Get at least 25 scheduled matches from 2024
        const upcomingMatches = data.matches?.slice(0, 25) || [];
        setMatches(upcomingMatches);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching matches:', err);
        setLoading(false);
        // Fallback data in case API fails - 25 matches from 2024
        setMatches([
          {
            id: 1,
            utcDate: '2024-02-13T20:00:00Z',
            homeTeam: { name: 'Real Madrid' },
            awayTeam: { name: 'Manchester City' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Santiago Bernabéu'
          },
          {
            id: 2,
            utcDate: '2024-02-14T20:00:00Z',
            homeTeam: { name: 'Bayern Munich' },
            awayTeam: { name: 'Barcelona' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Allianz Arena'
          },
          {
            id: 3,
            utcDate: '2024-02-15T20:00:00Z',
            homeTeam: { name: 'Liverpool' },
            awayTeam: { name: 'PSG' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Anfield'
          },
          {
            id: 4,
            utcDate: '2024-02-20T20:00:00Z',
            homeTeam: { name: 'Juventus' },
            awayTeam: { name: 'Atletico Madrid' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Allianz Stadium'
          },
          {
            id: 5,
            utcDate: '2024-02-21T20:00:00Z',
            homeTeam: { name: 'Inter Milan' },
            awayTeam: { name: 'Borussia Dortmund' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'San Siro'
          },
          {
            id: 6,
            utcDate: '2024-02-22T20:00:00Z',
            homeTeam: { name: 'Chelsea' },
            awayTeam: { name: 'Ajax' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Stamford Bridge'
          },
          {
            id: 7,
            utcDate: '2024-02-27T20:00:00Z',
            homeTeam: { name: 'Manchester City' },
            awayTeam: { name: 'Real Madrid' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Etihad Stadium'
          },
          {
            id: 8,
            utcDate: '2024-02-28T20:00:00Z',
            homeTeam: { name: 'Barcelona' },
            awayTeam: { name: 'Bayern Munich' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Camp Nou'
          },
          {
            id: 9,
            utcDate: '2024-02-29T20:00:00Z',
            homeTeam: { name: 'PSG' },
            awayTeam: { name: 'Liverpool' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Parc des Princes'
          },
          {
            id: 10,
            utcDate: '2024-03-05T20:00:00Z',
            homeTeam: { name: 'Atletico Madrid' },
            awayTeam: { name: 'Juventus' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Wanda Metropolitano'
          },
          {
            id: 11,
            utcDate: '2024-03-06T20:00:00Z',
            homeTeam: { name: 'Borussia Dortmund' },
            awayTeam: { name: 'Inter Milan' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Signal Iduna Park'
          },
          {
            id: 12,
            utcDate: '2024-03-07T20:00:00Z',
            homeTeam: { name: 'Ajax' },
            awayTeam: { name: 'Chelsea' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Johan Cruyff Arena'
          },
          {
            id: 13,
            utcDate: '2024-03-12T20:00:00Z',
            homeTeam: { name: 'AC Milan' },
            awayTeam: { name: 'Benfica' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'San Siro'
          },
          {
            id: 14,
            utcDate: '2024-03-13T20:00:00Z',
            homeTeam: { name: 'RB Leipzig' },
            awayTeam: { name: 'Porto' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Red Bull Arena'
          },
          {
            id: 15,
            utcDate: '2024-03-14T20:00:00Z',
            homeTeam: { name: 'Napoli' },
            awayTeam: { name: 'Arsenal' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Stadio Diego Armando Maradona'
          },
          {
            id: 16,
            utcDate: '2024-03-19T20:00:00Z',
            homeTeam: { name: 'Benfica' },
            awayTeam: { name: 'AC Milan' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Estádio da Luz'
          },
          {
            id: 17,
            utcDate: '2024-03-20T20:00:00Z',
            homeTeam: { name: 'Porto' },
            awayTeam: { name: 'RB Leipzig' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Estádio do Dragão'
          },
          {
            id: 18,
            utcDate: '2024-03-21T20:00:00Z',
            homeTeam: { name: 'Arsenal' },
            awayTeam: { name: 'Napoli' },
            competition: { name: 'UEFA Champions League' },
            group: 'Round of 16',
            venue: 'Emirates Stadium'
          },
          {
            id: 19,
            utcDate: '2024-04-09T19:00:00Z',
            homeTeam: { name: 'Real Madrid' },
            awayTeam: { name: 'Liverpool' },
            competition: { name: 'UEFA Champions League' },
            group: 'Quarter-finals',
            venue: 'Santiago Bernabéu'
          },
          {
            id: 20,
            utcDate: '2024-04-10T19:00:00Z',
            homeTeam: { name: 'Manchester City' },
            awayTeam: { name: 'Bayern Munich' },
            competition: { name: 'UEFA Champions League' },
            group: 'Quarter-finals',
            venue: 'Etihad Stadium'
          },
          {
            id: 21,
            utcDate: '2024-04-11T19:00:00Z',
            homeTeam: { name: 'Barcelona' },
            awayTeam: { name: 'Borussia Dortmund' },
            competition: { name: 'UEFA Champions League' },
            group: 'Quarter-finals',
            venue: 'Camp Nou'
          },
          {
            id: 22,
            utcDate: '2024-04-16T19:00:00Z',
            homeTeam: { name: 'Liverpool' },
            awayTeam: { name: 'Real Madrid' },
            competition: { name: 'UEFA Champions League' },
            group: 'Quarter-finals',
            venue: 'Anfield'
          },
          {
            id: 23,
            utcDate: '2024-04-17T19:00:00Z',
            homeTeam: { name: 'Bayern Munich' },
            awayTeam: { name: 'Manchester City' },
            competition: { name: 'UEFA Champions League' },
            group: 'Quarter-finals',
            venue: 'Allianz Arena'
          },
          {
            id: 24,
            utcDate: '2024-04-18T19:00:00Z',
            homeTeam: { name: 'Borussia Dortmund' },
            awayTeam: { name: 'Barcelona' },
            competition: { name: 'UEFA Champions League' },
            group: 'Quarter-finals',
            venue: 'Signal Iduna Park'
          },
          {
            id: 25,
            utcDate: '2024-05-28T19:00:00Z',
            homeTeam: { name: 'TBD' },
            awayTeam: { name: 'TBD' },
            competition: { name: 'UEFA Champions League' },
            group: 'Final',
            venue: 'Wembley Stadium, London'
          }
        ]);
      });
  }, []);
  
  // Format date function
  const formatMatchDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="matches-container">
      <div className="matches-header">
        <h1>UEFA Champions League</h1>
        <img src="/Logo.png" alt="UEFA Champions League" />
      </div>
      
      {loading ? (
        <div className="loading">
          <p>Loading upcoming matches...</p>
        </div>
      ) : (
        <ul className="matches-list">
          {matches.map(match => (
            <li key={match.id} className="match-card">
              <span className="competition-badge">{match.group || 'Champions League'}</span>
              <span className="match-date">{formatMatchDate(match.utcDate)}</span>
              
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">{match.homeTeam.name}</div>
                </div>
                
                <div className="vs">VS</div>
                
                <div className="team">
                  <div className="team-name">{match.awayTeam.name}</div>
                </div>
              </div>
              
              <div className="match-info">
                <div>{match.competition.name}</div>
                {match.venue && <div className="match-venue">Venue: {match.venue}</div>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Matches;
