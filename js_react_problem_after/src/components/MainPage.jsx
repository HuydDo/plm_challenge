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
        //instantiating an object of that class. animal is a class that has 
        //a constructor that takes in one variable which is name and it's
        //creating a bunch of objects which are instances of that class
      }),
      error: 'Ranks must be unique',
      errorFlag: false
    };
  }

  
  render() {
    // console.log('this.state.animal',this.state.animals)
    const errCount = {}
    // this.state.animals.forEach((animal) => {
    //   if (animal.rank && errCount[animal.rank]){
    //     errCount[animal.rank] += 1
    //     return
    //   }
    //   errCount[animal.rank] = 1
    // })

    

    const rows = this.state.animals.map((animal) => {
      // console.log(animal)
      // if (animal.rank && errCount[animal.rank]){
      //   errCount[animal.rank] += 1
      //   return
      // }
      // errCount[animal.rank] = 1

      // for (let prop in errCount){
      //   if(errCount[prop] >=2 && prop){
      //     // this.setState({       
      //     //   errorFlag : true
      //     // })
      //   }
      // }

      return (
        <FormRow
          // errorFlag={this.state.errorFlag}
          animalRank={animal.rank}
          selectButton={(updateRank) => {
            animal.setRank(updateRank)
            this.setState({animal: this.state.animals})
          }}
          animalName={animal.name}
          key={animal.name}
        />
      );
    });

    //create headers
    const headers = _.range(1, 6).map((i) => <th key={`header-${i}`}>{i}</th>);
    
  
    let disabled = false
    let error = false
    const count = {}
    this.state.animals.forEach((animal) => {
      if(!animal.rank){  //disable the button if any rank is not selected
        disabled = true
      }
      if (animal.rank && count[animal.rank]){
        count[animal.rank] += 1
        return
      }
      count[animal.rank] = 1
    })

    for (let prop in count){
      if(count[prop] >=2 && prop){
        error = true
        disabled = true
        // console.log(prop + " counted " + count[prop] + " times")
      }
       
    }

    // console.log('disabled:', disabled, 'error:', error)
    // console.log(count)

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
        <div>{error ? this.state.error : null}</div>
        <input type="submit" disabled={disabled}  />{/*disabled is a prop of the input tag*/}
      </div>
    );
  }
}

export default MainPage;
