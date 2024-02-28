import styles from "./SearchInput.module.css";

function SearchInput({ placeholder, onChange, maxLength = 20, value }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  function blendColors(currentLength, maxLength) {
    const black = [0, 0, 0]; //black
    const red = [255, 0, 0]; //red
    const ratio = currentLength / maxLength;

    const blendedColor = black.map((value, index) => {
      return Math.round(value * (1 - ratio) + red[index] * ratio);
    });
    const hexColor = blendedColor
      .map((value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");
    return "#" + hexColor;
  }

  return (
    <>
      <input
        maxLength={maxLength}
        className={styles.root}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div
        style={{
          margin: 10,
          marginLeft: 20,
          fontSize: 18,
          fontWeight: "bold",
          color: blendColors(value.length, maxLength),
        }}
      >
        {value.length}/{maxLength} символів введено
      </div>
    </>
  );
}

export default SearchInput;