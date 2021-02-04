class Animal {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }
  /*class of animal, and thats represented by this keyword.  
  This keyword is referencing the animal class   
  setrank is a property of the animal object    
  all instances of the animal class will have the following properties,
  which is setrank
  */
  setRank = (updatedRank) => {   
    console.log("setting rank to", updatedRank)
    this.rank = updatedRank 
  } 
  /*setting this rank to the argument
   making a function that is a class method that allows to update the rank
  */
 }

export default Animal;
