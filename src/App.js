import React, { useState } from 'react';



function App(props) {

  const [entries, setEntries] = useState([{pound: 175, date: '11-23-2021'}])

  return (
    <div>
      <table>
        <thead>
          <th>Entry Number</th>
          <th>pound</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>175</td>
            <td>11-23-2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
