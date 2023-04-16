import MuiAutocomplete from "./autocomplete";
import MuiButton from "./button";
import MuiCheckbox from "./checkbox";
import MuiChip from "./chip";
import MuiFormLabel from "./formLabel";
import MuiInput from "./input";
import MuiRadio from "./Radio";

const overrides = (theme) => {
  const input = MuiInput(theme);
  const radio = MuiRadio(theme);
  const chip = MuiChip(theme);
  const button = MuiButton(theme);
  const checkbox = MuiCheckbox(theme);
  const formLabel = MuiFormLabel(theme);
  const autocomplete = MuiAutocomplete(theme);

  return Object.assign(
    input,
    button,
    chip,
    checkbox,
    formLabel,
    autocomplete,
    radio
  );
};

export default overrides;
