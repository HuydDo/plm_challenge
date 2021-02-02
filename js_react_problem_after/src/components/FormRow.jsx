import React from 'react';
import _ from 'lodash';


/** 
* TODO:  2. Adding a class of "error" to a row will highlight it red. Provide this visual feedback on rows which have duplicate ranks selected. 
* TODO: 3. There is a place to display an error message near the submit button. Show this error message: `Ranks must be unique` whenever the user has selected the same rank on multiple rows.
*/

class FormRow extends React.Component {
  constructor(props){
    super(props)
    this.state = {rank: this.props.animalRank}
  }

  //*if we receive new props and the animal props 
  //*doesn't match whats inside the component then 
  //*we should update the component
  componentDidUpdate(){
    
    if(this.props.animalRank !== this.state.rank){
      this.setState({rank: this.props.animalRank})
    }

  }

  render() {
    //created array 1-6, iterating over it,
    // and for each number in that array creating
    // a new array and returning this HTML chunk
    const cells = _.range(1, 6).map((i) => {
      return (
        <td key={`${this.props.animalName}-${i}`}>
          <input
            onClick={() => {
              // i is the number clicked on
              this.props.selectButton(i)
            }}
            type="radio"
            name={this.props.animalName}
            value={i}
          />
        </td>
      );
    });
    const done = this.state.rank ? "done" : null
    // console.log(done)
    
    return (
     <tr className={done}>
        <th>{this.props.animalName}</th>
        {cells}
      </tr>
    )
  }
}

export default FormRow;
