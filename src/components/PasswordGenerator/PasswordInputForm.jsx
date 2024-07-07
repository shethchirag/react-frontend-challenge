const PasswordInputForm = ({ formData }) => {
  console.log(formData.values);
  return (
    <div>
      <div className="password-length">
        <label htmlFor="passwordLength">
          Password Length : {formData.values.passwordLength}
        </label>
        <input
          type="range"
          name="passwordLength"
          id="passwordLength"
          min={6}
          max={30}
          {...formData.getFieldProps("passwordLength")}
        />
      </div>
      <div className="lowercaseCharacter">
        <label htmlFor="lowercaseCharacter">Include Lowercase Character</label>
        <input
          type="checkbox"
          name="includeLowerCaseCharacter"
          id="lowercaseCharacter"
          {...formData.getFieldProps("includeLowerCaseCharacter")}
          checked={formData.values.includeLowerCaseCharacter}
        />
      </div>
      <div className="upperCharacter">
        <label htmlFor="uppercaseCharacter">Include UpperCase Character</label>
        <input
          type="checkbox"
          name="includeUpperCaseCharacter"
          id="uppercaseCharacter"
          {...formData.getFieldProps("includeUpperCaseCharacter")}
          checked={formData.values.includeUpperCaseCharacter}
        />
      </div>
      <div className="includeNumber">
        <label htmlFor="includeNumber">Include Number:</label>
        <input
          type="checkbox"
          name="includeNumber"
          id="includeNumber"
          {...formData.getFieldProps("includeNumber")}
          checked={formData.values.includeNumber}
        />
      </div>
      <div className="includeSymbols">
        <label htmlFor="includeSymbols">Include Symbols</label>
        <input
          type="checkbox"
          name="includeSymbols"
          id="includeSymbols"
          {...formData.getFieldProps("includeSymbols")}
          checked={formData.values.includeSymbols}
        />
      </div>
    </div>
  );
};

export default PasswordInputForm;
