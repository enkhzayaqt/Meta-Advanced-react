function DessertsList(props) {
    const listItems = props.data.map(desert => {
      const itemtext = `${desert.name} - ${desert.calories} cal`
      return <li>{itemtext}</li>
    })
  return <ul> { listItems}  </ul>;
  }

  export default DessertsList;
