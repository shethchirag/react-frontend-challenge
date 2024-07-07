import { useEffect, useRef, useState } from "react";
import PasswordInputForm from "./PasswordInputForm";
import "./style.css";
import { ALPHABET_WORDS } from "./PasswordHint";
import PasswordTable from "./PasswordTable";
import toast, { Toaster } from "react-hot-toast";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { json } from "react-router-dom";

const validatorSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(1, "Password length must be at least 1")
    .required("Required"),
  includeLowerCaseCharacter: Yup.boolean().required("Required"),
  includeUpperCaseCharacter: Yup.boolean().required("Required"),
  includeNumber: Yup.boolean().required("Required"),
  includeSymbols: Yup.boolean().required("Required"),
});
const PasswordGenerator = () => {
  const [passwordHint, setPasswordHint] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [saveInput, setSaveInput] = useState(false);
  const [saveInputName, setSaveInputName] = useState("");
  const [passwordSave, setPasswordSave] = useState([]);
  const formikRef = useRef(null);

  const generatePasswordHandler = (password) => {
    let passwordGenerate = "";
    const lowercaseChars = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const uppercaseChars = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const symbols = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "=",
      "+",
      "[",
      "]",
      "{",
      "}",
      ";",
      ":",
      '"',
      "'",
      "<",
      ">",
      ",",
      ".",
      "?",
      "/",
    ];
    let allChar = [];
    let mandatorychar = [];
    if (password.includeLowerCaseCharacter) {
      allChar = allChar.concat(lowercaseChars);
      mandatorychar.push(
        lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]
      );
    }
    if (password.includeUpperCaseCharacter) {
      allChar = allChar.concat(uppercaseChars);
      mandatorychar.push(
        uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]
      );
    }
    if (password.includeNumber) {
      allChar = allChar.concat(numbers);
      mandatorychar.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (password.includeSymbols) {
      allChar = allChar.concat(symbols);
      mandatorychar.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    for (
      let index = 0;
      index < password.passwordLength - mandatorychar.length;
      index++
    ) {
      const element = Math.floor(Math.random() * allChar.length);
      passwordGenerate += allChar[element];
    }
    passwordGenerate += mandatorychar.join("");

    passwordGenerate
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    setGeneratedPassword(passwordGenerate);
    const speling = generateSpelling(passwordGenerate);
    setPasswordHint(speling.join(" "));
  };
  const generateSpelling = (passwordGenerate) => {
    let word = passwordGenerate.split("").map((letter) => {
      if (ALPHABET_WORDS[letter]) {
        return ALPHABET_WORDS[letter];
      }
      return letter;
    });

    return word;
  };

  const tableHandler = () => {
    if (!saveInputName) {
      toast.error("Please Enter PasswordName");
      return;
    }
    if (passwordSave.some((item) => item.nameTable === saveInputName)) {
      toast.error("name is already Taken");
      return;
    }

    setPasswordSave((prev) => [
      ...prev,
      { nameTable: saveInputName, passwordTable: generatedPassword },
    ]);
    addLocalStorage({
      nameTable: saveInputName,
      passwordTable: generatedPassword,
    });
    toast.success("Added! successfully");
  };

  const addLocalStorage = (tableData) => {
    console.log(tableData);
    const response = localStorage.getItem("tableData");
    const tableget = JSON.parse(response) || [];
    console.log(tableget);
    tableget.push(tableData);
    localStorage.setItem("tableData", JSON.stringify(tableget));
  };
  const getLocalStorage = () => {
    const response = localStorage.getItem("tableData");
    const tableData = JSON.parse(response);
    return tableData;
  };
  useEffect(() => {
    const getdataLocall = getLocalStorage();
    if (getLocalStorage) {
      setPasswordSave(getdataLocall);
    }
  }, []);

  function cpToClip() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  return (
    <div className="password-container">
      <div className="password-main-part">
        <div className="password-input">
          <Formik
            initialValues={{
              passwordLength: 6,
              includeLowerCaseCharacter: true,
              includeUpperCaseCharacter: true,
              includeNumber: true,
              includeSymbols: false,
            }}
            validationSchema={validatorSchema}
            innerRef={formikRef}
            onSubmit={generatePasswordHandler}
          >
            {(Formik) => {
              console.log(Formik);
              return (
                <Form>
                  <PasswordInputForm formData={Formik} />
                </Form>
              );
            }}
          </Formik>
          <div className="password-display">
            <input
              type="text"
              readOnly
              placeholder="Your generated password will appear here "
              value={generatedPassword}
            />
            {/* <button className="copyPassword" title="copy password">
              copy
            </button> */}
          </div>
        </div>
        <div className="_fourth_section_6bcv0_47">
          <button
            onClick={() => formikRef.current.submitForm()}
            className="generatePassword"
            title="generate password"
          >
            Generate password
          </button>
          <button
            onClick={() => {
              if (generatedPassword) {
                navigator.clipboard.writeText(generatedPassword);
                toast.success("Copied" + "Password - " + generatedPassword);
              } else {
                toast.error("generate Password first");
              }
            }}
            className="_btn_6bcv0_46"
            title="copy password"
          >
            Copy
          </button>
          <div className="save-password">
            <label
              htmlFor="savePassword"
              className="_btn_6bcv0_46"
              title="savePassword"
            >
              Save Password
            </label>
            <input
              checked={saveInput}
              onChange={() => {
                if (!generatedPassword) {
                  toast.error("generate password first");
                  return;
                }
                setSaveInput(!saveInput);
              }}
              type="checkbox"
              name="savePassword"
              id="savePassword"
            />
          </div>
          {saveInput && (
            <div className="save-password-input">
              <input
                value={saveInputName}
                onChange={(e) => setSaveInputName(e.target.value)}
                type="text"
                placeholder="Name Your Password"
              />
              <button onClick={tableHandler}>save</button>
            </div>
          )}
        </div>
        <div className="third_section">
          <h4>Password remember shortcut : </h4>
          {passwordHint ? (
            <p className="pass-hint">{passwordHint}</p>
          ) : (
            <p className="pass-hint">
              There is no password to remember! Please generate one
            </p>
          )}
        </div>

        <div className="table-container">
          <PasswordTable passwordSave={passwordSave} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default PasswordGenerator;
