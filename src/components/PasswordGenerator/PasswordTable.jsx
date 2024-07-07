const PasswordTable = ({ passwordSave }) => {
  //   console.log(passwordSave);
  return (
    <div className="container">
      <h3>All your saved password</h3>
      <table>
        <thead>
          <tr>
            <th>Name of password</th>
            <th> Password</th>
          </tr>
        </thead>
        <tbody>
          {passwordSave.map((pass, index) => (
            <tr key={index}>
              <td>{pass.nameTable}</td>
              <td>{pass.passwordTable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PasswordTable;
