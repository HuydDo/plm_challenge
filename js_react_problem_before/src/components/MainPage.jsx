import React from 'react';
import _ from 'lodash';
import FormRow from './FormRow.jsx';
import Animal from './Animal.js';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ['panda','cat','capybara','iguana','muskrat'].map((name) => {
        return new Animal(name);
      }),
      error: ''
    };
  }


  render() {
    const rows = this.state.animals.map((animal) => {
      return (
        <FormRow
          animalName={animal.name}
          key={animal.name}
        />
      );
    });

    const headers = _.range(1, 6).map((i) => <th key={`header-${i}`}>{i}</th>);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              {headers}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <div>{this.state.error}</div>
        <input type="submit" />
      </div>
    );
  }
}

export default MainPage;
