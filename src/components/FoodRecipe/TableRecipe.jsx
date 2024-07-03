const TableRecipe = ({ imageData }) => {
  const tableData = () => {
    let FoodData = [];
    for (let index = 1; index <= 20; index++) {
      let strIngredient = `strIngredient${index}`;
      let strMeasure = `strMeasure${index}`;
      const element1 = imageData[strIngredient];
      const element2 = imageData[strMeasure];
      if (element1) {
        FoodData.push({ [element1]: element2 });
      }
    }
    return FoodData;
  };
  const renderData = tableData();

  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>No.</td>
            <td>Ingredient</td>
            <td>Measure</td>
          </tr>
          {renderData &&
            renderData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Object.keys(data)}</td>
                  <td>{Object.values(data)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableRecipe;
