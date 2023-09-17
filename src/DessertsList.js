function DessertsList(props) {
  const lowCalories = props.data.filter(dessert => {
    if (dessert.calories < 500) return dessert;
  })
    const listItems = lowCalories.map(desert => {
      const itemtext = `${desert.name} - ${desert.calories} cal`
      return <li>{itemtext}</li>
    })
  return <ul> { listItems}  </ul>;
  }

  export default DessertsList;
