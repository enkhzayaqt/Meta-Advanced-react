function DessertsList(props) {
  const lowCalories = props.data
    .filter(dessert => {
    if (dessert.calories < 500) return dessert;
    })
    .sort((a, b) => { return a.calories - b.calories })
    .map(desert => {
      const itemtext = `${desert.name} - ${desert.calories} cal`
      return <li key={index}>{itemtext}</li>
    })
  return <ul> { lowCalories}  </ul>;
  }

  export default DessertsList;
